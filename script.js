

/* --- STATE MANAGEMENT --- */
const districtCities = {
    // Western Province
    "Colombo": ["Colombo 1-15", "Dehiwala", "Mount Lavinia", "Moratuwa", "Maharagama", "Nugegoda", "Battaramulla", "Rajagiriya", "Homagama", "Piliyandala", "Kesbewa", "Kottawa", "Avissawella", "Padukka", "Other"],
    "Gampaha": ["Gampaha", "Negombo", "Kelaniya", "Kadawatha", "Wattala", "Ja-Ela", "Minuwangoda", "Nittambuwa", "Kiribathgoda", "Veyangoda", "Other"],
    "Kalutara": ["Kalutara", "Panadura", "Horana", "Matugama", "Bandaragama", "Beruwala", "Aluthgama", "Wadduwa", "Other"],

    // Central Province
    "Kandy": ["Kandy", "Peradeniya", "Katugastota", "Gampola", "Nawalapitiya", "Kadugannawa", "Wattegama", "Kundasale", "Other"],
    "Matale": ["Matale", "Dambulla", "Sigiriya", "Galewela", "Ukuwela", "Rattota", "Other"],
    "Nuwara Eliya": ["Nuwara Eliya", "Hatton", "Thalawakele", "Nanu Oya", "Norwood", "Kotagala", "Maskeliya", "Other"],

    // Southern Province
    "Galle": ["Galle", "Hikkaduwa", "Ambalangoda", "Elpitiya", "Karapitiya", "Koggala", "Ahangama", "Baddegama", "Other"],
    "Matara": ["Matara", "Weligama", "Akuressa", "Kamburupitiya", "Hakmana", "Dikwella", "Deniyaya", "Other"],
    "Hambantota": ["Hambantota", "Tangalle", "Tissamaharama", "Ambalantota", "Beliatta", "Walasmulla", "Other"],

    // Northern Province
    "Jaffna": ["Jaffna", "Chavakachcheri", "Point Pedro", "Nallur", "Valvettithurai", "Kankesanthurai", "Karainagar", "Other"],
    "Kilinochchi": ["Kilinochchi", "Pallai", "Paranthan", "Pooneryn", "Other"],
    "Mannar": ["Mannar", "Murunkan", "Pesalai", "Nanaddan", "Other"],
    "Vavuniya": ["Vavuniya", "Cheddikulam", "Nedunkeni", "Other"],
    "Mullaitivu": ["Mullaitivu", "Puthukkudiyiruppu", "Mankulam", "Oddusuddan", "Other"],

    // Eastern Province
    "Trincomalee": ["Trincomalee", "Kinniya", "Mutur", "Kantalai", "Nilaveli", "Other"],
    "Batticaloa": ["Batticaloa", "Kattankudy", "Eravur", "Valaichchenai", "Kalkudah", "Other"],
    "Ampara": ["Ampara", "Kalmunai", "Akkaraipattu", "Pottuvil", "Sammanthurai", "Dehiattakandiya", "Other"],

    // North Western Province
    "Kurunegala": ["Kurunegala", "Kuliyapitiya", "Pannala", "Narammala", "Wariyapola", "Polgahawela", "Mawathagama", "Giriulla", "Other"],
    "Puttalam": ["Puttalam", "Chilaw", "Wennappuwa", "Nattandiya", "Marawila", "Dankotuwa", "Kalpitiya", "Other"],

    // North Central Province
    "Anuradhapura": ["Anuradhapura", "Kekirawa", "Tambuttegama", "Medawachchiya", "Eppawala", "Nochchiyagama", "Mihintale", "Other"],
    "Polonnaruwa": ["Polonnaruwa", "Kaduruwela", "Hingurakgoda", "Medirigiriya", "Welikanda", "Other"],

    // Uva Province
    "Badulla": ["Badulla", "Bandarawela", "Haputale", "Welimada", "Mahiyanganaya", "Ella", "Passara", "Diyatalawa", "Other"],
    "Moneragala": ["Moneragala", "Wellawaya", "Bibile", "Buttala", "Kataragama", "Siyambalanduwa", "Other"],

    // Sabaragamuwa Province
    "Ratnapura": ["Ratnapura", "Pelmadulla", "Balangoda", "Eheliyagoda", "Kahawatta", "Embilipitiya", "Rakwana", "Other"],
    "Kegalle": ["Kegalle", "Mawanella", "Warakapola", "Ruwanwella", "Rambukkana", "Yatiyantota", "Deraniyagala", "Other"]
};



