const detallesDias = {
    1: { 
        tag: "1 DE SEPTIEMBRE • PARA TI", 
        titulo: "✨ El inicio de este pequeño detalle", 
        texto: "Septiembre es un mes muy especial porque nos acerca al día en que llegaste al mundo. Quise regalarte algo hecho desde cero con todo mi cariño: una cuenta regresiva donde cada día guarda una razón, un motivo o un detalle que te hace única. Espero que disfrutes ir abriendo este rincón en las estrellas tanto como yo disfruté creándolo para ti." 
    },
    
    2: { 
        tag: "2 DE SEPTIEMBRE • TUS CUALIDADES", 
        titulo: "✨ Tu luz propia", 
        texto: "Tienes una forma de ser que ilumina cualquier espacio sin siquiera intentarlo. Tu presencia transmite una paz y una energía bonita que hace que todo a tu alrededor sea mejor." 
    },

    3: { 
        tag: "3 DE SEPTIEMBRE • TUS CUALIDADES", 
        titulo: "🎵 'No Surprises' - Radiohead", 
        texto: "Me encanta lo mucho que disfrutas la música y ese mundo propio que creas cuando te pones los audífonos; hasta el punto de dejar ir el bus solo para caminar un rato más escuchando tus canciones. Te dejo este temazo para acompañar alguna de tus caminatas.",
        musica: "cancion1.mp3",
        spotify: "https://open.spotify.com/intl-es/track/10nyNJ6zNy2YVYLrcwLccB?si=ad527438cf3a40a8" 
    },

    4: { 
        tag: "4 DE SEPTIEMBRE • TUS CUALIDADES", 
        titulo: "✨ Tu sonrisa", 
        texto: "Aunque la mayor parte del tiempo eres súper seria y tranquila, cuando sonríes es una completa locura. Tienes una de esas sonrisas genuinas que cambian por completo el ambiente y tienen el poder de alegrarle el día a cualquiera." 
    },

    5: { 
        tag: "5 DE SEPTIEMBRE • TUS CUALIDADES", 
        titulo: "✨ Lo fácil que es hablar contigo", 
        texto: "Eres una persona muy única. Me encanta que contigo se puede hablar de cualquier tema con total naturalidad, sin filtros, sin rodeos y siendo uno mismo." 
    },

    6: { 
        tag: "6 DE SEPTIEMBRE • TUS CUALIDADES", 
        titulo: "✨ Tu curiosidad (y tu prisa)", 
        texto: "Me encanta lo curiosa que eres y las ganas que siempre tienes de aprender cosas nuevas. Lo único es que la paciencia no es exactamente tu fuerte, porque cuando te enfocas en algo quieres terminarlo ¡ya! Pero esa intensidad para todo lo que haces es genial." 
    },

    7: { 
        tag: "7 DE SEPTIEMBRE • TUS CUALIDADES", 
        titulo: "✨ Como te veo yo", 
        texto: "Tienes una belleza tan auténtica y natural que no necesita filtros ni arreglos. A veces me gustaría que pudieras verte por un segundo a través de mis ojos, para que te dieras cuenta de lo increíble y linda que te ves siempre, tal y como eres." 
    },

    8: { 
        tag: "8 DE SEPTIEMBRE • RECUERDOS", 
        titulo: "🎵 '444' - Yan Block", 
        texto: "Me acuerdo clarísimo de la primera vez que me compartiste de tu música más curiosa. Me decías que seguro no me iba a gustar, pero terminó siendo todo lo contrario. Me encantó que te animaras a mostrármela sin filtros, y esta canción en especial se me quedó grabada desde ese día.",
        musica: "cancion2.mp3",
        spotify: "https://open.spotify.com/intl-es/track/1o4xkdBe0RjSf2u6VXi4OI?si=456d8df2f54a4d17"
    },

    9: { 
        tag: "9 DE SEPTIEMBRE • RECUERDOS", 
        titulo: "✨ Tu indecisión con las fotos", 
        texto: "Me acuerdo muchísimo de la primera vez que me pediste que eligiera en qué foto salías más bonita. No sabes cuánto me costó elegir una sola, porque la verdad es que te ves increíble en todas. Hasta dudando de qué foto subir, te ves superbién." 
    },
  
    10: { 
        tag: "10 DE SEPTIEMBRE • RECUERDOS", 
        titulo: "✨ Agujeros de gusano y la U", 
        texto: "Otro recuerdo que tengo contigo es de cuando terminamos ese ciclo en la universidad y nos quedamos hablando del universo. Aunque ya nos conocíamos de antes, esa charla con la hoja doblada para los agujeros de gusano fue de las primeras veces que sentí que en verdad empezaba a conocerte. Me encantó descubrir lo mucho que compartíamos esa curiosidad por el espacio." 
    },

    11: { 
        tag: "11 DE SEPTIEMBRE • RECUERDOS", 
        titulo: "🌌 Venus cerca de la Luna", 
        texto: "Desde que empezó a salir el tema del espacio y lo de la app de Stellarium, mirar al cielo se volvió una costumbre bonita. Me encanta cuando nos ponemos a identificar estrellas y siempre terminamos reconociendo a Venus brillando en el cielo. Cada vez que miro arriba, me acuerdo de ti." 
    },

    12: { 
        tag: "12 DE SEPTIEMBRE • RECUERDOS", 
        titulo: "⚡ Las desveladas de estudio", 
        texto: "Estudiar para los exámenes de la carrera a veces se vuelve superpesado, pero desvelarnos juntos repasando temas y haciendo ejercicios lo hace mil veces más llevadero. Se agradece un montón tener a alguien con quien compartir ese estrés y pasar el rato mientras estudiamos.", 
    },

    13: { 
        tag: "13 DE SEPTIEMBRE • RECUERDOS", 
        titulo: "🎬 La noche de película por Meet", 
        texto: "Me acuerdo cuando organizamos una llamada por Meet para ver Proyecto fin del mundo. Aunque no la terminamos porque te quedaste dormida a la mitad ajjaja, fue un momento superbonito. Me encantó compartir ese rato viendo algo que nos gustaba a los dos.", 
    },

    14: { 
        tag: "14 DE SEPTIEMBRE • RECUERDOS", 
        titulo: "✨ Cada momento cuenta", 
        texto: "Hemos pasado por muchas cosas y conversado de mil temas, y la verdad guardo cada recuerdo con mucho cariño. Eres una persona genial y muy única, de esas con las que da gusto compartir momentos y tenerlas cerca en la vida.", 
    },

    15: { 
        tag: "15 DE SEPTIEMBRE • DESEOS Y SUEÑOS", 
        titulo: "✨ Un paso más cerca de la meta", 
        texto: "Ya estamos en octavo ciclo y falta poquísimo para terminar la carrera. Sé todo lo que te has esforzado para llegar hasta aquí y lo fuerte que has sido en el camino. Deseo que continues como hasta ahora y este ciclo signifique un paso más hacia tus metas y sueños. ¡Te lo mereces!", 
    },

    16: { 
        tag: "16 DE SEPTIEMBRE • DESEOS Y SUEÑOS", 
        titulo: "🚀 Esa curiosidad por aprender", 
        texto: "Me encanta cómo eres cuando algo de tecnología o alguna cosa curiosa te llama la atención: te metes de lleno a entenderlo. Deseo que jamás pierdas esas ganas de descubrir el mundo y de seguir aprendiendo todo lo que te apasione.", 
    },

    17: { 
        tag: "17 DE SEPTIEMBRE • DESEOS Y SUEÑOS", 
        titulo: "✨ El motor de tus días", 
        texto: "Admiro enormemente lo luchadora y dedicada que eres cada día pensando en el futuro de tu Evan. Deseo que la vida te recompense todo ese esfuerzo y que pronto puedas cumplir ese sueño hermoso de llevarlo a viajar y conocer juntos lugares mágicos como Disney.",
    },

    18: { 
        tag: "18 DE SEPTIEMBRE • DESEOS Y SUEÑOS", 
        titulo: "🌌 Cielos lejanos", 
        texto: "Ojalá que la vida te lleve a viajar mucho y a conocer esos lugares donde las estrellas y las auroras boreales se ven increíbles. Te deseo muchos caminos nuevos, paisajes inolvidables y cielos despejados para contemplar.",
    },

    19: { 
        tag: "19 DE SEPTIEMBRE • DESEOS Y SUEÑOS", 
        titulo: "✨ Tranquilidad para tu corazón", 
        texto: "Más allá de cualquier meta académica o proyecto, mi mayor deseo para ti es que encuentres tranquilidad y calma. Que te liberes de cualquier peso del pasado y recuerdes que mereces momentos bonitos, paz y gente que valore todo lo bonito que hay en ti.",
    },

    20: { 
        tag: "20 DE SEPTIEMBRE • DESEOS Y SUEÑOS", 
        titulo: "✨ Espacio para ti", 
        texto: "Entre las clases, las desveladas, los proyectos y todas tus responsabilidades cotidianas, te deseo que este nuevo año encuentres más momentos solo para ti. Que tengas esos espacios de pausa para tomarte algo tranquila, escuchar tu música, reírte sin prisa y simplemente disfrutar el día a día sin cargar con más de la cuenta.",
    },

    21: { 
        tag: "21 DE SEPTIEMBRE • DESEOS Y SUEÑOS", 
        titulo: "💫 Lo mucho que vales", 
        texto: "Eres una mujer increíblemente fuerte, inteligente y con un corazón enorme. A veces la rutina o los días pesados hacen que lo olvidemos, pero de verdad eres alguien única en este universo. Para este nuevo año que estás por empezar, mi deseo más sincero es que jamás dudes de todo lo que vales, que confíes siempre en la capacidad gigantesca que tienes para superar cualquier cosa y que te convenzas de que te mereces puras cosas bonitas y paz en tu vida.",
    },

    22: { 
        tag: "22 DE SEPTIEMBRE • LA CUENTA REGRESIVA", 
        titulo: "⏳ A 6 días de tu día", 
        texto: "Ya entramos oficialmente en la semana de tu cumpleaños. Solo quería aprovechar hoy para decirte lo genial que ha sido coincidir contigo en la universidad y en la vida. Gracias por cada charla, por cada risa y por estar siempre ahí.",
    },

    23: { 
        tag: "23 DE SEPTIEMBRE • LA CUENTA REGRESIVA", 
        titulo: "✨ Tu tranquilidad contagia", 
        texto: " Faltan solo 5 días y hoy quiero agradecerte por la paz que transmites. Aunque a veces sientas que el día a día es pesado, tienes una forma de ser que hace que los momentos compartidos se sientan tranquilos y bonitos. Da gusto tenerte cerca.",
    },

    24: { 
        tag: "24 DE SEPTIEMBRE • LA CUENTA REGRESIVA", 
        titulo: "⚡ Compañeros de batalla", 
        texto: " A 4 días de tu cumpleaños, me puse a pensar en todas las desveladas, los exámenes y el estrés que hemos compartido en la carrera. Gracias por ser una persona tan auténtica; contigo todas esas moches se hacen mil veces más ligeras.",
    },

    25: { 
        tag: "25 DE SEPTIEMBRE • LA CUENTA REGRESIVA", 
        titulo: "🎧 Por más momentos sencillos", 
        texto: " Estamos a nada ¡solo 3 días!. Gracias por esos momentos simples pero memorables, como cuando nos quedamos viendo una peli aunque te quedes dormida, o cuando compartimos canciones. Son esos pequeños detalles los que de verdad valen la pena.",
    },

    26: { 
        tag: "26 DE SEPTIEMBRE • LA CUENTA REGRESIVA", 
        titulo: "💫 A 2 días del gran día", 
        texto: "Ya casi llega tu día. Gracias por ser una persona tan sincera, tan única y por dejarme conocer esa versión tuya que pocos ven. De verdad me alegra un montón ver cómo vas creciendo y logrando todo lo que te propones.",
    },

    27: { 
        tag: "27 DE SEPTIEMBRE • LA CUENTA REGRESIVA", 
        titulo: "🌙 La víspera", 
        texto: "Mañana es tu día. Hoy solo quiero que descanses, que te desconectes un ratito del estrés y que recuerdes lo mucho que se te quiere y aprecia. Gracias por estar en mi vida y por ser tal cual eres. Mañana celebramos tu universo.",
    },

    28: { 
        tag: "28 DE SEPTIEMBRE • LA CUENTA REGRESIVA", 
        titulo: "🎂 ¡Feliz cumpleaños!", 
        texto: "¡Feliz cumpleaños! Hoy se termina esta cuenta regresiva que llevo un mes entero preparando en secreto para ti, pensando en cada detalle para sacarte al menos una sonrisa. Te deseo de corazón un año lleno de risas, salud, paz, viajes, noches iluminadas por las estrellas y todos los triunfos que te mereces junto a tu Evan. Que nunca se te olvide lo increíble, valiosa y única que eres en este universo. Disfruta muchísimo tu día, ¡te lo mereces todo!",
    },
    
};

