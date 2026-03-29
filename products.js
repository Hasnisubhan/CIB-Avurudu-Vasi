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
    {
        id: 2,
        title: "Moose Dusky Charm Polo T-Shirts",
        price: 1300,
        discount: 36,
        description: "The soft pink and white accents add a subtle pop of color, blending classic refinement with a contemporary twist.<ul><li>Fit type: Slim Fit</li> <li>Length: Regular Elevated with contrast tipping at the collar and cuffs.</li></ul>Crafted for comfort and versatility.",
        imgs: [
"https://img.drz.lazcdn.com/static/lk/p/26e49405f5cc2db6623fa5f2c5787af6.jpg_720x720q80.jpg_.webp",
"https://img.drz.lazcdn.com/static/lk/p/d91c53370d54eaa009484a38e1472432.jpg_720x720q80.jpg_.webp",
"https://img.drz.lazcdn.com/static/lk/p/43bada933fae848b0cd580ef542ac42f.jpg_720x720q80.jpg_.webp",
"https://img.drz.lazcdn.com/static/lk/p/2707b3a78be2d3fb0ef2e19d9e0ea6e4.jpg_720x720q80.jpg_.webp",
"https://img.drz.lazcdn.com/static/lk/p/f6a6ab87b6ee7476a7e925f35b5f8ff9.jpg_720x720q80.jpg_.webp"
        ],
        // FIXED: Added sizes and colors for this product
        specs: { material: "Fabric", stock: 15 },
        sizes: ["S", "M", "L", "XL"],
        colors: ["ELDERBEERRY BROWN", "CORAL ORANGE", "JET BLACK", "MING GREEN", "TOMATO RED"]
    },
    {
        id: 3,
        title: "Moose Men's Waffle Mandarin Collar Long Sleeve T-Shirt - Peach Pink",
        price: 1300,
        discount: 45,
        description: "Change Of Mind is NOT APPLICABLE",
        imgs: [
            "https://img.drz.lazcdn.com/static/lk/p/f453891902c5c9fbfdc58773ebf12ae7.jpg_720x720q80.jpg_.webp"
        ],
        // FIXED: Added weight to prevent "undefined" error
        specs: { material: "Cotton", stock: 3 }
    },
    {
        id: 4,
        title: "Fashion Sneakers Unisex Shoes for Men And Women",
        price: 2300,
        discount: 25,
        description: "Please decide your shoe size by measuring your foot in centimeters and adding a half-centimeter to it. The shoe size can be selected according to the given chart.",
        imgs: [
            "https://img.drz.lazcdn.com/static/lk/p/bdaf225a88fcb6dbb2d11104b525ef2d.jpg_720x720q80.jpg_.webp",
            "https://img.drz.lazcdn.com/static/lk/p/7cf67db116fbab2dd3196b465b38b4df.jpg_720x720q80.jpg_.webp",
            "https://img.drz.lazcdn.com/static/lk/p/3e2506f13b10a52a1cb44da893893218.jpg_720x720q80.jpg_.webp"
        ],
        specs: { material: "Cotton", weight: "0.7Kg", stock: 10 },
        sizes: ["39-40", "41", "42", "43", "37", "38", "44", "45-46"],
        colors: ["White"]
     },
    {
        id: 5,
        title: "Japanese Mummy Lightweight Multi-Pocket Baby Diaper Bag.", // Changed title slightly to differentiate from ID 4
        price: 3200,
        discount: 45,
        description: "Artistic Simple Canvas Bag out Pet Bag Shoulder Tote Bag<ul><li>Color: Creamy-white Large, Creamy-white Medium</li><li>Style: Literary Style</li><li>Material: Canvas</li><li>Bag Size: Large</li><li>Release: Winter 2023</li><li>Applicable Scenarios: Daily Matching</li><li>Lining Texture: Synthetic Leather</li><li>Opening Method: Zipper</li><li>Internal Structure: Document Bag, Sandwich Zipper Bag</li><li>Outer Bag Type: Inner Patch Bag</li><li>Hardness: Medium Hard</li></ul>",
        imgs: [
            "https://img.drz.lazcdn.com/static/lk/p/6d26c7021072be2e4265be6195ab282a.jpg_720x720q80.jpg_.webp", 
            "https://img.drz.lazcdn.com/static/lk/p/277516074dcfcadef41187ec09a81f45.jpg_720x720q80.jpg_.webp",
            "https://img.drz.lazcdn.com/static/lk/p/700717bc0f6b52da42c8e5ee4299339d.jpg_720x720q80.jpg_.webp",
            "https://img.drz.lazcdn.com/static/lk/p/277516074dcfcadef41187ec09a81f45.jpg_720x720q80.jpg_.webp"
        ],
        specs: { material: "Canvas", weight: "", stock: 8 },
        sizes: ["Medium", "Large"],
        colors: ["White"]
    },
    {
        id: 6,
        title: "PANGDUBE Universal Baby Sleeping Bag",
        price: 1920,
        discount: 35,
        description: "PANGDUBE Universal Baby Sleeping Bag Thick Winter Envelope for Newborns Baby Footmuff for Stroller 0~12Month Newborn Sleep Sacks. Thick Winter Envelope for Newborns Baby Footmuff for Stroller 0~12Month Newborn Sleep Sacks",
        imgs: [
            "https://img.drz.lazcdn.com/g/kf/S38118eb62d324e97b0b5961746c739cdj.png_720x720q80.png_.webp", 
            "https://img.drz.lazcdn.com/g/kf/S0b83d263f0f945d4a9c3bda52aecd4cfd.jpg_720x720q80.jpg_.webp",
            "https://img.drz.lazcdn.com/g/kf/S3ba9477c6c054c038341e03cd3a9ffb6I.jpg_720x720q80.jpg_.webp",
            "https://img.drz.lazcdn.com/g/kf/S68b82c3777ba465e9ebf5ba4cc6d5b52D.jpg_720x720q80.jpg_.webp"
        ],
        specs: { material: "60% viscose, 40% polyurethane", weight: "1.1kg", stock: 8 }
    },
    {
        id: 7,
        title: "Gents Auto Lock Black Belt",
        price: 840,
        discount: 35,
        description: "Product Color May Slightly Vary Due to Photographic Lighting Sources or Your Monitor Settings<br><br><b>Length 54.5″ , Width 1.25″</b>",
        imgs: [
            "https://cibonline.lk/wp-content/uploads/2025/08/1-belt-1-768x981.jpg", 
            "https://cibonline.lk/wp-content/uploads/2025/08/1-belt-10-scaled.jpg"
        ],
        specs: { material: "PU Leather", stock: 8 }
    },
        {
        id: 8,
        title: "Affordable Stylish Watch for Men",
        price: 1450,
        discount: 40,
        description: "<b>Case Diameter: 2″<br>Band length (include case) : 12″</b>",
        imgs: [
            "https://cibonline.lk/wp-content/uploads/2025/05/05-41-scaled.jpg", 
            "https://cibonline.lk/wp-content/uploads/2025/05/06-35-scaled.jpg",
            "https://cibonline.lk/wp-content/uploads/2025/05/03-83-scaled.jpg",
            "https://cibonline.lk/wp-content/uploads/2025/05/01-2025-05-16T101821.896-768x981.jpg"
        ],
        specs: { weight: "0.195kg", stock: 11 },
        colors: ["White", "Green", "Gray"]
        
    },

