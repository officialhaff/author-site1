// menu-sounds.js - Управление звуками меню
class MenuSounds {
    constructor() {
        this.sounds = {};
        this.init();
    }
    
    init() {
        // Предзагружаем звуки
        this.sounds.click = new Audio('audio/menu/click.wav');
        this.sounds.click.volume = 0.3;
        
        this.sounds.hover = new Audio('audio/menu/hover.wav');
        this.sounds.hover.volume = 0.2;
        
        // Добавляем обработчики для навигационных кнопок
        this.addNavigationSounds();
        this.addAudioPlayerSounds();
        this.addLanguageSelectorSounds();
    }
    
    addNavigationSounds() {
        const navLinks = document.querySelectorAll('.nav a');
        
        navLinks.forEach(link => {
            // Звук при клике
            link.addEventListener('click', (e) => {
                this.playSound('click');
                
                // Визуальная обратная связь
                link.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    link.style.transform = '';
                }, 150);
            });
            
            // Звук при наведении (опционально)
            link.addEventListener('mouseenter', () => {
                // this.playSound('hover'); // Раскомментируйте, если хотите звук при наведении
            });
        });
    }
    
    addAudioPlayerSounds() {
        const audioControls = document.querySelectorAll('.play-btn, .download-btn, .volume-btn');
        
        audioControls.forEach(control => {
            control.addEventListener('click', () => {
               // this.playSound('click');
            });
        });
    }
    
    addLanguageSelectorSounds() {
        const languageBtn = document.querySelector('.language-btn');
        const languageOptions = document.querySelectorAll('.language-dropdown a');
        
        if (languageBtn) {
            languageBtn.addEventListener('click', () => {
                this.playSound('click');
            });
        }
        
        languageOptions.forEach(option => {
            option.addEventListener('click', () => {
                this.playSound('click');
            });
        });
    }
    
    playSound(soundName) {
        if (this.sounds[soundName]) {
            this.sounds[soundName].currentTime = 0;
            this.sounds[soundName].play().catch(error => {
                // Игнорируем ошибки автовоспроизведения
                if (error.name !== 'NotAllowedError') {
                    console.log(`Не удалось воспроизвести звук ${soundName}:`, error);
                }
            });
        }
    }
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    new MenuSounds();
});