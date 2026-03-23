// src/data/products.js

const products = [
  // Men's products (category: 'men')
  { id: 1, name: "Classic Navy Polo", rating: 5, price: 45, category: 'men', brand: 'Polo', description: "A timeless navy polo shirt made from soft pique cotton. Perfect for casual outings or office casual Fridays." },
  { id: 2, name: "Charcoal Gray Henley", rating: 4, price: 38, category: 'men', brand: 'Hanes', description: "Comfortable charcoal henley with a three-button placket. Crafted from a cotton blend for everyday wear." },
  { id: 3, name: "Olive Green Cargo Pants", rating: 5, price: 65, category: 'men', brand: 'Dockers', description: "Durable olive cargo pants with multiple pockets. Ideal for outdoor adventures or relaxed weekends." },
  { id: 4, name: "Black Denim Jacket", rating: 5, price: 89, category: 'men', brand: 'Levi\'s', description: "Classic black denim jacket with a slim fit. A wardrobe staple that pairs well with any outfit." },
  { id: 5, name: "Heather Grey Hoodie", rating: 4, price: 55, category: 'men', brand: 'Nike', description: "Soft heather grey hoodie with a kangaroo pocket. Great for layering during cooler months." },
  { id: 6, name: "Khaki Chino Shorts", rating: 4, price: 35, category: 'men', brand: 'Gap', description: "Lightweight khaki chino shorts with a comfortable fit. Perfect for summer days." },
  { id: 7, name: "Burgundy Sweater", rating: 5, price: 70, category: 'men', brand: 'J.Crew', description: "Rich burgundy sweater made from a soft wool blend. Adds a pop of color to your winter wardrobe." },
  { id: 8, name: "White Linen Shirt", rating: 5, price: 48, category: 'men', brand: 'Banana Republic', description: "Breathable white linen shirt for warm weather. Dress it up or down effortlessly." },
  { id: 9, name: "Navy Blue Blazer", rating: 5, price: 120, category: 'men', brand: 'Calvin Klein', description: "Elegant navy blazer with a modern cut. Ideal for weddings, business meetings, or date nights." },
  { id: 10, name: "Camel Overcoat", rating: 5, price: 180, category: 'men', brand: 'Burberry', description: "Luxurious camel overcoat made from virgin wool. A timeless piece that elevates any winter outfit." },

  // Women's products (category: 'women')
  { id: 11, name: "Floral Summer Dress", rating: 5, price: 59, category: 'women', brand: 'Zara', description: "Light and breezy floral dress, perfect for sunny days. Made from soft cotton with a flattering fit." },
  { id: 12, name: "Cream Knit Sweater", rating: 4, price: 49, category: 'women', brand: 'H&M', description: "Cozy cream knit sweater with a relaxed fit. Ideal for layering during cooler months." },
  { id: 13, name: "High-Waist Jeans", rating: 5, price: 69, category: 'women', brand: 'Levi\'s', description: "Classic blue high-waist jeans with a stretchy comfortable fabric. A wardrobe essential." },
  { id: 14, name: "Leather Ankle Boots", rating: 5, price: 89, category: 'women', brand: 'Steve Madden', description: "Stylish black leather ankle boots with a low heel. Perfect for both casual and dressy outfits." },
  { id: 15, name: "Silk Blouse", rating: 4, price: 55, category: 'women', brand: 'Equipment', description: "Elegant silk blouse in a soft champagne color. Lightweight and perfect for office or evening wear." },
  { id: 16, name: "Pleated Midi Skirt", rating: 5, price: 45, category: 'women', brand: 'Mango', description: "Chic pleated midi skirt in olive green. Flattering on all body types." },
  { id: 17, name: "Denim Jacket", rating: 5, price: 79, category: 'women', brand: 'Gap', description: "Classic light-wash denim jacket with a slightly cropped fit. Great for layering over dresses or tops." },
  { id: 18, name: "Striped T-Shirt", rating: 4, price: 25, category: 'women', brand: 'Uniqlo', description: "Soft cotton striped t-shirt in navy and white. A casual staple for everyday wear." },
  { id: 19, name: "Wide-Leg Trousers", rating: 5, price: 65, category: 'women', brand: 'COS', description: "Elegant wide-leg trousers in black. Comfortable and stylish for work or special occasions." },
  { id: 20, name: "Cashmere Scarf", rating: 5, price: 35, category: 'women', brand: 'Johnstons', description: "Luxuriously soft cashmere scarf in burgundy. Adds a touch of warmth and style to any outfit." },

  // Kids' products (category: 'kids')
  { id: 21, name: "Cartoon T-Shirt", rating: 5, price: 19, category: 'kids', brand: 'Carter\'s', description: "Fun cartoon-print t-shirt made from 100% soft cotton. Perfect for everyday play." },
  { id: 22, name: "Denim Overall", rating: 4, price: 35, category: 'kids', brand: 'OshKosh', description: "Classic denim overalls with adjustable straps. Durable and adorable." },
  { id: 23, name: "Rainbow Leggings", rating: 5, price: 15, category: 'kids', brand: 'Gap Kids', description: "Bright rainbow-patterned leggings with stretchy waistband. Great for active kids." },
  { id: 24, name: "Hooded Sweatshirt", rating: 4, price: 28, category: 'kids', brand: 'Nike Kids', description: "Cozy hoodie with kangaroo pocket and playful logo. Perfect for cooler days." },
  { id: 25, name: "Plaid School Dress", rating: 5, price: 32, category: 'kids', brand: 'Old Navy', description: "Charming plaid dress with Peter Pan collar. Ideal for school or parties." },
  { id: 26, name: "Cargo Pants", rating: 4, price: 27, category: 'kids', brand: 'The Children\'s Place', description: "Durable cargo pants with multiple pockets. Great for outdoor adventures." },
  { id: 27, name: "Pajama Set", rating: 5, price: 22, category: 'kids', brand: 'PJ Salvage', description: "Soft cotton pajama set with all-over stars print. Keeps kids cozy at bedtime." },
  { id: 28, name: "Swim Trunks", rating: 4, price: 18, category: 'kids', brand: 'Speedo', description: "Quick-dry swim trunks with fun ocean print. Perfect for beach or pool." },
  { id: 29, name: "Knit Beanie", rating: 5, price: 12, category: 'kids', brand: 'Columbia', description: "Warm knit beanie with pom-pom. Protects little ears from the cold." },
  { id: 30, name: "Light-Up Sneakers", rating: 5, price: 40, category: 'kids', brand: 'Skechers', description: "Cool sneakers with LED lights in the sole. Kids will love the flashing effect." },

  // Brand-specific products (e.g., "Urban" brand – can be used for Brand.jsx)
  { id: 31, name: "Urban Hoodie", rating: 5, price: 60, category: 'men', brand: 'Urban', description: "Streetwear-inspired hoodie with bold logo. Made from heavy cotton fleece." },
  { id: 32, name: "Urban Joggers", rating: 4, price: 50, category: 'men', brand: 'Urban', description: "Slim-fit joggers with tapered leg and elastic cuffs. Perfect for casual style." },
  { id: 33, name: "Urban Bomber Jacket", rating: 5, price: 90, category: 'men', brand: 'Urban', description: "Classic bomber jacket with satin finish. Lightweight and stylish." },
  { id: 34, name: "Urban Crop Top", rating: 4, price: 25, category: 'women', brand: 'Urban', description: "Trendy crop top with raw hem. Great for pairing with high-waisted jeans." },
  { id: 35, name: "Urban Midi Dress", rating: 5, price: 75, category: 'women', brand: 'Urban', description: "Elegant midi dress with wrap front and long sleeves. Floral print." },
  { id: 36, name: "Urban Backpack", rating: 5, price: 45, category: 'accessories', brand: 'Urban', description: "Canvas backpack with leather details. Perfect for school or travel." },

// ... existing products (up to id 36) ...

// TopDeal products (category: 'deals')
{ id: 37, name: "Brown Half t-shirt", rating: 5, price: 300, category: 'deals', brand: 'StreetStyle', description: "Classic brown half-sleeve t-shirt made from soft cotton. Perfect for casual outings." },
{ id: 38, name: "Green Cotton half t-shirt", rating: 5, price: 500, category: 'deals', brand: 'EcoWear', description: "Vibrant green cotton t-shirt with a comfortable fit. Ideal for everyday wear." },
{ id: 39, name: "Brown Half t-Shirt", rating: 5, price: 300, category: 'deals', brand: 'StreetStyle', description: "Another classic brown half-sleeve t-shirt, lightweight and breathable." },
{ id: 40, name: "Green + Gray Half t-Shirt", rating: 5, price: 400, category: 'deals', brand: 'UrbanMix', description: "Stylish two-tone t-shirt with green and gray stripes. Modern and trendy." },
{ id: 41, name: "Brown t-Shirt", rating: 5, price: 500, category: 'deals', brand: 'StreetStyle', description: "A rich brown crewneck t-shirt. Pairs well with jeans or chinos." },
{ id: 42, name: "Deep-black + Gray shirt", rating: 5, price: 500, category: 'deals', brand: 'UrbanMix', description: "Sleek black shirt with subtle gray accents. Perfect for a night out." },
{ id: 43, name: "Gray + Brown Half t-shirt", rating: 5, price: 900, category: 'deals', brand: 'UrbanMix', description: "Unique gray and brown half-sleeve shirt. A standout piece." },
{ id: 44, name: "Brown half t-shirt", rating: 5, price: 499, category: 'deals', brand: 'StreetStyle', description: "Soft brown half-sleeve t-shirt with a relaxed fit." },
{ id: 45, name: "Brown white Green Black combo", rating: 5, price: 3000, category: 'deals', brand: 'ColorBlast', description: "Multi-color t-shirt with brown, white, green, and black patterns. Bold and eye-catching." },



// Inside products array, after existing products...

// Mark some existing products as summer collection
{ id: 11, name: "Floral Summer Dress", rating: 5, price: 59, category: 'women', brand: 'Zara', season: 'summer', description: "..." },
{ id: 13, name: "High-Waist Jeans", rating: 5, price: 69, category: 'women', brand: 'Levi\'s', season: 'summer', description: "..." },
{ id: 16, name: "Pleated Midi Skirt", rating: 5, price: 45, category: 'women', brand: 'Mango', season: 'summer', description: "..." },
{ id: 23, name: "Rainbow Leggings", rating: 5, price: 15, category: 'kids', brand: 'Gap Kids', season: 'summer', description: "..." },
{ id: 28, name: "Swim Trunks", rating: 4, price: 18, category: 'kids', brand: 'Speedo', season: 'summer', description: "..." },
{ id: 38, name: "Green Cotton half t-shirt", rating: 5, price: 500, category: 'deals', brand: 'EcoWear', season: 'summer', description: "..." },
// ... add more as desired

// Mark budget products (price ≤ $50)
// You can also add a dedicated `budget: true` field, but we'll filter by price.

];

