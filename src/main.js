import App from './components/App.js';

let boton = document.getElementById("btn");
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
});

document.getElementById('root').appendChild(App());
