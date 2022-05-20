
export const mezclarArreglo = (geometryImages) => {
  let mix=[...geometryImages];
	for (let i = geometryImages.length - 1; i > 0; i--) {
		let indiceAleatorio = Math.floor(Math.random() * (i + 1));
    [mix[i],mix[indiceAleatorio]]=[mix[indiceAleatorio],mix[i]]
	}
  return mix
}
export const createdBoard= (geometryImages) =>{ 
  let wrap = document.createElement("div");
  wrap.className = 'wrap';
  let mixedArray= mezclarArreglo(geometryImages);
 
  for (let i=0; i < mixedArray.length;i++){
    const cardWrap = document.createElement("div");
  wrap.appendChild(cardWrap);
  cardWrap.setAttribute("class", `cardWrap`);
  cardWrap.setAttribute("id",`cardWrap`);
  wrap.appendChild(cardWrap);
  const card = document.createElement("div");
  cardWrap.appendChild(card);
  card.setAttribute("class", `card`);
  card.setAttribute("id",`card`);
  card.setAttribute('name',`${mixedArray[i].name}`);
  const frontFace = document.createElement('div');
  const backFace = document.createElement('div');
  card.appendChild(frontFace);
  card.appendChild(backFace);
  frontFace.setAttribute("class", `frontFace`);
  backFace.setAttribute("class", `backFace`);
  backFace.setAttribute("id","backFace");
  const img1 = document.createElement('img');
  img1.setAttribute('class', `flippedImage`);  
  img1.setAttribute('src', mixedArray[i].image);
  backFace.appendChild(img1);
  } 
 return wrap
}