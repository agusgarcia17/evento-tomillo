function timer(){
    var countDownDate = new Date("Dec 3, 2020 13:43:00").getTime();

    // Update the count down every 1 second
    var x = setInterval(function() {
    
      // Get today's date and time
      var now = new Date().getTime();
        
      // Find the distance between now and the count down date
      var distance = countDownDate - now;
        
      // Time calculations for days, hours, minutes and seconds
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
      // Output the result in an element with id="demo"
      document.getElementById("timer").innerHTML = minutes + "m " + seconds + "s ";
        
      // If the count down is over, write some text 
      if (distance < 0 || count ===3) {
        clearInterval(x);
        document.getElementById("timer").innerHTML = "TIEMPO TERMINADO";
        document.querySelector(".codigos").style.display = "none"
        document.querySelector(".btn").style.display = "none"
      }
    }, 1000);
}


let one = document.getElementById("one")
let two = document.getElementById("two")
let three = document.getElementById("three")
let four = document.getElementById("four")

let count = 0

let btn = document.getElementById("btnEnviar")
btn.onclick = () => checkCode()

function checkCode(){
    
    let oculto = 5083  
    let codigo = parseInt(one.value + two.value + three.value + four.value)
    
    
    if(oculto === codigo) {
        alert("SE HAN SALVADO")
        count = 0
    } else {
        alert(`Codigo incorrecto, tienes ${3 - count} intentos`)
        count++
    } 
    
}

timer()



