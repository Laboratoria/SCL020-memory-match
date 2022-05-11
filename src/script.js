

/*let boton = document.getElementById("btn");
let v = document.getElementsByTagName("audio")[0];
let sound = false;
boton.addEventListener("click", function() {
   if (!sound) {
   v.play();
   this.innerHTML = "Pause";
   sound = true;
  } else {
   v.pause();
   this.innerHTML = "Play";
   sound = false;
  } 
});*/

//document.getElementById('root').appendChild(App());//

import App from './components/appOval.js';
App()

let acW= Array.from(card);
//console.log(acW);
acW.forEach(element =>{
element.addEventListener ('click', function(e) {
 element.classList.toggle("toggleCard");
   checkCards(e);
});
});
    //Revisando cartas

const checkCards = (e) => {
const clickedCard = e.target;
clickedCard.classList.add("flippedCard")
const flipped = document.querySelectorAll(".flippedCard");

 // console.log(flipped.length)
  if (flipped.length == 2) {
    
    if (flipped[0].getAttribute("name") === flipped[1].getAttribute("name")){
       console.log("match");
      flipped.forEach((clickedCard) => {
        clickedCard.classList.remove("flippedCard")
        clickedCard.style.pointerEvents= "none";
      });
    } else {
      console.log("wrong");
      flipped.forEach((clickedCard) => {
      clickedCard.classList.remove("flippedCard")
      setTimeout(() => clickedCard.classList.remove("toggleCard"), 500)})
    }
       
     
    }
  } 