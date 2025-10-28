// social-icons.js - Дополнительные эффекты для иконок социальных сетей
document.addEventListener('DOMContentLoaded', function() {
    const socialLinks = document.querySelectorAll('.social-link');
    
    socialLinks.forEach(link => {
        // Добавляем эффект случайного мерцания
        setInterval(() => {
            if (Math.random() > 0.7) {
                link.style.boxShadow = '0 0 8px var(--accent)';
                setTimeout(() => {
                    link.style.boxShadow = '';
                }, 200);
            }
        }, 3000);
        
        // Эффект при наведении
        link.addEventListener('mouseenter', function() {
            this.style.animation = 'glow-flicker 0.5s infinite alternate';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.animation = '';
        });
    });
});