// Image URLs for each product (must match the order above)
const productImages = [
  // Men's images (1-10) – same as before
 "/images/All/Men10.jpg", 
  "/images/All/Men6.jpg", 
 "/images/All/Men1.jpg",
"/images/All/Men11.jpg", 
"/images/All/Men15.jpg", 
"/images/All/Men16.jpg", 
"/images/All/Men20.jpg", 
    "/images/All/Men16.jpg",
"/images/All/Men21.jpg", 
  "/images/All/Men23.jpg", 

  // Women's images (11-20) – as before
   "/images/All/Women1.jpg", 
    "/images/All/Women2.jpg", 
  "/images/All/Women.jpg", 
 "images/All/Women5.jpg",
   "images/All/women11.jpg",
  "/images/All/Women5.jpg", 
   "images/All/Women8.jpg",
  "/images/All/Women12.jpg", 
  "images/All/Women14.jpg",
    "/images/All/Women15.jpg", 

  // Kids' images (21-30) – new Unsplash URLs
   "/images/All/kid1.webp", 
  "/images/All/kid2.jpg",  // denim overall
  "/images/All/Kid5.jpg",  // rainbow leggings
   "/images/All/kid6.jpg", // hoodie
  "/images/All/kid7.jpg", 
  "/images/All/kid8.jpg",  // cargo pants
  "/images/All/kid9.jpg",  // pajama set
  "/images/All/Kid10.jpg",  // swim trunks
    "/images/All/Kid13.webp", // knit beanie
    "/images/All/Kid15.jpg",  // light-up sneakers

  // Urban brand images (31-36) – add new ones
    "/images/All/KId17.jpg",  // urban hoodie
    "/images/All/Brand1.jpg",   // urban joggers
   "/images/All/Brand2.jpg",  // urban bomber jacket
  "/images/All/Brand3.jpg",  // urban crop top
    "/images/All/Kid18.jpg",  // urban midi dress
 "images/All/Kid5.jpg",

  // ... existing images (up to index 35) ...

// Images for TopDeal products (IDs 37–46)
"/images/All/Women8.jpg",          // Brown Half t-shirt
"/images/HomeImage/cloth2.webp",        // Green Cotton half t-shirt
"/images/HomeImage/cloth3.jpg",         // Brown Half t-Shirt
"/images/All/Women12.jpg",         // Green + Gray Half t-Shirt
"/images/All/Men10.jpg", // Brown t-Shirt
"/images/All/kid11.jpg", 
"/images/All/Men16.jpg", // Gray + Brown Half t-shirt
"/images/All/Men15.jpg", 
"/images/All/Kid10.jpg", 

];

export { products, productImages };