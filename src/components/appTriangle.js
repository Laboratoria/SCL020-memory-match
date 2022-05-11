import data from '../data/geometry/dataTriangle.js'

const App = () => { 

const father = document.getElementById("father");
const wrap = document.createElement("div");
wrap.className = 'wrap';
father.appendChild(wrap);

   let geometryImages= data.items;
  
const mezclarArreglo = (geometryImages) => {
  let mix="";
	for (let i = geometryImages.length - 1; i > 0; i--) {
		let indiceAleatorio = Math.floor(Math.random() * (i + 1));
     let temporal = geometryImages[i];
		let mix= geometryImages[i] = geometryImages[indiceAleatorio];
		geometryImages[indiceAleatorio] = temporal;
	}
  return mix
};
  mezclarArreglo(geometryImages)

  for (let i=0; i < geometryImages.length;i++){
    const cardWrap = document.createElement("div");
  wrap.appendChild(cardWrap);
  cardWrap.setAttribute("class", `cardWrap`);
  cardWrap.setAttribute("id",`cardWrap`);
  wrap.appendChild(cardWrap);
  const card = document.createElement("div");
  cardWrap.appendChild(card);
  card.setAttribute("class", `card`);
  card.setAttribute("id",`card`);
  card.setAttribute('name',`${data.items[i].name}`);
  const frontFace = document.createElement('div');
  const backFace = document.createElement('div');
  card.appendChild(frontFace);
  card.appendChild(backFace);
  frontFace.setAttribute("class", `frontFace`);
  backFace.setAttribute("class", `backFace`);
  backFace.setAttribute("id","backFace");
  }
  for (let i=0; i < geometryImages.length;i++){
    const img1 = document.createElement('img');
    img1.setAttribute('src', geometryImages[i].image);
   img1.setAttribute('name',`${data.items[i].name}`);
     img1.setAttribute('class', `flippedImage`);
   let backFace = document.querySelectorAll(".backFace");
    backFace[i].appendChild(img1);
  }

};
export default App;

   