const container = document.getElementById('canvas-container');
const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);
const startCameraPos = new THREE.Vector3(0, 0, 35);
const galaxyCameraPos = new THREE.Vector3(0, 22, 38);
camera.position.copy(startCameraPos);

const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
container.appendChild(renderer.domElement);

const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;
controls.maxDistance = 60;
controls.minDistance = 4;
controls.target.set(0, 0, 0);
controls.enabled = false;

const introStarCount = 5000;
const introStarGeo = new THREE.BufferGeometry();
const introStarPositions = new Float32Array(introStarCount * 3);

for (let i = 0; i < introStarCount * 3; i += 3) {
    introStarPositions[i] = (Math.random() - 0.5) * 200;
    introStarPositions[i + 1] = (Math.random() - 0.5) * 200;
    introStarPositions[i + 2] = (Math.random() - 0.5) * 200;
}
introStarGeo.setAttribute('position', new THREE.BufferAttribute(introStarPositions, 3));
const introStarMat = new THREE.PointsMaterial({ size: 0.3, color: 0xffffff, transparent: true, opacity: 0.8 });
const globalStars = new THREE.Points(introStarGeo, introStarMat);
scene.add(globalStars);


function createStarTexture(isGold) {
    const canvas = document.createElement('canvas');
    canvas.width = 256;
    canvas.height = 256;
    const ctx = canvas.getContext('2d');
    const cx = 128, cy = 128;

    const mainColor = isGold ? 'rgba(255, 215, 0, ' : 'rgba(180, 235, 255, ';

    const radGlow = ctx.createRadialGradient(cx, cy, 0, cx, cy, 120);
    radGlow.addColorStop(0, mainColor + '1)');
    radGlow.addColorStop(0.2, mainColor + '0.5)');
    radGlow.addColorStop(1, 'transparent');
    ctx.fillStyle = radGlow;
    ctx.fillRect(0, 0, 256, 256);

    ctx.save();
    ctx.translate(cx, cy);
    ctx.fillStyle = '#ffffff';
    for (let i = 0; i < 2; i++) {
        ctx.beginPath();
        ctx.ellipse(0, 0, 120, 6, i * Math.PI / 2, 0, Math.PI * 2);
        ctx.fill();
    }
    ctx.restore();

    const coreGlow = ctx.createRadialGradient(cx, cy, 0, cx, cy, 20);
    coreGlow.addColorStop(0, '#ffffff');
    coreGlow.addColorStop(1, mainColor + '0.8)');
    ctx.fillStyle = coreGlow;
    ctx.beginPath();
    ctx.arc(cx, cy, 20, 0, Math.PI * 2);
    ctx.fill();

    return new THREE.CanvasTexture(canvas);
}

