document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById('mainSearchInput');
    const itemsList = document.getElementById('itemsList');

    // التأكد من وجود خانة البحث وقائمة الخدمات في الصفحة
    if (searchInput && itemsList) {
        
        searchInput.addEventListener('input', function() {
            const query = this.value.toLowerCase().trim();
            
            // الوصول لمصفوفة الخدمات المعرفة في Lists.html
            // ملاحظة: يجب أن تكون allServices متاحة في النطاق (Scope)
            if (typeof allServices !== 'undefined') {
                filterAndRender(query);
            }
        });
    }

    function filterAndRender(query) {
        // الحصول على القسم الحالي من الرابط (cat) للحفاظ على سياق القسم المفتوح
        const urlParams = new URLSearchParams(window.location.search);
        const currentCategory = urlParams.get('cat');

        // تنظيف القائمة الحالية
        itemsList.innerHTML = '';
        let found = false;

        allServices.forEach(service => {
            // التحقق من شرطين: 
            // 1. أن تكون الخدمة في القسم الحالي (أو كافة الخدمات)
            // 2. أن يطابق نص البحث العنوان أو الوصف
            const matchesCategory = !currentCategory || service.cat === currentCategory;
            const matchesSearch = service.title.toLowerCase().includes(query) || 
                                 service.desc.toLowerCase().includes(query);

            if (matchesCategory && matchesSearch) {
                const card = document.createElement('div');
                card.className = 'category-row-card';
                card.style.animation = 'fadeIn 0.3s ease'; // تأثير ظهور احترافي
                
                card.innerHTML = `
                    <div class="category-icon-box">
                        <img src="${service.img}" alt="${service.title}">
                    </div>
                    <div class="category-info">
                        <h3>${service.title}</h3>
                        <p>${service.desc}</p>
                    </div>
                    <div class="item-price-tag">${service.price}</div>
                    <div class="arrow-indicator">
                        <i class="fas fa-chevron-left"></i>
                    </div>
                `;

                // إضافة وظيفة الضغط (كما هي في Lists.html)
                card.onclick = () => {
                    const targetFile = getTargetFile(service.cat);
                    const params = new URLSearchParams();
                    params.append('name', service.title);
                    params.append('img', service.img);
                    params.append('game', service.key || 'default');
                    window.location.href = `${targetFile}?${params.toString()}`;
                };

                itemsList.appendChild(card);
                found = true;
            }
        });

        if (!found) {
            renderEmptyState();
        }
    }

    function getTargetFile(cat) {
        const config = {
            'social': 'Social.html', 'games': 'Games.html', 
            'subs': 'Subscriptions.html', 'numbers': 'Numbers.html',
            'recovery': 'Recovery.html', 'cards': 'Cards.html'
        };
        return config[cat] || 'Games.html';
    }

    function renderEmptyState() {
        itemsList.innerHTML = `
            <div style="text-align: center; padding: 50px 20px; color: #555;">
                <i class="fas fa-search" style="font-size: 30px; margin-bottom: 15px; opacity: 0.3;"></i>
                <p style="font-size: 14px;">لا توجد نتائج تطابق بحثك في هذا القسم</p>
            </div>
        `;
    }
});