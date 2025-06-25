const frases = [
   "Tu sonrisa ilumina todo a tu alrededor.",
  "Tienes una ternura única e inigualable.",
  "Tu voz tiene el poder de tranquilizar.",
  "Eres fuerte, incluso cuando no lo crees.",
  "Cada parte de ti es un poema hermoso.",
  "Tu mirada transmite paz.",
  "Eres luz en los días grises.",
  "Tu risa contagia alegría.",
  "Todo es mejor cuando estás cerca.",
  "Eres más especial de lo que imaginas.",
  "Contigo, todo tiene más sentido.",
  "Tu forma de ser me encanta tal como es.",
  "Eres mi pensamiento favorito del día.",
  "Admiro tu forma de ver el mundo.",
  "Siempre me haces sonreír, incluso sin intentarlo.",
  "Tu compañía es un regalo que valoro mucho.",
  "Me inspiras a ser mejor persona.",
  "Eres magia en forma de persona.",
  "Tu existencia hace que el mundo sea más bonito.",
  "Me gusta cómo brillan tus ojos cuando hablas de lo que amas.",
  "Eres el tipo de persona que deja huellas bonitas.",
  "Tu dulzura no tiene comparación.",
  "Me encanta la forma en que cuidas de los demás.",
  "Cada momento contigo es un recuerdo feliz.",
  "Tu energía es como un abrazo cálido.",
  "Siempre haces que los días grises se vean más claros.",
  "Eres tan bonita por dentro como por fuera.",
  "Tu risa es el sonido más bonito que conozco.",
  "No sabes lo mucho que me alegras la vida.",
  "Podría escucharte hablar por horas.",
  "Eres como un respiro en medio del caos.",
  "Eres esa casualidad bonita que no quiero perder.",
  "Tu forma de mirar lo cambia todo.",
  "Eres un sueño del que no quiero despertar.",
  "Tu ternura derrite cualquier tristeza.",
  "Contigo, los silencios también son hermosos.",
  "Siempre haces que el mundo parezca más amable.",
  "Eres arte en forma de persona.",
  "Lo bonito de ti es que no lo sabes.",
  "Tu simple presencia ya me mejora el día.",
  "Cada vez que sonríes, alguien se enamora más de ti.",
  "Eres la calma después de la tormenta.",
  "No hay nada en ti que no me guste.",
  "Eres un faro en medio de mis dudas.",
  "Tu forma de ser me da paz.",
  "Eres como una canción bonita que nunca cansa.",
  "Quisiera guardar tu risa en una cajita para los días tristes.",
  "Tu forma de pensar me fascina.",
  "No hay nadie como tú, y eso te hace increíble.",
  "Eres esa persona que hace que todo valga la pena.",
  "Me encantas sin necesidad de hacer nada.",
  "Eres el detalle más bonito de mi día.",
  "Me haces sentir afortunado solo por conocerte.",
  "Eres tan linda que a veces parece que saliste de un cuento.",
  "Nunca dejes de ser tú, porque eres maravillosa.",
  "Tu sensibilidad es algo que admiro profundamente.",
  "Cada palabra tuya me llena de alegría.",
  "Tu belleza no solo se ve, también se siente.",
  "Eres el tipo de persona que dan ganas de cuidar.",
  "Tu luz es imposible de ignorar.",
  "Me encanta cómo haces especiales las cosas más simples.",
  "Tienes un corazón de oro.",
  "Tus abrazos deben ser como un refugio.",
  "Tu autenticidad es lo que más me atrae.",
  "Eres como un amanecer: hermosa, serena, única.",
  "Nunca dejes de brillar como lo haces.",
  "Eres más valiente de lo que crees.",
  "Tienes una dulzura que se nota desde lejos.",
  "Estar contigo es como estar en casa.",
  "Tus palabras siempre llegan al alma.",
  "Tu forma de amar debe ser hermosa.",
  "Eres un poema que cobra vida cuando sonríe.",
  "Tu alegría se contagia más rápido que cualquier risa.",
  "Me gusta la forma en que ves la belleza en todo.",
  "Eres una mezcla de fuerza y ternura perfecta.",
  "Tu forma de hablar es como una caricia suave.",
  "Eres un regalo que la vida me dio sin esperarlo.",
  "Tu presencia tiene el poder de tranquilizar.",
  "Nunca dejes de ser esa persona especial que eres.",
  "Todo en ti parece hecho para inspirar.",
  "Eres como el café en la mañana: imprescindible.",
  "Lo que más me gusta de ti es todo.",
  "Tienes esa chispa que hace que todo sea mágico.",
  "Eres mi lugar favorito sin importar dónde estemos.",
  "Eres un verso escondido en cada momento bonito.",
  "Tu dulzura se siente con solo mirarte.",
  "Ojalá pudiera detener el tiempo contigo.",
  "Tu forma de existir es admirable.",
  "Tu ternura tiene un efecto que no sé explicar.",
  "Eres la definición de algo bien hecho por el universo.",
  "Tu cariño vale más que mil palabras.",
  "Eres esa persona que quiero cuidar todos los días.",
  "Tu paz me inunda solo con verte.",
  "Tu sonrisa tiene algo que me atrapa.",
  "Eres como el sol después de la lluvia.",
  "Nunca pensé encontrar a alguien tan especial como tú.",
  "Tu presencia cambia el ambiente.",
  "Eres exactamente lo que mi corazón necesitaba.",
  "Tienes un encanto natural imposible de ignorar.",
  "Quiero seguir descubriendo lo bonita que eres cada día.",
  "Gracias por existir, simplemente gracias.",
  "Eres la razón por la que creo en cosas bonitas.",
  "No sé cómo lo haces, pero siempre me haces bien.",
  "Si alguien merece lo mejor, eres tú."
];