/* --- BATHIK CASUAL SHIRT FOR MEN --- */
{
    id: 9,
    title: "Bathik Casual Shirt for Men",
    price: 680,
    discount: 40,
    description: "Product Color May Slightly Vary Due to Photographic Lighting Sources or Your Monitor Settings",
    imgs: [
        "https://cibonline.lk/wp-content/uploads/2025/04/03-61-scaled.jpg"
    ],
    specs: { stock: 17, material: "Cotton", weight: "0.23kg" },
    sizes: ["15","15.5","16","16.5"]
},
/* --- MEN’S SIDE BAG --- */
{
    id: 11,
    title: "Men’s Side Bag",
    price: 850,
    discount: 35,
    description: "Shop Men’s Black Side Bag | Buy Online Men’s Accessories for the Lowest Price in Sri Lanka from cibonline.lk<br><ul><li>Smooth zipper closure</li><li>Lightweight and easy to carry</li><li>Adjustable shoulder strap for comfortable wear</li><li>Durable, water-resistant material for daily use</li><li>Built-in combination lock for enhanced security</li>",
    imgs: [
        "https://cibonline.lk/wp-content/uploads/2026/03/05-1-scaled.jpg",
        "https://cibonline.lk/wp-content/uploads/2026/03/06-1-scaled.jpg",
        "https://cibonline.lk/wp-content/uploads/2026/03/sli04-2-scaled.jpg",
        "https://cibonline.lk/wp-content/uploads/2026/03/sli04-3-scaled.jpg"
    ],
    specs: { stock: 13, material: "PU Leather & Polyester", weight: "0.365kg" },
    colors: ["Black","BLUE","Gray"]
},
/* --- LUNCH BAG FOR LADIES --- */
{
    id: 12,
    title: "Lunch Bag for Ladies",
    price: 370,
    discount: 25,
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
    price: 1700,
    discount: 35,
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
    discount: 25,
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
/* --- AALYA NIGHT DRESS FOR GIRLS --- */
{
    id: 15,
    title: "AALYA Night Dress for Girls",
    price: 420,
    discount: 20,
    description: "Cotton Comfort / Night Dress for Women / Night wear / Ladies wear<br><ul><li>Elegant night dress for comfortable and stylish sleepwear.</li><li>Made with high-quality and soft material for ultimate comfort.</li><li>Perfect for lounging and sleeping in style.</li><li>Designed for a flattering and feminine fit.</li><li>Ideal addition to any woman's sleepwear collection.</li></ul>",
    imgs: [
        "https://img.drz.lazcdn.com/static/lk/p/0066e72ec5d96881d48af3190f289255.png_720x720q80.png_.webp",
        "https://img.drz.lazcdn.com/static/lk/p/11095e7ee201dd470806e9eac9cadbb9.png_720x720q80.png_.webp",
        "https://img.drz.lazcdn.com/static/lk/p/b3a3a34b40946a7a0304a45d84fabd72.jpg_720x720q80.jpg_.webp",
        "https://img.drz.lazcdn.com/static/lk/p/f3220423ad3998049fd12764bcf83255.jpg_720x720q80.jpg_.webp?",
        "https://img.drz.lazcdn.com/static/lk/p/639a9da418ac822649fafe076f5ae05b.jpg_720x720q80.jpg_.webp",
        "https://img.drz.lazcdn.com/static/lk/p/e5157f038d8b4372b56b5aa2b1c2b661.jpg_720x720q80.jpg_.webp",
        "https://img.drz.lazcdn.com/static/lk/p/4f21df4a4b1a5f6290fb305028c6ab83.jpg_720x720q80.jpg_.webp",
        "https://img.drz.lazcdn.com/static/lk/p/63ac14b4ba9229232cace90c21c4fab3.jpg_720x720q80.jpg_.webp"
    ],
    specs: { stock: 18, material: "Cotton" },
    sizes: ["S","M","L","XL","XXL","3XL"],
    colors: ["Black","Green","Birch","White","Red","Blue"]
},
/* --- LADIES CASUAL FROCKS/WOMEN'S DRESSES --- */
{
    id: 16,
    title: "Ladies Casual Frocks/Women's Dresses",
    price: 1400,
    discount: 35,
    description: "<ul><li>Pattern: Plain</li><li>Color: Pink</li><li>Dress Length: Ankle Length</li><li>Sleeves: Short Sleeve</li><li>Clothing Style: Casual Blouse Sleeve</li><li>Style: Puff sleeve</li><li>Clothing Material: Rayon, Collar</li><li>Type: Square Neck</li><li>Dress Shape: Babydoll/Smock Dresses</li><li>Washable type: Hand And Machine Washable</li><li>Women's Trend: Party, Office</li><li>Suitable for casual wear, easy to wash and maintain</li></ul>",
    imgs: [
        "https://img.drz.lazcdn.com/g/kf/S1b0b68b10362410f8b26cf280f0c4b7dj.jpg_720x720q80.jpg_.webp",
        "https://img.drz.lazcdn.com/g/kf/S1521cded42de4feb9b53ca9aeb6ed761g.jpg_720x720q80.jpg_.webp"
    ],
    specs: { stock: 7 },
    sizes: ["S","M","L","XL","XXL","3XL","4XL","5XL","6XL"],
    colors: ["Pink"]
},
/* --- ANNI DESIGNER WOMEN KURTA WITH PANT & DUPATTA --- */
{
    id: 17,
    title: "ANNI DESIGNER Women Kurta with Pant & Dupatta",
    price: 2600,
    discount: 35,
    description: "<ul><li>Premium Rayon Fabric: Made from soft and breathable rayon, this kurta set offers all-day comfort while maintaining a stylish and elegant look.</li><li>Complete 3-Piece Set: Includes a straight printed kurta, matching pants, and a coordinating dupatta—perfect for daily wear, office, or festive occasions.</li><li>Elegant Straight Fit Design: The straight kurta with printed detailing creates a flattering silhouette, ideal for casual outings, work wear, and party wear.</li><li>Versatile Ethnic Wear: A must-have suit set for women that works as daily wear, festive wear, or party wear—easily paired with ethnic jewelry and sandals.</li><li>Easy Care & Durable: Designed with quality stitching and colorfast fabric that retains its look even after multiple washes.</li></ul>",
    imgs: [
        "https://img.drz.lazcdn.com/static/lk/p/3bb99222a6136b264ecce5b1fe06923f.jpg_720x720q80.jpg_.webp",
        "https://img.drz.lazcdn.com/static/lk/p/53c2ede6dede18c3a2acc66cd8e10330.jpg_720x720q80.jpg_.webp",
        "https://img.drz.lazcdn.com/static/lk/p/55b71d1dc39bcbfa00ceaa4d5b2584bc.jpg_720x720q80.jpg_.webp",
        "https://img.drz.lazcdn.com/static/lk/p/de0aa3d497c045cea95c4920b0fd5b46.jpg_720x720q80.jpg_.webp"
    ],
    specs: { stock: 5 },
    sizes: ["S","M","L","XL","XXL","3XL","4XL"],
    colors: ["Pink"]
},
/* --- CUTE BATH TOWEL FOR BABY --- */
{
    id: 18,
    title: "Cute Bath Towel for Baby",
    price: 630,
    discount: 35,
    description: "Cute Bath Towel for Baby Soft Absorbent Towel Newborn Swaddle Wrap Baby Blankets for Girls Boys",
    imgs: [
        "https://img.drz.lazcdn.com/static/lk/p/8d29cee643a30b78d9c76a4a5ab602d6.jpg_720x720q80.jpg_.webp",
        "https://img.drz.lazcdn.com/g/kf/S56fdce3945f2474cb5768ab9050b2e8bX.jpg_720x720q80.jpg_.webp",
        "https://img.drz.lazcdn.com/g/kf/S4e1496d073484cc2a64751cab583c7614.jpg_720x720q80.jpg_.webp",
        "https://img.drz.lazcdn.com/g/kf/S41da381074f94f92a5d488b653f5e152h.jpg_720x720q80.jpg_.webp",
        "https://img.drz.lazcdn.com/static/lk/p/95c74eebb4c043eb5775b04becc180f8.png_720x720q80.png_.webp",
        "https://img.drz.lazcdn.com/static/lk/p/654155baf4185f4430a66d67c3b41fe9.png_720x720q80.png_.webp",
        "https://img.drz.lazcdn.com/static/lk/p/f5641bab41e3312dbc9e4ea1cd720b04.png_720x720q80.png_.webp",
        "https://img.drz.lazcdn.com/static/lk/p/adeed2bf3ca24fc4ad3dff20d9984c9f.png_720x720q80.png_.webp"
    ],
    specs: { stock: 26 },
    colors: ["White","Gray","Pink","Blue"]
},
/* --- FASHION ZIPPER HOODIES WOMEN/MEN FASHION LONG SLEEVE HOODED --- */
{
    id: 19,
    title: "Fashion Zipper Hoodies Women/Men Fashion Long Sleeve Hooded",
    price: 1980,
    discount: 25,
    description: "Fashion Zipper Hoodies Women/Men Fashion Long Sleeve Hooded Sweatshirt Casual Autumn Winter Sportwear Solid Clothes",
    imgs: [
        "https://img.drz.lazcdn.com/g/kf/Scfd05e2cae5e41458d46c4c6513062ef4.jpg_720x720q80.jpg_.webp",
        "https://img.drz.lazcdn.com/g/kf/S28981ef655a34527ab0cf0a9b1b61b43v.jpg_720x720q80.jpg_.webp",
        "https://img.drz.lazcdn.com/g/kf/S176ae06fae9245ac8a55bbfb5f90645bO.jpg_720x720q80.jpg_.webp",
        "https://img.drz.lazcdn.com/g/kf/S2d252aee14804c1da16a33dda92db0c7x.jpg_720x720q80.jpg_.webp",
        "https://img.drz.lazcdn.com/g/kf/Sbb5d0a8337f34888880928b6407db879V.jpg_720x720q80.jpg_.webp"
    ],
    specs: { stock: 18, material: "Cotton" },
    sizes: ["S","M","L","XL","XXL","3XL","4XL"],
    colors: ["White","Black","Dark Blue","Blue","Red","Gray"]
},
/* --- NEW AUTUMN AND WINTER DOWN JACKET MEN'S --- */
{
    id: 20,
    title: "New Autumn And Winter Down Jacket Men's",
    price: 1350,
    discount: 25,
    description: "Fashion Hooded Super Light Warm Slim Coat Down Jacket Men's Coat",
    imgs: [
        "https://img.drz.lazcdn.com/g/kf/S447d84ee686142f2ab32c795de0e758cY.jpg_720x720q80.jpg_.webp",
        "https://img.drz.lazcdn.com/g/kf/S641795b3b383477c86c9b728ccfc2a3c6.jpg_720x720q80.jpg_.webp",
        "https://img.drz.lazcdn.com/g/kf/Sf33e07b842504d7f83858b9a0e01fa167.jpg_720x720q80.jpg_.webp",
        "https://img.drz.lazcdn.com/g/kf/S0f542e05fad34e8a9222a657bae9d976x.jpg_720x720q80.jpg_.webp",
        "https://img.drz.lazcdn.com/g/kf/Sbe12482f63004572ab0d585a335f1d50t.jpg_720x720q80.jpg_.webp",
        "https://img.drz.lazcdn.com/g/kf/Sa018692e634a4b53bbf824a50c311711C.jpg_720x720q80.jpg_.webp"
    ],
    specs: { stock: 16 },
    sizes: ["S","M","L","XL","XXL","3XL","4XL"],
    colors: ["Black","Wine Red","Hooded Army Green","Red","Hooded Gray"]
},
/* --- WOMEN'S FASHION TREND AUTUMN COAT --- */
{
    id: 21,
    title: "Women's Fashion Trend Autumn Coat",
    price: 2600,
    discount: 27,
    description: "Fashion Trend Autumn and Winter Press-pleated Printed Turn-collar Long-sleeved Shirt Two-piece Furry Coat",
    imgs: [
        "https://img.drz.lazcdn.com/g/kf/S2720ef4e73e343ceb6e8ca67cc496a73I.jpg_720x720q80.jpg_.webp",
        "https://img.drz.lazcdn.com/g/kf/Sfa114768608542239d84e66e2b95a7fbJ.jpg_720x720q80.jpg_.webp",
        "https://img.drz.lazcdn.com/g/kf/Sd3e93c328a4343ba9de47c068100a676K.jpg_720x720q80.jpg_.webp",
        "https://img.drz.lazcdn.com/g/kf/S1b4e7376834342189c7f40e937341cb1o.jpg_720x720q80.jpg_.webp",
        "https://img.drz.lazcdn.com/g/kf/Sf217b0f544cd47a2a284486cddeb55658.jpg_720x720q80.jpg_.webp"
    ],
    specs: { stock: 5 },
    sizes: ["S","M","L","XL","XXL","3XL","4XL"],
    colors: ["Ginger","Light Gray","Pink","Navy Blue"]
},
/* --- LADIES CASUAL FROCKS WOMEN'S DRESSES --- */
{
    id: 22,
    title: "Ladies Casual Frocks Women's Dresses",
    price: 980,
    discount: 35,
    description: "Ladies Casual Frocks Women's Dresses",
    imgs: [
        "https://img.drz.lazcdn.com/g/kf/Sc9ff0ce3b65048bdad6ba300e05e34a0b.jpg_720x720q80.jpg_.webp",
        "https://img.drz.lazcdn.com/g/kf/S90397de3a9b444d497f085849e53bc56y.jpg_720x720q80.jpg_.webp"
    ],
    specs: { stock: 26 },
    sizes: ["S","M","L","XL","XXL","3XL","4XL","5XL","6XL"],
    colors: ["Dark Blue"]
},
/* --- KID GIRLS CASUAL FROCKS/GIRLS FASHIONABLE DRESSES --- */
{
    id: 23,
    title: "Kid Girls Casual Frocks/Girls Fashionable Dresses",
    price: 750,
    discount: 25,
    description: "Kid Girls Casual Frocks/Girls Fashionable Dresses<br><ul><li>Kid Girls Casual Frocks/Girls Fashionable Dresses.</li><li>Sleeveless, Knee Length, Babydoll/Smock Dresses</li><li>Plain Green Cotton, O-Neck, Hand/Machine Washable</li><li>Suitable for Pre School (2-5yrs) girls</li><li>Ideal for Casual occasions</li><li>1 Piece dress, perfect addition to your girl's wardrobe</li></ul>",
    imgs: [
        "https://img.drz.lazcdn.com/g/kf/S4fee901359254a8ba04137f21c4cf5b4w.jpg_720x720q80.jpg_.webp",
        "https://img.drz.lazcdn.com/g/kf/S7a570c1382ba486f99099f0c25e60b104.jpg_720x720q80.jpg_.webp",
        "https://img.drz.lazcdn.com/g/kf/Sbd39139561ea44d6810503e94c883d51d.jpg_720x720q80.jpg_.webp"
    ],
    specs: { stock: 17 },
    sizes: ["0-3 Months","3-6 Months","6-12 Months","7-8 Years","8-9 Years","9-10 Years","10-11 Years","11-12 Years 13-14 Years","1-2 Years","6-7 Years","5-6 Years","4-5 Years","3-4 Years","2-3 Years"],
    colors: ["Green","Maroon"]
},
/* --- FASHION WOMAN BLOUSE 2023 MEDIUM LENWOMEN'S KOREAN CASUAL LOOSE FITTING ELEGANT TOP --- */
{
    id: 24,
    title: "Korean Casual Loose Fitting Elegant Top",
    price: 1850,
    discount: 35,
    description: "Fashion Woman Blouse 2023 Medium LenWomen's Korean Casual Loose Fitting Elegant Top",
    imgs: [
        "https://img.drz.lazcdn.com/g/kf/Sfb6aead4b8f340b5ab1b8e53ffe19908x.jpg_720x720q80.jpg_.webp",
        "https://img.drz.lazcdn.com/g/kf/Sb525b12e6b464c43b6d05c994dd622aek.jpg_720x720q80.jpg_.webp",
        "https://img.drz.lazcdn.com/g/kf/Safb9269174ad47f0bb1193ee3777e427K.jpg_720x720q80.jpg_.webp",
        "https://img.drz.lazcdn.com/g/kf/S0e9d70d28e16404080655b0ee79f58c4f.jpg_720x720q80.jpg_.webp",
        "https://img.drz.lazcdn.com/g/kf/S239895d5a09b49519a6007755ba08f4dw.jpg_720x720q80.jpg_.webp",
        "https://img.drz.lazcdn.com/g/kf/Sd160d3108bbc45fcb15fa4911530534bg.jpg_720x720q80.jpg_.webp"
    ],
    specs: { stock: 34 },
    sizes: ["S","M","L","XL","XXL","3XL","4XL","5XL"],
    colors: ["Black","Red","Khaki","Dark Blue","Yellow","Green"]
},
];

