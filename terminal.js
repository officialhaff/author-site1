// terminal.js - Логика имитации терминала
document.addEventListener('DOMContentLoaded', function() {
    const terminalContainer = document.getElementById('terminalContainer');
    const terminalOutput = document.getElementById('terminalOutput');
    
    // Функция для прокрутки терминала вниз
    function scrollToBottom() {
        setTimeout(() => {
            terminalContainer.scrollTop = terminalContainer.scrollHeight;
        }, 0);
    }
    
    // Функция для ввода текста с анимацией
    function typeText(element, text, speed, callback, classNames = []) {
        let i = 0;
        
        // Очищаем элемент и добавляем классы
        element.textContent = '';
        classNames.forEach(className => {
            element.classList.add(className);
        });
        
        function typeChar() {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                scrollToBottom();
                setTimeout(typeChar, speed);
            } else if (callback) {
                scrollToBottom();
                setTimeout(callback, 10);
            }
        }
        typeChar();
    }
    
    // Функция для добавления строки с приглашением и командой
    function addCommand(prompt, command, output, outputDelay = 100) {
        return new Promise((resolve) => {
            // Создаем строку с приглашением и командой
            const commandLine = document.createElement('div');
            commandLine.className = 'terminal-line';
            terminalOutput.appendChild(commandLine);
            
            const promptElement = document.createElement('span');
            promptElement.className = 'terminal-prompt';
            promptElement.textContent = prompt;
            commandLine.appendChild(promptElement);
            
            const commandElement = document.createElement('span');
            commandElement.className = 'terminal-command';
            commandLine.appendChild(commandElement);
            
            // Анимируем ввод команды
            typeText(commandElement, command, 30, () => {
                scrollToBottom();
                
                // После команды выводим результат
                if (output && output.length > 0) {
                    setTimeout(() => {
                        output.forEach((line, index) => {
                            setTimeout(() => {
                                const outputLine = document.createElement('div');
                                outputLine.className = 'terminal-line terminal-output';
                                
                                // Применяем специальные классы для разных типов вывода
                                if (line.includes('total') || line.includes('drwx') || line.includes('-rw-')) {
                                    outputLine.classList.add('file-listing');
                                } else if (line.includes('[INFO]') || line.includes('[CHECK]')) {
                                    outputLine.classList.add('info-message');
                                } else if (line.includes('[SUCCESS]') || line.includes('OK')) {
                                    outputLine.classList.add('success-message');
                                } else if (line.startsWith('//') || line.includes('<!--')) {
                                    outputLine.classList.add('code-comment');
                                } else if (line.includes('class') || line.includes('constructor') || line.includes('function')) {
                                    outputLine.classList.add('code-keyword');
                                }
                                
                                // Обработка листинга файлов для красивого отображения
                                if (line.includes('drwx') || line.includes('-rw-')) {
                                    const parts = line.split(/\s+/);
                                    if (parts.length >= 9) {
                                        const perms = parts[0];
                                        const size = parts[4];
                                        const date = parts[5] + ' ' + parts[6] + ' ' + parts[7];
                                        const name = parts.slice(8).join(' ');
                                        
                                        const permSpan = document.createElement('span');
                                        permSpan.className = 'file-permissions';
                                        permSpan.textContent = perms + ' ';
                                        outputLine.appendChild(permSpan);
                                        
                                        const sizeSpan = document.createElement('span');
                                        sizeSpan.className = 'file-permissions';
                                        sizeSpan.textContent = size.padStart(8) + ' ';
                                        outputLine.appendChild(sizeSpan);
                                        
                                        const dateSpan = document.createElement('span');
                                        dateSpan.className = 'file-permissions';
                                        dateSpan.textContent = date + ' ';
                                        outputLine.appendChild(dateSpan);
                                        
                                        const nameSpan = document.createElement('span');
                                        nameSpan.className = perms.startsWith('d') ? 'dir-name' : 'file-name';
                                        nameSpan.textContent = name;
                                        outputLine.appendChild(nameSpan);
                                    } else {
                                        outputLine.textContent = line;
                                    }
                                } else {
                                    outputLine.textContent = line;
                                }
                                
                                terminalOutput.appendChild(outputLine);
                                scrollToBottom();
                                
                                // Разрешаем промис после последней строки вывода
                                if (index === output.length - 1) {
                                    setTimeout(resolve, outputDelay);
                                }
                            }, index * 50);
                        });
                        
                        // Если вывод пустой, сразу разрешаем
                        if (output.length === 0) {
                            setTimeout(resolve, outputDelay);
                        }
                    }, 300);
                } else {
                    setTimeout(resolve, outputDelay);
                }
            });
            
            scrollToBottom();
        });
    }
    
    // Основная функция запуска терминала
    async function startTerminal() {
        const commands = [
            {
                prompt: 'rb@server:~$ ',
                command: 'whoami',
                output: ['RB Laboratory']
            },
            {
                prompt: 'rb@server:~$ ',
                command: 'pwd',
                output: ['/home/rb']
            },
            {
                prompt: 'rb@server:~$ ',
                command: 'cd /server/html/',
                output: []
            },
            {
                prompt: 'rb@server:/server/html$ ',
                command: 'ls -la',
                output: [
                    'total 48',
                    'drwxr-xr-x 8 rb rb  4096 Dec 10 14:30 .',
                    'drwxr-xr-x 3 rb rb  4096 Dec 10 14:28 ..',
                    '-rw-r--r-- 1 rb rb  1024 Dec 10 14:30 index.html',
                    '-rw-r--r-- 1 rb rb   512 Dec 10 14:29 sound.js',
                    '-rw-r--r-- 1 rb rb   768 Dec 10 14:29 music.js',
                    'drwxr-xr-x 2 rb rb  4096 Dec 10 14:30 config',
                    'drwxr-xr-x 3 rb rb  4096 Dec 10 14:30 assets'
                ]
            },
            {
                prompt: 'rb@server:/server/html$ ',
                command: 'cat index.html',
                output: [
                    '<!DOCTYPE html>',
                    '<html>',
                    '<head>',
                    '    <title>Audio Laboratory</title>',
                    '    <!-- Initialization script -->',
                    '    <script src="init.js"></script>',
                    '</head>',
                    '<body>',
                    '    <div id="audio-system">Initializing...</div>',
                    '</body>',
                    '</html>'
                ]
            },
            {
                prompt: 'rb@server:/server/html$ ',
                command: './audio_init.sh',
                output: [
                    'Initializing audio systems...',
                    'Loading audio cache...',
                    '[INFO] Loading MP3 codec... OK',
                    '[INFO] Loading WAV codec... OK', 
                    '[INFO] Loading OGG codec... OK',
                    '[INFO] Connecting audio effects:',
                    '  - Reverb: OK',
                    '  - Equalizer: OK',
                    '  - Compression: OK',
                    '[INFO] Audio buffer allocated: 512MB',
                    '[SUCCESS] Audio systems ready!'
                ]
            },
            {
                prompt: 'rb@server:/server/html$ ',
                command: 'ls config/',
                output: ['audio.conf      effects.conf    cache.conf      system.conf']
            },
            {
                prompt: 'rb@server:/server/html$ ',
                command: 'cat config/audio.conf',
                output: [
                    '# Audio Configuration',
                    'sample_rate=44100',
                    'channels=2',
                    'buffer_size=4096',
                    'formats=mp3,wav,ogg,flac'
                ]
            },
            {
                prompt: 'rb@server:/server/html$ ',
                command: 'cat config/effects.conf',
                output: [
                    '# Audio Effects',
                    'reverb=true',
                    'equalizer=true',
                    'compression_level=2',
                    'spatial_audio=false'
                ]
            },
            {
                prompt: 'rb@server:/server/html$ ',
                command: 'nano sound.js',
                output: [
                    '// Sound system configuration',
                    'class SoundEngine {',
                    '    constructor() {',
                    '        this.cacheSize = \'256MB\';',
                    '        this.supportedFormats = [\'mp3\', \'wav\', \'ogg\'];',
                    '        this.effects = {',
                    '            reverb: true,',
                    '            equalizer: true,',
                    '            spatial: false',
                    '        };',
                    '    }',
                    '    ',
                    '    init() {',
                    '        console.log(\'Sound system initialized\');',
                    '        this.loadAudioCache();',
                    '    }',
                    '}'
                ]
            },
            {
                prompt: 'rb@server:/server/html$ ',
                command: 'nano music.js',
                output: [
                    '// Music playback system',
                    'class MusicPlayer {',
                    '    constructor() {',
                    '        this.playlist = [];',
                    '        this.volume = 80;',
                    '        this.repeat = true;',
                    '        this.crossfade = true;',
                    '    }',
                    '    ',
                    '    loadTrack(file) {',
                    '        console.log(`Loading: ${file}`);',
                    '        return AudioCache.get(file);',
                    '    }',
                    '}'
                ]
            },
            {
                prompt: 'rb@server:/server/html$ ',
                command: './system_check.sh',
                output: [
                    'Running system diagnostics...',
                    '[CHECK] Web server: OK',
                    '[CHECK] Audio subsystems: OK',
                    '[CHECK] Cache system: OK',
                    '[CHECK] Effect processors: OK',
                    '[CHECK] File handlers: OK',
                    '[CHECK] Memory allocation: OK',
                    '',
                    'All systems operational. Starting main application...'
                ]
            },
            {
                prompt: 'rb@server:/server/html$ ',
                command: 'systemctl start audio-webserver',
                output: [
                    '[INFO] Starting Audio Laboratory Web Server...',
                    '[SUCCESS] Server running on port 8080',
                    '[INFO] Main site: http://localhost:8080/index.html',
                    '[INFO] Audio endpoints:',
                    '  - /api/sound',
                    '  - /api/music',  
                    '  - /api/effects'
                ]
            },
            {
                prompt: 'rb@server:/server/html$ ',
                command: 'netstat -tulpn | grep 8080',
                output: ['tcp6       0      0 :::8080      :::*        LISTEN      3482/node']
            }
        ];
        
        // Выполняем команды последовательно
        for (let i = 0; i < commands.length; i++) {
            await addCommand(
                commands[i].prompt, 
                commands[i].command, 
                commands[i].output,
                500 // Задержка между командами
            );
        }
        
        // Финальное сообщение
        setTimeout(() => {
            const finalMessage1 = document.createElement('div');
            finalMessage1.className = 'terminal-line success-message';
            finalMessage1.textContent = 'System status: ONLINE';
            terminalOutput.appendChild(finalMessage1);
            
            const finalMessage2 = document.createElement('div');
            finalMessage2.className = 'terminal-line success-message';
            finalMessage2.textContent = 'Audio Laboratory is now ready for use!';
            terminalOutput.appendChild(finalMessage2);
            
            // Добавляем мигающий курсор
            const cursorLine = document.createElement('div');
            cursorLine.className = 'terminal-line';
            terminalOutput.appendChild(cursorLine);
            
            const finalPrompt = document.createElement('span');
            finalPrompt.className = 'terminal-prompt';
            finalPrompt.textContent = 'rb@server:/server/html$ ';
            cursorLine.appendChild(finalPrompt);
            
            const cursor = document.createElement('span');
            cursor.className = 'terminal-cursor';
            cursorLine.appendChild(cursor);
            
            scrollToBottom();
        }, 1000);
    }
    
    // Запускаем терминал с небольшой задержкой для полной загрузки страницы
    setTimeout(startTerminal, 500);
});