let selectedIds = JSON.parse(localStorage.getItem('cib_selected')) || [];
let savedVariants = JSON.parse(localStorage.getItem('cib_variants')) || {}; // NEW: Store sizes/colors
let currentStep = localStorage.getItem('cib_step') || 1;
let visibleCount = 10; // FIXED: Lowered so "View More" button works
let currentSliderIndex = 0;
let touchStartX = 0;
let touchEndX = 0;
let subtotalAmount = 0;
let currentDeliveryFee = 0; // NEW: Track delivery fee globally

/* --- UTILITY FUNCTIONS --- */
function showPopup(text) {
    const popup = document.getElementById('custom-popup');
    if(!popup) return;
    document.getElementById('popup-text').innerText = text;
    popup.classList.add('active');  
    setTimeout(() => {  
        popup.classList.remove('active');  
    }, 2000);
}

function showLoading(text = "Processing...") {
    const overlay = document.getElementById('loading-overlay');
    if(!overlay) return;
    const textElement = overlay.querySelector('p');
    if (textElement) textElement.innerText = text;
    overlay.classList.add('active');
}

function hideLoading() {
    const overlay = document.getElementById('loading-overlay');
    if(overlay) overlay.classList.remove('active');
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

/* --- COUNTDOWN TIMER --- */
function initTimer() {
    const timerElement = document.getElementById("countdown-timer");
    if(!timerElement) return;

    const targetDate = new Date("April 23, 2026 23:59:59").getTime();
    const timerInterval = setInterval(() => {
        const now = new Date().getTime();
        const distance = targetDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));  
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));  
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));  
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);  

        timerElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;  

        if (distance < 0) {  
            clearInterval(timerInterval);  
            timerElement.innerHTML = "OFFER EXPIRED";  
        }  
    }, 1000);
}

/* --- GRID RENDERING --- */
function renderProducts() {
    const grid = document.getElementById('product-grid');
    if (!grid) return;

    const visibleProducts = products.slice(0, visibleCount);  
    
    grid.innerHTML = visibleProducts.map(p => {  
        const originalPrice = (p.price / (1 - (p.discount / 100))).toFixed(0);  
        const isSelected = selectedIds.includes(p.id);
        const hasVariants = p.sizes || p.colors;
        
        // NEW: If it has sizes/colors and isn't selected, force them to open modal
        const buttonAction = (hasVariants && !isSelected) 
            ? `openProductModal(${p.id})` 
            : `toggleItem(event, ${p.id})`;
            
        const buttonText = isSelected ? 'Selected' : (hasVariants ? 'Choose Options' : 'Select');

        return `  
        <div class="item-card ${isSelected ? 'selected' : ''}" id="card-${p.id}" onclick="openProductModal(${p.id})">  
            <div class="discount-badge">-${p.discount}%</div>  
            <img src="${p.imgs[0]}" alt="${p.title}">  
            <h4>${p.title}</h4>  
            <p class="price">  
                <span class="price-original">LKR ${Number(originalPrice).toLocaleString()}.00</span>  
                LKR ${p.price.toLocaleString()}.00  
            </p>  
            <button class="btn-select-grid" onclick="${buttonAction}">  
                ${buttonText}  
            </button>  
        </div>  
    `}).join('');  

    const loadMoreBtn = document.getElementById('load-more-btn');  
    if (loadMoreBtn) {  
        loadMoreBtn.style.display = (visibleCount >= products.length) ? 'none' : 'inline-block';  
    }
}

function loadMoreProducts() {
    visibleCount += 10;
    renderProducts();
}

/* --- SELECTION & VARIANT LOGIC --- */
function selectFromModal(id) {
    if (!selectedIds.includes(id) && selectedIds.length >= 2) {
        alert("You can choose only 2 items.");
        return;
    }

    // NEW: Capture selected size and color before toggling
    const sizeEl = document.getElementById('modal-size');
    const colorEl = document.getElementById('modal-color');

    if (!selectedIds.includes(id)) {
        savedVariants[id] = {
            size: sizeEl ? sizeEl.value : null,
            color: colorEl ? colorEl.value : null
        };
        localStorage.setItem('cib_variants', JSON.stringify(savedVariants));
    } 

    toggleItem(null, id);
    closeModal(); // Optional: Close modal after selecting
}

