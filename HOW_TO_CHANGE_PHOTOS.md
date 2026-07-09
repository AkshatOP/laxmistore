# How to Change Product Photos Manually

This guide explains how you can easily replace or update the photos of any products on your website.

---

### Step 1: Copy your new photo into the project
All product photos are stored in the public assets folder of your site.
1. Copy your new image file (e.g., `my-new-product.jpg`)
2. Paste it inside this folder in your project:
   `public/own-products/`

---

### Step 2: Update the configuration file
Open the configuration file located at:
`src/config/storeConfig.js`

1. Search for the product name you want to update (e.g., `Classic Salted` or `Laxmi Premium Basmati Rice`).
2. Find its `image` line. It will look like this:
   ```javascript
   { name: "Classic Salted", brand: "Lays", image: "/own-products/IMG_20260709_093902.jpg" }
   ```
3. Change the filename in `image` to match your new image's filename:
   ```javascript
   { name: "Classic Salted", brand: "Lays", image: "/own-products/my-new-product.jpg" }
   ```
4. Save the file.

---

### Step 3: View the changes
If your development server is running (`npm run dev`), the website will automatically reload and display your new photo instantly!