function createNumberTexture(number) {
    const canvas = document.createElement('canvas');
    canvas.width = 128;
    canvas.height = 128;
    const ctx = canvas.getContext('2d');

    ctx.font = 'Bold 55px Rajdhani, sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillStyle = '#ffffff';
    ctx.shadowColor = 'rgba(0, 217, 255, 0.9)';
    ctx.shadowBlur = 12;
    ctx.fillText(number, 64, 64);

    return new THREE.CanvasTexture(canvas);
}

function createRealisticEarthTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = 2048;
    canvas.height = 1024;
    const ctx = canvas.getContext('2d');

    const oceanGrad = ctx.createLinearGradient(0, 0, 0, 1024);
    oceanGrad.addColorStop(0, '#020b18');
    oceanGrad.addColorStop(0.5, '#0a2342');
    oceanGrad.addColorStop(1, '#020b18');
    ctx.fillStyle = oceanGrad;
    ctx.fillRect(0, 0, 2048, 1024);

    const continentColors = ['#2d5a27', '#3a6332', '#1e3f1a', '#8b7355'];
    for (let i = 0; i < 400; i++) {
        const cx = Math.random() * 2048;
        const cy = 150 + Math.random() * 724;
        const radius = 40 + Math.random() * 120;

        ctx.fillStyle = continentColors[Math.floor(Math.random() * continentColors.length)];
        ctx.beginPath();
        for (let a = 0; a < Math.PI * 2; a += 0.3) {
            const r = radius * (0.6 + Math.random() * 0.8);
            const x = cx + Math.cos(a) * r;
            const y = cy + Math.sin(a) * r;
            if (a === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
        }
        ctx.closePath();
        ctx.fill();
    }

    ctx.fillStyle = '#e8f4f8';
    ctx.fillRect(0, 0, 2048, 90);
    ctx.fillRect(0, 934, 2048, 90);

    return new THREE.CanvasTexture(canvas);
}

function createCloudTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = 2048;
    canvas.height = 1024;
    const ctx = canvas.getContext('2d');

    ctx.fillStyle = 'rgba(255, 255, 255, 0)';
    ctx.fillRect(0, 0, 2048, 1024);

    ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
    for (let i = 0; i < 250; i++) {
        const x = Math.random() * 2048;
        const y = Math.random() * 1024;
        const rx = 50 + Math.random() * 150;
        const ry = 10 + Math.random() * 30;

        ctx.beginPath();
        ctx.ellipse(x, y, rx, ry, Math.random() * Math.PI, 0, Math.PI * 2);
        ctx.fill();
    }

    return new THREE.CanvasTexture(canvas);
}
const earthGroup = new THREE.Group();
earthGroup.position.set(-15, 0, 10);

const earthGeo = new THREE.SphereGeometry(12, 64, 64);
const earthMat = new THREE.MeshStandardMaterial({
    map: createRealisticEarthTexture(),
    roughness: 0.6,
    metalness: 0.1,
    transparent: true,
    opacity: 1.0
});
const earth = new THREE.Mesh(earthGeo, earthMat);
earthGroup.add(earth);

const cloudGeo = new THREE.SphereGeometry(7.65, 64, 64);
const cloudMat = new THREE.MeshStandardMaterial({
    map: createCloudTexture(),
    transparent: true,
    opacity: 0.6,
    blending: THREE.AdditiveBlending
});
const clouds = new THREE.Mesh(cloudGeo, cloudMat);
earthGroup.add(clouds);

