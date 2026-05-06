document.addEventListener("DOMContentLoaded", () => {
    // قائمة الحالات بأسعار واقعية وعالية (سوق الاسترجاع)
    const recoveryCases = [
        { name: "فك تبنيد انتحال (Pretend)", price: 120.00, tag: "ثغرة قانونية", color: "#ff0055" },
        { name: "فك انتهاك سياسة مشدد (Violence)", price: 180.00, tag: "مراسلة دعم", color: "#ffaa00" },
        { name: "استرجاع حساب مخترق (Hacked)", price: 75.00, tag: "استرداد يدوي", color: "#00ccff" },
        { name: "فك تبنيد نهائي (Permanent)", price: 250.00, tag: "ثغرة موظف", color: "#ff0000" },
        { name: "تخطي قفل احترازي (Locked)", price: 45.00, tag: "تخطي رقم", color: "#00ff88" },
        { name: "فك حظر إعلاني (Ads Ban)", price: 110.00, tag: "Business", color: "#aa00ff" }
    ];

    const optionsContainer = document.getElementById('recoveryOptions');
    const selectedText = document.getElementById('selected_recovery_text');
    const priceDisplay = document.getElementById('final_price');
    let currentPrice = 0;

    // بناء الخيارات مع تفاصيل الأسعار
    recoveryCases.forEach(item => {
        const div = document.createElement('div');
        div.className = 'option';
        div.innerHTML = `
            <div class="option-container" style="display: flex; justify-content: space-between; align-items: center; width: 100%;">
                <div>
                    <span class="tech-badge" style="border-color:${item.color}; color:${item.color}">${item.tag}</span>
                    <span class="option-text">${item.name}</span>
                </div>
                <b style="color: #00ffcc;">$${item.price}</b>
            </div>`;
        
        div.onclick = () => {
            selectedText.innerText = item.name;
            selectedText.style.color = "#00ffcc";
            priceDisplay.innerText = `$${item.price.toFixed(2)}`;
            currentPrice = item.price;
            toggleDropdown();
        };
        optionsContainer.appendChild(div);
    });

    // منطق القائمة المنسدلة
    const header = document.getElementById('recoveryHeader');
    function toggleDropdown() {
        optionsContainer.classList.toggle('show');
    }

    header.onclick = (e) => {
        e.stopPropagation();
        toggleDropdown();
    };

    window.onclick = () => optionsContainer.classList.remove('show');

    // تنفيذ الطلب
    document.getElementById('startProcess').onclick = () => {
        const user = document.getElementById('target_user').value.trim();
        const email = document.getElementById('target_email').value.trim();

        if (!user || !email || currentPrice === 0) {
            alert("⚠️ خطأ في البيانات: يرجى إكمال الحقول واختيار نوع الحالة لبدء الحقن البرمجي.");
            return;
        }

        // محاكاة عملية تقنية
        const btn = document.getElementById('startProcess');
        btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> جاري فحص الثغرة...';
        btn.disabled = true;

        setTimeout(() => {
            alert(`❌ رصيدك غير كافي لإتمام العملية.`);
            window.location.reload();
        }, 3000);
    };
});