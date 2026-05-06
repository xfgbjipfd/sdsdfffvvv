document.addEventListener("DOMContentLoaded", () => {
    // 1. استخراج البيانات من الرابط تحديث الواجهة الأساسية[cite: 2]
    const urlParams = new URLSearchParams(window.location.search);
    const serviceName = urlParams.get('name') || 'خدمة رشق';
    const serviceImg = urlParams.get('img') || '';

    document.getElementById('social_title').innerText = serviceName;
    document.getElementById('social_banner').src = serviceImg;
    document.getElementById('platform_name').innerText = serviceName;

    // 2. قاعدة بيانات الخدمات مع إضافة الأيقونات والتاجات لقسم Quality[cite: 2]
    const serviceDatabase = {
        'خدمات انستغرام': {
            quality: [
                { name: 'متابعين', price: 0.15, tag: "أكثر طلباً", icon: "fa-users" },
                { name: 'لايكات', price: 0.003, tag: "FT", icon: "fa-heart" },
                { name: 'تعليقات', price: 0.09, tag: "FT", icon: "fa-comment" },
                { name: 'مشاهدات', price: 0.001, tag: "فوري", icon: "fa-eye" }
            ],
            speed: [
                { name: "سرعة 25K", price: 0.003, tag: "فوري" },
                { name: "سرعة 10K", price: 0.002, tag: "سريع" }, 
                { name: "سرعة 5K", price: 0.001, tag: "بطيئ" }
            ],
            source: [
                { name: "ضمان 60 يوم", price: 0.009, tag: "" },
                { name: "ضمان 90 يوم", price: 0.015, tag: "" },
                { name: "ضمان سنة", price: 0.025, tag: "أكثر طلباً " },
                { name: "مدة الحياة", price: 0.040, tag: "للأبد" }
            ]
        },
        'خدمات تيك توك': {
            quality: [
                { name: 'متابعين', price: 0.15, tag: "أكثر طلباً", icon: "fa-users" },
                { name: 'لايكات', price: 0.003, tag: "FT", icon: "fa-heart" },
                { name: 'تعليقات', price: 0.09, tag: "FT", icon: "fa-comment" },
                { name: 'مشاهدات', price: 0.0001, tag: "فوري", icon: "fa-eye" }
            ],
            speed: [
                { name: "سرعة 25K", price: 0.003, tag: "فوري" },
                { name: "سرعة 10K", price: 0.002, tag: "سريع" }, 
                { name: "سرعة 5K", price: 0.001, tag: "بطيئ" }
            ],
            source: [
                { name: "ضمان 60 يوم", price: 0.009, tag: "" },
                { name: "ضمان 90 يوم", price: 0.015, tag: "" },
                { name: "ضمان سنة", price: 0.025, tag: "أكثر طلباً " },
                { name: "مدة الحياة", price: 0.040, tag: "للأبد" }
            ]
        },
        'خدمات فيسبوك': {
            quality: [
                { name: 'متابعين صفحة', price: 0.15, tag: "أكثر طلباً", icon: "fa-users" },
                { name: 'اعضاء مجموعة', price: 0.19, tag: "أكثر طلباً", icon: "fa-user-friends" },
                { name: 'لايكات', price: 0.003, tag: "FT", icon: "fa-heart" },
                { name: 'تعليقات', price: 0.09, tag: "FT", icon: "fa-comment" },
                { name: 'مشاهدات', price: 0.001, tag: "فوري", icon: "fa-eye" }
            ],
            speed: [
                { name: "سرعة 25K", price: 0.003, tag: "فوري" },
                { name: "سرعة 10K", price: 0.002, tag: "سريع" }, 
                { name: "سرعة 5K", price: 0.001, tag: "بطيئ" }
            ],
            source: [
                { name: "ضمان 60 يوم", price: 0.009, tag: "" },
                { name: "ضمان 90 يوم", price: 0.015, tag: "" },
                { name: "ضمان سنة", price: 0.025, tag: "أكثر طلباً " },
                { name: "مدة الحياة", price: 0.040, tag: "للأبد" }
            ]
        },
        'خدمات يوتيوب': {
            quality: [
                { name: 'مشتركين', price: 0.9, tag: "أكثر طلباً", icon: "fa-users" },
                { name: 'لايكات', price: 0.3, tag: "FT", icon: "fa-heart" },
                { name: 'تعليقات', price: 0.2, tag: "FT", icon: "fa-comment" },
                { name: 'مشاهدات', price: 0.001, tag: "فوري", icon: "fa-eye" }
            ],
            speed: [
                { name: "سرعة 25K", price: 0.003, tag: "فوري" },
                { name: "سرعة 10K", price: 0.002, tag: "سريع" }, 
                { name: "سرعة 5K", price: 0.001, tag: "بطيئ" }
            ],
            source: [
                { name: "ضمان 60 يوم", price: 0.009, tag: "" },
                { name: "ضمان 90 يوم", price: 0.015, tag: "" },
                { name: "ضمان سنة", price: 0.025, tag: "أكثر طلباً " },
                { name: "مدة الحياة", price: 0.040, tag: "للأبد" }
            ]
        },
       'خدمات سناب شات': {
    quality: [
        { name: 'إضافات', price: 1.20, tag: "سريع", icon: "fa-ghost" },
        { name: 'مشاهدات ستوري', price: 0.70, tag: "تفاعل", icon: "fa-camera" },
        { name: 'لايكات على الستوري', price: 0.50, tag: "تفاعل", icon: "fa-heart" },
        { name: 'تعليقات مخصصة', price: 1.30, tag: "نشط", icon: "fa-comment" },
        { name: 'مشاركات للستوري', price: 0.90, tag: "انتشار", icon: "fa-share" },
        { name: 'حفظات على المحتوى', price: 0.80, tag: "ثبات", icon: "fa-bookmark" }
    ],

    speed: [
        { name: "تنفيذ عادي", price: 0.00, tag: "Standard" },
        { name: "تنفيذ سريع", price: 0.50, tag: "Rocket" },
        { name: "تنفيذ فوري", price: 1.20, tag: "Instant" }
    ],

    source: [
                { name: "ضمان 60 يوم", price: 0.009, tag: "" },
                { name: "ضمان 90 يوم", price: 0.015, tag: "" },
                { name: "ضمان سنة", price: 0.025, tag: "أكثر طلباً " },
                { name: "مدة الحياة", price: 0.040, tag: "للأبد" }
            ]
}, 
        'خدمات تيليجرام': {
            quality: [
        { name: 'مشتركين قنوات', price: 0.080, tag: "الأكثر طلبًا", icon: "fa-paper-plane" },
        { name: 'أعضاء مجموعات', price: 0.070, tag: "LOW", icon: "fa-users" },
        { name: 'مشاهدات منشورات', price: 0.010, tag: "تفاعل", icon: "fa-eye" },
        { name: 'تفاعل على المنشورات (لايكات)', price: 0.015, tag: "نشط", icon: "fa-heart" },
        { name: 'تعليقات تيليجرام', price: 0.050, tag: "نشط", icon: "fa-comment" },
        { name: 'تصويتات استطلاع', price: 0.030, tag: "تفاعل", icon: "fa-poll" }
    ],
            speed: [
        { name: "سرعة 25K", price: 0.0020, tag: "فوري" },
        { name: "سرعة 10K", price: 0.0015, tag: "سريع" },
        { name: "سرعة 5K", price: 0.0010, tag: "بطيئ" },
        { name: "تنفيذ فوري VIP", price: 0.0030, tag: "Instant" }
    ],
            source: [
                { name: "ضمان 60 يوم", price: 0.009, tag: "" },
                { name: "ضمان 90 يوم", price: 0.015, tag: "" },
                { name: "ضمان سنة", price: 0.025, tag: "أكثر طلباً " },
                { name: "مدة الحياة", price: 0.040, tag: "للأبد" }
            ]
        }    
    };

    const currentData = serviceDatabase[serviceName] || {
        quality: [{ name: "خدمة عامة", price: 1.00, tag: "", icon: "fa-star" }],
        speed: [{ name: "سرعة قياسية", price: 0.00, tag: "" }],
        source: [{ name: "مصدر عالمي", price: 0.00, tag: "" }]
    };

    // 3. دالة ملء المنسدلات مع دعم الأيقونات والتاجات[cite: 2]
    function populateDropdowns() {
        // الجودة
        const qualityOptions = document.getElementById('qualityOptions');
        qualityOptions.innerHTML = '';
        currentData.quality.forEach(item => {
            const div = document.createElement('div');
            div.className = 'option';
            let tagHTML = item.tag ? `<span class="option-tag">${item.tag}</span>` : '';
            let iconHTML = item.icon ? `<i class="fas ${item.icon}" style="margin-left: 8px;"></i>` : '';
            div.innerHTML = `<div class="option-container">${tagHTML}<span class="option-text">${iconHTML}${item.name} ($${item.price})</span></div>`;
            div.onclick = () => selectQuality(item.name, item.price);
            qualityOptions.appendChild(div);
        });

        // السرعة
        const extraOptions = document.getElementById('extraOptions');
        extraOptions.innerHTML = '';
        currentData.speed.forEach(item => {
            const div = document.createElement('div');
            div.className = 'option';
            let tagHTML = item.tag ? `<span class="option-tag">${item.tag}</span>` : '';
            div.innerHTML = `<div class="option-container">${tagHTML}<span class="option-text">${item.name} (+$${item.price})</span></div>`;
            div.onclick = () => selectExtra(item.name, item.price);
            extraOptions.appendChild(div);
        });

        // الضمان
        const sourceOptions = document.getElementById('sourceOptions');
        sourceOptions.innerHTML = '';
        currentData.source.forEach(item => {
            const div = document.createElement('div');
            div.className = 'option';
            let tagHTML = item.tag ? `<span class="option-tag">${item.tag}</span>` : '';
            div.innerHTML = `<div class="option-container">${tagHTML}<span class="option-text">${item.name} (+$${item.price})</span></div>`;
            div.onclick = () => selectSource(item.name, item.price);
            sourceOptions.appendChild(div);
        });
    }

    populateDropdowns();

    // 4. دالة حساب السعر[cite: 2]
    window.calculateTotal = function() {
        const qty = parseInt(document.getElementById('order_quantity').value) || 0;
        const qPrice = parseFloat(document.getElementById('quality_value').value) || 0;
        const ePrice = parseFloat(document.getElementById('extra_option_value').value) || 0;
        const sPrice = parseFloat(document.getElementById('source_option_value').value) || 0;
        
        const total = (qty / 100) * (qPrice + ePrice + sPrice);
        document.getElementById('order_total').innerText = `$${total.toFixed(2)}`;
    };

    document.getElementById('order_quantity').addEventListener('input', calculateTotal);
});

