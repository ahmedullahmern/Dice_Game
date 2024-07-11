var usernumber = document.getElementById("usernumber")
var randomnumber = document.getElementById("randomnumber")
var winloss = document.getElementById("winloss")
var gahte = document.getElementById("gahte")
var inw = document.getElementById("inw")
var inl = document.getElementById("inl")
var muqabla = document.getElementById("muqabla")
var fe = document.getElementById("fe")
var btn = document.getElementById("btn")
var star_btn = document.getElementById("star_btn")
var modal = document.getElementById("modal")

var ten = 10
var winnumber= 0
var lossnumber = 0

function chal (htmlsearaho){
    if(ten<=0){
        alert("Game over! Please refresh the page to play again.")
        return;
    }
    var random = Math.random()*6
    var ceil = Math.ceil(random)
    console.log(ceil)
    usernumber.innerHTML = htmlsearaho
    randomnumber.innerHTML = ceil

    gahte.innerHTML = --ten
  

    if(htmlsearaho === ceil){
        winloss.innerHTML = "You Win"
        dwl.style.backgroundColor = "Green";
        dwl.style.Color = "White";
        inw.innerHTML=++winnumber
    }else{
        winloss.innerHTML = "You Loss"
        dwl.style.backgroundColor = "Red";
        dwl.style.Color = "White";
        inl.innerHTML=++lossnumber
    }

  

    fesla();
}

function fesla() {
    if(ten == 0){
        if(winnumber >= 3){
            fe.innerHTML =  "Congrats! You won";
            fe.style.color="green"
        }else{
          fe.innerHTML =  "Sorry! You loss try again"
          fe.style.color="red"
        }
    }

    if(winnumber===3){
    muqabla.innerText = " : 100"
    change.style.backgroundColor = "Green"
    muqabla,change.classList.add("animate__animated", "animate__flash"); 
    }
    if(winnumber===2){
    muqabla.innerText = " : 80"
    change.style.backgroundColor = "Orange"
    }
    if(winnumber===1){
    muqabla.innerText = " : 50"
    change.style.backgroundColor = "darkgoldenrod"
    }
    if(winnumber=== 0){
    muqabla.innerText = " : 0"
    change.style.backgroundColor = "Red"
    }
    
}