// 1. قسم التاجات المعتمد[cite: 1]
const availableTags = {
    1: { icon: "fa-fire", text: "النخبة", style: "background: rgba(255, 0, 0, 0.1); color: #ff0000; border: 1px solid rgba(255, 0, 0, 0.3);" },
    
    2: { icon: "fa-gem", text: "مؤثر", style: "background: rgba(0, 191, 255, 0.1); color: #00bfff; border: 1px solid rgba(0, 191, 255, 0.2);" },
    
    3: { icon: "fa-rocket", text: "VIP", style: "background: rgba(255, 215, 0, 0.1); color: #FFD700; border: 1px solid rgba(255, 215, 0, 0.2);" },
    
    4: { icon: "fa-bolt", text: "مساهم", style: "background: rgba(40, 167, 69, 0.1); color: #28a745; border: 1px solid rgba(40, 167, 69, 0.2);" },
    
    5: { icon: "fa-star", text: "موثوق", style: "background: rgba(138, 43, 226, 0.1); color: #8A2BE2; border: 1px solid rgba(138, 43, 226, 0.2);" },
    
    6: { icon: "fa-money-bill-wave", text: "مميز", style: "background: rgba(30, 144, 255, 0.1); color: #1E90FF; border: 1px solid rgba(30, 144, 255, 0.2);" },
    
    7: { 
    icon: "fa-shopping-cart", 
    text: "متجر", 
    style: "background: rgba(0, 123, 255, 0.1); color: #007bff; border: 1px solid rgba(0, 123, 255, 0.2);" 
},

    8: { icon: "fa-crown", text: "منصة", style: "background: rgba(255, 165, 0, 0.1); color: #FFA500; border: 1px solid rgba(255, 165, 0, 0.2);" },
    
    9: { 
    icon: "fa-briefcase", 
    text: "تاجر", 
    style: "background: rgba(0, 128, 128, 0.1); color: #008080; border: 1px solid rgba(0, 128, 128, 0.2);" 
},

    
    10: { 
    icon: "fa-star", 
    text: "نجم", 
    style: "background: rgba(255, 215, 0, 0.1); color: #FFD700; border: 1px solid rgba(255, 215, 0, 0.2);" 
},

    
    11: { 
    icon: "fa-medal", 
    text: "محترف", 
    style: "background: rgba(0, 191, 255, 0.1); color: #00BFFF; border: 1px solid rgba(0, 191, 255, 0.2);" 
},


    
    12: { icon: "fa-users", text: "دعوات", style: "background: rgba(255, 193, 7, 0.1); color: #ffc107; border: 1px solid rgba(255, 193, 7, 0.2);" },

    
    13: { 
    icon: "fa-fire", 
    text: "خبير", 
    style: "background: rgba(220, 20, 60, 0.1); color: #DC143C; border: 1px solid rgba(220, 20, 60, 0.2);" 
}
};

