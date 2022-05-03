const maincontainer = document.querySelector(".mainContainer")
console.log("hello")
const audioEid = new Audio("Eid Mubarak ! Music ! Bangla.mp3")
const mainmoon = document.getElementById("moon");
const gate1 = document.querySelector(".gate_1");
const gate2 = document.querySelector(".gate_2");
let audio = document.getElementById("audio")
mainmoon.addEventListener("click",()=>{
 gate1.classList.add("slide")
 setTimeout(()=>{
     gate1.style.display="none";
     gate2.style.display="none"
     maincontainer.style.visibility="visible"
    },2000)
    gate2.classList.add("slide")
    audioEid.play()
})