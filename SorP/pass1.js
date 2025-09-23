// Barajar el array
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

const images = [
  "https://i.imgur.com/CXJuNlC.jpeg",
  "https://i.imgur.com/lA1XqBk.jpeg",
  "https://i.imgur.com/Y03kkIM.png",
  "https://i.imgur.com/8YGqUA7.png",
  "https://i.imgur.com/zEyYFHo.png",
  "https://i.imgur.com/Jx9OWqj.png",
  "https://i.imgur.com/7dzB0Hr.png",
  "https://i.imgur.com/jvOWye8.png",
  "https://i.imgur.com/m8aEHKc.png",
  "https://i.imgur.com/PD3DNH2.png",
  "https://i.imgur.com/mRxt3dK.png",
  "https://i.imgur.com/yTNy2ex.png",
  "https://i.imgur.com/RR1HFj7.png",
  "https://i.imgur.com/Xxh0YI6.png",
  "https://i.imgur.com/wTujA1m.png",
  "https://i.imgur.com/iO8pjCz.png",
  "https://i.imgur.com/KGqbsYA.png",
  "https://i.imgur.com/L3GfgRZ.png",
  "https://i.imgur.com/aQ8NvhS.png",
  "https://i.imgur.com/2FU2a4R.png",
  "https://i.imgur.com/TKWYrbz.png",
  "https://i.imgur.com/lu6PNAZ.png",
  "https://i.imgur.com/Ghc7vuA.png",
  "https://i.imgur.com/NEgjfM2.png",
  "https://i.imgur.com/8YYnBRs.png",
  "https://i.imgur.com/rSNZF2N.png",
  "https://i.imgur.com/ri6fAp4.png",
  "https://i.imgur.com/Dcb94TY.png",
  "https://i.imgur.com/TKJDAxy.png",
  "https://i.imgur.com/iQmiMg3.jpeg",
  "https://i.imgur.com/MZexh4K.jpeg",
  "https://i.imgur.com/XN6BalQ.png",
  "https://i.imgur.com/q25MoVK.png",
  "https://i.imgur.com/9vf8Hls.png",
  "https://i.imgur.com/3RE9xYz.jpeg",
  "https://i.imgur.com/VfumaFH.png",
  "https://i.imgur.com/Hmjc67h.png",
  "https://i.imgur.com/a0toe84.png",
  "https://i.imgur.com/7XfRUb5.png",
  "https://i.imgur.com/kJADmNg.png",
  "https://i.imgur.com/oKgjPLx.png",
  "https://i.imgur.com/LvRqP59.png",
  "https://i.imgur.com/nERsKuE.png",
  "https://i.imgur.com/EsdywjD.jpeg",
  "https://i.imgur.com/S5jjvdR.png",
  "https://i.imgur.com/IDBS4np.png",
  "https://i.imgur.com/8iK8ib5.png",
  "https://i.imgur.com/Tt0u960.png",
  "https://i.imgur.com/P9q62jV.png",
  "https://i.imgur.com/NwSbzlG.png",
  "https://i.imgur.com/Vlbmj9P.png",
  "https://i.imgur.com/HC5boFR.png",
  "https://i.imgur.com/f0OwVw6.png",
  "https://i.imgur.com/kv8E09b.png",
  "https://i.imgur.com/pKvNL4H.png",
  "https://i.imgur.com/z7Bu4Kz.png",
  "https://i.imgur.com/d13kFrJ.png",
  "https://i.imgur.com/M2mg8zu.png",
  "https://i.imgur.com/sjyeTQ0.png",
  "https://i.imgur.com/2GUg5mi.png",
  "https://i.imgur.com/WrP55RV.png",
  "https://i.imgur.com/mgHVT8C.png",
  "https://i.imgur.com/zA9Lsoc.png",
  "https://i.imgur.com/7IQPhk9.png",
  "https://imgur.com/ieqxRmX.png",
  "https://i.imgur.com/czH6RDa.png",
  "https://i.imgur.com/QTDYGAl.png",
  "https://i.imgur.com/T7a5U9o.png",
  "https://i.imgur.com/a4Q3fm0.png",
  "https://i.imgur.com/f2yO69Y.png",
  "https://i.imgur.com/af7kL0T.png",
  "https://i.imgur.com/iEAypEM.png",
  "https://i.imgur.com/qI8xwLi.png",
  "https://i.imgur.com/R8OB8yf.png",
  "https://i.imgur.com/YuaQNla.png",
  "https://i.imgur.com/nr0zNFP.png",
  "https://i.imgur.com/0p4T0F8.png",
];

