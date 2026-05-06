// JavaScript/games.js

document.addEventListener("DOMContentLoaded", () => {
    // 1. استخراج البيانات من الرابط (URL Parameters)
    const spUrlParams = new URLSearchParams(window.location.search);
    const spName = spUrlParams.get('name') || 'شحن الألعاب';
    const spImg = spUrlParams.get('img') || '';
    const spKey = spUrlParams.get('game') || 'default';

    // 2. تحديث واجهة المستخدم بالبيانات الأساسية
    const gameTitleElem = document.getElementById('sp_game_title');
    const gameBannerElem = document.getElementById('sp_game_banner');

    if (gameTitleElem) gameTitleElem.innerText = spName;
    if (gameBannerElem) gameBannerElem.src = spImg;

    // 3. قاعدة بيانات الباقات (يمكنك توسيعها لاحقاً)
    const spData = {
    'pubg': [
        { q: '60 UC', p: 0.99 },
        { q: '325 UC', p: 4.49 },
        { q: '660 UC', p: 8.99 },
        { q: '1800 UC', p: 21.99 },
        { q: '3850 UC', p: 44.99 },
        { q: '8100 UC', p: 86.99 }
    ],

    'yalla': [
        { q: '400 Diamonds (Hot)', p: 0.99 },
        { q: '1800 Diamonds', p: 3.49 },
        { q: '5000 Diamonds', p: 8.99 },
        { q: '16.0K Diamonds (Popular)', p: 24.99 },
        { q: '53.7K Diamonds', p: 89.99 },
        { q: '161.7K Diamonds', p: 249.99 }
    ],

    'ml': [
        { q: '253 + 25 Diamonds', p: 2.29 },
        { q: '505 + 66 Diamonds', p: 4.79 },
        { q: '1010 + 182 Diamonds', p: 9.49 },
        { q: '2525 + 480 Diamonds', p: 22.49 },
        { q: '4008 + 802 Diamonds', p: 36.49 },
        { q: '5010 + 1002 Diamonds', p: 44.49 }
    ],

    'coc': [
        { q: '500 Gems', p: 4.49 },
        { q: '1200 Gems', p: 8.99 },
        { q: '2500 Gems', p: 18.99 },
        { q: '6500 Gems', p: 46.99 }
    ],

    'cr': [
        { q: '500 Gems', p: 4.49 },
        { q: '1200 Gems', p: 8.99 },
        { q: '2500 Gems', p: 18.99 },
        { q: '6500 Gems', p: 46.99 }
    ],

    'ff': [
        { q: '100 Diamonds', p: 0.99 },
        { q: '310 Diamonds', p: 2.79 },
        { q: '520 Diamonds', p: 4.49 },
        { q: '1060 Diamonds', p: 8.99 },
        { q: '2180 Diamonds', p: 18.99 },
        { q: '5600 Diamonds', p: 46.99 }
    ]
};
    const container = document.getElementById('sp_package_container');
    const list = spData[spKey] || spData['default'];
    let selectedPrice = 0;

    // 4. وظيفة اختيار الباقة وتحديث السعر
    window.selectPackage = function(element, price) {
        document.querySelectorAll('.sp-package-card').forEach(c => c.classList.remove('active'));
        element.classList.add('active');
        selectedPrice = price;
        const totalElem = document.getElementById('sp_final_total');
        if (totalElem) totalElem.innerText = `$${price}`;
    };

    // 5. بناء وعرض بطاقات الباقات
    function renderPackages() {
        if (!container) return;
        container.innerHTML = '';
        list.forEach((item, index) => {
            const card = document.createElement('div');
            card.className = 'sp-package-card';
            card.innerHTML = `
                <div class="sp-card-icon"><i class="fas fa-gem"></i></div>
                <div class="sp-card-qty">${item.q}</div>
                <div class="sp-card-price">$${item.p}</div>
            `;
            card.onclick = () => selectPackage(card, item.p);
            container.appendChild(card);
            
            // اختيار أول باقة تلقائياً
            if(index === 0) selectPackage(card, item.p);
        });
    }

    // 6. وظيفة تأكيد الطلب
    window.spHandleOrder = function() {
        const id = document.getElementById('sp_player_id').value;
        if(!id) {
            alert("يرجى إدخال الآيدي");
            return;
        }
alert(`لا يمكن إتمام الطلب، الرصيد الحالي غير كافٍ لإكمال العملية.`);
    };

    renderPackages();
});