const book = document.getElementById("book");
let currentPage = 0;

// Crear portada
const portada = document.createElement("div");
portada.classList.add("page", "cover");
portada.innerHTML = `
  <div class="front">
    <h1>Todo lo bueno de ti</h1>
    <img src="kitty.png" alt="Hello Kitty">
  </div>
  <div class="back">
    <h2>¡Bienvenida!</h2>
    <p>Espero que disfrutes este pequeño libro lleno de cariño.</p>
  </div>
`;
portada.style.zIndex = frases.length + 3;
book.appendChild(portada);


// Crear páginas con frases
frases.forEach((frase, i) => {
  const page = document.createElement("div");
  page.classList.add("page");
  page.innerHTML = `<div class="content">${frase}</div>`;
  page.style.zIndex = frases.length + 2 - i;
  book.appendChild(page);
});

// Página extra 1
const extra1 = document.createElement("div");
extra1.classList.add("page");
extra1.innerHTML = `
  <div class="content">
    Realmente nunca acabaría de enlistar lo que me gusta de ti,<br>
    pero sé que ya te estás cansando de llegar hasta acá.
  </div>`;
extra1.style.zIndex = 1;
book.appendChild(extra1);

// Página extra 2 (dedicatoria final)
const extra2 = document.createElement("div");
extra2.classList.add("page", "dedicatoria");
extra2.innerHTML = `
  <div class="content">
    <p>De: <strong>Carlos</strong></p>
    <p>Para: <strong>La chica más increíble del mundo, Karlita</strong></p>
    <p style="margin-top: 20px;">💖</p>
  </div>`;
extra2.style.zIndex = 0;
book.appendChild(extra2);

const pages = document.querySelectorAll(".page");

function nextPage() {
  if (currentPage < pages.length) {
    pages[currentPage].classList.add("flipped");
    currentPage++;
  }
}

function prevPage() {
  if (currentPage > 0) {
    currentPage--;
    pages[currentPage].classList.remove("flipped");
  }
}

const musica = document.getElementById('musicaFondo');
const btnMusica = document.getElementById('btnMusica');

btnMusica.addEventListener('click', () => {
  if (musica.paused) {
    musica.play();
    btnMusica.textContent = '⏸️ Pausar música';
  } else {
    musica.pause();
    btnMusica.textContent = '▶️ Reproducir música';
  }
});