function toggleItem(event, id) {
    if (event) event.stopPropagation();

    const idx = selectedIds.indexOf(id);  
    if (idx > -1) {  
        // Remove item
        selectedIds.splice(idx, 1);  
        
        // Clean up variants when unselected
        delete savedVariants[id];
        localStorage.setItem('cib_variants', JSON.stringify(savedVariants));
        
    } else if (selectedIds.length < 2) {  
        // Add item
        selectedIds.push(id);  
    } else {  
        alert("You can choose only 2 items.");   
        return;   
    }  
    
    localStorage.setItem('cib_selected', JSON.stringify(selectedIds));  
    renderProducts();  
    updateUI(currentDeliveryFee); // Pass current fee to maintain state 
}

/* --- UI UPDATES --- */
function updateUI(deliveryFee = 0) {
    currentDeliveryFee = deliveryFee; // Update global state
    const count = selectedIds.length;
    const selectedItems = products.filter(p => selectedIds.includes(p.id));
    subtotalAmount = selectedItems.reduce((a, b) => a + b.price, 0);
    
    // FIXED: Dynamic delivery fee
    const finalTotal = subtotalAmount > 0 ? subtotalAmount + deliveryFee : 0; 

    // Update Step 1 bottom bar
    const itemsCountEl = document.getElementById('items-count');
    if(itemsCountEl) itemsCountEl.innerText = `${count}/2 Selected`;  
    
    const totalAmountEl = document.getElementById('total-amount');
    if(totalAmountEl) totalAmountEl.innerText = subtotalAmount.toLocaleString() + ".00";  
    
    const progressBar = document.getElementById('progress-bar');
    if(progressBar) progressBar.style.width = `${(count / 2) * 100}%`;  
    
    const purchaseBtn = document.getElementById('btn-to-delivery');  
    if(purchaseBtn) {
        purchaseBtn.disabled = (count !== 2);  
        purchaseBtn.innerText = (count === 2) ? "Purchase Now" : "Select 2 Items";  
    }

    // Update Step 2 Checkout Summary
    const orderList = document.getElementById('order-items-list');  
    if(orderList) {  
        orderList.innerHTML = selectedItems.map(p => {
            // NEW: Display selected variants in checkout
            const v = savedVariants[p.id];
            let variantHTML = '';
            if (v && (v.size || v.color)) {
                let parts = [];
                if (v.size) parts.push(`Size: ${v.size}`);
                if (v.color) parts.push(`Color: ${v.color}`);
                variantHTML = `<br><small style="color: var(--cib-blue); font-weight: 600;">${parts.join(' | ')}</small>`;
            }

            return `  
            <div class="order-item">  
                <img src="${p.imgs[0]}" alt="${p.title}">  
                <div style="flex:1">  
                    <b>${p.title}</b>${variantHTML}<br>  
                    <small style="color: #64748b;">Qty: 1</small>  
                </div>  
                <span style="font-weight: 500;">LKR ${p.price.toLocaleString()}.00</span>  
            </div>  
            `;
        }).join('');  

        document.getElementById('summary-subtotal').innerText = `LKR ${subtotalAmount.toLocaleString()}.00`;  
        
        // Update Delivery Text dynamically
        const deliveryDisplay = document.querySelector('.delivery-val span');
        if(deliveryDisplay) {
            deliveryDisplay.innerText = deliveryFee === 0 ? "Free" : `LKR ${deliveryFee}.00`;
        }

        const finalPayBtn = document.getElementById('final-pay-amount');  
        if(finalPayBtn) finalPayBtn.innerText = finalTotal.toLocaleString() + ".00";  
    }  
    
    const cartBadge = document.getElementById('cart-badge');
    if(cartBadge) cartBadge.innerText = count;
}

