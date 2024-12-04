let jugador1;
let jugador2;
let seleccion1 = false;
let seleccion2 = false;

function opcionEscogida(quien, respuesta, identificador) {
  alert(`El jugador ${quien} escogio ${respuesta}`);
  if (quien === 1) {
    jugador1 = respuesta;
    seleccion1 = true;
  } else {
    jugador2 = respuesta;
    seleccion2 = true;
  }
  bloquearOpciones(quien, respuesta);
  if (seleccion1 && seleccion2) {
    determinarGanador(jugador1, jugador2);
  }
}
function bloquearOpciones(numJugador, opcionElegida) {
  const Jugador = document.getElementById(numJugador);
  const Botones = Jugador.querySelectorAll("button");
  Botones.forEach(boton => { boton.disabled = true; });
  const laOpcionPulsada = document.getElementById(opcionElegida + numJugador);
  laOpcionPulsada.classList.add("selected");
}

function determinarGanador(opcion1, opcion2) {
  if (opcion1 === opcion2) {
    alert("empate");
  } else if ((opcion1 === "tijera" && opcion2 === "papel") ||
        (opcion1 === "papel" && opcion2 === "piedra") ||
        (opcion1 === "piedra" && opcion2 === "tijera")) {
    alert("Jugador 1 gana");
  } else {
    alert("Jugador 2 gana");
  }
  MostrarReinciar();
}

function colorearGanador() {

}

function reiniciarJuego() {
  const Botones = document.querySelectorAll("button");
  Botones.forEach(boton => { boton.disabled = false; });
  jugador1 = null;
  jugador2 = null;
  seleccion1 = false;
  seleccion2 = false;
  const laOpcionPulsada = document.getElementsByClassName("selected");
  laOpcionPulsada.classList.remove("selected");
}
function MostrarReinciar() {
  const nuestraWeb = document.body;

  nuestraWeb.innerHTML += "<button onClick=\"reiniciarJuego()\"> Reiniciar </button>";
}
