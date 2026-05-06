// قائمة الملفات المطلوب تخزينها مسبقاً لضمان السرعة الفائقة
const assetsToCache = [
    // ملفات HTML داخل مجلد HTML
    'HTML/main.html',
    'HTML/Sprinkle.html',
    'HTML/Numbers.html',
    'HTML/Subscriptions.html',
    'HTML/Recovery.html',
    'HTML/add-balance.html',
    'HTML/usdt-pay.html',
    'HTML/stars-pay.html',
    'HTML/orders.html',
    'HTML/referral.html',
    'HTML/merchants.html',
    'HTML/ranks.html',
    'HTML/api.html',

    // ملفات CSS داخل مجلد CSS
    'CSS/style.css', 
    // أضف أي ملفات CSS أخرى هنا مثل 'CSS/dark-mode.css'

    // ملفات JS والبيانات
    'main.js',
    'merchants.js',
    'Sprinkle.js',
    'stats.txt'
];

async function startPreloading() {
    const statusText = document.getElementById('loading-status'); // تأكد من وجود هذا ID في صفحة لودينج
    
    try {
        // فتح مخزن الكاش بنسخة محددة
        const cache = await caches.open('skyboost-v1');
        
        console.log('بدء التخزين المسبق للملفات...');
        
        // تحميل الملفات واحد تلو الآخر لتحديث النسبة المئوية (اختياري)
        for (let i = 0; i < assetsToCache.length; i++) {
            await cache.add(assetsToCache[i]);
            let progress = Math.round(((i + 1) / assetsToCache.length) * 100);
            if (statusText) statusText.innerText = `جاري تجهيز النظام: ${progress}%`;
        }

        console.log('تم تخزين جميع الملفات بنجاح. السرعة الآن فائقة!');
        
        // الانتقال التلقائي للصفحة الرئيسية بعد انتهاء التحميل
        setTimeout(() => {
            window.location.href = 'main.html';
        }, 500);

    } catch (error) {
        console.error('فشل التحميل المسبق:', error);
        // في حال حدوث خطأ، ننتقل للرئيسية لضمان عدم توقف التطبيق
        window.location.href = 'main.html';
    }
}

// البدء عند تحميل صفحة لودينج
window.addEventListener('load', startPreloading);