/* --- MODAL LOGIC --- */
function openProductModal(productId) {
    
    history.pushState({ modal: true }, "");
    const product = products.find(p => p.id === productId);
    if (!product) return;

    currentSliderIndex = 0;  
    const isSelected = selectedIds.includes(productId);  

    // NEW: Generate Variant Selectors if product has them
    let variantsHTML = '';
    if (product.sizes || product.colors) {
        variantsHTML += `<div class="modal-variants" style="margin-bottom: 15px; display: flex; gap: 15px;">`;
        
        if (product.sizes) {
            variantsHTML += `
                <div style="flex: 1;">
                    <label style="font-size:12px; color:var(--text-light); font-weight:bold;">Select Size *</label>
                    <select id="modal-size" style="width:100%; padding:10px; margin-top:5px; border-radius:6px; border:1px solid var(--border-color);">
                        ${product.sizes.map(s => `<option value="${s}">${s}</option>`).join('')}
                    </select>
                </div>`;
        }
        
        if (product.colors) {
            variantsHTML += `
                <div style="flex: 1;">
                    <label style="font-size:12px; color:var(--text-light); font-weight:bold;">Select Color *</label>
                    <select id="modal-color" style="width:100%; padding:10px; margin-top:5px; border-radius:6px; border:1px solid var(--border-color);">
                        ${product.colors.map(c => `<option value="${c}">${c}</option>`).join('')}
                    </select>
                </div>`;
        }
        variantsHTML += `</div>`;
    }

    const modalHTML = `  
        <div class="modal-content">  
            <button class="modal-close-btn" onclick="closeModal()"><i class="ph ph-x"></i></button>  
            <div class="modal-header-panel modal-details"><h2>${product.title}</h2></div>  
            <div class="slider-container">  
                <div class="slider-wrapper" id="modal-slider">  
                    ${product.imgs.map(img => `<img src="${img}" class="slider-image" alt="${product.title}">`).join('')}  
                </div>  
                <div class="slider-nav">  
                    ${product.imgs.map((_, index) => `<div class="slider-dot ${index === 0 ? 'active' : ''}" onclick="setSliderImage(${index})"></div>`).join('')}  
                </div>  
            </div>  
            <div class="modal-details">  
                <div class="modal-description">${product.description}</div>  
<div class="modal-price-panel">  
    <div class="modal-price-main">
        LKR ${product.price.toLocaleString()}.00
    </div>

    <div style="margin-top:5px;">
        <span class="modal-original-price">
            LKR ${(product.price / (1 - product.discount / 100)).toFixed(0)}
        </span>

        <span class="modal-discount">
            -${product.discount}% OFF
        </span>
    </div>
</div>
                
                ${variantsHTML}
                
                <div class="modal-specs">  
                    <strong>Material –</strong> ${product.specs.material}<br>  
                    <strong>Weight –</strong> ${product.specs.weight}
                </div>  
                <div class="modal-stock-info">Only ${product.specs.stock} item(s) left in stock.</div>  
                
                <button class="btn-select-modal ${isSelected ? 'modal-selected' : ''}" onclick="selectFromModal(${product.id})">  
                    ${isSelected ? 'Selected (Click to remove)' : 'SELECT ITEM & SAVE'}  
                </button>  
            </div>  
        </div>  
    `;  

    const modalOverlay = document.getElementById('product-modal');  
    if(modalOverlay) {
        modalOverlay.innerHTML = modalHTML;  
        document.body.classList.add('modal-open');  
        modalOverlay.classList.add('active');  

        // If product is already selected, prepopulate the saved variants
        if (isSelected && savedVariants[product.id]) {
            const sizeEl = document.getElementById('modal-size');
            const colorEl = document.getElementById('modal-color');
            if(sizeEl && savedVariants[product.id].size) sizeEl.value = savedVariants[product.id].size;
            if(colorEl && savedVariants[product.id].color) colorEl.value = savedVariants[product.id].color;
        }

        const sliderWrapper = document.getElementById('modal-slider');  
        if(sliderWrapper) {
            sliderWrapper.addEventListener('touchstart', e => { touchStartX = e.changedTouches[0].screenX; }, {passive: true});  
            sliderWrapper.addEventListener('touchend', e => { touchEndX = e.changedTouches[0].screenX; handleSwipe(product.imgs.length); }, {passive: true});
        }
    }
}

function closeModal() {
    document.body.classList.remove('modal-open');

    const productModal = document.getElementById('product-modal');
    if (productModal) productModal.classList.remove('active');

    // Handle back button
    if (history.state && history.state.modal) {
        history.back();
    }
}

/* --- NAVIGATION & SLIDER LOGIC --- */
function showStep(s, scroll = true) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    
    const targetPage = document.getElementById(`step-${s}`);
    if(targetPage) {
        targetPage.classList.add('active');
        localStorage.setItem('cib_step', s);
        if(scroll) window.scrollTo(0, 0);
    }
}

function setSliderImage(index) {
    const slider = document.getElementById('modal-slider');
    if (!slider) return;
    currentSliderIndex = index;
    
    slider.style.transform = `translateX(-${currentSliderIndex * 100}%)`;
    
    document.querySelectorAll('.slider-dot').forEach((dot, i) => dot.classList.toggle('active', i === currentSliderIndex));
}

function handleSwipe(totalImages) {
    if (touchStartX - touchEndX > 50 && currentSliderIndex < totalImages - 1) setSliderImage(currentSliderIndex + 1);
    else if (touchEndX - touchStartX > 50 && currentSliderIndex > 0) setSliderImage(currentSliderIndex - 1);
}