// متغيرات لتتبع حالة الاختيار
let selectedStates = { quality: false, speed: false, source: false };

// وظائف التحديث[cite: 2]
window.selectQuality = function(name, price) {
    document.getElementById('selected_text').innerText = name;
    document.getElementById('quality_value').value = price;
    selectedStates.quality = true;
    toggleDropdown('qualityOptions', 'qualityArrow');
    calculateTotal();
};

window.selectExtra = function(name, price) {
    document.getElementById('selected_extra_text').innerText = name;
    document.getElementById('extra_option_value').value = price;
    selectedStates.speed = true;
    toggleDropdown('extraOptions', 'extraArrow');
    calculateTotal();
};

window.selectSource = function(name, price) {
    document.getElementById('selected_source_text').innerText = name;
    document.getElementById('source_option_value').value = price;
    selectedStates.source = true;
    toggleDropdown('sourceOptions', 'sourceArrow');
    calculateTotal();
};

// 5. وظيفة تأكيد الطلب مع التحقق الإلزامي[cite: 2]
window.processOrder = function() {
    const qty = document.getElementById('order_quantity').value;
    const link = document.getElementById('target_link').value;

    // التحقق من المنسدلات الثلاثة
    if (!selectedStates.quality || !selectedStates.speed || !selectedStates.source) {
        alert("تنبيه: يجب عليك تحديد جميع الخيارات (نوع الطلب، السرعة، والضمان) للمتابعة.");
        return;
    }

    if (!link) {
        alert("يرجى إدخال رابط الحساب أو المنشور.");
        return;
    }

    if (qty < 100) { 
        alert("أقل كمية مقبولة هي 100."); 
        return; 
    }
    
    alert("رصيدك غير كافٍ لإتمام الطلب في " + document.getElementById('platform_name').innerText + "!");
};