let btnIniciar = document.getElementById("inicio")
btnIniciar.onclick =()=> setInterval(updateCountdown, 1000)

const timer = document.getElementById("timer")
const startingMinutes = 20
let time = startingMinutes * 60


let one = document.getElementById("one")
let two = document.getElementById("two")
let three = document.getElementById("three")
let four = document.getElementById("four")

let count = 0

let btn = document.getElementById("btnEnviar")
btn.onclick = () => checkCode()

// setInterval(updateCountdown, 1000)

function updateCountdown() {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60

  if ((minutes < 0 && seconds < 0) || count === 3) {
    timer.textContent = `HAN PERDIDO`;
    btn.classList.add("disabled")
  } else {
    timer.textContent = `${minutes}:${seconds < 10 ? "0" + seconds : seconds}`
    time--
  }
}

var error = document.getElementById("error"); 
var failure = document.getElementById("failure"); 
var winner = document.getElementById("winner"); 

function playAudio(a) { 
  a.play(); 
}

function checkCode() {
  let oculto = 5083
  let codigo = parseInt(one.value + two.value + three.value + four.value)

  if (oculto === codigo) {
    playAudio(winner)
    swal("FELICITACIONES, SALVARON A LOS CODERS DEL FUTURO", {
      content: {
        element: "img",
        attributes: {
          src: "https://media.giphy.com/media/2sXf9PbHcEdE1x059I/giphy.gif",
        },
      },
    });
    count = 0
  } else {
    count++
    switch (count) {
      case 1:
        playAudio(error)
        swal({
          title: "ERROR",
          text: "CODIGO INCORRECTO, CUIDADO TE QUEDAN DOS INTENTOS",
          icon: "error",
          button: "Intentar de nuevo",
        });
        
        // swal(`CODIGO INCORRECTO, CUIDADO TE QUEDAN DOS INTENTOS`);
        break;
      case 2:
        playAudio(error)
        swal({
          title: "ERROR",
          text: "CODIGO INCORRECTO, CUIDADO TE QUEDA UN SOLO INTENTO",
          icon: "error",
          button: "Intentar de nuevo",
        });
        break;
      case 3:
        playAudio(failure)
        swal(`HAN PERDIDO, GANARON LOS HACKERS`, {
          content: {
            element: "img",
            attributes: {
              src: "https://www.clipartkey.com/mpngs/m/135-1351670_squidward-is-a-loser-clipart-png-download-squidward.png",
            },
          },
        });
        break;
    }
  }
}