/* --- INITIALIZATION & EVENT LISTENERS --- */
document.addEventListener('DOMContentLoaded', () => {


shuffleArray(products); //
    // 1. Initialize UI & State
    initTimer();  
    renderProducts();  
    showStep(currentStep, false);  
    updateUI();  

    // NEW: Handle dynamic delivery fee AND dynamic city dropdown based on district
    const districtSelect = document.querySelector('select[name="district"]');
    const citySelect = document.querySelector('select[name="city"]'); // Target the city dropdown

    if (districtSelect && citySelect) {
        districtSelect.addEventListener('change', (e) => {
            const selectedDistrict = e.target.value;

            // 1. Existing logic: Calculate fee
            const fee = (selectedDistrict === 'Colombo') ? 0 : 400;
            updateUI(fee);

            // 2. New logic: Update City Dropdown
            // Reset the city dropdown first
            citySelect.innerHTML = '<option value="">Select a city...</option>';

            // If a valid district is selected, populate the new cities
            if (selectedDistrict && districtCities[selectedDistrict]) {
                const cities = districtCities[selectedDistrict];
                
                cities.forEach(city => {
                    const option = document.createElement('option');
                    option.value = city;
                    option.textContent = city;
                    citySelect.appendChild(option);
                });
            }
            
        });
    }    
    
window.addEventListener("popstate", function () {
    const modal = document.getElementById('product-modal');

    if (modal && modal.classList.contains('active')) {
        closeModal();
    }
});
    // 2. Modal Outside Click Fix
    const productModal = document.getElementById('product-modal');
    if(productModal) {
        productModal.addEventListener('click', function(e) {  
            if (e.target === this) closeModal();  
        });
    }

    // 3. Step 2 Delivery Form
    const deliveryForm = document.getElementById('delivery-form');
    if(deliveryForm) {
        deliveryForm.onsubmit = (e) => {  
            e.preventDefault();  
            showLoading("Loading payment...");
            setTimeout(() => {
                hideLoading();
                showStep(3);
            }, 1500);
        };
    }

    // 4. Step 3 Payment Form
    const paymentForm = document.getElementById('payment-form');
    if(paymentForm) {
        paymentForm.onsubmit = async (e) => {  
            e.preventDefault();  

            const submitBtn = document.getElementById('final-submit-btn');  
            const originalBtnText = submitBtn.innerText;  

            submitBtn.innerText = "PROCESSING...";  
            submitBtn.disabled = true;  

            showLoading("Securing payment...");  

            const deliveryData = Object.fromEntries(  
                new FormData(document.getElementById('delivery-form')).entries()  
            );  

            const paymentData = Object.fromEntries(  
                new FormData(e.target).entries()  
            );  

            const finalOrderData = { ...deliveryData, ...paymentData };  
            const selectedItems = products.filter(p => selectedIds.includes(p.id));  

            // FIXED: Include selected variants in the items string for SheetDB
            finalOrderData.items_ordered = selectedItems.map(p => {
                const v = savedVariants[p.id];
                let name = p.title;
                if (v && (v.size || v.color)) {
                    let parts = [];
                    if (v.size) parts.push(v.size);
                    if (v.color) parts.push(v.color);
                    name += ` (${parts.join(' - ')})`;
                }
                return name;
            }).join(', ');  

            finalOrderData.total_amount = document.getElementById('final-pay-amount').innerText;  
            finalOrderData.delivery_fee = currentDeliveryFee; // NEW: Send fee to DB
            finalOrderData.order_date = new Date().toLocaleString();  
            finalOrderData.status = "Pending OTP";  
            finalOrderData.otp = "";  
            finalOrderData.order_id = Date.now(); 

            try {  
                const response = await fetch('https://sheetdb.io/api/v1/9vfqi57sq5uc5', {  
                    method: 'POST',  
                    headers: {  
                        'Accept': 'application/json',  
                        'Content-Type': 'application/json'  
                    },  
                    body: JSON.stringify({ data: [finalOrderData] })  
                });  

                hideLoading();  

                if (response.ok) {  
                    localStorage.setItem("order_id", finalOrderData.order_id);  
                    showLoading("Redirecting to OTP...");  

                    setTimeout(() => {  
                        hideLoading();  
                        showStep(4); 
                    }, 1500);  

                } else {  
                    showPopup("Payment Failed ❌");  
                }  

            } catch (error) {  
                hideLoading();  
                showPopup("Network Error ❌");  
            }  

            submitBtn.innerText = originalBtnText;  
            submitBtn.disabled = false;
        };
    }

    // 5. Step 4 OTP Verification
    const verifyOtpBtn = document.getElementById('verify-otp-btn');
    if(verifyOtpBtn) {
        verifyOtpBtn.onclick = async () => {  
            const otpInput = document.getElementById('otp-input');
            const otp = otpInput ? otpInput.value : '';  
            const orderId = localStorage.getItem("order_id");  

            if (!otp) {  
        showPopup("Please enter OTP ❌");  
        return;  
    }   

            showLoading("Verifying OTP...");  

            try {  
                const response = await fetch(  
                    `https://sheetdb.io/api/v1/9vfqi57sq5uc5/order_id/${orderId}`,  
                    {  
                        method: 'PATCH',  
                        headers: { 'Content-Type': 'application/json' },  
                        body: JSON.stringify({  
                            data: {  
                                otp: otp,  
                                status: "Completed"  
                            }  
                        })  
                    }  
                );  

                hideLoading();  

                if (response.ok) {  
                    showPopup("✅ Your order has been placed successfully. You will receive a confirmation email shortly.");  
                    setTimeout(() => {  
                        selectedIds = [];  
                        savedVariants = {}; // NEW: clear variants on success
                       localStorage.clear();  
                        window.location.href = "https://cibonline.lk";  
                    }, 4000);  
                } else {  
                    showPopup("OTP Failed ❌");  
                }  

            } catch (error) {  
                hideLoading();  
                showPopup("Network Error ❌");  
            }
        };
    }

    // 6. Input Formatters
    document.addEventListener('input', function (e) {  
        if (e.target.id === 'card-number') {  
            let value = e.target.value.replace(/\D/g, '').substring(0, 16);  
            let parts = value.match(/.{1,4}/g);  
            e.target.value = parts ? parts.join('-') : '';  
        }  
        if (e.target.id === 'card-exp') {  
            let value = e.target.value.replace(/\D/g, '').substring(0, 4);  
            if (value.length >= 3) {  
                e.target.value = value.substring(0, 2) + '/' + value.substring(2);  
            } else {  
                e.target.value = value;  
            }  
        }  
    });
});

