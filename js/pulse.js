// pulse.js - простые анимации
document.addEventListener('DOMContentLoaded', function() {
    console.log('Сайт "Пульс Божий" загружен!');
    
    // Простая пульсация заголовка
    const divineTitle = document.querySelector('.divine');
    if (divineTitle) {
        setInterval(() => {
            divineTitle.style.color = divineTitle.style.color === 'rgb(255, 107, 107)' ? '#2a6eb6' : '#ff6b6b';
        }, 2000);
    }
    
    // Анимация при клике на волны
    const ripples = document.querySelectorAll('.ripple-circle');
    if (ripples.length > 0) {
        document.addEventListener('click', function() {
            ripples.forEach(ripple => {
                ripple.style.transition = 'all 0.5s ease';
                ripple.style.transform = 'translate(-50%, -50%) scale(1.5)';
                ripple.style.opacity = '0';
                
                setTimeout(() => {
                    ripple.style.transform = 'translate(-50%, -50%) scale(1)';
                    ripple.style.opacity = '0.3';
                }, 500);
            });
        });
    }
});
