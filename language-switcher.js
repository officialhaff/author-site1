// language-switcher.js - Управление переключением языков
class LanguageSwitcher {
    constructor() {
        this.currentLang = localStorage.getItem('selectedLanguage') || 'ru';
        this.init();
    }

    init() {
        this.applyLanguage(this.currentLang);
        this.createLanguageSelector();
        this.addEventListeners();
    }

    applyLanguage(lang) {
        this.currentLang = lang;
        localStorage.setItem('selectedLanguage', lang);

        // Обновляем все элементы с data-i18n атрибутом
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    element.placeholder = translations[lang][key];
                } else {
                    element.textContent = translations[lang][key];
                }
            }
        });

        // Обновляем атрибут download для кнопок скачивания
        document.querySelectorAll('.download-btn').forEach(btn => {
            const currentText = btn.textContent;
            if (currentText === '↓' || currentText === 'Download' || currentText === 'Скачать') {
                btn.setAttribute('title', translations[lang]['audio.download']);
            }
        });
    }

    createLanguageSelector() {
        // Создаем контейнер для заголовка и селектора, если его еще нет
        let headerTop = document.querySelector('.header-top');
        if (!headerTop) {
            const header = document.querySelector('header');
            const h1 = document.querySelector('header h1');
            const nav = document.querySelector('.nav');

            if (header && h1) {
                headerTop = document.createElement('div');
                headerTop.className = 'header-top';

                // Перемещаем h1 в новый контейнер
                header.insertBefore(headerTop, nav);
                headerTop.appendChild(h1);
            }
        }

        // Создаем селектор языка, если его еще нет
        if (!document.querySelector('.language-selector')) {
            const selector = document.createElement('div');
            selector.className = 'language-selector';
            selector.innerHTML = `
            <button class="language-btn">${translations[this.currentLang]['language']} ▼</button>
            <div class="language-dropdown">
                <a href="#" data-lang="ru">${translations[this.currentLang]['language.ru']}</a>
                <a href="#" data-lang="en">${translations[this.currentLang]['language.en']}</a>
            </div>
        `;

            if (headerTop) {
                headerTop.appendChild(selector);
            }
        } else {
            // Обновляем существующий селектор
            const btn = document.querySelector('.language-btn');
            const dropdown = document.querySelector('.language-dropdown');

            if (btn) btn.textContent = `${translations[this.currentLang]['language']} ▼`;

            if (dropdown) {
                dropdown.innerHTML = `
                <a href="#" data-lang="ru">${translations[this.currentLang]['language.ru']}</a>
                <a href="#" data-lang="en">${translations[this.currentLang]['language.en']}</a>
            `;
            }
        }
    }

    addEventListeners() {
        // Обработчик для кнопки открытия выпадающего списка
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('language-btn')) {
                e.preventDefault();
                const dropdown = document.querySelector('.language-dropdown');
                dropdown.classList.toggle('show');
            } else {
                // Закрываем выпадающий список при клике вне его
                document.querySelectorAll('.language-dropdown').forEach(dropdown => {
                    dropdown.classList.remove('show');
                });
            }
        });

        // Обработчик для выбора языка
        document.addEventListener('click', (e) => {
            if (e.target.hasAttribute('data-lang')) {
                e.preventDefault();
                const lang = e.target.getAttribute('data-lang');
                this.applyLanguage(lang);
                this.createLanguageSelector(); // Обновляем селектор с новым языком
            }
        });
    }
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    new LanguageSwitcher();
});