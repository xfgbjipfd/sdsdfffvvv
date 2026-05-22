// JavaScript/Numbers.js

document.addEventListener("DOMContentLoaded", () => {
    // --- 1. جلب بيانات الخدمة الأساسية ---
    const urlParams = new URLSearchParams(window.location.search);
    const serviceName = urlParams.get('name');
    const serviceImg = urlParams.get('img');

    if (serviceName) {
        document.getElementById('number_platform').innerText = serviceName;
        document.getElementById('number_title').innerText = "تفعيل " + serviceName;
    }
    if (serviceImg) {
        document.getElementById('number_banner').src = serviceImg;
    }

    // --- 2. البيانات (التطبيقات، الخطط، والكميات) ---
    const database = {
        apps: [
            { name: "واتساب", price: 0 },
            { name: "تيليجرام", price: 0 },
            { name: "فيسبوك", price: 0 },
            { name: "إنستغرام", price: 0 },
            { name: "جوجل", price: 0 },
            { name: "تيك توك", price: 0 },
            { name: "واتساب أعمال", price: 0 },
            { name: "رقم عالمي (جميع المواقع)", price: 0 }
        ], 
        plans: [
            { 
        name: "كود لمرة واحدة (OTP)", 
        desc: "يُستخدم مرة واحدة فقط", 
        multiplier: 0.50, 
        tag: "$0.50" 
    },
    { 
        name: "أكواد غير محدودة", 
        desc: "استلام أكواد بشكل دائم لنفس الرقم", 
        multiplier: 1.99, 
        tag: "$1.99" 
    }
        ],
        // تحديث الكميات مع إضافة التاج الخاص بالخصم
        quantities: [
            { num: 1, tag: "السعر الأساسي" },
            { num: 3, tag: "خصم 5%" },
            { num: 5, tag: "خصم 5%" },
            { num: 7, tag: "خصم 5%" },
            { num: 10, tag: "خصم 5%" }
        ]
    };

    const appContainer = document.getElementById('countryOptions'); 
    const planContainer = document.getElementById('serviceOptions');
    const quantityContainer = document.getElementById('quantityOptions'); 

    document.getElementById('selected_country_text').innerText = "اختر التطبيق";
    document.getElementById('selected_service_text').innerText = "اختر نوع الطلب";
    document.getElementById('selected_quantity_text').innerText = "1"; 

    // تعبئة التطبيقات
    database.apps.forEach(item => {
        const div = document.createElement('div');
        div.className = 'option'; 
        div.innerHTML = `
            <div class="option-container">
                <span class="option-text">${item.name}</span>
            </div>`;
        div.onclick = () => {
            selectApp(item.name, item.price);
            closeAllDropdowns();
        };
        appContainer.appendChild(div);
    });

    // تعبئة خطط الشراء
    database.plans.forEach(item => {
        const div = document.createElement('div');
        div.className = 'option';
        div.innerHTML = `
            <div class="option-container">
                <span class="option-tag">${item.tag}</span>
                <span class="option-text">${item.name}</span>
            </div>`;
        div.onclick = () => {
            selectPlan(item.name, item.multiplier);
            closeAllDropdowns();
        };
        planContainer.appendChild(div);
    });

    // تعبئة خيارات الكمية مع التاجات الجديدة
    database.quantities.forEach(item => {
        const div = document.createElement('div');
        div.className = 'option';
        div.innerHTML = `
            <div class="option-container">
                <span class="option-tag">${item.tag}</span>
                <span class="option-text">${item.num}</span>
            </div>`;
        div.onclick = () => {
            selectQuantity(item.num);
            closeAllDropdowns();
        };
        quantityContainer.appendChild(div);
    });

    // --- 3. وظائف القوائم المنسدلة ---
    const closeAllDropdowns = () => {
        document.querySelectorAll('.dropdown-options').forEach(el => el.classList.remove('show'));
        document.querySelectorAll('.fas.fa-chevron-down').forEach(el => el.classList.remove('rotate-arrow'));
    };

    const toggleDropdown = (optionsId, arrowId) => {
        const options = document.getElementById(optionsId);
        const arrow = document.getElementById(arrowId);
        
        document.querySelectorAll('.dropdown-options').forEach(el => {
            if (el.id !== optionsId) el.classList.remove('show');
        });
        
        options.classList.toggle('show');
        if (arrow) arrow.classList.toggle('rotate-arrow');
    };

    document.getElementById('countryHeader').onclick = (e) => {
        e.stopPropagation();
        toggleDropdown('countryOptions', 'countryArrow');
    };

    document.getElementById('serviceHeader').onclick = (e) => {
        e.stopPropagation();
        toggleDropdown('serviceOptions', 'serviceArrow');
    };

    document.getElementById('quantityHeader').onclick = (e) => {
        e.stopPropagation();
        toggleDropdown('quantityOptions', 'quantityArrow');
    };

    window.onclick = (event) => {
        if (!event.target.closest('.custom-dropdown')) {
            closeAllDropdowns();
        }
    };
});

// --- 4. منطق الحساب والطلب المطور ---
let state = { 
    appBasePrice: 0, 
    planMultiplier: 0, 
    quantity: 1 
};

function selectApp(name, price) {
    document.getElementById('selected_country_text').innerText = name;
    document.getElementById('selected_country').value = name;
    state.appBasePrice = price;
    calculateTotal();
}

function selectPlan(name, mult) {
    document.getElementById('selected_service_text').innerText = name;
    document.getElementById('selected_service').value = name;
    state.planMultiplier = mult; 
    calculateTotal();
}

function selectQuantity(num) {
    document.getElementById('selected_quantity_text').innerText = num;
    document.getElementById('selected_quantity').value = num;
    state.quantity = num;
    calculateTotal();
}

function calculateTotal() {
    // الحساب الأساسي: (سعر الخطة × الكمية)
    let baseTotal = state.planMultiplier * state.quantity;
    
    // تطبيق خصم 5% إذا كانت الكمية أكبر من 1
    if (state.quantity > 1) {
        baseTotal = baseTotal * 0.95;
    }

    const total = baseTotal.toFixed(2);
    document.getElementById('sp_final_total').innerText = `$${total}`;
    document.getElementById('price_value').value = total;
}

document.getElementById('orderBtn').onclick = () => {
    const total = document.getElementById('price_value').value;
    const app = document.getElementById('selected_country').value;
    const plan = document.getElementById('selected_service').value;
    const qty = document.getElementById('selected_quantity').value; 
    
    if(!app || !plan) return alert("يرجى اختيار التطبيق ونوع الطلب");
    
    alert("رصيدك غير كافي");
};