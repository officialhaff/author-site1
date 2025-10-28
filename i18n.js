// i18n.js - Конфигурация языков
const translations = {
    'ru': {
        // Навигация
        'nav.home': 'Главная',
        'nav.about': 'Обо мне',
        'nav.links': 'Ссылки',
        'nav.sounds': 'Звуки',
        'nav.music': 'Музыка',
        'nav.projects': 'Проекты',
        'error404.title': '404 - Страница не найдена',

        // Главная страница
        'home.title': 'Терминал Портфолио',
        'home.welcome': 'Добро пожаловать!',
        'home.description': 'Это демонстрационный сайт с навигацией в терминальном стиле.',
        'home.use_menu': 'Используйте меню выше для перехода между страницами.',
        'home.check_styles': 'Каждая страница содержит минимальный контент для проверки стилей.',

        // Страница "Обо мне"
        'about.title': 'Обо мне',
        'about.subtitle': 'Немного информации',
        'about.text1': 'Привет! Я разработчик, увлекающийся созданием интересных проектов.',
        'about.text2': 'Мне нравится экспериментировать с различными технологиями и подходами.',
        'about.text3': 'В свободное время изучаю новые языки программирования и фреймворки.',

        // Страница "Ссылки"
        'links.title': 'Ссылки',
        'links.subtitle': 'Полезные ссылки',

        // Страница "Звуки"
        'sounds.title': 'Звуки',
        'sounds.subtitle': 'Звуковые проекты',
        'sounds.text1': 'Здесь будут представлены мои работы со звуком.',
        'sounds.text2': 'В будущем планирую добавить примеры звуковых эффектов и дизайна.',
        'sounds.item1': 'Звуковые ландшафты',
        'sounds.item2': 'Аудио-инсталляции',
        'sounds.item3': 'Подкасты',

        // Страница "Музыка"
        'music.title': 'Музыка',
        'music.subtitle': 'Музыкальные проекты',
        'music.text1': 'Эта страница посвящена моим музыкальным экспериментам.',
        'music.text2': 'В будущем здесь появятся примеры композиций и музыкальных проектов.',
        'music.item1': 'Электронная музыка',
        'music.item2': 'Саундтреки',
        'music.item3': 'Аудиовизуальные проекты',

        // Страница "Проекты"
        'projects.title': 'Проекты',
        'projects.subtitle': 'Мои проекты',
        'projects.text1': 'Ниже представлены некоторые из моих проектов:',
        'projects.text2': 'Больше проектов можно найти на',
        'projects.item1': 'Web Terminal - эмулятор терминала в браузере',
        'projects.item2': 'Audio Visualizer - визуализатор звуковых волн',
        'projects.item3': 'CSS Framework - минималистичный фреймворк для веб-разработки',
        'projects.item4': 'Generative Art - генеративные художественные проекты',

        // Фильтры проектов
        'projects.filter.title': 'Фильтр по категориям',
        'projects.filter.all': 'Все проекты',
        'projects.filter.web': 'Веб-разработка',
        'projects.filter.games': 'Игры',
        'projects.filter.music': 'Музыка',
        'projects.filter.art': 'Искусство',
        'projects.filter.tools': 'Инструменты',
        'projects.filter.design': 'Дизайн',
        'projects.filter.count': 'проектов найдено',

        // Статусы проектов
        'projects.status.completed': 'Завершен',
        'projects.status.in_progress': 'В разработке',
        'projects.status.planning': 'Планируется',

        // Проект: Web Terminal
        'projects.terminal.title': 'Web Terminal Portfolio',
        'projects.terminal.meta': '2024 • Личный проект • 3 месяца разработки',
        'projects.terminal.description': 'Интерактивное портфолио в стиле терминала с эмуляцией командной строки. Пользователи могут взаимодействовать с сайтом через текстовые команды, что создает уникальный опыт погружения.',
        'projects.terminal.feature1': 'Полная эмуляция командной строки',
        'projects.terminal.feature2': 'Поддержка основных Unix-команд',
        'projects.terminal.feature3': 'Интерактивная навигация по портфолио',
        'projects.terminal.feature4': 'CRT-эффекты и ретро-стилизация',
        'projects.terminal.feature5': 'Адаптивный дизайн для всех устройств',

        // Проект: Cyber Dungeon
        'projects.dungeon.title': 'Cyber Dungeon Crawler',
        'projects.dungeon.meta': '2023-2024 • Командный проект • 8+ месяцев',
        'projects.dungeon.description': 'Рогалик в стиле киберпанк с процедурной генерацией подземелий, тактическими боями и глубокой системой прокачки. Сочетает ретро-эстетику с современными игровыми механиками.',
        'projects.dungeon.feature1': 'Процедурная генерация уровней и врагов',
        'projects.dungeon.feature2': 'Глубокая система крафта и модификации оружия',
        'projects.dungeon.feature3': 'Тактические бои с укрытиями и позиционированием',
        'projects.dungeon.feature4': 'Нелинейный сюжет с множеством концовок',
        'projects.dungeon.feature5': 'Кастомный рендерер для ретро-эффектов',

        // Проект: Retro Synth
        'projects.synth.title': 'Retro Synth Studio',
        'projects.synth.meta': '2023 • Личный проект • 4 месяца',
        'projects.synth.description': 'Веб-приложение для создания музыки с эмуляцией классических синтезаторов 80-х. Включает несколько типов осцилляторов, фильтры, эффекты и секвенсор с поддержкой экспорта в MIDI.',
        'projects.synth.feature1': '4-трековый секвенсор с паттернами',
        'projects.synth.feature2': 'Эмуляция аналоговых синтезаторов (Moog, Roland)',
        'projects.synth.feature3': 'Библиотека пресетов и сэмплов',
        'projects.synth.feature4': 'Поддержка MIDI-контроллеров',
        'projects.synth.feature5': 'Экспорт в WAV, MP3 и MIDI форматы',

        // Проект: Generative Art
        'projects.art.title': 'Generative Art Engine',
        'projects.art.meta': '2022 • Исследовательский проект • 6 месяцев',
        'projects.art.description': 'Движок для создания генеративного искусства с использованием алгоритмов L-систем, клеточных автоматов и шумовых функций. Создает уникальные визуальные композиции на основе математических принципов.',
        'projects.art.feature1': 'L-системы для фрактальных структур',
        'projects.art.feature2': 'Клеточные автоматы (Game of Life, Wireworld)',
        'projects.art.feature3': 'Шум Перлина и симплекс-шум для текстур',
        'projects.art.feature4': 'Генетические алгоритмы для эволюции искусства',
        'projects.art.feature5': 'Экспорт в SVG, PNG и векторные форматы',

        // Заголовки разделов проектов
        'projects.features.title': 'Основные возможности:',
        'projects.features.game': 'Игровые особенности:',
        'projects.features.music': 'Музыкальные возможности:',
        'projects.features.algorithms': 'Алгоритмы и техники:',

        // Ссылки проектов
        'projects.link.github': 'GitHub',
        'projects.link.demo': 'Живая демонстрация',
        'projects.link.playable': 'Playable Demo',
        'projects.link.online': 'Online Studio',
        'projects.link.gallery': 'Online Gallery',
        'projects.image.not_found': 'Изображение не найдено',

        // Аудио плееры
        'audio.download': 'Скачать',
        'audio.track1': 'Электронная композиция #1',
        'audio.track2': 'Атмосферный эмбиент',
        'audio.track3': 'Экспериментальный бит',
        'audio.track4': 'Городской шум',
        'audio.track5': 'Природные звуки',
        'audio.track6': 'Экспериментальный звук',

        // Формы и кнопки
        'email': 'Электронная почта:',
        'upload.title': 'Добавить музыкальный файл',
        'upload.sounds.title': 'Добавить звуковой файл',
        'upload.step1': 'Поместите файл в формате MP3 или WAV в папку',
        'upload.step2': 'Добавьте следующий код на эту страницу:',

        // Выбор языка
        'language': 'Язык',
        'language.ru': 'Русский',
        'language.en': 'English'
    },
    'en': {
        // Navigation
        'nav.home': 'Home',
        'nav.about': 'About',
        'nav.links': 'Links',
        'nav.sounds': 'Sounds',
        'nav.music': 'Music',
        'nav.projects': 'Projects',
        'error404.title': '404 - Page Not Found',

        // Home page
        'home.title': 'Terminal Portfolio',
        'home.welcome': 'Welcome!',
        'home.description': 'This is a demo site with terminal-style navigation.',
        'home.use_menu': 'Use the menu above to navigate between pages.',
        'home.check_styles': 'Each page contains minimal content to check styles.',

        // About page
        'about.title': 'About Me',
        'about.subtitle': 'Some Information',
        'about.text1': 'Hello! I am a developer passionate about creating interesting projects.',
        'about.text2': 'I enjoy experimenting with different technologies and approaches.',
        'about.text3': 'In my free time, I study new programming languages and frameworks.',

        // Links page
        'links.title': 'Links',
        'links.subtitle': 'Useful Links',

        // Sounds page
        'sounds.title': 'Sounds',
        'sounds.subtitle': 'Sound Projects',
        'sounds.text1': 'Here will be my works with sound.',
        'sounds.text2': 'In the future, I plan to add examples of sound effects and design.',
        'sounds.item1': 'Sound landscapes',
        'sounds.item2': 'Audio installations',
        'sounds.item3': 'Podcasts',

        // Music page
        'music.title': 'Music',
        'music.subtitle': 'Music Projects',
        'music.text1': 'This page is dedicated to my musical experiments.',
        'music.text2': 'In the future, examples of compositions and music projects will appear here.',
        'music.item1': 'Electronic music',
        'music.item2': 'Soundtracks',
        'music.item3': 'Audiovisual projects',

        // Projects page
        'projects.title': 'Projects',
        'projects.subtitle': 'My Projects',
        'projects.text1': 'Below are some of my projects:',
        'projects.text2': 'More projects can be found on',
        'projects.item1': 'Web Terminal - browser terminal emulator',
        'projects.item2': 'Audio Visualizer - sound wave visualizer',
        'projects.item3': 'CSS Framework - minimalist framework for web development',
        'projects.item4': 'Generative Art - generative art projects',

        // Projects filters
        'projects.filter.title': 'Filter by categories',
        'projects.filter.all': 'All projects',
        'projects.filter.web': 'Web Development',
        'projects.filter.games': 'Games',
        'projects.filter.music': 'Music',
        'projects.filter.art': 'Art',
        'projects.filter.tools': 'Tools',
        'projects.filter.design': 'Design',
        'projects.filter.count': 'projects found',

        // Project statuses
        'projects.status.completed': 'Completed',
        'projects.status.in_progress': 'In Progress',
        'projects.status.planning': 'Planning',

        // Project: Web Terminal
        'projects.terminal.title': 'Web Terminal Portfolio',
        'projects.terminal.meta': '2024 • Personal project • 3 months development',
        'projects.terminal.description': 'Interactive portfolio in terminal style with command line emulation. Users can interact with the site through text commands, creating a unique immersive experience.',
        'projects.terminal.feature1': 'Full command line emulation',
        'projects.terminal.feature2': 'Support for basic Unix commands',
        'projects.terminal.feature3': 'Interactive portfolio navigation',
        'projects.terminal.feature4': 'CRT effects and retro styling',
        'projects.terminal.feature5': 'Responsive design for all devices',

        // Project: Cyber Dungeon
        'projects.dungeon.title': 'Cyber Dungeon Crawler',
        'projects.dungeon.meta': '2023-2024 • Team project • 8+ months',
        'projects.dungeon.description': 'Cyberpunk roguelike with procedural dungeon generation, tactical combat and deep progression system. Combines retro aesthetics with modern game mechanics.',
        'projects.dungeon.feature1': 'Procedural generation of levels and enemies',
        'projects.dungeon.feature2': 'Deep crafting and weapon modification system',
        'projects.dungeon.feature3': 'Tactical combat with cover and positioning',
        'projects.dungeon.feature4': 'Non-linear story with multiple endings',
        'projects.dungeon.feature5': 'Custom renderer for retro effects',

        // Project: Retro Synth
        'projects.synth.title': 'Retro Synth Studio',
        'projects.synth.meta': '2023 • Personal project • 4 months',
        'projects.synth.description': 'Web application for music creation with emulation of classic 80s synthesizers. Includes multiple oscillator types, filters, effects and sequencer with MIDI export support.',
        'projects.synth.feature1': '4-track sequencer with patterns',
        'projects.synth.feature2': 'Emulation of analog synthesizers (Moog, Roland)',
        'projects.synth.feature3': 'Library of presets and samples',
        'projects.synth.feature4': 'MIDI controller support',
        'projects.synth.feature5': 'Export to WAV, MP3 and MIDI formats',

        // Project: Generative Art
        'projects.art.title': 'Generative Art Engine',
        'projects.art.meta': '2022 • Research project • 6 months',
        'projects.art.description': 'Engine for creating generative art using L-systems, cellular automata and noise functions. Creates unique visual compositions based on mathematical principles.',
        'projects.art.feature1': 'L-systems for fractal structures',
        'projects.art.feature2': 'Cellular automata (Game of Life, Wireworld)',
        'projects.art.feature3': 'Perlin noise and simplex noise for textures',
        'projects.art.feature4': 'Genetic algorithms for art evolution',
        'projects.art.feature5': 'Export to SVG, PNG and vector formats',

        // Project section headers
        'projects.features.title': 'Main features:',
        'projects.features.game': 'Game features:',
        'projects.features.music': 'Music capabilities:',
        'projects.features.algorithms': 'Algorithms and techniques:',

        // Project links
        'projects.link.github': 'GitHub',
        'projects.link.demo': 'Live Demo',
        'projects.link.playable': 'Playable Demo',
        'projects.link.online': 'Online Studio',
        'projects.link.gallery': 'Online Gallery',
        'projects.image.not_found': 'Image not found',

        // Audio players
        'audio.download': 'Download',
        'audio.track1': 'Electronic Composition #1',
        'audio.track2': 'Atmospheric Ambient',
        'audio.track3': 'Experimental Beat',
        'audio.track4': 'City Noise',
        'audio.track5': 'Nature Sounds',
        'audio.track6': 'Experimental Sound',

        // Forms and buttons
        'email': 'Email:',
        'upload.title': 'Add Music File',
        'upload.sounds.title': 'Add Sound File',
        'upload.step1': 'Place the file in MP3 or WAV format in the folder',
        'upload.step2': 'Add the following code to this page:',

        // Language selection
        'language': 'Language',
        'language.ru': 'Russian',
        'language.en': 'English'
    }
};