const atmosGeo = new THREE.SphereGeometry(7.95, 64, 64);
const atmosMat = new THREE.MeshBasicMaterial({
    color: 0x00d9ff,
    transparent: true,
    opacity: 0.25,
    side: THREE.BackSide
});
const atmosphere = new THREE.Mesh(atmosGeo, atmosMat);
earthGroup.add(atmosphere);

scene.add(earthGroup);

const sunLight = new THREE.DirectionalLight(0xffffff, 2.2);
sunLight.position.set(-5, 12, 25);
scene.add(sunLight);

const ambientLightIntro = new THREE.AmbientLight(0x111e2e, 0.8);
scene.add(ambientLightIntro);


const warpCount = 1200;
const warpGeo = new THREE.BufferGeometry();
const warpPositions = new Float32Array(warpCount * 3);

for (let i = 0; i < warpCount * 3; i += 3) {
    warpPositions[i] = (Math.random() - 0.5) * 90;
    warpPositions[i + 1] = (Math.random() - 0.5) * 90;
    warpPositions[i + 2] = (Math.random() - 0.5) * 120;
}
warpGeo.setAttribute('position', new THREE.BufferAttribute(warpPositions, 3));

const warpMat = new THREE.PointsMaterial({
    color: 0x00d9ff,
    size: 0.4,
    transparent: true,
    opacity: 0,
    blending: THREE.AdditiveBlending
});

