import urllib.request, urllib.parse, re, html, json, os, time

# Ensure download folder exists
os.makedirs('public/brand-products', exist_ok=True)

products = [
    # Category 2
    {"name": "Wheat Flour",   "brand": "Aashirvaad"},
    {"name": "Maida",         "brand": "Pillsbury"},
    {"name": "Ragi Flour",    "brand": "Organic India"},
    {"name": "Besan",         "brand": "Rajdhani"},
    {"name": "Rice Flour",    "brand": "Double Horse"},
    {"name": "Corn Flour",    "brand": "Weikfield"},
    # Category 3
    {"name": "Toor Dal",      "brand": "Tata Sampann"},
    {"name": "Urad Dal",      "brand": "Fortune"},
    {"name": "Moong Dal",     "brand": "Aashirvaad"},
    {"name": "Chana Dal",     "brand": "Patanjali"},
    {"name": "Masoor Dal",    "brand": "24 Mantra"},
    {"name": "Horse Gram",    "brand": "Double Horse"}
]

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    'Accept-Language': 'en-US,en;q=0.9'
}

def get_bb_pd_link(brand, name):
    # Try with both brand + name
    query = f'site:bigbasket.com "{brand} {name}"'
    q = urllib.parse.quote(query)
    url = f'https://search.yahoo.com/search?p={q}'
    req = urllib.request.Request(url, headers=headers)
    try:
        res = urllib.request.urlopen(req, timeout=10).read().decode('utf-8')
        matches = re.findall(r'/RU=([^/&]+)', res)
        for m in matches:
            decoded = urllib.parse.unquote(m)
            if 'bigbasket.com/pd/' in decoded:
                return decoded
    except Exception as e:
        print(f"  Error searching Yahoo for {brand} {name}: {e}")
    
    # Fallback to name only
    query = f'site:bigbasket.com "{name}"'
    q = urllib.parse.quote(query)
    url = f'https://search.yahoo.com/search?p={q}'
    req = urllib.request.Request(url, headers=headers)
    try:
        res = urllib.request.urlopen(req, timeout=10).read().decode('utf-8')
        matches = re.findall(r'/RU=([^/&]+)', res)
        for m in matches:
            decoded = urllib.parse.unquote(m)
            if 'bigbasket.com/pd/' in decoded:
                return decoded
    except Exception as e:
        print(f"  Fallback error searching Yahoo for {name}: {e}")
            
    return None

def download_image(bb_url, filename):
    req = urllib.request.Request(bb_url, headers=headers)
    try:
        html_content = urllib.request.urlopen(req, timeout=10).read().decode('utf-8')
        # Look for images on bbassets
        imgs = re.findall(r'https?://[a-zA-Z0-9\.\-_]+/media/uploads/p/[a-zA-Z0-9\-_/]+\.(?:jpg|jpeg|png)', html_content)
        if imgs:
            large_url = imgs[0].replace('/p/s/', '/p/l/').replace('/p/m/', '/p/l/').replace('/p/w/', '/p/l/')
            # Download the large image
            img_req = urllib.request.Request(large_url, headers={'User-Agent': 'Mozilla/5.0'})
            img_data = urllib.request.urlopen(img_req, timeout=15).read()
            filepath = os.path.join('public/brand-products', filename)
            with open(filepath, 'wb') as f:
                f.write(img_data)
            print(f"  Successfully downloaded: {filepath} ({len(img_data)} bytes)")
            return f"/brand-products/{filename}"
        else:
            print(f"  No image found on page: {bb_url}")
    except Exception as e:
        print(f"  Error downloading image from {bb_url}: {e}")
    return None

# Process each product
results = {}
for p in products:
    brand = p['brand']
    name = p['name']
    print(f"Processing: {brand} {name}")
    pd_url = get_bb_pd_link(brand, name)
    if pd_url:
        print(f"  Found BigBasket page: {pd_url}")
        # Sanitize filename
        safe_name = re.sub(r'[^a-zA-Z0-9]', '_', f"{brand}_{name}").lower() + ".jpg"
        local_path = download_image(pd_url, safe_name)
        if local_path:
            results[f"{brand} {name}"] = local_path
    else:
        print(f"  Could not find BigBasket page for {brand} {name}")
    # Sleep slightly to avoid being blocked
    time.sleep(1)

# Save result mapping
with open('downloaded_more_images.json', 'w') as f:
    json.dump(results, f, indent=2)
print("Finished. Results mapping saved to downloaded_more_images.json")