shuffleArray(images);

let currentIndex = 0;
let smashCount = 0;
let passCount = 0;

const imgElement = document.getElementById('current-image');
const passBtn = document.getElementById('pass-btn');
const smashBtn = document.getElementById('smash-btn');
const resultSection = document.getElementById('result');
const smashText = document.getElementById('smash-count');
const passText = document.getElementById('pass-count');
const commentText = document.getElementById('live-reaction');
const finalComment = document.getElementById('comment');

const smashReactions = [
  "🔥 ¡Ese Smash fue más rápido que Goku en Ultra Instinto!",
  "👀 Te vi, te vi... BaityBait aprueba.",
  "🫠 Calentura nivel Saitama.",
  "💥 ¡Smash confirmado como canon!",
  "😈 Este Smash fue patrocinado por la lujuria.",
  "✨ ¿Estás bien? Eso fue demasiado fuerte.",
  "🤨 ¿Te estás enamorando?",
  "🎮 Esto no es un mod de Skyrim... ¿o sí?",
  "💢 Ese Smash fue más intenso que un grito de Vegeta.",
  "😈 Ese Smash fue tan ardiente que el infierno pidió un extintor.",
  "💥 Golpeaste tan fuerte que el universo sintió el cosquilleo.",
  "🔥 Tan caliente que el sol pidió una clase de seducción.",
  "😏 BaityBait está tomando apuntes: eso fue un doctorado en química.",
  "💦 Ese Smash dejó el ambiente más húmedo que un tsunami sorpresa.",
  "😻 Movida tan suave que hasta el diablo se enamoró.",
  "👄 Labios en llamas, ¿acaso estás escribiendo una novela erótica?",
  "🧨 Explosivo como un cohete en una noche sin estrellas.",
  "😘 Ese Smash fue un flechazo directo al alma, Cupido está en paro.",
  "💖 Tan intenso que el corazón pidió refuerzos de oxígeno.",
  "🔥 Esto no es un Smash, es un incendio forestal con estilo.",
  "😉 Tan seductor que hasta las sombras se sonrojaron.",
  "🫦 Ese movimiento fue puro veneno, pero del que te mata sonriendo.",
  "💋 Beso imaginario enviado, el cartero está en shock.",
  "😼 Gatito/a, eso fue un zarpazo al centro de la pasión.",
  "🚀 Despegaste tan rápido que la NASA quiere tu fórmula.",
  "💥 Impacto crítico, el medidor de atractivo explotó.",
  "👅 Más sabor que un postre prohibido en una dieta estricta.",
  "😍 Tan perfecto que parece un glitch en la matrix del deseo.",
  "🔥 Ese Smash fue un cortocircuito en la escala de Richter.",
  "😎 Estilo legendario, hasta los dioses pidieron tu autógrafo.",
  "💦 Tan jugoso que el desierto se convirtió en un oasis.",
  "🧙‍♂️ Magia pura, como si hubieras hechizado el mismísimo destino.",
  "😈 Pecado tan delicioso que el cielo está reconsiderando sus reglas.",
  "💘 Esto no es un Smash, es un contrato firmado con el corazón.",
  "👄 Le diste tan rápido que ni el Sharingan lo vio venir.",
  "🧨 Ese sí que fue un golpe crítico... en el corazón.",
  "👙 Más caliente que un episodio censurado de Tokyo Ghoul.",
  "📸 Baity te estaría diciendo: 'BUENARDO'.",
  "🎮 Ni un combo de Tekken pega así de fuerte.",
  "💦 Bueno, bueno… ¿necesitás una pausa para hidratarte?",
  "🤖 Sos una mezcla de Ahegao y determinación.",
  "🧐 Yo le doy como cajon que no cierra",
  "💘 Cupido está tomando nota.",
  "👁️ Eso fue un Smash con mirada de Gojou."
];

