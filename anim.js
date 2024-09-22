// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "She's an extraordinary girl", time: 40 },
  { text: "In an ordinary world", time: 44 },
  { text: "And she can't seem to get away", time: 49 },
  { text: "He lacks the courage in his mind", time: 52 },
  { text: "Like a child left behind", time: 57 },
  { text: "Like a pet left in the rain", time: 61 },
  { text: "She's all alone again", time: 65 },
  { text: "Wiping the tears from her eyes", time: 70 },
  { text: "Some days he feels like dying", time: 75 },
  { text: "She gets so sick of crying", time: 78 },
  { text: "She sees a mirror of herself", time: 90 },
  { text: "An image she wants to sell", time: 92 },
  { text: "To anyone willing to buy", time: 98 },
  { text: "He steals the image in her kiss", time: 104 },
  { text: "From her hearts apocalypse", time: 108 },
  { text: "From the one called", time: 109 },
  { text: "Whatsername", time: 111 },
  { text: "She's all alone again", time: 118 },
  { text: "Wiping the tears from her eyes", time: 120 },
  { text: "Some days he feels like dying", time: 125 },
  { text: "She gets so sick of crying", time: 127 },
  { text: "She's all alone again", time: 162 },
  { text: "Wiping the tears from her eyes", time: 163 },
  { text: "Some days he feels like dying", time: 167 },
  { text: "Some days its not worth trying", time: 172 },
  { text: "Now that they both are finding", time: 174},
  { text: "She gets so sick of crying", time: 178 },
  { text: "She's an extraordinary girl", time: 186 },
  { text: "An extraordinary girl", time: 189 },
  { text: "An extraordinary girl", time: 190 },
  { text: "An extraordinary girl", time: 194 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);