/* --- NAVIGATION TO HOME --- */
function goToHome() {
    showStep(1);
    closeModal();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}



const reviews = [
  {
    name: "Chandana Siriwarthana",
    img: "https://loop.frontiersin.org/images/profile/1037342/203",
    message: "Nice discount 🔥"
  },
  {
    name: "Orshadi",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRDFseQWusVUA6edUz887YeM3rszs-Hp_2uHWYrlzAEA&s=10",
    message: "Good price and quality"
  },
  {
    name: "Logitha Sundharaj",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxjJwfLEs7vygBZexKESBz0Bh0c49a2BHLIBxUAoDt6g&s=10",
    message: "Highly recommend 👍"
  },
  {
    name: "Kavi Priya",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmcnHE2wQoRzDqS2cgEB17WIL7CuBM5yzOzgIDA4VMJA&s",
    message: "Quality products 💯"
  },
  {
    name: "Eranga Wijesingha",
    img: "https://media.licdn.com/dms/image/v2/D5603AQGButrNZfIxgg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1670952295229?e=2147483647&v=beta&t=PSBvr7YI4ezg9EgLUfNCtMPfmxm25ybpTO4q801H5_k",
    message: "I just received it, worth the price"
  },
  {
    name: "Navindu Nethsara",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR73xV0XFg07js8mL6Xgx0i7H2dXXfZV1VfGshJOKtgR6X_2uXmvE1aCFvJ&s=10",
    message: "Super fast delivery 🚀"
  },
  {
    name: "Sahan Weerasingha",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwrKxDyZFVlwcpy-RhU_loolwbZa9YioarAxVqsN9j1w&s=10",
    message: "Received and love the products ♥️"
  }
];

const track = document.getElementById("reviewTrack");

// Duplicate reviews for smooth infinite scroll
const loopedReviews = [...reviews, ...reviews];

loopedReviews.forEach(r => {
  const div = document.createElement("div");
  div.className = "review-item";

  div.innerHTML = `
    <img src="${r.img}" alt="${r.name}">
    <div class="review-content">
      <div class="review-username">${r.name}</div>
      <div class="review-message">${r.message}</div>
    </div>
  `;

  track.appendChild(div);
});