const warpParticles = new THREE.Points(warpGeo, warpMat);
scene.add(warpParticles);

const texStarBlue = createStarTexture(false);
const texStarGold = createStarTexture(true);


const galaxyGroup = new THREE.Group();

const holeGeo = new THREE.SphereGeometry(3.2, 64, 64);
const holeMat = new THREE.MeshBasicMaterial({ color: 0x000000 });
const blackHole = new THREE.Mesh(holeGeo, holeMat);
galaxyGroup.add(blackHole);

const ringGeo = new THREE.RingGeometry(3.25, 4.3, 64);
const ringMat = new THREE.MeshBasicMaterial({ color: 0xffb700, side: THREE.DoubleSide, transparent: true, opacity: 0.85 });
const ringMesh = new THREE.Mesh(ringGeo, ringMat);
ringMesh.rotation.x = Math.PI / 2;
galaxyGroup.add(ringMesh);

const particlesCount = 70000;
const posArray = new Float32Array(particlesCount * 3);
const colorArray = new Float32Array(particlesCount * 3);

const colorCore = new THREE.Color(0xffd580);
const colorMid = new THREE.Color(0xff8c00);
const colorOuter = new THREE.Color(0x0055ff);

for (let i = 0; i < particlesCount; i++) {
    const i3 = i * 3;
    const r = 3.6 + Math.pow(Math.random(), 2.2) * 20;
    const theta = r * 0.6 + Math.random() * Math.PI * 2;
    const spreadY = (Math.random() - 0.5) * (1.2 - (r / 25) * 0.8);

    posArray[i3] = Math.cos(theta) * r;
    posArray[i3 + 1] = spreadY;
    posArray[i3 + 2] = Math.sin(theta) * r;

    let mixColor;
    if (r < 7) {
        mixColor = colorCore.clone().lerp(colorMid, (r - 3.6) / 3.4);
    } else {
        mixColor = colorMid.clone().lerp(colorOuter, (r - 7) / 17);
    }

    colorArray[i3] = mixColor.r;
    colorArray[i3 + 1] = mixColor.g;
    colorArray[i3 + 2] = mixColor.b;
}

const particlesGeo = new THREE.BufferGeometry();
particlesGeo.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
particlesGeo.setAttribute('color', new THREE.BufferAttribute(colorArray, 3));

const particlesMat = new THREE.PointsMaterial({
    size: 0.12,
    vertexColors: true,
    transparent: true,
    opacity: 0.75,
    blending: THREE.AdditiveBlending
});

const galaxyParticles = new THREE.Points(particlesGeo, particlesMat);
galaxyGroup.add(galaxyParticles);


const estrellasInteractivas = [];
const groupEstrellas = new THREE.Group();

for (let i = 1; i <= 28; i++) {
    const isBirthday = (i === 28);
    const angle = (i / 28) * Math.PI * 3.6 + 0.3;
    const radius = 20.5 - ((i - 1) * 0.55);

    const starMat = new THREE.SpriteMaterial({
        map: isBirthday ? texStarGold : texStarBlue,
        blending: THREE.AdditiveBlending,
        transparent: true
    });

    const starSprite = new THREE.Sprite(starMat);
    const scale = isBirthday ? 2.8 : 1.6;
    starSprite.scale.set(scale, scale, 1);

    const x = Math.cos(angle) * radius;
    const y = Math.sin(i * 0.4) * 0.3;
    const z = Math.sin(angle) * radius;

    starSprite.position.set(x, y, z);
    starSprite.userData = { dia: i };

    const numTex = createNumberTexture(i);
    const numMat = new THREE.SpriteMaterial({ map: numTex, transparent: true });
    const numSprite = new THREE.Sprite(numMat);
    numSprite.scale.set(1.2, 1.2, 1);
    numSprite.position.set(x, y + 0.8, z);

    estrellasInteractivas.push(starSprite);
    groupEstrellas.add(starSprite);
    groupEstrellas.add(numSprite);
}
galaxyGroup.add(groupEstrellas);