// 2. البيانات المرجعية الأساسية[cite: 1]
const merchantsData = {
    "most-ordered": [
    
    
        { name: "Rander's Store", img: "https://img.magnific.com/premium-vector/x-logo-design-template-creative-x-icon-initials-based-letters-vector_487414-2864.jpg", rank: 1, verified: true, tags: [1, 2, 3,4,5,8], country: "SA" },
         

{ name: "TALABATI", img: "https://i.ibb.co/fdn8y5Xt/IMG-20260504-200224-155.jpg", rank: 2, verified: true, tags: [1,5,7,6,3,8], country: "IQ" },
        
      
        
{ name: "DamKom", img: "https://i.ibb.co/nqj6HCP0/IMG-20260504-201322-398.jpg", rank: 3, verified: true, tags: [1,5,7,6,3,8], country: "IQ" },


{ name: "Sajad", img: "https://i.ibb.co/hRxHxt7j/IMG-20260504-201602-039.jpg", rank: 4, tags: [9,6,13], country: "EG" },

{ name: "Omar Khalid", img: "https://i.ibb.co/jsZSg5W/ac2f3f7d8fa68d6c04f79b8352180302.jpg", rank: 5, tags: [9,6,13], country: "EG" },

{ name: "Ali Yasser", img: "https://i.ibb.co/0jpx70wx/20b994bf6c29b5c3f8ca4fa8dadfd2f2.jpg", rank: 6, tags: [9,6,13], country: "IQ" },

{ name: "عبد الرحمن", img: "https://i.ibb.co/d8FDGNL/77f6e7b3a0c6a742cb4774c98a001ec6.jpg", rank: 7, tags: [9,6,10], country: "BH" },

{ name: "Al Joyboy", img: "https://i.ibb.co/bjT1Lw0X/IMG-20260504-205148-806.jpg", rank: 8, tags: [9,6,13], country: "OM" },

{ name: "YOUSEF", img: "https://i.ibb.co/QhgT6pF/IMG-20260504-205327-833.jpg", rank: 9, tags: [9,6,13], country: "JO" },

{ name: "Hassan Kareem", img: "https://i.ibb.co/tpYN4nBG/IMG-20260504-205409-564.jpg", rank: 10, tags: [9,6,13], country: "IQ" },

{ name: "Dante", img: "https://i.ibb.co/3mN1hNxb/IMG-20260504-205455-037.jpg", rank: 11, tags: [9,6,13], country: "SY" },

{ name: "Neymar", img: "https://i.ibb.co/rKjXnxVh/IMG-20260504-205632-135.jpg", rank: 12, tags: [9,6,13], country: "YE" },

{ name: "AL-Patchi", img: "https://i.ibb.co/nN4s4gMZ/0c2ab7664490c6dd18b5dcb56c982d85.jpg", rank: 13, tags: [9,6,13], country: "TN" },

{ name: "Kazim", img: "https://i.ibb.co/M3C3x2J/IMG-20260504-210034-594.jpg", rank: 14, tags: [9,6,13], country: "IQ" },

{ name: "Ahmed", img: "https://i.ibb.co/PvFsKMpz/IMG-20260504-210306-304.jpg", rank: 15, tags: [9,6,13], country: "BH" },

{ name: "سعدون", img: "https://i.ibb.co/HDLqnvv5/IMG-20260504-210357-279.jpg", rank: 16, tags: [9,6,13], country: "EG" },

{ name: "Lucas Morgan", img: "https://i.ibb.co/xqH8xwsT/f827d393751f6d2541c067979c94065f.jpg", rank: 17, tags: [9,6,13], country: "LY" },

{ name: "باتريك", img: "https://i.ibb.co/Vp9HqbVt/9e0e56ab06ffbb16b26b078aaecf4920.jpg", rank: 18, tags: [9,6,13], country: "DZ" },

{ name: "erl. Stone", img: "https://i.ibb.co/ynYPt2Km/b5e681d0c468ce78597b7ee5b2357964.jpg", rank: 19, tags: [9,6,13], country: "SY" },

{ name: "Omar Saleh", img: "https://i.ibb.co/JW9BKhLw/024530b6cd740f0657cabe6097b52fda.jpg", rank: 20, tags: [9,6,13], country: "SA" },

{ name: "Nasseri Hasson", img: "https://i.ibb.co/GmLXgzQ/80ec21b108aa94af71f39151555659f1.jpg", rank: 21, tags: [9,6,13], country: "SY" },

{ name: "علي الكعبي", img: "https://i.ibb.co/vx3Lmmsd/e16e20eb183c9fefeace10ff31b7462f.jpg", rank: 22, tags: [9,6,13], country: "KW" },

{ name: "عبدالله الشمري", img: "https://i.ibb.co/JWPF4VhF/f3695c2eef9bcd066e9020b7e04d5a0b.jpg", rank: 23, tags: [9,6,13], country: "SA" },

{ name: "العتيبي", img: "https://i.ibb.co/2YtM3dtD/10b81f7e25d540d616a316e57004c4fa.jpg", rank: 24, tags: [9,6,13], country: "AE" },

{ name: "Hamdan", img: "https://i.ibb.co/SXkT8gWj/7379e86bf066538e50092a84d4fdecc4.jpg", rank: 25, tags: [9,6,13], country: "EG" },

{ name: "Yasmine Adel", img: "https://i.ibb.co/0kbT3QV/d114c9f69a918ed2c36b693de41da7a6.jpg", rank: 26, tags: [9,6,13], country: "MA" },

{ name: "Ethan Parker", img: "https://i.ibb.co/xSk0LnYN/40d9b96c0f2d3a33fdc6c1d8133a04b5.jpg", rank: 27, tags: [9,6,13], country: "LY" },

{ name: "ايساكي", img: "https://i.ibb.co/d0qHBjB5/4d5c93339d1490c4e62d566a49e0dee2.jpg", rank: 28, tags: [9,6,13], country: "EG" },

{ name: "S", img: "https://i.ibb.co/HfVK6y4d/26b3003151479d5853d3b824315b0a37.jpg", rank: 29, tags: [9,6,13], country: "SY" },

{ name: "ادم-Adam", img: "https://i.ibb.co/KcfNdLqR/b478e4ba4285169ccf55122fd6b6d2fe.jpg", rank: 30, tags: [9,6,13], country: "YE" },

{ name: "Amir Zayed", img: "https://i.ibb.co/n8bWmYns/3bec1bff58f5e5bd30e1dff7ed68bf11.jpg", rank: 31, tags: [9,6,13], country: "AE" },

{ name: "Angel", img: "https://i.ibb.co/PzQ1jVR5/945543b393e686937b230b50e620fd96.jpg", rank: 32, tags: [9,6,13], country: "AE" },

{ name: "Nora Ibrahim", img: "https://i.ibb.co/WwZdhHr/bd7a797e97f0ec75b5cd9ced752e773b.jpg", rank: 33, tags: [9,6,13], country: "IQ" },

{ name: "Dark", img: "https://i.ibb.co/zjfhBpJ/b372b00c2de7592e4636ba5cdb5250bc.jpg", rank: 34, tags: [11,9,12], country: "IQ" },

{ name: "Sophie Taylor", img: "https://i.ibb.co/HvX1vw8/36c5d67ff56d0506fc971feeb1afe23e.jpg", rank: 35, tags: [9,6,13], country: "KW" },

{ name: "Ryan X", img: "https://i.ibb.co/fzphnyRj/cb6364a7fbaa8a545485580a98aaa9f6.jpg", rank: 36, tags: [9,6,13], country: "SA" },

{ name: "عمار", img: "https://i.ibb.co/DgbXcKsP/33385b82a483bf37e29270ab78c63078.jpg", rank: 37, tags: [9,6,13], country: "EG" },

{ name: "Salem", img: "https://i.ibb.co/xKNrhnYR/8a5fb095f8b0dc20cca32dcf6be17bfa.jpg", rank: 38, tags: [9,6,13], country: "SA" },

{ name: "مصطفى الكناني", img: "https://i.ibb.co/b5tsxRdT/c31b53bb769ab72dce428c33108dd73a.jpg", rank: 39, tags: [9,6,13], country: "IQ" },

{ name: "Marco Bianchi", img: "https://i.ibb.co/whFv3RR5/3534807a08d9176d1b938687747d70dd.jpg", rank: 40, tags: [9,6,13], country: "EG" },


        
        // ... يمكنك إضافة المزيد من التجار هنا
    ]
};

