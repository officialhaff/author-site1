// redirect-handler.js - Обработчик перенаправления на 404
class RedirectHandler {
    constructor() {
        this.validPages = [
            'index.html',
            'about.html', 
            'links.html',
            'sounds.html',
            'music.html',
            'projects.html',
            '404.html'
        ];
        this.init();
    }

    init() {
        // Проверяем текущую страницу только если мы НЕ на странице 404
        if (!this.is404Page()) {
            this.checkPageExists();
        }
    }

    is404Page() {
        return window.location.pathname.includes('404.html') || 
               document.title.includes('404') ||
               document.querySelector('h1')?.textContent.includes('404');
    }

    checkPageExists() {
        const currentPage = this.getCurrentPage();
        
        // Если текущей страницы нет в списке валидных - редирект на 404
        if (!this.validPages.includes(currentPage)) {
            console.warn(`Страница ${currentPage} не найдена, перенаправление на 404`);
            this.redirectTo404();
        }
    }

    getCurrentPage() {
        const path = window.location.pathname;
        const page = path.split('/').pop();
        
        // Если корневой URL, считаем это index.html
        if (page === '' || page === '/' || !page.includes('.html')) {
            return 'index.html';
        }
        
        return page;
    }

    redirectTo404() {
        // Сохраняем оригинальный URL для отображения на странице 404
        sessionStorage.setItem('original404Url', window.location.href);
        
        // Редирект на страницу 404
        window.location.href = '404.html';
    }
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    new RedirectHandler();
});