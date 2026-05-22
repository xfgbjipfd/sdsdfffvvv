/**
 * Skypost - Subscriptions Logic V2
 * نظام التوثيق والاشتراكات الذكي
 */

document.addEventListener("DOMContentLoaded", () => {
    // 1. استقبال البيانات من الرابط (URL) لضمان الربط مع الصفحة الرئيسية
    const params = new URLSearchParams(window.location.search);
    const sName = params.get('name') || 'اشتراكات وتوثيق';
    const sImg = params.get('img') || '';

    // تحديث العناصر المرئية في الصفحة
    const serviceTitle = document.getElementById('service_display_name');
    const pageTitle = document.getElementById('subs_title');
    const bannerImg = document.getElementById('subs_banner');
    const inputField = document.getElementById('target_account');

    if (serviceTitle) serviceTitle.innerText = sName;
    if (pageTitle) pageTitle.innerText = sName;
    if (bannerImg && sImg) bannerImg.src = sImg;

    // 2. تخصيص حقل الإدخال بناءً على نوع الخدمة (بريد، يوزر، أو كود)
    if (sName.includes("نتفلكس") || sName.includes("يوتيوب") || sName.includes("شاهد") || sName.includes("أمازون") || sName.includes("OSN")) {
        inputField.placeholder = "أدخل البريد الإلكتروني لتفعيل الاشتراك...";
    } else if (sName.includes("سبوتيفاي")) {
        inputField.placeholder = "أدخل بريد الحساب أو رابط البروفايل...";
    } else {
        inputField.placeholder = "أدخل اليوزرنيم (مثل: @username)...";
    }

    // 3. قاعدة البيانات الموسعة للاشتراكات الجديدة
    const subsDatabase = {
        'نتفلكس': [
            { name: "بروفايل مشترك (شهر)", price: 5.99, tag: "أكثر مبيعاً" },
            { name: "حساب كامل خاص (شهر)", price: 15.99, tag: "VIP" }
        ],
        'سبوتيفاي بريميوم': [
            { name: "اشتراك فردي (شهر)", price: 3.99, tag: "خاص" },
            { name: "اشتراك عائلي (شهر)", price: 7.99, tag: "توفير" }
        ],
        'يوتيوب بريميوم': [
            { name: "اشتراك فردي (شهر)", price: 4.99, tag: "بدون إعلانات" },
            { name: "اشتراك سنة كاملة", price: 45.00, tag: "توفير سنوي" }
        ],
        'شاهد VIP': [
            { name: "اشتراك شاهد VIP (شهر)", price: 4.99, tag: "مسلسلات" },
            { name: "شاهد VIP + رياضة (شهر)", price: 8.99, tag: "للمشجعين" }
        ],
        'OSN+': [
            { name: "اشتراك شهري قياسي", price: 5.99, tag: "أفلام HBO" }
        ],
        'أمازون برايم فيديو': [
            { name: "اشتراك شهري", price: 4.99, tag: "Prime" }
        ],
        'تليجرام بريميوم': [
            { name: "اشتراك شهر واحد", price: 3.99, tag: "عادي" },
            { name: "اشتراك 3 أشهر", price: 10.50, tag: "توفير" },
            { name: "اشتراك سنة كاملة", price: 35.99, tag: "أفضل قيمة" }
        ],
        'توثيق انستغرام': [
            { name: "توثيق Meta Verified (شهر)", price: 14.99, tag: "رسمي" }
        ],
        'عملات تيك توك': [
            { name: "70 عملة", price: 1.20, tag: "رخيص" },
            { name: "350 عملة", price: 5.50, tag: "شائع" },
            { name: "700 عملة", price: 10.99, tag: "VIP" }
        ]
    };

    // جلب الباقات الخاصة بالخدمة الحالية أو عرض خيار افتراضي
    const currentPlans = subsDatabase[sName] || [{ name: "طلب مخصص", price: 5.00, tag: "حسب الاتفاق" }];
    const planOptionsContainer = document.getElementById('planOptions');

    // 4. بناء قائمة الخيارات ديناميكياً
    planOptionsContainer.innerHTML = ''; // تنظيف القائمة قبل البدء
    currentPlans.forEach(plan => {
        const div = document.createElement('div');
        div.className = 'option';
        div.innerHTML = `
            <div class="option-container">
                <span class="option-tag">${plan.tag}</span>
                <span class="option-text">${plan.name} ($${plan.price})</span>
            </div>`;
        
        div.onclick = () => {
            document.getElementById('selected_plan_text').innerText = plan.name;
            document.getElementById('sp_final_total').innerText = `$${plan.price}`;
            document.getElementById('plan_price').value = plan.price;
            toggleDropdown(); // إغلاق القائمة بعد الاختيار
        };
        planOptionsContainer.appendChild(div);
    });

    // 5. وظائف التحكم في المنسدل (Dropdown)
    const planHeader = document.getElementById('planHeader');
    const planArrow = document.getElementById('planArrow');

    function toggleDropdown() {
        planOptionsContainer.classList.toggle('show');
        if (planArrow) planArrow.classList.toggle('rotate-arrow');
    }

    if (planHeader) {
        planHeader.onclick = (e) => {
            e.stopPropagation();
            toggleDropdown();
        };
    }

    // إغلاق المنسدل عند النقر في أي مكان خارج القائمة
    window.onclick = (e) => {
        if (!e.target.closest('.custom-dropdown')) {
            planOptionsContainer.classList.remove('show');
            if (planArrow) planArrow.classList.remove('rotate-arrow');
        }
    };

    // 6. معالجة الطلب النهائي (ارسال البيانات)
    const submitBtn = document.getElementById('submitOrder');
    if (submitBtn) {
        submitBtn.onclick = () => {
            const userInput = inputField.value.trim();
            const price = document.getElementById('plan_price').value;
            const planName = document.getElementById('selected_plan_text').innerText;

            // التحقق من المدخلات
            if (!userInput) {
                alert("يرجى ملء بيانات الحساب (بريد أو يوزرنيم) للمتابعة.");
                return;
            }
            if (planName === "اختر الباقة") {
                alert("يرجى اختيار نوع الباقة المطلوبة.");
                return;
            }

            // هنا يمكنك ربط الطلب مع الـ API الخاص بـ Telegram أو Bot
            console.log("Order Data:", { service: sName, plan: planName, target: userInput, total: price });
            
            alert("رصيدك غير كافي");
        };
    }
});