galaxyGroup.position.set(0, 0, -120);
galaxyGroup.scale.set(0.05, 0.05, 0.05);
galaxyGroup.visible = false;
scene.add(galaxyGroup);


let isStarted = false;
let isIntroHyperjump = false;
let isTraveling = false;
let selectedStar = null;
let currentDia = null;
let returningToOverview = false;

const startBtn = document.getElementById('start-btn');
const startOverlay = document.getElementById('start-overlay');
const bgMusic = document.getElementById('bg-music');
const musicToggle = document.getElementById('music-toggle');
const musicStatus = document.getElementById('music-status');

startBtn.addEventListener('click', () => {
    bgMusic.play().catch(e => console.log("Audio autoplay bloqueado:", e));
    
    startOverlay.classList.add('fade-out');
    document.getElementById('audio-control').classList.add('visible-ui');

    isStarted = true;
    isIntroHyperjump = true;
    warpMat.opacity = 0.95;
    galaxyGroup.visible = true;
});

musicToggle.addEventListener('click', () => {
    if (bgMusic.paused) {
        bgMusic.play();
        musicStatus.innerText = "PAUSAR";
    } else {
        bgMusic.pause();
        musicStatus.innerText = "REPRODUCIR";
    }
});

const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

window.addEventListener('pointerdown', (e) => {
    if (!isStarted || isIntroHyperjump || !galaxyGroup.visible) return;
    if (!document.getElementById('modal').classList.contains('hidden')) return;

    mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(estrellasInteractivas);

    if (intersects.length > 0) {
        selectedStar = intersects[0].object;
        currentDia = selectedStar.userData.dia;
        isTraveling = true;
        returningToOverview = false;
        controls.enabled = false;
    }
});


let typewriterTimeout = null;

function typewriterEffect(element, text, speed = 20, callback = null) {
    element.innerHTML = "";
    let i = 0;
    if (typewriterTimeout) clearTimeout(typewriterTimeout);

    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            typewriterTimeout = setTimeout(type, speed);
        } else if (callback) {
            callback();
        }
    }
    type();
}


function mostrarModal(dia) {
    const modal = document.getElementById('modal');
    const tag = document.getElementById('modal-tag');
    const title = document.getElementById('modal-title');
    const body = document.getElementById('modal-body');

    const info = detallesDias[dia] || {
        tag: `DÍA ${dia} DE SEPTIEMBRE`,
        titulo: `Estrella ${dia}`,
        texto: "Mensaje en preparación..."
    };

    tag.innerText = info.tag;
    title.innerText = info.titulo;
    modal.classList.remove('hidden');

   
    typewriterEffect(body, info.texto, 18, () => {
      
        if (info.musica) {
            if (bgMusic && !bgMusic.paused) bgMusic.pause(); 

            const musicHTML = `
                <div class="music-card">
                    <p style="font-size: 0.9rem; color: #7bb5e3; margin-bottom: 8px;">🎧 Para acompañar tu caminata:</p>
                    <audio controls class="star-audio-player" src="${info.musica}"></audio>
                    ${info.spotify ? `<br><a href="${info.spotify}" target="_blank" class="spotify-btn">💚 Abrir en Spotify</a>` : ''}
                </div>
            `;
            body.innerHTML += musicHTML;
        }
    });
}

function regresarAOverview() {
    document.getElementById('modal').classList.add('hidden');
    if (typewriterTimeout) clearTimeout(typewriterTimeout);
    selectedStar = null;
    currentDia = null;
    returningToOverview = true;
    isTraveling = true;
}

