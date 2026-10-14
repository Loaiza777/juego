/* ==========================================================================
   Git & Frontend Word Search - Interactive Engine with Super Clear Drawings
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    // ----------------------------------------------------------------------
    // 1. Data Definitions (14 Questions, Simple Explanations & Words)
    // ----------------------------------------------------------------------
    const QUESTIONS_DATA = [
        {
            id: 1,
            word: "GITHUB",
            title: "1. ¿Qué es GitHub y su función?",
            question: "¿Qué es GitHub y cuál es su función principal?",
            fullAnswer: `GitHub es como un "disco duro en la nube" para guardar tus proyectos de programación.

¿Para qué sirve?
• Guarda tu código en la nube para que nunca se pierda.
• Permite que varios programadores trabajen juntos en el mismo proyecto sin borrar el trabajo de los demás.
• Te permite publicar tu página web en Internet para que cualquier persona la visite.`
        },
        {
            id: 2,
            word: "GIT",
            title: "2. ¿Diferencia entre Git y GitHub?",
            question: "¿Cuál es la diferencia entre Git y GitHub?",
            fullAnswer: `Piensa en Git como los "puntos de guardado" de un videojuego en tu propia computadora:
• Git guarda cada versión de tu código en tu PC para poder volver atrás si te equivocas.
• GitHub es la página web en Internet donde subes esas versiones para compartirlas con tu equipo.`
        },
        {
            id: 3,
            word: "REPOSITORIO",
            title: "3. ¿Qué es un repositorio?",
            question: "¿Qué es un repositorio (Repo)?",
            fullAnswer: `Un repositorio es simplemente la carpeta digital de tu proyecto.

Dentro de esa carpeta guardas todos tus archivos (HTML, CSS, JavaScript, imágenes) y el historial completo de todos los cambios que has realizado desde el primer día.`
        },
        {
            id: 4,
            word: "COMMIT",
            title: "4. ¿Qué es un Commit?",
            question: "¿Qué es un Commit y para qué se usa?",
            fullAnswer: `Un commit es como tomarle una "foto instantánea" (snapshot) a tu código en un momento exacto.

Cada vez que haces un cambio importante en tu proyecto, haces un commit para guardar ese punto de control con una nota que explica qué modificaste.`
        },
        {
            id: 5,
            word: "BRANCH",
            title: "5. ¿Qué es una Branch (Rama)?",
            question: "¿Qué es una Branch o Rama en Git?",
            fullAnswer: `Una branch o rama es un camino alternativo para probar cosas nuevas sin arruinar el trabajo principal.

Te permite crear una "copia de trabajo" (por ejemplo para probar un nuevo diseño), y si todo sale bien, luego la unificas con la rama principal (main).`
        },
        {
            id: 6,
            word: "PORTAFOLIO",
            title: "6. Ventajas para estudiantes y devs",
            question: "¿Por qué un Portafolio es tan importante para un desarrollador?",
            fullAnswer: `Un portafolio es tu vitrina de proyectos destacados.

Es el lugar donde muestras las páginas web y aplicaciones reales que has construido para demostrar tus habilidades prácticas ante empresas o clientes que quieran contratarte.`
        },
        {
            id: 7,
            word: "JAVASCRIPT",
            title: "7. ¿Qué es JavaScript en Frontend?",
            question: "¿Qué hace JavaScript en una página web?",
            fullAnswer: `JavaScript es el motor que le da vida, movimiento e interactividad a la web.

Sin JavaScript, una página sería solo texto estático. Con JavaScript puedes hacer que aparezcan menús al hacer clic, animaciones, galerías y validar formularios.`
        },
        {
            id: 8,
            word: "FRAMEWORK",
            title: "8. ¿Qué es un Framework de JS?",
            question: "¿Qué es un Framework de JavaScript?",
            fullAnswer: `Un framework es como una "caja de herramientas prefabricadas".

En lugar de construir todo desde cero, el framework te da piezas ya listas y organizadas (como sistemas de navegación o botones) para crear aplicaciones web complejas mucho más rápido.`
        },
        {
            id: 9,
            word: "FRONTEND",
            title: "9. Tecnologías en Frontend",
            question: "¿Qué es el Frontend y qué tecnologías utiliza?",
            fullAnswer: `El Frontend es todo lo que el usuario Ve, Toca e Interactúa en su pantalla.

Se compone de 3 partes fundamentales:
1. HTML: El esqueleto o estructura del contenido.
2. CSS: La pintura, colores y diseño visual.
3. JavaScript: El dinamismo y los botones interactivos.`
        },
        {
            id: 10,
            word: "REACT",
            title: "10. Características de React",
            question: "¿Qué es React?",
            fullAnswer: `React es una librería de JavaScript super popular para crear páginas web rápidas.

Su secreto es que te permite armar la interfaz uniendo pequeñas partes (componentes) como si fuera un rompecabezas, actualizando solo lo que cambia en pantalla.`
        },
        {
            id: 11,
            word: "COMPONENTES",
            title: "11. Diferencias entre Frameworks",
            question: "¿Qué son los Componentes en desarrollo web?",
            fullAnswer: `Los componentes son bloques de código reutilizables estilo piezas de Lego.

Por ejemplo: el menú de arriba (Navbar), la tarjeta de producto o un botón son componentes. Los creas una sola vez y los puedes usar en cualquier parte de tu página.`
        },
        {
            id: 12,
            word: "DESVENTAJAS",
            title: "12. Ventajas y Desventajas",
            question: "¿Qué desventajas o retos se deben considerar al usar un Framework?",
            fullAnswer: `Aunque ayudan mucho, los frameworks tienen retos a evaluar:
• Requieren tiempo para aprender a usarlos correctamente.
• Hacen que los archivos de la app sean más pesados.
• Cambian y se actualizan frecuentemente.`
        },
        {
            id: 13,
            word: "PAGES",
            title: "13. Publicar en GitHub Pages",
            question: "¿Qué es GitHub Pages?",
            fullAnswer: `GitHub Pages es un servicio gratuito de GitHub que te permite publicar tu página web en Internet en cuestión de segundos.

Le da a tu proyecto un enlace único (como tuusuario.github.io) para que cualquiera en el mundo pueda ver tu web.`
        },
        {
            id: 14,
            word: "DESARROLLO",
            title: "14. Relación del Ecosistema",
            question: "¿Cómo se conectan JavaScript, Git y GitHub en el desarrollo?",
            fullAnswer: `Forman un ciclo de trabajo en 4 pasos:
1. **Idea 💡**: Diseñas lo que vas a crear.
2. **Código 💻**: Escribes la lógica con JavaScript.
3. **Git 📦**: Guardas los puntos de control en tu PC.
4. **GitHub 🚀**: Subes la app a la nube para publicarla en Internet.`
        }
    ];

    // ----------------------------------------------------------------------
    // 2. Super Clear Drawings (Simple, Intuitive SVG Generators)
    // ----------------------------------------------------------------------
    function getConceptDrawingSVG(word) {
        switch(word) {
            case "GITHUB":
                return `<svg viewBox="0 0 340 190" class="concept-drawing">
                    <path d="M 100 105 C 70 105 60 80 80 65 C 75 40 105 30 130 40 C 145 20 195 20 210 40 C 235 30 265 40 260 65 C 280 80 270 105 240 105 Z" fill="#0284c7" stroke="#38bdf8" stroke-width="3"/>
                    <text x="170" y="70" font-size="28" text-anchor="middle">☁️</text>
                    <text x="170" y="93" font-size="12" fill="#fff" font-weight="bold" text-anchor="middle">GitHub (La Nube)</text>

                    <rect x="40" y="120" width="75" height="42" rx="6" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
                    <text x="77" y="146" font-size="18" text-anchor="middle">💻 Tu PC</text>

                    <circle cx="265" cy="141" r="22" fill="#1e293b" stroke="#10b981" stroke-width="2"/>
                    <text x="265" y="148" font-size="18" text-anchor="middle">👥 Equipo</text>
                    
                    <text x="170" y="176" font-size="12" fill="#94a3b8" font-weight="bold" text-anchor="middle">Guarda tu código en la nube y colabora con tu equipo</text>
                </svg>`;

            case "GIT":
                return `<svg viewBox="0 0 340 190" class="concept-drawing">
                    <line x1="40" y1="95" x2="300" y2="95" stroke="#10b981" stroke-width="4"/>
                    
                    <circle cx="70" cy="95" r="22" fill="#10b981" stroke="#fff" stroke-width="2"/>
                    <text x="70" y="100" font-size="14" fill="#fff" font-weight="bold" text-anchor="middle">v1</text>
                    <text x="70" y="135" font-size="11" fill="#94a3b8" text-anchor="middle">Inicio</text>

                    <circle cx="170" cy="95" r="22" fill="#10b981" stroke="#fff" stroke-width="2"/>
                    <text x="170" y="100" font-size="14" fill="#fff" font-weight="bold" text-anchor="middle">v2</text>
                    <text x="170" y="135" font-size="11" fill="#94a3b8" text-anchor="middle">Cambios</text>

                    <circle cx="270" cy="95" r="25" fill="#f59e0b" stroke="#fff" stroke-width="3"/>
                    <text x="270" y="100" font-size="14" fill="#fff" font-weight="bold" text-anchor="middle">v3</text>
                    <text x="270" y="135" font-size="11" fill="#f59e0b" font-weight="bold" text-anchor="middle">Actual ⭐</text>

                    <text x="170" y="45" font-size="24" text-anchor="middle">⏱️ 💾</text>
                    <text x="170" y="176" font-size="12" fill="#94a3b8" font-weight="bold" text-anchor="middle">Como puntos de guardado en un juego (Historial de versiones)</text>
                </svg>`;

            case "REPOSITORIO":
                return `<svg viewBox="0 0 340 190" class="concept-drawing">
                    <rect x="70" y="50" width="200" height="100" rx="10" fill="#0284c7" stroke="#38bdf8" stroke-width="3"/>
                    <path d="M 70 50 L 130 50 L 150 65 L 270 65" fill="none" stroke="#38bdf8" stroke-width="3"/>
                    
                    <text x="170" y="42" font-size="24" text-anchor="middle">📁 Carpeta del Proyecto</text>

                    <rect x="90" y="80" width="45" height="50" rx="5" fill="#0f172a" stroke="#f43f5e" stroke-width="2"/>
                    <text x="112" y="110" font-size="11" fill="#f43f5e" font-weight="bold" text-anchor="middle">📄 HTML</text>

                    <rect x="148" y="80" width="45" height="50" rx="5" fill="#0f172a" stroke="#06b6d4" stroke-width="2"/>
                    <text x="170" y="110" font-size="11" fill="#06b6d4" font-weight="bold" text-anchor="middle">🎨 CSS</text>

                    <rect x="205" y="80" width="45" height="50" rx="5" fill="#0f172a" stroke="#f59e0b" stroke-width="2"/>
                    <text x="227" y="110" font-size="11" fill="#f59e0b" font-weight="bold" text-anchor="middle">⚡ JS</text>

                    <text x="170" y="176" font-size="12" fill="#94a3b8" font-weight="bold" text-anchor="middle">La carpeta digital donde se guardan todos los archivos</text>
                </svg>`;

            case "COMMIT":
                return `<svg viewBox="0 0 340 190" class="concept-drawing">
                    <rect x="80" y="35" width="180" height="105" rx="10" fill="#1e293b" stroke="#8b5cf6" stroke-width="3"/>
                    
                    <text x="120" y="65" font-size="13" fill="#38bdf8" font-weight="bold">index.html</text>
                    <line x1="120" y1="80" x2="200" y2="80" stroke="#10b981" stroke-width="3"/>
                    <line x1="120" y1="95" x2="170" y2="95" stroke="#f59e0b" stroke-width="3"/>

                    <circle cx="230" cy="58" r="22" fill="#8b5cf6" stroke="#fff" stroke-width="2"/>
                    <text x="230" y="65" font-size="18" text-anchor="middle">📸</text>

                    <circle cx="170" cy="120" r="15" fill="#10b981"/>
                    <text x="170" y="125" font-size="14" fill="#fff" font-weight="bold" text-anchor="middle">✓</text>

                    <text x="170" y="176" font-size="12" fill="#94a3b8" font-weight="bold" text-anchor="middle">¡Foto instantánea! Guarda el estado exacto de tu código</text>
                </svg>`;

            case "BRANCH":
                return `<svg viewBox="0 0 340 190" class="concept-drawing">
                    <line x1="50" y1="120" x2="290" y2="120" stroke="#10b981" stroke-width="5" stroke-linecap="round"/>
                    
                    <path d="M 120 120 C 150 120 150 50 190 50 L 290 50" stroke="#06b6d4" stroke-width="5" stroke-linecap="round"/>

                    <rect x="50" y="138" width="115" height="24" rx="6" fill="rgba(16, 185, 129, 0.2)" stroke="#10b981"/>
                    <text x="107" y="154" font-size="11" fill="#10b981" font-weight="bold" text-anchor="middle">🛣️ Camino Principal</text>

                    <rect x="175" y="16" width="125" height="24" rx="6" fill="rgba(6, 182, 212, 0.2)" stroke="#06b6d4"/>
                    <text x="237" y="32" font-size="11" fill="#06b6d4" font-weight="bold" text-anchor="middle">🌿 Rama de Pruebas</text>

                    <text x="170" y="176" font-size="12" fill="#94a3b8" font-weight="bold" text-anchor="middle">Prueba cambios en una rama sin dañar el proyecto principal</text>
                </svg>`;

            case "PORTAFOLIO":
                return `<svg viewBox="0 0 340 190" class="concept-drawing">
                    <rect x="50" y="25" width="240" height="120" rx="10" fill="#0f172a" stroke="#38bdf8" stroke-width="2"/>
                    
                    <text x="170" y="60" font-size="28" text-anchor="middle">🏆 💼</text>
                    
                    <rect x="70" y="80" width="85" height="40" rx="6" fill="rgba(6, 182, 212, 0.2)" stroke="#06b6d4"/>
                    <text x="112" y="105" font-size="11" fill="#06b6d4" font-weight="bold" text-anchor="middle">App Web 🚀</text>

                    <rect x="185" y="80" width="85" height="40" rx="6" fill="rgba(139, 92, 246, 0.2)" stroke="#8b5cf6"/>
                    <text x="227" y="105" font-size="11" fill="#8b5cf6" font-weight="bold" text-anchor="middle">Juego JS 🎮</text>

                    <text x="170" y="176" font-size="12" fill="#94a3b8" font-weight="bold" text-anchor="middle">Muestra tus mejores trabajos para conseguir empleo</text>
                </svg>`;

            case "JAVASCRIPT":
                return `<svg viewBox="0 0 340 190" class="concept-drawing">
                    <rect x="55" y="35" width="230" height="105" rx="10" fill="#1e293b" stroke="#f7df1e" stroke-width="3"/>
                    
                    <text x="105" y="85" font-size="38" text-anchor="middle">💡</text>

                    <rect x="165" y="60" width="100" height="38" rx="6" fill="#f7df1e"/>
                    <text x="215" y="84" font-size="12" fill="#000" font-weight="bold" text-anchor="middle">🖱️ ¡Haz Clic!</text>

                    <text x="170" y="122" font-size="13" fill="#f7df1e" font-weight="bold" text-anchor="middle">¡Le da VIDA y dinamismo a la página!</text>
                    <text x="170" y="176" font-size="12" fill="#94a3b8" font-weight="bold" text-anchor="middle">El motor que responde a las acciones del usuario</text>
                </svg>`;

            case "FRAMEWORK":
                return `<svg viewBox="0 0 340 190" class="concept-drawing">
                    <rect x="65" y="35" width="210" height="110" rx="12" fill="#1e293b" stroke="#8b5cf6" stroke-width="3"/>
                    
                    <text x="170" y="70" font-size="32" text-anchor="middle">🧰 🧱</text>
                    <text x="170" y="100" font-size="13" fill="#8b5cf6" font-weight="bold" text-anchor="middle">Caja de Herramientas Listas</text>
                    <text x="170" y="120" font-size="11" fill="#cbd5e1" text-anchor="middle">(Piezas armadas para programar más rápido)</text>

                    <text x="170" y="176" font-size="12" fill="#94a3b8" font-weight="bold" text-anchor="middle">Estructura completa para construir apps en orden</text>
                </svg>`;

            case "FRONTEND":
                return `<svg viewBox="0 0 340 190" class="concept-drawing">
                    <rect x="70" y="25" width="200" height="115" rx="10" fill="#0f172a" stroke="#38bdf8" stroke-width="3"/>
                    
                    <rect x="85" y="40" width="170" height="22" rx="4" fill="#0284c7"/>
                    <text x="170" y="55" font-size="10" fill="#fff" font-weight="bold" text-anchor="middle">Encabezado de la App</text>

                    <rect x="85" y="72" width="75" height="48" rx="4" fill="#8b5cf6"/>
                    <text x="122" y="100" font-size="10" fill="#fff" font-weight="bold" text-anchor="middle">Imagen 🖼️</text>

                    <rect x="170" y="72" width="85" height="48" rx="4" fill="#10b981"/>
                    <text x="212" y="100" font-size="10" fill="#fff" font-weight="bold" text-anchor="middle">Botón 🔘</text>

                    <text x="270" y="145" font-size="32">👆</text>
                    <text x="170" y="176" font-size="12" fill="#94a3b8" font-weight="bold" text-anchor="middle">Todo lo que el usuario ve, toca e interactúa en la pantalla</text>
                </svg>`;

            case "REACT":
                return `<svg viewBox="0 0 340 190" class="concept-drawing">
                    <ellipse cx="170" cy="80" rx="80" ry="28" fill="none" stroke="#61dafb" stroke-width="3" transform="rotate(0, 170, 80)"/>
                    <ellipse cx="170" cy="80" rx="80" ry="28" fill="none" stroke="#61dafb" stroke-width="3" transform="rotate(60, 170, 80)"/>
                    <ellipse cx="170" cy="80" rx="80" ry="28" fill="none" stroke="#61dafb" stroke-width="3" transform="rotate(120, 170, 80)"/>
                    <circle cx="170" cy="80" r="14" fill="#61dafb"/>
                    
                    <text x="90" y="85" font-size="24">🧩</text>
                    <text x="250" y="85" font-size="24">🧩</text>

                    <text x="170" y="135" font-size="13" fill="#61dafb" font-weight="bold" text-anchor="middle">Arma páginas como un Rompecabezas</text>
                    <text x="170" y="176" font-size="12" fill="#94a3b8" font-weight="bold" text-anchor="middle">Crea interfaces uniendo piezas reutilizables</text>
                </svg>`;

            case "COMPONENTES":
                return `<svg viewBox="0 0 340 190" class="concept-drawing">
                    <rect x="60" y="25" width="220" height="30" rx="6" fill="#3b82f6" stroke="#fff" stroke-width="1.5"/>
                    <text x="170" y="45" font-size="11" fill="#fff" font-weight="bold" text-anchor="middle">🧱 Pieza 1: Menú (Navbar)</text>

                    <rect x="60" y="63" width="100" height="40" rx="6" fill="#8b5cf6" stroke="#fff" stroke-width="1.5"/>
                    <text x="110" y="87" font-size="11" fill="#fff" font-weight="bold" text-anchor="middle">🧱 Pieza 2: Tarjeta</text>

                    <rect x="170" y="63" width="110" height="40" rx="6" fill="#10b981" stroke="#fff" stroke-width="1.5"/>
                    <text x="225" y="87" font-size="11" fill="#fff" font-weight="bold" text-anchor="middle">🧱 Pieza 3: Botón</text>

                    <text x="170" y="130" font-size="20" text-anchor="middle">⬇️</text>
                    <text x="170" y="176" font-size="12" fill="#94a3b8" font-weight="bold" text-anchor="middle">Bloques estilo Lego que se unen para formar la app</text>
                </svg>`;

            case "DESVENTAJAS":
                return `<svg viewBox="0 0 340 190" class="concept-drawing">
                    <line x1="170" y1="35" x2="170" y2="130" stroke="#94a3b8" stroke-width="4"/>
                    <line x1="130" y1="130" x2="210" y2="130" stroke="#94a3b8" stroke-width="4"/>
                    
                    <line x1="80" y1="50" x2="260" y2="50" stroke="#f59e0b" stroke-width="4"/>

                    <rect x="45" y="80" width="80" height="35" rx="6" fill="rgba(16, 185, 129, 0.2)" stroke="#10b981"/>
                    <text x="85" y="102" font-size="11" fill="#10b981" font-weight="bold" text-anchor="middle">👍 Ventajas</text>

                    <rect x="215" y="80" width="90" height="35" rx="6" fill="rgba(244, 63, 94, 0.2)" stroke="#f43f5e"/>
                    <text x="260" y="102" font-size="11" fill="#f43f5e" font-weight="bold" text-anchor="middle">⚠️ Desventajas</text>

                    <text x="170" y="176" font-size="12" fill="#94a3b8" font-weight="bold" text-anchor="middle">Factores a considerar: Tiempo de aprender y peso de la app</text>
                </svg>`;

            case "PAGES":
                return `<svg viewBox="0 0 340 190" class="concept-drawing">
                    <text x="105" y="85" font-size="42" text-anchor="middle">🚀</text>
                    
                    <path d="M 135 80 L 195 80" stroke="#06b6d4" stroke-width="3" stroke-dasharray="5 5"/>
                    
                    <rect x="205" y="60" width="105" height="40" rx="20" fill="#0284c7" stroke="#fff" stroke-width="2"/>
                    <text x="257" y="85" font-size="13" fill="#fff" font-weight="bold" text-anchor="middle">🌐 Internet</text>

                    <text x="170" y="132" font-size="13" fill="#38bdf8" font-weight="bold" text-anchor="middle">¡Publica tu página gratis en 1 clic!</text>
                    <text x="170" y="176" font-size="12" fill="#94a3b8" font-weight="bold" text-anchor="middle">Muestra tu página al mundo entero con tu enlace GitHub Pages</text>
                </svg>`;

            case "DESARROLLO":
                return `<svg viewBox="0 0 340 190" class="concept-drawing">
                    <g transform="translate(170, 80)">
                        <rect x="-140" y="-35" width="60" height="50" rx="8" fill="#06b6d4"/>
                        <text x="-110" y="-15" font-size="16" text-anchor="middle">💡</text>
                        <text x="-110" y="5" font-size="10" fill="#fff" font-weight="bold" text-anchor="middle">1. Idea</text>

                        <rect x="-65" y="-35" width="60" height="50" rx="8" fill="#8b5cf6"/>
                        <text x="-35" y="-15" font-size="16" text-anchor="middle">💻</text>
                        <text x="-35" y="5" font-size="10" fill="#fff" font-weight="bold" text-anchor="middle">2. Código</text>

                        <rect x="10" y="-35" width="60" height="50" rx="8" fill="#f59e0b"/>
                        <text x="40" y="-15" font-size="16" text-anchor="middle">📦</text>
                        <text x="40" y="5" font-size="10" fill="#fff" font-weight="bold" text-anchor="middle">3. Git</text>

                        <rect x="85" y="-35" width="60" height="50" rx="8" fill="#10b981"/>
                        <text x="115" y="-15" font-size="16" text-anchor="middle">🚀</text>
                        <text x="115" y="5" font-size="10" fill="#fff" font-weight="bold" text-anchor="middle">4. Web</text>
                    </g>

                    <text x="170" y="176" font-size="12" fill="#94a3b8" font-weight="bold" text-anchor="middle">El camino completo en 4 pasos para crear y publicar tu web</text>
                </svg>`;

            default:
                return `<svg viewBox="0 0 340 190" class="concept-drawing"><text x="170" y="95" fill="#fff" text-anchor="middle">🎨 ${word}</text></svg>`;
        }
    }

    // ----------------------------------------------------------------------
    // 3. Application State Variables
    // ----------------------------------------------------------------------
    const GRID_SIZE = 15;
    let gridMatrix = [];
    let gridPlacements = [];
    let foundWords = new Set();

    // Selection States
    let isDragging = false;
    let startCell = null;
    let currentLineCells = [];

    let timerInterval = null;
    let secondsElapsed = 0;
    let score = 0;
    let soundEnabled = true;

    // ----------------------------------------------------------------------
    // 4. Audio Synthesizer (Web Audio API)
    // ----------------------------------------------------------------------
    let audioCtx = null;

    function initAudio() {
        if (!audioCtx) {
            const AudioContext = window.AudioContext || window.webkitAudioContext;
            if (AudioContext) {
                audioCtx = new AudioContext();
            }
        }
    }

    function playTone(freq, type = 'sine', duration = 0.1, gainVal = 0.15) {
        if (!soundEnabled) return;
        initAudio();
        if (!audioCtx) return;

        try {
            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();

            osc.type = type;
            osc.frequency.setValueAtTime(freq, audioCtx.currentTime);

            gain.gain.setValueAtTime(gainVal, audioCtx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration);

            osc.connect(gain);
            gain.connect(audioCtx.destination);

            osc.start();
            osc.stop(audioCtx.currentTime + duration);
        } catch (e) {
            // Audio fallback
        }
    }

    function playSuccessChord() {
        if (!soundEnabled) return;
        const notes = [523.25, 659.25, 783.99, 1046.50];
        notes.forEach((freq, idx) => {
            setTimeout(() => {
                playTone(freq, 'triangle', 0.25, 0.2);
            }, idx * 60);
        });
    }

    function playVictoryFanfare() {
        if (!soundEnabled) return;
        const melody = [
            { f: 523.25, d: 0.15 }, { f: 659.25, d: 0.15 }, { f: 783.99, d: 0.15 },
            { f: 1046.50, d: 0.4 }
        ];
        melody.forEach((note, idx) => {
            setTimeout(() => {
                playTone(note.f, 'triangle', note.d, 0.3);
            }, idx * 150);
        });
    }

    // ----------------------------------------------------------------------
    // 5. Grid Generation Engine
    // ----------------------------------------------------------------------
    const DIRECTIONS = [
        { dx: 1,  dy: 0 },  // Horizontal Right
        { dx: -1, dy: 0 },  // Horizontal Left
        { dx: 0,  dy: 1 },  // Vertical Down
        { dx: 0,  dy: -1 }, // Vertical Up
        { dx: 1,  dy: 1 },  // Diagonal Down-Right
        { dx: -1, dy: -1 }, // Diagonal Up-Left
        { dx: -1, dy: 1 },  // Diagonal Down-Left
        { dx: 1,  dy: -1 }  // Diagonal Up-Right
    ];

    function generateGrid() {
        let attempts = 0;
        let success = false;

        const wordsList = QUESTIONS_DATA.map(q => q.word).sort((a, b) => b.length - a.length);

        while (!success && attempts < 100) {
            attempts++;
            gridMatrix = Array.from({ length: GRID_SIZE }, () => Array(GRID_SIZE).fill(''));
            gridPlacements = [];
            let allPlaced = true;

            for (const word of wordsList) {
                let placed = false;
                let wordAttempts = 0;

                while (!placed && wordAttempts < 250) {
                    wordAttempts++;
                    const dir = DIRECTIONS[Math.floor(Math.random() * DIRECTIONS.length)];
                    const startR = Math.floor(Math.random() * GRID_SIZE);
                    const startC = Math.floor(Math.random() * GRID_SIZE);

                    const endR = startR + dir.dy * (word.length - 1);
                    const endC = startC + dir.dx * (word.length - 1);

                    if (endR >= 0 && endR < GRID_SIZE && endC >= 0 && endC < GRID_SIZE) {
                        let canPlace = true;
                        for (let i = 0; i < word.length; i++) {
                            const r = startR + dir.dy * i;
                            const c = startC + dir.dx * i;
                            const currentChar = gridMatrix[r][c];
                            if (currentChar !== '' && currentChar !== word[i]) {
                                canPlace = false;
                                break;
                            }
                        }

                        if (canPlace) {
                            const cells = [];
                            for (let i = 0; i < word.length; i++) {
                                const r = startR + dir.dy * i;
                                const c = startC + dir.dx * i;
                                gridMatrix[r][c] = word[i];
                                cells.push({ r, c });
                            }
                            gridPlacements.push({ word, cells });
                            placed = true;
                        }
                    }
                }

                if (!placed) {
                    allPlaced = false;
                    break;
                }
            }

            if (allPlaced) {
                success = true;
            }
        }

        const SPANISH_ALPHABET = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
        for (let r = 0; r < GRID_SIZE; r++) {
            for (let c = 0; c < GRID_SIZE; c++) {
                if (gridMatrix[r][c] === '') {
                    gridMatrix[r][c] = SPANISH_ALPHABET[Math.floor(Math.random() * SPANISH_ALPHABET.length)];
                }
            }
        }
    }

    // ----------------------------------------------------------------------
    // 6. DOM Rendering & UI Bindings
    // ----------------------------------------------------------------------
    const gridContainer = document.getElementById('word-search-grid');
    const questionsListEl = document.getElementById('questions-list');
    const wordsChipListEl = document.getElementById('words-chip-list');
    const selectionTextEl = document.getElementById('current-selection');
    const foundCountEl = document.getElementById('found-count');
    const timerDisplayEl = document.getElementById('timer-display');
    const scoreDisplayEl = document.getElementById('score-display');
    const progressFillEl = document.getElementById('progress-fill');

    // Word Detail Modal elements
    const wordDetailModal = document.getElementById('word-detail-modal');
    const detailWordTitleEl = document.getElementById('detail-word-title');
    const detailQuestionTextEl = document.getElementById('detail-question-text');
    const detailExplanationTextEl = document.getElementById('detail-explanation-text');
    const detailDrawingEl = document.getElementById('detail-drawing');

    function renderGrid() {
        gridContainer.innerHTML = '';
        for (let r = 0; r < GRID_SIZE; r++) {
            for (let c = 0; c < GRID_SIZE; c++) {
                const cellEl = document.createElement('div');
                cellEl.classList.add('cell');
                cellEl.dataset.row = r;
                cellEl.dataset.col = c;
                cellEl.textContent = gridMatrix[r][c];

                cellEl.addEventListener('pointerdown', (e) => onCellPointerDown(e, r, c));
                cellEl.addEventListener('pointerenter', (e) => onCellPointerEnter(e, r, c));

                gridContainer.appendChild(cellEl);
            }
        }
    }

    function renderWordsChips() {
        wordsChipListEl.innerHTML = '';
        QUESTIONS_DATA.forEach(q => {
            const chip = document.createElement('span');
            chip.classList.add('word-chip');
            if (foundWords.has(q.word)) chip.classList.add('found');
            chip.id = `chip-${q.word}`;
            chip.textContent = foundWords.has(q.word) ? `${q.word} ✓` : q.word;

            // Click chip to open concept detail
            chip.addEventListener('click', () => {
                showWordDetailModal(q);
            });

            wordsChipListEl.appendChild(chip);
        });
    }

    window.addEventListener('pointermove', (e) => {
        if (!isDragging || !startCell) return;
        const targetEl = document.elementFromPoint(e.clientX, e.clientY);
        if (targetEl && targetEl.classList.contains('cell')) {
            const r = parseInt(targetEl.dataset.row);
            const c = parseInt(targetEl.dataset.col);
            if (!isNaN(r) && !isNaN(c)) {
                onCellHoverOrDrag(r, c);
            }
        }
    });

    window.addEventListener('pointerup', () => {
        if (isDragging) {
            isDragging = false;
            if (currentLineCells.length > 1) {
                checkSelectedWord();
            }
            if (!startCell) {
                clearSelectionHighlight();
                selectionTextEl.textContent = "Selecciona o desliza en el tablero...";
            }
        }
    });

    function renderQuestionCards() {
        questionsListEl.innerHTML = '';
        QUESTIONS_DATA.forEach(q => {
            const isFound = foundWords.has(q.word);

            const card = document.createElement('div');
            card.classList.add('q-card');
            if (isFound) card.classList.add('found');
            card.id = `q-card-${q.word}`;
            card.dataset.word = q.word;

            card.innerHTML = `
                <div class="q-card-header">
                    <span class="q-num">Pregunta ${q.id}</span>
                    <span class="q-word-badge" id="word-badge-${q.word}">${q.word}</span>
                    <div class="q-status-icon">${isFound ? '✓' : '🔍'}</div>
                </div>
                <div class="q-clue-title">${q.title}</div>
                <div class="q-clue-text" id="clue-text-${q.word}">${q.fullAnswer}</div>
                <div class="q-card-footer">
                    <span class="view-drawing-btn">🎨 Ver Pregunta & Dibujo</span>
                </div>
            `;

            // Click card to open word concept detail modal
            card.addEventListener('click', () => {
                showWordDetailModal(q);
            });

            questionsListEl.appendChild(card);
        });
    }

    function renderStudyGuide() {
        const bodyEl = document.getElementById('study-body');
        bodyEl.innerHTML = '';
        QUESTIONS_DATA.forEach(q => {
            const item = document.createElement('div');
            item.classList.add('study-item');
            item.innerHTML = `
                <div class="study-item-header">
                    <h3>${q.title}</h3>
                    <span class="word-tag">Palabra: ${q.word}</span>
                </div>
                <div class="study-drawing-thumb">
                    ${getConceptDrawingSVG(q.word)}
                </div>
                <p><strong>Pregunta:</strong> ${q.question}</p>
                <p><strong>Respuesta:</strong> ${q.fullAnswer}</p>
            `;
            bodyEl.appendChild(item);
        });
    }

    // ----------------------------------------------------------------------
    // 7. Concept Detail Modal (Shows Question, Explanation & Drawing)
    // ----------------------------------------------------------------------
    function showWordDetailModal(questionObj) {
        detailWordTitleEl.textContent = questionObj.word;
        detailQuestionTextEl.textContent = questionObj.question || questionObj.title;
        detailExplanationTextEl.textContent = questionObj.fullAnswer;
        detailDrawingEl.innerHTML = getConceptDrawingSVG(questionObj.word);

        wordDetailModal.classList.add('active');
        playTone(520, 'sine', 0.12, 0.15);
    }

    function hideWordDetailModal() {
        wordDetailModal.classList.remove('active');
    }

    // ----------------------------------------------------------------------
    // 8. Selection Logic
    // ----------------------------------------------------------------------

    function onCellPointerDown(e, r, c) {
        initAudio();
        isDragging = true;

        if (!startCell) {
            setStartCell({ r, c });
        } else {
            if (startCell.r === r && startCell.c === c) {
                clearAllSelectionState();
            } else {
                const line = getStraightLine(startCell.r, startCell.c, r, c);
                if (line) {
                    updateSelection(line);
                    checkSelectedWord();
                } else {
                    setStartCell({ r, c });
                }
            }
        }
    }

    function onCellPointerEnter(e, r, c) {
        if (startCell) {
            onCellHoverOrDrag(r, c);
        }
    }

    function onCellHoverOrDrag(r, c) {
        if (!startCell) return;
        const line = getStraightLine(startCell.r, startCell.c, r, c);
        if (line) {
            updateSelection(line);
        }
    }

    function setStartCell(cell) {
        clearSelectionHighlight();
        startCell = cell;

        const el = getCellElement(cell.r, cell.c);
        if (el) el.classList.add('start-cell');

        currentLineCells = [startCell];
        selectionTextEl.textContent = gridMatrix[cell.r][cell.c];
        playTone(350, 'sine', 0.08, 0.12);
    }

    function clearAllSelectionState() {
        clearSelectionHighlight();
        startCell = null;
        currentLineCells = [];
        selectionTextEl.textContent = "Selecciona o desliza en el tablero...";
    }

    function getStraightLine(r1, c1, r2, c2) {
        const dr = r2 - r1;
        const dc = c2 - c1;

        const absR = Math.abs(dr);
        const absC = Math.abs(dc);

        if (absR !== 0 && absC !== 0 && absR !== absC) {
            return null;
        }

        const steps = Math.max(absR, absC);
        if (steps === 0) return [{ r: r1, c: c1 }];

        const stepR = dr === 0 ? 0 : dr / steps;
        const stepC = dc === 0 ? 0 : dc / steps;

        const line = [];
        for (let i = 0; i <= steps; i++) {
            line.push({
                r: r1 + stepR * i,
                c: c1 + stepC * i
            });
        }
        return line;
    }

    function updateSelection(lineCells) {
        clearSelectionHighlight();
        currentLineCells = lineCells;

        let wordStr = "";
        lineCells.forEach(cell => {
            const el = getCellElement(cell.r, cell.c);
            if (el) {
                if (startCell && cell.r === startCell.r && cell.c === startCell.c) {
                    el.classList.add('start-cell');
                } else {
                    el.classList.add('selecting');
                }
                wordStr += gridMatrix[cell.r][cell.c];
            }
        });

        selectionTextEl.textContent = wordStr;
        playTone(300 + lineCells.length * 30, 'sine', 0.04, 0.08);
    }

    function clearSelectionHighlight() {
        document.querySelectorAll('.cell.selecting, .cell.start-cell').forEach(el => {
            el.classList.remove('selecting', 'start-cell');
        });
    }

    function getCellElement(r, c) {
        return gridContainer.querySelector(`.cell[data-row="${r}"][data-col="${c}"]`);
    }

    // ----------------------------------------------------------------------
    // 9. Word Match & Completion
    // ----------------------------------------------------------------------
    function checkSelectedWord() {
        if (!currentLineCells || currentLineCells.length < 2) return;

        const wordSelected = currentLineCells.map(c => gridMatrix[c.r][c.c]).join('');
        const wordReversed = wordSelected.split('').reverse().join('');

        let matchedWordObj = null;

        QUESTIONS_DATA.forEach(q => {
            if (!foundWords.has(q.word)) {
                if (q.word === wordSelected || q.word === wordReversed) {
                    matchedWordObj = q;
                }
            }
        });

        if (matchedWordObj) {
            onWordFound(matchedWordObj, currentLineCells);
            clearAllSelectionState();
        } else {
            setTimeout(() => {
                if (!isDragging) {
                    clearAllSelectionState();
                }
            }, 300);
        }
    }

    function onWordFound(questionObj, cells) {
        foundWords.add(questionObj.word);
        playSuccessChord();

        // Mark cells as found permanently
        cells.forEach(cell => {
            const el = getCellElement(cell.r, cell.c);
            if (el) {
                el.classList.remove('hint', 'selecting', 'start-cell');
                el.classList.add('found');
            }
        });

        // Mark Chip Bank
        const chip = document.getElementById(`chip-${questionObj.word}`);
        if (chip) {
            chip.classList.add('found');
            chip.textContent = `${questionObj.word} ✓`;
        }

        // Unlock Question Card
        const cardEl = document.getElementById(`q-card-${questionObj.word}`);
        if (cardEl) {
            cardEl.classList.add('found');
            const icon = cardEl.querySelector('.q-status-icon');
            if (icon) icon.textContent = '✓';
            cardEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }

        // Stats & Score calculation
        score += 150 + Math.max(0, 100 - secondsElapsed);
        updateStatsDisplay();

        // Open Concept Popup Modal with Question, Explanation & Super Clear Drawing!
        setTimeout(() => {
            showWordDetailModal(questionObj);
        }, 150);

        // Check Victory
        if (foundWords.size === QUESTIONS_DATA.length) {
            setTimeout(() => {
                triggerVictory();
            }, 1800);
        }
    }

    // ----------------------------------------------------------------------
    // 10. Stats & Timer
    // ----------------------------------------------------------------------
    function startTimer() {
        clearInterval(timerInterval);
        secondsElapsed = 0;
        timerInterval = setInterval(() => {
            secondsElapsed++;
            const mins = String(Math.floor(secondsElapsed / 60)).padStart(2, '0');
            const secs = String(secondsElapsed % 60).padStart(2, '0');
            timerDisplayEl.textContent = `${mins}:${secs}`;
        }, 1000);
    }

    function updateStatsDisplay() {
        foundCountEl.textContent = foundWords.size;
        scoreDisplayEl.textContent = score;

        const progressPct = (foundWords.size / QUESTIONS_DATA.length) * 100;
        progressFillEl.style.width = `${progressPct}%`;
    }

    // ----------------------------------------------------------------------
    // 11. Victory Modal & Confetti
    // ----------------------------------------------------------------------
    function triggerVictory() {
        clearInterval(timerInterval);
        playVictoryFanfare();

        const mins = String(Math.floor(secondsElapsed / 60)).padStart(2, '0');
        const secs = String(secondsElapsed % 60).padStart(2, '0');

        document.getElementById('final-time').textContent = `${mins}:${secs}`;
        document.getElementById('final-score').textContent = score;

        const victoryModal = document.getElementById('victory-modal');
        victoryModal.classList.add('active');

        startConfetti();
    }

    function startConfetti() {
        const canvas = document.getElementById('confetti-canvas');
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const particles = [];
        const colors = ['#06b6d4', '#8b5cf6', '#10b981', '#f59e0b', '#f43f5e'];

        for (let i = 0; i < 120; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height - canvas.height,
                color: colors[Math.floor(Math.random() * colors.length)],
                size: Math.random() * 8 + 4,
                speedY: Math.random() * 3 + 2,
                speedX: Math.random() * 2 - 1,
                rotation: Math.random() * 360,
                rotSpeed: Math.random() * 6 - 3
            });
        }

        let animId;
        function render() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach(p => {
                p.y += p.speedY;
                p.x += p.speedX;
                p.rotation += p.rotSpeed;

                ctx.save();
                ctx.translate(p.x, p.y);
                ctx.rotate((p.rotation * Math.PI) / 180);
                ctx.fillStyle = p.color;
                ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
                ctx.restore();
            });

            if (particles.some(p => p.y < canvas.height)) {
                animId = requestAnimationFrame(render);
            }
        }
        render();
    }

    // ----------------------------------------------------------------------
    // 12. Initialization & Event Listeners
    // ----------------------------------------------------------------------
    function initGame() {
        foundWords.clear();
        score = 0;
        secondsElapsed = 0;
        clearAllSelectionState();

        generateGrid();
        renderGrid();
        renderWordsChips();
        renderQuestionCards();
        renderStudyGuide();

        updateStatsDisplay();
        startTimer();
    }

    // Header buttons
    document.getElementById('btn-restart').addEventListener('click', () => {
        playTone(600, 'sine', 0.1);
        initGame();
    });

    const soundBtn = document.getElementById('btn-sound');
    soundBtn.addEventListener('click', () => {
        soundEnabled = !soundEnabled;
        soundBtn.classList.toggle('active', soundEnabled);
        soundBtn.querySelector('.sound-on').style.display = soundEnabled ? 'inline' : 'none';
        soundBtn.querySelector('.sound-off').style.display = soundEnabled ? 'none' : 'inline';
    });

    const studyModal = document.getElementById('study-modal');
    document.getElementById('btn-study-guide').addEventListener('click', () => {
        studyModal.classList.add('active');
    });
    document.getElementById('btn-close-study').addEventListener('click', () => {
        studyModal.classList.remove('active');
    });

    // Word Detail modal close listeners
    document.getElementById('btn-close-word-detail').addEventListener('click', hideWordDetailModal);
    document.getElementById('btn-continue-game').addEventListener('click', hideWordDetailModal);

    wordDetailModal.addEventListener('click', (e) => {
        if (e.target === wordDetailModal) {
            hideWordDetailModal();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            hideWordDetailModal();
            studyModal.classList.remove('active');
            victoryModal.classList.remove('active');
        }
    });

    // Victory modal buttons
    const victoryModal = document.getElementById('victory-modal');
    document.getElementById('btn-play-again').addEventListener('click', () => {
        victoryModal.classList.remove('active');
        initGame();
    });
    document.getElementById('btn-view-answers').addEventListener('click', () => {
        victoryModal.classList.remove('active');
        studyModal.classList.add('active');
    });

    // Start Game
    initGame();
});