let externalStats = {};

// دالة لتحويل القيم النصية إلى أرقام قابلة للمقارنة
function parseValue(val) {
    if (!val) return 0;
    return parseFloat(val.toString().replace(/[^0-9.]/g, '')) || 0;
}

// دالة اختصار الأرقام (1000 -> 1K)
function formatNumber(num) {
    let cleanNum = parseValue(num);
    if (cleanNum >= 1000000) return (cleanNum / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
    if (cleanNum >= 1000) return (cleanNum / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
    return cleanNum.toString();
}

// 3. دالة معالجة ملف stats.txt[cite: 1]
async function loadStatsFromFile() {
    try {
        const response = await fetch('JavaScript/stats.txt');
        const text = await response.text();
        const blocks = text.match(/\[([\s\S]*?)\]/g);
        
        if (blocks) {
            blocks.forEach(block => {
                const values = block.match(/=\s*([\d,]+\$?)/g);
                if (values && values.length >= 4) {
                    const rank = values[0].replace('=', '').trim();
                    const orders = values[1].replace('=', '').trim();
                    const spent = values[2].replace('=', '').trim();
                    const referrals = values[3].replace('=', '').trim();

                    const categories = ["most-ordered", "most-spent", "most-referrals"];
                    categories.forEach(cat => {
                        if (!externalStats[cat]) externalStats[cat] = {};
                        externalStats[cat][rank] = { orders, spent, referrals };
                    });
                }
            });
        }
    } catch (error) {
        console.error("خطأ في جلب ملف stats.txt:", error);
    }
}

function getCountryFlag(countryCode) {
    if (!countryCode) return '';
    return countryCode.toUpperCase().replace(/./g, char => 
        String.fromCodePoint(char.charCodeAt(0) + 127397)
    );
}

// 4. دالة العرض والترتيب والتبديل[cite: 1]
function switchCategory(catKey, btnElement) {
    if (btnElement) {
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        btnElement.classList.add('active');
    }

    const listContainer = document.getElementById('merchantsList');
    if (!listContainer) return;
    
    listContainer.innerHTML = ''; 

    // 1. جلب البيانات الأساسية
    let displayData = [...merchantsData["most-ordered"]];

    // 2. ترتيب البيانات بناءً على الفئة المختارة [جديد]
    displayData.sort((a, b) => {
        const statsA = externalStats[catKey]?.[a.rank] || { orders: "0", spent: "0", referrals: "0" };
        const statsB = externalStats[catKey]?.[b.rank] || { orders: "0", spent: "0", referrals: "0" };

        let valA, valB;
        if (catKey === "most-ordered") { valA = parseValue(statsA.orders); valB = parseValue(statsB.orders); }
        else if (catKey === "most-spent") { valA = parseValue(statsA.spent); valB = parseValue(statsB.spent); }
        else { valA = parseValue(statsA.referrals); valB = parseValue(statsB.referrals); }

        return valB - valA; // ترتيب تنازلي
    });

    // 3. تحديد أقصى حد 100 مستخدم
    const topData = displayData.slice(0, 10);

    topData.forEach((user, index) => {
        const row = document.createElement('div');
        row.className = 'merchant-row-item';
        
        const verifyBadge = user.verified ? '<i class="fas fa-check-circle verify-badge" style="color: #007bff; margin-right: 5px;"></i>' : '';
        const stats = externalStats[catKey]?.[user.rank] || { orders: "0", spent: "0$", referrals: "0" };

        let statsLabel = "";
        let statsValue = "";

        if(catKey === "most-ordered") { 
            statsLabel = "طلبات"; 
            statsValue = formatNumber(stats.orders); 
        } else if(catKey === "most-spent") { 
            statsLabel = "إنفاق"; 
            statsValue = formatNumber(stats.spent) + "$"; 
        } else { 
            statsLabel = "إحالات"; 
            statsValue = formatNumber(stats.referrals); 
        }

        let tagsHtml = '';
        if (user.tags && user.tags.length > 0) {
            tagsHtml = `<div class="merchant-tags" style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 4px; margin-top: 8px;">
                ${user.tags.map(tagId => {
                    const tag = availableTags[tagId];
                    return tag ? `
                    <span class="m-tag" style="padding: 2px 5px; border-radius: 8px; font-size: 5px; font-weight: bold; display: flex; align-items: center; justify-content: center; gap: 2px; ${tag.style}">
                        <i class="fas ${tag.icon}"></i> ${tag.text}
                    </span>` : '';
                }).join('')}
            </div>`;
        }

        const flagHtml = user.country ? `<span class="country-flag" style="font-size: 14px; margin-top: 2px; line-height: 1;">${getCountryFlag(user.country)}</span>` : '';

        row.innerHTML = `
            <div class="merchant-avatar-wrapper" style="display: flex; align-items: center;">
                <img src="${user.img || 'https://via.placeholder.com/150'}" alt="${user.name}" style="border-radius: 50%; width: 50px; height: 50px; object-fit: cover;">
            </div>
            <div class="merchant-main-info" style="flex-grow: 1; margin-right: 15px; display: flex; flex-direction: column; justify-content: center;">
                <h3 style="margin: 0; font-size: 16px; display: flex; align-items: center;">${user.name} ${verifyBadge}</h3>
                ${tagsHtml}
            </div>
            <div class="merchant-stats" style="text-align: center; margin-left: 10px; padding: 0 10px; border-left: 1px solid #eee; display: flex; flex-direction: column; justify-content: center;">
                <span style="font-weight: bold; font-size: 14px; color: #007bff;">${statsValue}</span>
                <span style="font-size: 9px; color: #666;">${statsLabel}</span>
            </div>
            <div class="rank-number-box" style="text-align: center; min-width: 45px; display: flex; flex-direction: column; align-items: center; justify-content: center;">
                <span class="rank-val" style="display: block; font-weight: 900; font-size: 18px; color: #333; line-height: 1;">${index + 1}</span>
                <span class="rank-label" style="font-size: 9px; color: #999; letter-spacing: 1px;">TOP</span>
                ${flagHtml}
            </div>
        `;
        listContainer.appendChild(row);
    });
}

window.onload = async () => {
    await loadStatsFromFile();
    const firstBtn = document.querySelector('.tab-btn');
    if (firstBtn) switchCategory('most-ordered', firstBtn);
    else switchCategory('most-ordered');
};