let jugador1;
let jugador2;
let seleccion1 = false;
let seleccion2 = false;

function opcionEscogida(quien, respuesta) {
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
    colorearGanador(1);
  } else {
    colorearGanador(2);
  }
  MostrarReinciar();
}

function colorearGanador(jugadorGanador) {
  const divJugador = document.getElementById(jugadorGanador);
  divJugador.classList.add("ganador");
}

function reiniciarJuego() {
  jugador1 = null;
  jugador2 = null;
  seleccion1 = false;
  seleccion2 = false;

  const botones = document.querySelectorAll("button");
  botones.forEach(boton => {
    boton.disabled = false;
    boton.classList.remove("selected");
  });

  const opcionesSeleccionadas = document.querySelectorAll(".selected");
  opcionesSeleccionadas.forEach(opcion => {
    opcion.classList.remove("selected");
  });

  const divsJugador = document.querySelectorAll(".jugador");
  divsJugador.forEach(div => {
    div.classList.remove("ganador");
  });

  const reiniciarBtn = document.querySelector("button[onclick='reiniciarJuego()']");
  if (reiniciarBtn) {
    reiniciarBtn.remove();
  }
}

function MostrarReinciar() {
  const nuestraWeb = document.body;
  nuestraWeb.innerHTML += "<button onClick=\"reiniciarJuego()\"> Reiniciar </button>";
}
