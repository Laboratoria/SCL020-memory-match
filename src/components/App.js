//
// Para incluir los diferentes sets de cartas podemos _importar_ el archivo
// JavasSript que contenga el `export` correspondiente...
//
import pokemon from '../data/pokemon/pokemon.js';
let arrayImg =[];
const App = () => {
  for (let i=0;i<pokemon.items.length;i++){
    arrayImg.push(pokemon.items[i].image);
  }
  arrayImg = arrayImg.reverse();
  arrayImg.sort (()=> Math.random()-0.5);
  
  let div = document.createElement("div");
  console.log(arrayImg);
  for (let i=0;i<arrayImg.length;i++){ 
    let el = document.createElement('img');
    el.className = "visible";
    el.src = arrayImg[i];
    div.appendChild(el);
  }
  return div;
};

export default App;