// JavaScript/Cards.js

document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const cardName = params.get('name') || 'بطاقة رقمية';
    const cardImg = params.get('img') || '';

    // تحديث واجهة المستخدم الأساسية
    const titleElement = document.getElementById('card_display_name');
    const bannerElement = document.getElementById('card_banner');
    
    if (titleElement) titleElement.innerText = cardName;
    if (bannerElement && cardImg) bannerElement.src = cardImg;

    // قاعدة بيانات شاملة واحترافية
    // استبدل قسم cardsDatabase في ملف Cards.js بهذا الكود:

const cardsDatabase = {
    'بطاقات جوجل بلاي': [
        { name: "$5 Google Play USA", price: 5.50, tag: "فوري" },
        { name: "$10 Google Play USA", price: 10.75, tag: "رائج" },
        { name: "$25 Google Play USA", price: 26.50, tag: "توفير" },
        { name: "$50 Google Play USA", price: 52.00, tag: "هدايا" }
    ],
    'بطاقات آيتونز': [
        { name: "$5 iTunes USA", price: 5.25, tag: "فوري" },
        { name: "$10 iTunes USA", price: 10.50, tag: "رائج" },
        { name: "$50 iTunes USA", price: 51.50, tag: "VIP" }
    ],
    'ريزر جولد': [
        { name: "$5 Razer Gold Global", price: 5.20, tag: "Global" },
        { name: "$10 Razer Gold Global", price: 10.30, tag: "Global" },
        { name: "$50 Razer Gold Global", price: 51.00, tag: "Global" }
    ],
    'بطاقات بلايستيشن': [
        { name: "$10 PSN USA", price: 10.50, tag: "Store" },
        { name: "$20 PSN USA", price: 20.50, tag: "Store" },
        { name: "PS Plus 1 Month", price: 11.00, tag: "Plus" }
    ],
    'بطاقات إكس بوكس': [
        { name: "$10 Xbox USA", price: 10.25, tag: "Store" },
        { name: "Game Pass 1 Month", price: 15.50, tag: "Pass" }
    ],
    'بطاقات ستيم': [
        { name: "$5 Steam Global", price: 5.75, tag: "Wallet" },
        { name: "$10 Steam Global", price: 11.25, tag: "Wallet" }
    ],
    'بطاقات أمازون': [
        { name: "$10 Amazon USA", price: 10.50, tag: "Shop" },
        { name: "$50 Amazon USA", price: 50.50, tag: "Shop" }
    ],
    'بطاقات اسياسيل': [
        { name: "5,000 IQD Asiacell", price: 4.50, tag: "كارت" },
        { name: "10,000 IQD Asiacell", price: 8.75, tag: "رائج" }
    ],
    'بطاقات اثير': [
        { name: "5,000 IQD Zain", price: 4.50, tag: "كارت" },
        { name: "10,000 IQD Zain", price: 8.75, tag: "رائج" }
    ],
    'بطاقات فودافون كاش': [
        { name: "شحن 100 EGP", price: 3.50, tag: "فوري" },
        { name: "شحن 500 EGP", price: 16.00, tag: "VIP" }
    ],
    'بطاقات STC pay': [
        { name: "شحن 50 SAR", price: 14.50, tag: "STC" },
        { name: "شحن 100 SAR", price: 28.50, tag: "STC" }
    ]
};

    const optionsContainer = document.getElementById('cardOptions');
    const currentOptions = cardsDatabase[cardName] || [];

    // دالة بناء الخيارات
    function renderOptions(data) {
        if (!optionsContainer) return;
        optionsContainer.innerHTML = '';
        
        if (data.length === 0) {
            optionsContainer.innerHTML = '<div class="option">لا توجد فئات متاحة حالياً</div>';
            return;
        }

        data.forEach(item => {
            const div = document.createElement('div');
            div.className = 'option';
            div.innerHTML = `
                <div class="option-container">
                    <span class="option-tag">${item.tag}</span>
                    <span class="option-text">${item.name}</span>
                    <span class="option-price">$${item.price.toFixed(2)}</span>
                </div>`;
            
            div.onclick = () => {
                document.getElementById('selected_card_text').innerText = item.name;
                document.getElementById('sp_final_total').innerText = `$${item.price.toFixed(2)}`;
                document.getElementById('card_price_val').value = item.price;
                toggleCardDropdown();
            };
            optionsContainer.appendChild(div);
        });
    }

    renderOptions(currentOptions);

    // منطق القائمة المنسدلة[cite: 1]
    const header = document.getElementById('cardPlanHeader');
    const arrow = document.getElementById('cardArrow');

    function toggleCardDropdown() {
        if (optionsContainer) optionsContainer.classList.toggle('show');
        if (arrow) arrow.classList.toggle('rotate-arrow');
    }

    if (header) {
        header.onclick = (e) => {
            e.stopPropagation();
            toggleCardDropdown();
        };
    }

    window.onclick = (e) => {
        if (!e.target.closest('.custom-dropdown')) {
            if (optionsContainer) optionsContainer.classList.remove('show');
            if (arrow) arrow.classList.remove('rotate-arrow');
        }
    };
});