document.getElementById('close-btn').addEventListener('click', regresarAOverview);


const clock = new THREE.Clock();

function animate() {
    requestAnimationFrame(animate);
    const time = clock.getElapsedTime();

    globalStars.rotation.y = time * 0.003;

    if (earthGroup.visible) {
        earth.rotation.y = time * 0.05;
        clouds.rotation.y = time * 0.07;
        atmosphere.rotation.y = time * 0.05;
    }

    if (galaxyGroup.visible) {
        galaxyParticles.rotation.y = time * 0.04;
        groupEstrellas.rotation.y = time * 0.02;
    }

    if (isIntroHyperjump) {
        const positions = warpGeo.attributes.position.array;
        for (let i = 2; i < warpCount * 3; i += 3) {
            positions[i] += 4.0 * warpMat.opacity;
            if (positions[i] > 50) {
                positions[i] = -80;
            }
        }
        warpGeo.attributes.position.needsUpdate = true;

        earthGroup.position.z += 0.35;
        earthGroup.position.x -= 0.12;

        if (earthMat.opacity > 0) {
            earthMat.opacity -= 0.009;
            cloudMat.opacity -= 0.006;
            atmosMat.opacity -= 0.003;
        }

        if (earthMat.opacity <= 0) {
            earthGroup.visible = false;
        }

        galaxyGroup.position.z = THREE.MathUtils.lerp(galaxyGroup.position.z, 0, 0.02);
        const currentScale = THREE.MathUtils.lerp(galaxyGroup.scale.x, 1.0, 0.02);
        galaxyGroup.scale.set(currentScale, currentScale, currentScale);

        camera.position.lerp(galaxyCameraPos, 0.02);
        controls.target.lerp(new THREE.Vector3(0, 0, 0), 0.02);

        if (galaxyGroup.position.z > -20 && warpMat.opacity > 0) {
            warpMat.opacity -= 0.03;
        }

        if (galaxyGroup.position.z > -0.2 && camera.position.distanceTo(galaxyCameraPos) < 0.3) {
            galaxyGroup.position.set(0, 0, 0);
            galaxyGroup.scale.set(1, 1, 1);
            camera.position.copy(galaxyCameraPos);
            controls.target.set(0, 0, 0);
            
            isIntroHyperjump = false;
            controls.enabled = true;
            warpMat.opacity = 0;

            document.getElementById('header-ui').classList.add('visible-ui');
            document.getElementById('footer-ui').classList.add('visible-ui');
        }
    }

    if (isTraveling && !isIntroHyperjump && galaxyGroup.visible) {
        if (returningToOverview) {
            camera.position.lerp(galaxyCameraPos, 0.08);
            controls.target.lerp(new THREE.Vector3(0, 0, 0), 0.08);

            if (camera.position.distanceTo(galaxyCameraPos) < 0.5) {
                isTraveling = false;
                returningToOverview = false;
                controls.enabled = true;
            }
        } else if (selectedStar) {
            const starWorldPos = new THREE.Vector3();
            selectedStar.getWorldPosition(starWorldPos);

            const cameraTargetPos = starWorldPos.clone().add(new THREE.Vector3(0, 1, 4));

            camera.position.lerp(cameraTargetPos, 0.08);
            controls.target.lerp(starWorldPos, 0.08);

            if (camera.position.distanceTo(cameraTargetPos) < 0.8) {
                isTraveling = false;
                controls.enabled = true;
                if (currentDia !== null) {
                    mostrarModal(currentDia);
                }
            }
        }
    }

    if (galaxyGroup.visible) {
        estrellasInteractivas.forEach((star, idx) => {
            const base = (star.userData.dia === 28) ? 2.8 : 1.6;
            const pulse = base + Math.sin(time * 3 + idx) * 0.15;
            star.scale.set(pulse, pulse, 1);
        });
    }

    controls.update();
    renderer.render(scene, camera);
}
animate();

window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});