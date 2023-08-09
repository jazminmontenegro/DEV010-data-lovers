import data from './data/got/got.js';

fetch(`./data/got/motto.json`)
  .then(response => response.json())
  //.then(dataMotto => console.log(dataMotto));

const container = document.querySelector('.card')
const previous = document.querySelector('.previous')
const next = document.querySelector('.next')

const elementsArray = data.got.length; //elemtos de la api
const itemPag = 12;     // cuantos elementos indico en la pagina
const numPag = Math.ceil(elementsArray / itemPag);        // numeros de paginas redondeando hacia arriba
let pagAct = 0; //pagina actual


previous.addEventListener('click', () => {


  if (pagAct - 1 < numPag) {
    pagAct--;
    removeChildNodes(container);
    fetchGots();
  }
})
next.addEventListener('click', () => {

  if (pagAct + 1 < numPag) {
    pagAct++;
    removeChildNodes(container);
    fetchGots();
  }

})

function fetchGots() {
  let prueba = 0
  if (Math.sign(pagAct) === -1) {
    pagAct = 0
  } else {
    prueba = pagAct
  }
  for (let i = 0; i < itemPag; i++) {
    const actual = (prueba * itemPag) + i;

    if (actual >= elementsArray) return
    container.innerHTML += `<figure >
  <img class="imagen" src=${data.got[actual].imageUrl}>
  <figcaption>${data.got[actual].fullName}</figcaption>
  </figure>`
  }
}

function removeChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild)
  }
}
fetchGots();


//BUSCADOR

const search =document.getElementById("search")
const buttonSearch=document.getElementById("btnsearch")

buttonSearch.addEventListener("click", function () {
  const searched=search.value;
  const resultsList = document.querySelector('.card');
  const filteredData = data.got.filter(item => item.firstName.includes(searched));

  resultsList.innerHTML = "";
  
  console.log(filteredData);

  filteredData.forEach(item => {
    return container.innerHTML += `<figure >
<img class="imagen" src=${item.imageUrl}>
<figcaption>${item.fullName}</figcaption>
</figure>`
  });
})
//console.log(searched);


//SELECTORES:
//Funciones para selectores.

//Constantes y eventos de selectores.
const familySelection=document.getElementById("house")
familySelection.addEventListener("change", function(){
  const resultsList = document.querySelector('.card');
  const selectedHouse =familySelection.value;
  //console.log (selectedHouse);
  const legacy = data.got.filter(item=> item.family.includes(selectedHouse));

  resultsList.innerHTML = "";

  //console.log(legacy);
  legacy.forEach(item => {
    return container.innerHTML += `<figure >
<img class="imagen" src=${item.imageUrl}>
<figcaption>${item.fullName}</figcaption>
</figure>`
  });
});




const orderSelection=document.getElementById("order")
orderSelection.addEventListener("change", function(){
  const selectedOrder =orderSelection.value;
  console.log (selectedOrder);
});


//const familyWords = document.querySelector('.words')
//const autor = document.querySelector('.autor')
//const shield= document.getElementById(shield)
//const familyHistory= document.getElementById(history)