const passReactions = [
  "💨 Pasaste más rápido que Naruto en modo sabio.",
  "🙅 No era tu tipo... BaityBait estaría orgulloso.",
  "😬 Amigo/a, ni con un Fénix Down la levantás.",
  "🍜 Mejor pasamos como el relleno de Naruto.",
  "👻 Ese sí que era un NPC.",
  "📉 Tu nivel de exigencia está por las nubes.",
  "😐 Simplemente, next.",
  "👋 No pasó el vibe check.",
  "📦 Lo mandaste directo a la caja de NPCs.",
  "🫥 Lo pasaste con la misma emoción que un lunes a las 8 AM.",
  "👃 Ni el Jutsu Sexy lo salvaba.",
  "🥶 Más frío que un iceberg en One Piece.",
  "👾 ¿Esto es un glitch visual? Porque no da.",
  "🚫 Rechazado más rápido que una solicitud de amistad en la secundaria.",
  "🧟 Pasaste como si fuera un zombie de relleno.",
  "🔥🔥Que arda en el infierno🔥🔥",
  "🧹 Esto fue barrido con escoba sin mirar.",
  "🤢 Te dio cringe antes de cargar la imagen.",
  "🚮 Basura espacial, ni un agujero negro lo quiere de vuelta.",
  "🙈 Tan fuera de onda que hasta el GPS se perdió buscándolo.",
  "🤮 Cringe tan épico que el diccionario lo quiere como definición.",
  "🚫 Bloqueado tan rápido que rompió la barrera del sonido.",
  "😖 Desastre nivel: apocalipsis en cámara lenta.",
  "🧊 Más frío que un polo norte sin calefacción.",
  "🥴 Tan malo que hasta el caos se organizó para rechazarlo.",
  "🙅‍♂️ Nope, ni con un milagro de última hora se salva.",
  "😴 Aburrimiento tan denso que creó su propio campo gravitacional.",
  "🗑️ Lo mandaste al vertedero con un ticket de no retorno.",
  "🤢 Asco tan puro que el jabón se rindió antes de intentarlo.",
  "🚪 Cerraste la puerta tan rápido que se creó un huracán.",
  "😬 Tan fuera de lugar que parece un extra en la película equivocada.",
  "💨 Desapareció más rápido que un sueño en lunes por la mañana.",
  "🧹 Barrido tan limpio que ni las migajas se atrevieron a quedar.",
  "😑 Tan plano que hace que un desierto parezca una montaña.",
  "🚷 Prohibido el paso, ni con un mapa lo encuentras atractivo.",
  "🤦‍♂️ Error fatal: vibra no detectada en el radar.",
  "🥶 Congelaste el ambiente más rápido que un ventilador industrial.",
  "🙄 Tan soso que el pan sin sal parece una fiesta a su lado.",
  "🚫 Cancelado como un plan de última hora en un diluvio.",
  "😵 Tan malo que hasta el silencio se sintió incómodo.",
  "🧂 Más salado que un océano con rencor.",
  "🫥 Fantasma total, ni un detector paranormal lo registra.",
  "🤢 Cringe tan fuerte que hasta el espejo se dio la vuelta."
];

function getFunnyMessage() {
  if (passCount === images.length) {
    return "Pasaste a todos. Sos como Sasuke: frío, distante, y solo.";
  } else if (smashCount === images.length) {
    return "🔥 Te faltó agua, calentón. Ni Baity se animó a tanto.";
  } else if (smashCount > passCount) {
    return "😏 Sos de los que ven el lado positivo... o no tienen filtro.";
  } else if (passCount > smashCount) {
    return "🎯 Estás más selectivo que Zoro buscando la dirección correcta.";
  } else {
    return "🎭 Un equilibrio perfecto, digno del Avatar.";
  }
}

imgElement.src = images[currentIndex];

function handleChoice(type) {
  imgElement.classList.add('fade-out');

  setTimeout(() => {
    if (type === "smash") {
      smashCount++;
      showTempMessage(smashReactions);
    } else {
      passCount++;
      showTempMessage(passReactions);
    }

    currentIndex++;

    if (currentIndex >= images.length) {
      showResults();
    } else {
      imgElement.src = images[currentIndex];
      imgElement.classList.remove('fade-out');
      imgElement.classList.add('fade-in');
      setTimeout(() => imgElement.classList.remove('fade-in'), 300);
    }
  }, 200);
}

function showTempMessage(list) {
  const random = list[Math.floor(Math.random() * list.length)];
  commentText.textContent = random;
}

passBtn.addEventListener('click', () => handleChoice("pass"));
smashBtn.addEventListener('click', () => handleChoice("smash"));

function showResults() {
  document.getElementById('game').style.display = 'none';
  resultSection.classList.remove('hidden');
  smashText.textContent = `🔥 Smash: ${smashCount}`;
  passText.textContent = `❌ Pass: ${passCount}`;
  finalComment.textContent = getFunnyMessage();
}
