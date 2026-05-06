/* 
   Project: Skypost Store - Core Logic
   Author: OQAB Design System
   Version: 2.1.0 (Professional Edition)
*/

document.addEventListener("DOMContentLoaded", () => {
    
    // --- 1. ميزة منع النسخ وحماية المحتوى[cite: 1] ---
    // منع القائمة اليمنى (Right Click)
    document.addEventListener('contextmenu', event => event.preventDefault());

    // منع اختصارات لوحة المفاتيح للنسخ والفحص (Ctrl+C, Ctrl+V, F12, etc.)
    document.addEventListener('keydown', (e) => {
        if (
            e.ctrlKey && (e.key === 'c' || e.key === 'v' || e.key === 'u' || e.key === 'i') || 
            e.key === 'F12'
        ) {
            e.preventDefault();
            return false;
        }
    });

    // منع تحديد النصوص عبر المتصفحات المختلفة
    document.body.style.userSelect = "none";
    document.body.style.webkitUserSelect = "none";
    document.body.style.msUserSelect = "none";
    document.body.style.mozUserSelect = "none";

    // التأكد من جلب البيانات من الكاش إذا كانت متوفرة[cite: 1]
    if ('caches' in window) {
        caches.match(window.location.href).then(response => {
            if (response) {
                console.log('تم تحميل الصفحة من الذاكرة الفائقة (Cache)');
            }
        });
    }

    // --- 2. تهيئة واجهة تيليجرام (Telegram WebApp)[cite: 1] ---
    const tg = window.Telegram?.WebApp;
    if (tg) {
        tg.ready();
        tg.expand();
        tg.setHeaderColor('#000000');
        tg.setBackgroundColor('#000000');
    }

    // --- 3. نظام توليد رابط الإحالة الديناميكي (ID Link)[cite: 1, 2] ---
    function generateReferralLink() {
        const referralElem = document.getElementById('referralLink');
        if (!referralElem) return;

        // سحب المعرف الحقيقي من بيانات تيليجرام الآمنة
        const user = tg?.initDataUnsafe?.user;
        
        if (user && user.id) {
            const userId = user.id;
            const botUsername = "Skypos_Bot"; 
            const appName = "app"; 
            
            // تشكيل الرابط النهائي الذي يظهر فيه الـ ID للمستخدم
            const finalLink = `https://t.me/${botUsername}/${appName}?startapp=${userId}`;
            referralElem.innerText = finalLink;
        } else {
            // إذا لم تتوفر البيانات فوراً يتم المحاولة مجدداً بعد 500ms
            referralElem.innerText = "جاري استخراج المعرف...";
            setTimeout(generateReferralLink, 500);
        }
    }
    
    // تنفيذ التوليد فور تحميل الصفحة
    generateReferralLink();

    // --- 4. وظيفة النافذة الجانبية (Side Menu Toggle)[cite: 1] ---
    window.toggleMenu = function() {
        const menu = document.getElementById('sideMenu');
        const overlay = document.getElementById('menuOverlay');
        
        if (menu && overlay) {
            if (menu.classList.contains('active')) {
                menu.classList.remove('active');
                overlay.style.display = 'none';
            } else {
                menu.classList.add('active');
                overlay.style.display = 'block';
            }
        }
    };

    // --- 5. إصلاح شريط التنقل عند ظهور لوحة المفاتيح[cite: 1] ---
    const initialHeight = window.innerHeight;
    const bottomNav = document.querySelector('.bottom-nav');

    window.addEventListener('resize', () => {
        if (bottomNav) {
            // إخفاء الشريط إذا نقص الارتفاع بنسبة كبيرة (ظهور الكيبورد)
            if (window.innerHeight < initialHeight * 0.8) {
                bottomNav.style.display = 'none';
            } else {
                bottomNav.style.display = 'flex';
            }
        }
    });

    // --- 6. نظام البحث المتقدم (Advanced Search)[cite: 1] ---
    const mainSearchInput = document.getElementById('mainSearchInput');
    const itemsContainer = document.querySelector('.categories-list-vertical');

    if (mainSearchInput && itemsContainer) {
        mainSearchInput.addEventListener('input', function(e) {
            const term = e.target.value.toLowerCase().trim();
            const cards = itemsContainer.querySelectorAll('.category-row-card');
            let hasResults = false;

            cards.forEach(card => {
                const title = card.querySelector('h3')?.innerText.toLowerCase() || "";
                const desc = card.querySelector('p')?.innerText.toLowerCase() || "";
                
                if (title.includes(term) || desc.includes(term)) {
                    card.style.display = 'flex';
                    hasResults = true;
                } else {
                    card.style.display = 'none';
                }
            });

            // إظهار رسالة "لا توجد نتائج"
            let emptyMsg = document.getElementById('emptySearchMsg');
            if (!hasResults && term !== "") {
                if (!emptyMsg) {
                    emptyMsg = document.createElement('div');
                    emptyMsg.id = 'emptySearchMsg';
                    emptyMsg.style.cssText = 'color: #666; text-align: center; padding: 30px; font-size: 14px;';
                    emptyMsg.innerHTML = '<i class="fas fa-search"></i> لا توجد نتائج مطابقة لبحثك';
                    itemsContainer.appendChild(emptyMsg);
                }
            } else if (emptyMsg) {
                emptyMsg.remove();
            }
        });
    }

    // --- 7. سلايدر الإعلانات التلقائي (Ads System)[cite: 1] ---
    let currentSlide = 0;
    const slides = document.querySelectorAll('.ad-slide');
    const dots = document.querySelectorAll('.dot');
    const wrapper = document.querySelector('.ads-wrapper');

    if (wrapper && slides.length > 0) {
        function showSlide(index) {
            if (index >= slides.length) currentSlide = 0;
            else if (index < 0) currentSlide = slides.length - 1;
            else currentSlide = index;

            const percentage = -(currentSlide * 100); 
            wrapper.style.transform = `translateX(${percentage}%)`;

            dots.forEach((dot, i) => {
                dot.classList.toggle('active', i === currentSlide);
            });
        }

        // التبديل التلقائي كل 4 ثوانٍ
        setInterval(() => {
            showSlide(currentSlide + 1);
        }, 4000);

        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                showSlide(index);
            });
        });
    }

    // --- 8. منطق صفحة التحميل (Loading Logic)[cite: 1] ---
    const progressBar = document.getElementById("progress-bar");
    if (progressBar) {
        let width = 0;
        const interval = setInterval(() => {
            if (width >= 100) {
                clearInterval(interval);
                setTimeout(() => {
                    // الانتقال إلى الصفحة الرئيسية بعد اكتمال التحميل
                    window.location.href = "index.html";
                }, 500);
            } else {
                // زيادة عشوائية لشريط التحميل
                width += Math.random() * 15; 
                if (width > 100) width = 100;
                progressBar.style.width = width + "%";
            }
        }, 150);
    }
});

/**
 * وظائف التنقل والتبويب (Tab Navigation)[cite: 1]
 */
function changeTab(tab) {
    const pages = {
        'home': 'index.html',
        'categories': 'Lists.html',
        'orders': 'orders.html',
        'merchants': 'merchants.html'
    };
    if (pages[tab]) {
        window.location.href = pages[tab];
    }
}

/**
 * فتح واجهة طلب الخدمة أو اللعبة[cite: 1]
 */
function openGameOrder(name, img, key) {
    const params = new URLSearchParams();
    params.append('name', name);
    params.append('img', img);
    params.append('game', key || 'default');
    
    window.location.href = `Games.html?${params.toString()}`;
}