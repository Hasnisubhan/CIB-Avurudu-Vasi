/* --- PRODUCT DATA --- */
const products = [
    {
        id: 1,
        title: "Red Women’s Clutch Purse",
        price: 990,
        discount: 32,
        description: "Shop Red Women’s Clutch Purse | Buy Online Women’s Wallets for the Lowest Price in Sri Lanka from cibonline.lk <ul><li>Gold-tone chain strap</li><li>Secure metallic clasp closure</li><li>Compact and lightweight design</li><li>Elegant glitter fabric with textured wave pattern</li></ul>",
        imgs: [
            "https://cibonline.lk/wp-content/uploads/2026/01/02-1-scaled.jpg",
            "https://cibonline.lk/wp-content/uploads/2026/01/01-1-scaled.jpg"
        ],
        specs: { material: "PU Leather", weight: "0.5Kg", stock: 5 }
    },

/* --- LUNCH BAG FOR LADIES --- */
{
    id: 12,
    title: "Lunch Bag for Ladies",
    price: 680,
    discount: 20,
    description: "Lunch Bag for Ladies | Buy Online Men’s Accessories for the Lowest Price in Sri Lanka from cibonline.lk",
    imgs: [
        "https://cibonline.lk/wp-content/uploads/2026/02/luuSIZE-CHART-3-scaled.jpg",
        "https://cibonline.lk/wp-content/uploads/2026/02/luuSIZE-CHART-2-scaled.jpg",
        "https://cibonline.lk/wp-content/uploads/2026/02/luuSIZE-CHART-4-scaled.jpg"
    ],
    specs: { stock: 9, material: "Polyester", weight: "0.115kg" },
    colors: ["Purple","Blue","Pink"]
},

/* --- MEN’S BLACK LAPTOP BAG --- */
{
    id: 13,
    title: "Men’s Black Laptop Bag",
    price: 2546,
    discount: 30,
    description: "Shop Men’s Black Laptop Bag | Buy Online Laptop Bags for the Lowest Price in Sri Lanka from cibonline.lk.",
    imgs: [
        "https://cibonline.lk/wp-content/uploads/2025/08/01ofzb-1-scaled.jpg",
        "https://cibonline.lk/wp-content/uploads/2025/08/01ofzb-2-scaled.jpg"
    ],
    specs: { stock: 9, weight: "0.45kg" }
},
/* --- ELEGANT WAIST SLIM BELT --- */
{
    id: 14,
    title: "Elegant Waist Slim Belt",
    price: 450,
    discount: 35,
    description: "Elegant Waist Slim Belt | Buy Online Ladies’ Belts in Sri Lanka<b>Length:</b> 105cm<br><b>Width:</b> 1.5cm",
    imgs: [
        "https://cibonline.lk/wp-content/uploads/2025/10/01-2-6-scaled.jpg",
        "https://cibonline.lk/wp-content/uploads/2025/10/02-2-6-scaled.jpg",
        "https://cibonline.lk/wp-content/uploads/2025/10/05-1-5-scaled.jpg",
        "https://cibonline.lk/wp-content/uploads/2025/10/03-2-6-scaled.jpg",
        "https://cibonline.lk/wp-content/uploads/2025/10/07-1-4-scaled.jpg",
        "https://cibonline.lk/wp-content/uploads/2025/10/09-3-scaled.jpg"
    ],
    specs: { stock: 19, material: "PU Leather", weight: "0.065kg" },
    colors: ["Brown","Birch","Black","Blue","Sand Yellow"]
},

{
    id: 40,
    title: "Pink Floral Printed Saree",
    price: 2662,
    discount: 25,
    description: "Buy Pink Floral Printed Saree | Elegant saree with vibrant floral hand paint design.<ul><li>Easy to drape and maintain</li><li>Soft and lightweight fabric for comfortable wear</li><li>Material – Vichithra Silk</li><li>Saree Length – 6 Yards</li><li>Jacket Piece Length – 35 Inch</li><li>Width – 45 Inch</li></ul>",
    imgs: [
        "https://cibonline.lk/wp-content/uploads/2026/03/sareeee01-2-1603x2048.jpg"
    ],
    specs: {
        material: "Vichithra Silk",
        weight: "0.58kg",
        stock: 10
    },
    sizes:["Free size"]
},
{
    id: 41,
    title: "Handloom Cotton Ash Saree",
    price: 4268,
    discount: 25,
    description: "Buy Handloom Cotton Ash Saree | Elegant saree with graceful natural texture and elegant drape.<ul><li>Elegant border with tassel detailing</li><li>Soft, breathable, and lightweight for all-day comfort</li><li>Includes a saree jacket piece</li><li>Material – Handloom Cotton</li><li>Saree Length – 5 Yards 16 Inch</li><li>Jacket Piece Length – 32 Inch</li><li>Width – 45 Inch</li></ul>",
    imgs: [
        "https://cibonline.lk/wp-content/uploads/2026/01/09-768x981.jpg",
        "https://cibonline.lk/wp-content/uploads/2026/01/07-768x981.jpg"
    ],
    specs: {
        material: "Handloom Cotton",
        weight: "0.525kg",
        stock: 10
    },
    sizes: ["Free Size"]
},
{
    id: 42,
    title: "Handloom Cotton Green Saree",
    price: 4268,
    discount: 25,
    description: "Buy Handloom Cotton Green Saree | Elegant saree with graceful natural texture and elegant drape.<ul><li>Elegant border with tassel detailing</li><li>Soft, breathable, and lightweight for all-day comfort</li><li>Includes a saree jacket piece</li><li>Material – Handloom Cotton</li><li>Saree Length – 5 Yards 16 Inch</li><li>Jacket Piece Length – 32 Inch</li><li>Width – 45 Inch</li></ul>",
    imgs: [
        "https://cibonline.lk/wp-content/uploads/2026/01/2-2-768x981.jpg",
        "https://cibonline.lk/wp-content/uploads/2026/01/06-768x981.jpg"
    ],
    specs: {
        material: "Handloom Cotton",
        weight: "0.525kg",
        stock: 2
    },
  
    sizes: ["Free Size"]
},
{
    id: 43,
    title: "Handloom Cotton Saree with Blouse Piece",
    price: 4268,
    discount: 25,
    description: "Buy Handloom Cotton Saree with Blouse Piece | Elegant saree with graceful natural texture and elegant drape.<ul><li>Elegant border with tassel detailing</li><li>Soft, breathable, and lightweight for all-day comfort</li><li>Includes a saree jacket piece</li><li>Material – Handloom Cotton</li><li>Saree Length – 5 Yards 16 Inch</li><li>Jacket Piece Length – 32 Inch</li><li>Width – 45 Inch</li></ul>",
    imgs: [
        "https://cibonline.lk/wp-content/uploads/2026/01/01-01-768x981.jpg",
        "https://cibonline.lk/wp-content/uploads/2026/01/3-2-768x981.jpg"
    ],
    specs: {
        material: "Handloom Cotton",
        weight: "0.525kg",
        stock: 10
    },
sizes: ["Free Size"]
},
{
    id: 44,
    title: "Pink Cotton Saree with Jacket Piece",
    price: 2062,
    discount: 25,
    description: "Buy Pink Cotton Saree with Jacket Piece | Elegant saree with contrast pallu and graceful drape.<ul><li>Contrast pallu with elegant tassel detailing</li><li>Lightweight and comfortable fabric for easy draping</li><li>Includes a saree jacket piece</li><li>Material – Cotton</li><li>Saree Length – 5 Yards 28 Inch</li><li>Jacket Piece Length – 30 Inch</li><li>Width – 45 Inch</li></ul>",
    imgs: [
        "https://cibonline.lk/wp-content/uploads/2026/01/01.jpg-new-768x981.jpg",
        "https://cibonline.lk/wp-content/uploads/2026/01/01-768x981.jpg"
    ],
    specs: {
        material: "Cotton",
        weight: "0.475kg",
        stock: 10
    },
   
    sizes: ["Free Size"]
},
{
    id: 45,
    title: "Women’s Pink Clutch Purse",
    price: 2993,
    discount: 23,
    description: "Shop Women’s Pink Clutch Purse | Elegant glitter fabric with textured wave pattern.<ul><li>Gold-tone chain strap</li><li>Secure metallic clasp closure</li><li>Compact and lightweight design</li></ul>",
    imgs: [
        "https://cibonline.lk/wp-content/uploads/2026/01/03-1-768x981.jpg",
        "https://cibonline.lk/wp-content/uploads/2026/01/04-1-768x981.jpg"
    ],
    specs: {
        weight: "0.4kg",
        stock: 10
    },
   
},
{
    id: 46,
    title: "Ruffle Hem Midi Dress",
    price: 1493,
    discount: 25,
    description: "Ruffle Hem Midi Dress | Relaxed & flowy dress with lightweight fabric and all-day comfort.<ul><li>Invisible Back Zipper</li><li>Adjustable Shoulder Straps</li><li>Lightweight Fabric & All-Day Comfort</li><li>Brand – LORA</li><li>Material – Masha</li><li>Model Wearing Size – M Size</li></ul>",
    imgs: [
        "https://cibonline.lk/wp-content/uploads/2025/12/10update-25-scaled.jpg",
        "https://cibonline.lk/wp-content/uploads/2025/12/10update-23-768x981.jpg",
        "https://cibonline.lk/wp-content/uploads/2025/12/10update-24-768x981.jpg",
        "https://cibonline.lk/wp-content/uploads/2025/10/SIZE5-scaled.jpg"
    ],
    specs: {
        brand: "LORA",
        material: "Masha",
        weight: "0.325kg",
        stock: 10
    },
  
    sizes: ["S","M","L","XL"]
},
{
    id: 47,
    title: "Midi Ruffle Hem Dress",
    price: 1493,
    discount: 32,
    description: "Midi Ruffle Hem Dress | Relaxed & flowy dress with lightweight fabric and all-day comfort.<ul><li>Invisible Back Zipper</li><li>Adjustable Shoulder Straps</li><li>Lightweight Fabric & All-Day Comfort</li><li>Brand – LORA</li><li>Material – Masha</li><li>Model Wearing Size – M Size</li></ul>",
    imgs: [
        "https://cibonline.lk/wp-content/uploads/2025/10/25-scaled.jpg",
        "https://cibonline.lk/wp-content/uploads/2025/10/26-768x981.jpg",
        "https://cibonline.lk/wp-content/uploads/2025/10/27-768x981.jpg",
        "https://cibonline.lk/wp-content/uploads/2025/10/SIZE5-scaled.jpg"
    ],
    specs: {
        brand: "LORA",
        material: "Masha",
        weight: "0.325kg",
        stock: 10
    },
    sizes: ["S","M","L","XL"]
},

{
    id: 48,
    title: "Comfy Denim Mini Dress",
    price: 1643,
    discount: 27,
    description: "Comfy Denim Mini Dress | Cute & relaxed fit for all-day comfort, perfect for casual outings or travel.<ul><li>Sleeveless design with two pleat detail at neckline</li><li>Lightweight denim fabric</li><li>Handy side pockets</li><li>Material – Denim Chambray</li><li>Model Wearing Size – UK 10</li></ul>",
    imgs: [
        "https://cibonline.lk/wp-content/uploads/2025/12/10update-20-scaled.jpg",
        "https://cibonline.lk/wp-content/uploads/2025/12/10update-22-768x981.jpg",
        "https://cibonline.lk/wp-content/uploads/2025/12/10update-21-768x981.jpg",
        "https://cibonline.lk/wp-content/uploads/2025/10/SIZE4-scaled.jpg"
    ],
    specs: {
        material: "Denim Chambray",
        weight: "0.24kg",
        stock: 10
    },
    sizes: ["UK 10","UK 12","UK 14","UK 16"]
},
{
    id: 49,
    title: "Ladies’ Classic Belt With Buckle",
    price: 413,
    discount: 25,
    description: "Ladies’ Classic Belt With Buckle | Elegant and stylish belt suitable for daily wear.<ul><li>Material : PU Leather</li><li>Length : 105CM</li><li>Width : 1.8CM</li></ul>",
    imgs: [
        "https://cibonline.lk/wp-content/uploads/2025/10/06-5-768x981.jpg",
        "https://cibonline.lk/wp-content/uploads/2025/10/12-1-1-768x981.jpg",
        "https://cibonline.lk/wp-content/uploads/2025/10/05-1-2-768x981.jpg",
        "https://cibonline.lk/wp-content/uploads/2025/10/11-1-1-768x981.jpg",
        "https://cibonline.lk/wp-content/uploads/2025/10/02-2-3-768x981.jpg",
        "https://cibonline.lk/wp-content/uploads/2025/10/10-1-1-768x981.jpg",
        "https://cibonline.lk/wp-content/uploads/2025/10/04-1-3-768x981.jpg",
        "https://cibonline.lk/wp-content/uploads/2025/10/09-2-768x981.jpg",
        "https://cibonline.lk/wp-content/uploads/2025/10/01-2-3-768x981.jpg",
        "https://cibonline.lk/wp-content/uploads/2025/10/08-4-768x981.jpg"
    ],
    specs: {
        material: "PU Leather",
        length: "105CM",
        width: "1.8CM",
        weight: "0.075kg",
        stock: 10,
    },
    colors: ["Pink","Peackock Blue","Ash","Bown", "Purple"]
},

{
    id: 50,
    title: "Tie-Waist Sleeveless Dress",
    price: 1793,
    discount: 27,
    description: "Tie-Waist Sleeveless Dress | Stylish and comfortable dress with adjustable waist tie and elegant front slit.<ul><li>Shoulder to waist button-down front design</li><li>Sleeveless and collared style</li><li>Front slit detail for added style</li><li>Soft and comfortable fabric</li><li>Adjustable waist tie belt</li><li>Invisible Side Zipper</li><li>Brand – LORA</li><li>Material – Maserati</li><li>Model Wearing Size – M Size</li></ul>",
    imgs: [
        "https://cibonline.lk/wp-content/uploads/2025/12/10update-12-scaled.jpg",
        "https://cibonline.lk/wp-content/uploads/2025/12/10update-16-768x981.jpg",
        "https://cibonline.lk/wp-content/uploads/2025/12/10update-14-768x981.jpg",
        "https://cibonline.lk/wp-content/uploads/2025/10/SIZE3-scaled.jpg"
    ],
    specs: {
        brand: "LORA",
        material: "Maserati",
        weight: "0.405kg",
        stock: 10
    },
    sizes: ["S","M","L","XL"]
},
{
    id: 51,
    title: "Pink Crossover Flare Blouse",
    price: 1267,
    discount: 25,
    description: "Pink Crossover Flare Blouse | Stylish blouse with flared hem and elegant crossover design.<ul><li>Flared Hem</li><li>V-Neckline</li><li>Loose & Ruffled Sleeve</li><li>Overlapping Front Panels</li><li>Tie-Up Belt that Fits Around The Waist</li><li>Material – Polyester</li><li>Model Wearing Size – M Size</li></ul>",
    imgs: [
        "https://cibonline.lk/wp-content/uploads/2025/10/9-1kkkkkkkkkiii-scaled.jpg",
        "https://cibonline.lk/wp-content/uploads/2025/10/9-1-scaled.jpg",
        "https://cibonline.lk/wp-content/uploads/2025/10/8-768x981.jpg",
        "https://cibonline.lk/wp-content/uploads/2025/10/SIZE-GUIDE-2-scaled.jpg"
    ],
    specs: {
        material: "Polyester",
        weight: "0.265kg",
        stock: 10
    },
    colors: ["Pink"],
    sizes: ["S","M","L","XL"]
},
{
    id: 52,
    title: "Women’s Casual Cotton Short",
    price: 893,
    discount: 32,
    description: "Women’s Casual Cotton Short | Comfortable loose fit shorts perfect for daily wear.<ul><li>Roll Hem</li><li>Waist With Tie Belt</li><li>Embossed Side Pockets</li><li>Loose Fit & Comfortable</li><li>Short Front Waist Band & Back Elastic Waist</li><li>Brand – LORA</li><li>Material – Crush Cotton</li><li>Model Wearing Size – 32 Size</li></ul>",
    imgs: [
        "https://cibonline.lk/wp-content/uploads/2025/12/10update-27-scaled.jpg",
        "https://cibonline.lk/wp-content/uploads/2025/12/10update-31-768x981.jpg",
        "https://cibonline.lk/wp-content/uploads/2025/12/10update-29-768x981.jpg",
        "https://cibonline.lk/wp-content/uploads/2025/10/SIZE-GUIDE-1-1-scaled.jpg"
    ],
    specs: {
        brand: "LORA",
        material: "Crush Cotton",
        weight: "0.185kg",
        stock: 10
    },
    sizes: ["28", "30", "32", "34"]
},
{
    id: 53,
    title: "Sleeveless Pocket Wrap Dress",
    price: 1687,
    discount: 30,
    description: "Sleeveless Pocket Wrap Dress | Stylish wrap dress perfect for casual or semi-formal occasions.<ul><li>Lightweight Fabric</li><li>Handy Side Pockets</li><li>Wrap-Style V-Neckline</li><li>Comfortable Sleeveless design</li><li>Gathered Waist For a Feminine Fit</li><li>Brand – LORA</li><li>Material – Crush Cotton</li><li>Model Wearing Size – M Size</li></ul>",
    imgs: [
        "https://cibonline.lk/wp-content/uploads/2025/10/7-1-scaled.jpg",
        "https://cibonline.lk/wp-content/uploads/2025/10/8-2-scaled.jpg",
        "https://cibonline.lk/wp-content/uploads/2025/10/9-2-scaled.jpg",
        "https://cibonline.lk/wp-content/uploads/2025/12/10update-40-scaled.jpg",
        "https://cibonline.lk/wp-content/uploads/2025/12/10update-2-768x981.jpg",
        "https://cibonline.lk/wp-content/uploads/2025/12/10update-4-768x981.jpg",
        "https://cibonline.lk/wp-content/uploads/2025/10/SIZE2-scaled.jpg"
    ],
    specs: {
        brand: "LORA",
        material: "Crush Cotton",
        weight: "0.385kg",
        stock: 10
    },
    colors: ["Black", "Green"],
    sizes: ["S","M","L","XL"]
},
{
    id: 54,
    title: "Amante Carefree Casuals Bra – Steel Grey",
    price: 1946,
    discount: 25,
    description: "Amante Carefree Casuals Bra – Steel Grey | Comfortable everyday wear bra with soft support.<ul><li>Seamless design</li><li>Padded, non-wired, full cover</li><li>T-shirt bra</li><li>Soft foam cups to prevent nipple show</li><li>Ideal for everyday wear</li><li>Material – 93% Cotton 7% Elastane</li><li>Wash Care: Hand wash without fabric conditioner, line dry, do not iron</li></ul><br><span style='color:red; font-weight:bold;'>Please note: This item cannot be returned due to hygienic reasons.</span>",
    imgs: [
        "https://cibonline.lk/wp-content/uploads/2025/10/01-2-1-scaled.jpg",
        "https://cibonline.lk/wp-content/uploads/2025/10/size-chart.jpg-02-scaled.jpg"
    ],
    specs: {
        material: "93% Cotton 7% Elastane",
        weight: "0.125kg",
        stock: 10
    },
    colors: ["Steel Grey"],
    sizes: ["34B","34C","34D","36B","36C","36D"]
},
{
    id: 55,
    title: "Amante Saree Shaper Bra – Sandalwood",
    price: 2096,
    discount: 25,
    description: "Amante Saree Shaper Bra – Sandalwood | Comfortable full coverage bra ideal for everyday wear.<ul><li>Non-Padded & Non-Wired, Full Coverage</li><li>Fully Adjustable Straps</li><li>Synthetic, Cut & Sew Cup Bra</li><li>Ideal For Everyday Wear</li><li>Material – 93% Polyamide 7% Elastane</li><li>Wash care: Hand wash only, do not tumble dry</li></ul><br><span style='color:red; font-weight:bold;'>Please note: This item cannot be returned due to hygienic reasons.</span>",
    imgs: [
        "https://cibonline.lk/wp-content/uploads/2025/10/07-1-1-scaled.jpg",
        "https://cibonline.lk/wp-content/uploads/2025/10/size-chart.jpg-02-scaled.jpg"
    ],
    specs: {
        material: "93% Polyamide 7% Elastane",
        weight: "0.85kg",
        stock: 10
    },
    colors: ["Sandalwood"],
    sizes: ["34B","34C","34D","36B","36C","36D","38B","38C","38D"]
},
{
    id: 56,
    title: "Black Ladies Casual Pant",
    price: 1643,
    discount: 28,
    description: "Black Ladies Casual Pant | Comfortable and stylish casual pant for everyday wear.<ul><li>Material – Polyester Rib</li><li>Model Wearing Size – 30 Size</li><li>Lightweight and comfortable fit</li></ul>",
    imgs: [
        "https://cibonline.lk/wp-content/uploads/2025/10/3-scaled.jpg",
        "https://cibonline.lk/wp-content/uploads/2025/10/1-768x981.jpg",
        "https://cibonline.lk/wp-content/uploads/2025/10/2-scaled.jpg",
        "https://cibonline.lk/wp-content/uploads/2025/10/SIZE-GUIDE-1-scaled.jpg"
    ],
    specs: {
        material: "Polyester Rib",
        weight: "0.385kg",
        stock: 10
    },
    colors: ["Black"],
    sizes: ["30"]
},
{
    id: 57,
    title: "Cotton Embroidery Dress For Ladies",
    price: 2618,
    discount: 27,
    description: "Cotton Embroidery Dress For Ladies | Elegant embroidered dress with a comfortable and stylish fit.<ul><li>Embroidery Design</li><li>Three Quarter Sleeve</li><li>Invisible Back Zipper</li><li>Mandarin Collar Design</li><li>Brand – LORA</li><li>Material – Crush Cotton</li><li>Model Wearing Size – M Size</li></ul>",
    imgs: [
        "https://cibonline.lk/wp-content/uploads/2025/12/10update-11-scaled.jpg",
        "https://cibonline.lk/wp-content/uploads/2025/12/10update-13-768x981.jpg",
        "https://cibonline.lk/wp-content/uploads/2025/12/10update-15-768x981.jpg",
        "https://cibonline.lk/wp-content/uploads/2025/09/SIZE-GUIDE-3-1-scaled.jpg"
    ],
    specs: {
        brand: "LORA",
        material: "Crush Cotton",
        weight: "0.345kg",
        stock: 10
    },

    sizes: ["M","L","XL","2XL"]
},
{
    id: 58,
    title: "Men’s Oversized Black Casual T-Shirt",
    price: 2399,
    discount: 35,
    description: "Men’s Oversized Black Casual T-Shirt | Comfortable oversized t-shirt perfect for casual wear.<ul><li>Oversize fit</li><li>Crew Neck</li><li>Material – 80% Cotton 20% Lycra</li><li>Model Wearing Size – L</li></ul>",
    imgs: [
        "https://cibonline.lk/wp-content/uploads/2025/07/TT-29-2.jpg",
        "https://cibonline.lk/wp-content/uploads/2025/07/TT-29-3-768x981.jpg",
        "https://cibonline.lk/wp-content/uploads/2025/07/TT-29-1-768x981.jpg",
        "https://cibonline.lk/wp-content/uploads/2025/09/13nn-9-scaled.jpg"
    ],
    specs: {
        material: "80% Cotton 20% Lycra",
        weight: "0.3kg",
        stock: 10
    },
    colors: ["Black"],
    sizes: ["M","L","XL"]
},
{
    id: 59,
    title: "Axe Body Spray Black -135ml",
    price: 1342,
    discount: 25,
    description: "Axe Body Spray Black -135ml | Long-lasting fragrance for daily freshness.<ul><li>Compact and easy to carry</li><li>Ideal for everyday use</li><li>Suitable for all-day freshness</li></ul><br><span style='color:red; font-weight:bold;'>Please note: This item cannot be returned.</span>",
    imgs: [
        "https://cibonline.lk/wp-content/uploads/2024/05/01-5-768x981.jpg",
        "https://cibonline.lk/wp-content/uploads/2024/05/02-4-768x981.jpg"
    ],
    specs: {
        weight: "0.2kg",
        stock: 13
    },
},
{
    id: 60,
    title: "Manual Men’s Umbrella 27″ (S2137)",
    price: 1309,
    discount: 30,
    description: "Manual Men’s Umbrella 27″ (S2137) | Durable umbrella suitable for daily use.<ul><li>Material – Taffeta Fabric</li><li>UV Protection Umbrella</li><li>Strong and reliable build</li></ul>",
    imgs: [
        "https://cibonline.lk/wp-content/uploads/2024/07/14-1-768x981.jpg",
        "https://cibonline.lk/wp-content/uploads/2024/07/13-2-768x981.jpg"
    ],
    specs: {
        material: "Taffeta Fabric",
        weight: "0.59kg",
        stock: 2
    },
},
{
    id: 61,
    title: "ELK Men’s Blue Polo T-Shirt",
    price: 1603,
    discount: 30,
    description: "ELK Men’s Blue Polo T-Shirt | Stylish polo t-shirt made for comfort and everyday wear.<ul><li>MADE IN SRI LANKA</li><li>Polo Collar</li><li>Seamless Placket</li><li>Side Slit</li><li>Brand – ELK Clothing</li><li>Material – Nautica Fabric</li><li>Model Wearing Size – L</li></ul>",
    imgs: [
        "https://cibonline.lk/wp-content/uploads/2025/07/01-5.jpg",
        "https://cibonline.lk/wp-content/uploads/2025/07/02-5-768x981.jpg",
        "https://cibonline.lk/wp-content/uploads/2025/07/03-5-768x981.jpg",
        "https://cibonline.lk/wp-content/uploads/2025/12/03-scaled.jpg"
    ],
    specs: {
        brand: "ELK Clothing",
        material: "Nautica Fabric",
        weight: "0.3kg",
        stock: 10
    },
    colors: ["Blue"],
    sizes: ["M","L","XL","2XL"]
},
{
    id: 62,
    title: "Elk Jogger Ash Casual Pant",
    price: 3003,
    discount: 30,
    description: "Elk Jogger Ash Casual Pant | Comfortable jogger pants with relaxed fit and modern style.<ul><li>Elastic With Drawstring Closure</li><li>Relaxed Straight Leg Fit</li><li>4-pocket Design</li><li>Elastic Drawcord At Ankle</li><li>Brand – ELK Clothing</li><li>Material – 98% Cotton 2% Spandex</li><li>Model Wearing Size – 32″ Size</li></ul>",
    imgs: [
        "https://cibonline.lk/wp-content/uploads/2025/08/4-2-scaled.jpg",
        "https://cibonline.lk/wp-content/uploads/2025/08/3-2-scaled.jpg",
        "https://cibonline.lk/wp-content/uploads/2025/08/n-Jogger-Pants-WEB.jpg"
    ],
    specs: {
        brand: "ELK Clothing",
        material: "98% Cotton 2% Spandex",
        weight: "0.52kg",
        stock: 10
    },
    colors: ["Ash"],
    sizes: ["28","30","32","34","36"]
},
{
    id: 63,
    title: "Men’s White Casual Shirt",
    price: 2517,
    discount: 30,
    description: "Men’s White Casual Shirt | Stylish and comfortable shirt suitable for casual wear.<ul><li>Hybrid Fit</li><li>Short Sleeve</li><li>Classic Polo Collar</li><li>Material – Loopknit Jackuard Jersey</li><li>Model Wearing Size – XL</li></ul>",
    imgs: [
        "https://cibonline.lk/wp-content/uploads/2025/08/05-3-scaled.jpg",
        "https://cibonline.lk/wp-content/uploads/2025/08/04-3-768x981.jpg",
        "https://cibonline.lk/wp-content/uploads/2025/08/06-3-768x981.jpg",
        "https://cibonline.lk/wp-content/uploads/2025/09/13nn-8-scaled.jpg"
    ],
    specs: {
        material: "Loopknit Jackuard Jersey",
        weight: "0.23kg",
        stock: 10
    },
    colors: ["White"],
    sizes: ["M","L","XL"]
},
{
    id: 64,
    title: "ELK Printed Men’s Casual Shirt",
    price: 1953,
    discount: 30,
    description: "ELK Printed Men’s Casual Shirt | Stylish printed shirt with a relaxed and modern look.<ul><li>Cuban Collar</li><li>Short Sleeve</li><li>Brand – ELK Clothing</li><li>Material – 65% Polyester 35% Cotton</li><li>Model Wearing Size – M</li></ul>",
    imgs: [
        "https://cibonline.lk/wp-content/uploads/2025/07/10-4.jpg",
        "https://cibonline.lk/wp-content/uploads/2025/07/11-4-768x981.jpg",
        "https://cibonline.lk/wp-content/uploads/2025/07/12-3-768x981.jpg",
        "https://cibonline.lk/wp-content/uploads/2025/12/01-1-scaled.jpg"
    ],
    specs: {
        brand: "ELK Clothing",
        material: "65% Polyester 35% Cotton",
        weight: "0.21kg",
        stock: 10
    },
    sizes: ["M","L","XL"]
},
{
    id: 65,
    title: "ELK Men’s Black Casual Shirt",
    price: 1953,
    discount: 30,
    description: "ELK Men’s Black Casual Shirt | Stylish casual shirt with a relaxed fit and modern design.<ul><li>Cuban Collar</li><li>Short Sleeve</li><li>Brand – ELK Clothing</li><li>Material – 65% Polyester 35% Cotton</li><li>Model Wearing Size – M</li></ul>",
    imgs: [
        "https://cibonline.lk/wp-content/uploads/2025/07/01-7.jpg",
        "https://cibonline.lk/wp-content/uploads/2025/07/03-7-768x981.jpg",
        "https://cibonline.lk/wp-content/uploads/2025/07/hh03-2-768x981.jpg",
        "https://cibonline.lk/wp-content/uploads/2025/12/02-scaled.jpg"
    ],
    specs: {
        brand: "ELK Clothing",
        material: "65% Polyester 35% Cotton",
        weight: "0.225kg",
        stock: 10
    },
    sizes: ["M","L","XL"]
},
{
    id: 66,
    title: "Men’s Casual Polo Tee",
    price: 2307,
    discount: 30,
    description: "Men’s Casual Polo Tee | Smart fit polo tee designed for everyday comfort and style.<ul><li>Smart Fit</li><li>Polo Collar</li><li>Short Sleeve</li><li>3 Button Set-in Placket</li><li>Material – Needle Knit Jacquard Jersey</li><li>Model Wearing Size – L</li></ul>",
    imgs: [
        "https://cibonline.lk/wp-content/uploads/2025/07/a01.jpg",
        "https://cibonline.lk/wp-content/uploads/2025/07/a03-768x981.jpg",
        "https://cibonline.lk/wp-content/uploads/2025/07/a02-768x981.jpg",
        "https://cibonline.lk/wp-content/uploads/2025/09/13nn-3-scaled.jpg"
    ],
    specs: {
        material: "Needle Knit Jacquard Jersey",
        weight: "0.280kg",
        stock: 10
    },
    sizes: ["M","L","XL"]
},
{
    id: 67,
    title: "Ladies Baggy T Shirt",
    price: 833,
    discount: 30,
    description: "Ladies Baggy T Shirt | Comfortable baggy style crop top designed for casual wear.<ul><li>Crew Neck</li><li>Baggy Sleeve</li><li>Crop Top</li><li>Material – 85% Cotton 15% Polyester</li><li>Model Wearing Size – M</li></ul>",
    imgs: [
        "https://cibonline.lk/wp-content/uploads/2025/06/7-3-scaled.jpg",
        "https://cibonline.lk/wp-content/uploads/2025/06/8-2-1-768x981.jpg",
        "https://cibonline.lk/wp-content/uploads/2025/10/1-2-scaled.jpg"
    ],
    specs: {
        material: "85% Cotton 15% Polyester",
        weight: "0.15kg",
        stock: 10
    },
    sizes: ["S","M","L"]
},
{
    id: 68,
    title: "Ladies Baggy Tee",
    price: 833,
    discount: 30,
    description: "Ladies Baggy Tee | Comfortable baggy style crop top for casual wear.<ul><li>Crew Neck</li><li>Baggy Sleeve</li><li>Crop Top</li><li>Material – 85% Cotton 15% Polyester</li><li>Model Wearing Size – M</li></ul>",
    imgs: [
        "https://cibonline.lk/wp-content/uploads/2025/06/5-6-scaled.jpg",
        "https://cibonline.lk/wp-content/uploads/2025/06/6-3-768x981.jpg",
        "https://cibonline.lk/wp-content/uploads/2025/10/1-2-scaled.jpg"
    ],
    specs: {
        material: "85% Cotton 15% Polyester",
        weight: "0.15kg",
        stock: 10
    },
    sizes: ["S","M","L"]
},
{
    id: 69,
    title: "Ladies Pink Crop Top",
    price: 875,
    discount: 25,
    description: "Ladies Pink Crop Top | Stylish and comfortable crop top for casual wear.<ul><li>Short Sleeve</li><li>Stretch & Comfortable</li><li>Material – 85% Cotton 15% Polyester</li><li>Model Wearing Size – M</li></ul>",
    imgs: [
        "https://cibonline.lk/wp-content/uploads/2025/06/3-15-scaled.jpg",
        "https://cibonline.lk/wp-content/uploads/2025/06/4-10-768x981.jpg",
        "https://cibonline.lk/wp-content/uploads/2025/10/2-2-scaled.jpg"
    ],
    specs: {
        material: "85% Cotton 15% Polyester",
        weight: "0.16kg",
        stock: 10
    },
    sizes: ["M","L","XL"]
},
{
    id: 70,
    title: "Stainless Steel Water Bottle 750ML",
    price: 644,
    discount: 35,
    description: "Stainless Steel Water Bottle 750ML | Durable insulated bottle suitable for daily use.<ul><li>Capacity : 750ML</li><li>Material : Stainless Steel</li></ul>",
    imgs: [
        "https://cibonline.lk/wp-content/uploads/2026/01/11-1-768x981.jpg"
    ],
    specs: {
        capacity: "750ML",
        material: "Stainless Steel",
        weight: "0.225kg",
        stock: 4
    }
},
{
    id: 71,
    title: "Drinking Sports Water Bottle – 800ml",
    price: 973,
    discount: 30,
    description: "Drinking Sports Water Bottle – 800ml | Lightweight and durable bottle for sports and daily hydration.<ul><li>Easy to clean</li><li>High Quality Durable Material</li><li>Leak Proof Design</li><li>Capacity : 800ML</li><li>Material : Plastic</li></ul>",
    imgs: [
        "https://cibonline.lk/wp-content/uploads/2024/12/dfgdg-scaled.jpg",
        "https://cibonline.lk/wp-content/uploads/2024/12/dddd-768x981.jpg",
        "https://cibonline.lk/wp-content/uploads/2024/12/6.23-768x981.jpg",
        "https://cibonline.lk/wp-content/uploads/2024/12/6.22-768x981.jpg",
        "https://cibonline.lk/wp-content/uploads/2024/12/9.5-768x981.jpg",
        "https://cibonline.lk/wp-content/uploads/2024/12/3.67-768x981.jpg"
    ],
    specs: {
        capacity: "800ML",
        material: "Plastic",
        weight: "0.2kg",
        stock: 20
    },
    colors: ["Black", "Gray", "Orange"]
},
{
    id: 72,
    title: "Sport Water Bottle – 1500ml",
    price: 770,
    discount: 30,
    description: "Sport Water Bottle – 1500ml | Large capacity bottle designed for hydration with convenient features.<ul><li>Bottle With Straw And Scale</li><li>Humanization and Portability</li><li>Capacity : 1500ML</li><li>Material : Plastic</li></ul>",
    imgs: [
        "https://cibonline.lk/wp-content/uploads/2024/12/08-4-768x981.jpg",
        "https://cibonline.lk/wp-content/uploads/2024/12/10-2-768x981.jpg",
        "https://cibonline.lk/wp-content/uploads/2024/12/01-4-768x981.jpg"
    ],
    specs: {
        capacity: "1500ML",
        material: "Plastic",
        weight: "0.25kg",
        stock: 17
    }
},
{
    id: 73,
    title: "Sport Flat Water Bottle",
    price: 1043,
    discount: 30,
    description: "Sport Flat Water Bottle | Compact and portable water bottle designed for daily convenience.<ul><li>One Click Open</li><li>Silicone Straw</li><li>Convenient To Carry</li><li>Water Leakage Prevention Design</li><li>Size : 350ML</li><li>Material : Plastic</li></ul>",
    imgs: [
        "https://cibonline.lk/wp-content/uploads/2024/12/1.7-768x981.jpg",
        "https://cibonline.lk/wp-content/uploads/2024/12/1.6-768x981.jpg"
    ],
    specs: {
        capacity: "350ML",
        material: "Plastic",
        weight: "0.32kg",
        stock: 12
    }
},
{
    id: 74,
    title: "Kids’ Silicone Purse With Removable Strap",
    price: 483,
    discount: 30,
    description: "Kids’ Silicone Purse With Removable Strap | Cute and lightweight purse suitable for kids.<ul><li>Material : Silicone</li></ul>",
    imgs: [
        "https://cibonline.lk/wp-content/uploads/2025/01/uorinjghntfjr-9-768x981.jpg",
        "https://cibonline.lk/wp-content/uploads/2025/01/uorinjghntfjr-7-768x981.jpg",
        "https://cibonline.lk/wp-content/uploads/2025/01/utjugfh-scaled.jpg"
    ],
    specs: {
        material: "Silicone",
        weight: "0.12kg",
        stock: 10
    }
},
{
    id: 75,
    title: "Heart Shaped Silicone Purse",
    price: 483,
    discount: 30,
    description: "Heart Shaped Silicone Purse | Stylish heart-shaped purse made for kids and casual use.<ul><li>Material : Silicone</li></ul>",
    imgs: [
        "https://cibonline.lk/wp-content/uploads/2025/01/ukiryui-12-768x981.jpg",
        "https://cibonline.lk/wp-content/uploads/2025/01/ukiryui-10-768x981.jpg",
        "https://cibonline.lk/wp-content/uploads/2025/01/ukiryui-6-scaled.jpg",
        "https://cibonline.lk/wp-content/uploads/2025/01/ukiryui-4-768x981.jpg",
        "https://cibonline.lk/wp-content/uploads/2025/01/hrureryu-scaled.jpg"
    ],
    specs: {
        material: "Silicone",
        weight: "0.12kg",
        stock: 1
    },
    sizes: ["White", "Red"]
}
];

