//IMPORTACION DE BASES DE DATOS Y OTROS ARCHIVOS

import data from './data/got/got.js';
//import dataMotto from "./data/got/motto.js";
import {searcher, houseFilter, mottoFilter, sortData} from "./data.js";

//VISUALIZACIÓN Y PAGINACIÓN
//Constantes necesarias

const container = document.querySelector('.card')
const previous = document.querySelector('.previous')
const next = document.querySelector('.next')

const elementsArray = data.got.length; //elemtos de la api
const itemPag = 12;     // cuantos elementos indico en la pagina
const numPag = Math.ceil(elementsArray / itemPag);        // MATH para redondear, numeros de paginas redondeando hacia arriba
let pagAct = 0; //pagina actual

//Eventos de paginación
// capturar datos de los botone y input

previous.addEventListener('click', () => {  //registra un envento en el objeto

  if (pagAct - 1 < numPag) { // Registra un evento a un objeto en específico
    pagAct--;
    removeChildNodes(container);  // limpia container
    fetchGots(data);
  }
})
next.addEventListener('click', () => {
  if (pagAct + 1 < numPag) {
    pagAct++;
    removeChildNodes(container);  // limpia container
    fetchGots(data);
  }
})
function fetchGots(nuevaData) { // funcion para visualizar la data got con condiciones para que no se pasen ni antes ni despues del arary
  let prueba = 0
  if (Math.sign(pagAct) === -1) {  // Math.sign devuelve uno o -1
    pagAct = 0
  } else {
    prueba = pagAct
  }
  for (let i = 0; i < itemPag; i++) {   // recorrer la data y crear cada card
    const actual = (prueba * itemPag) + i;
    if (nuevaData.got) {
      if (actual >= nuevaData.got.length) return
      container.innerHTML +=`<section class="flip-card">
        <section class="flip-card-inner">
          <section class="flip-card-front">
            <figure >
              <img class="imagen" src=${nuevaData.got[actual].imageUrl}>
              <figcaption>${nuevaData.got[actual].fullName}</figcaption>
            </figure>
          </section>
          <section class="flip-card-back">
            <figcaption><br> ${nuevaData.got[actual].fullName}</figcaption>
            <figcaption><hr><br>Title :${nuevaData.got[actual].title}</figcaption></figcaption>
            <figcaption><br>Family: ${nuevaData.got[actual].family}</figcaption>
            <figcaption><br>Born: ${nuevaData.got[actual].born}</figcaption>
          </section>
        </section>
      </section>`
    }
    else {
      if (actual >= nuevaData.length) return
      container.innerHTML += `<section class="flip-card">
        <section class="flip-card-inner">
          <section class="flip-card-front">
            <figure >
              <img class="imagen" src=${nuevaData[actual].imageUrl}>
              <figcaption>${nuevaData[actual].fullName}</figcaption>
            </figure>
          </section>
          <section class="flip-card-back">
            <figcaption><br> ${nuevaData[actual].fullName}</figcaption>
            <figcaption><hr><br>Title :${nuevaData[actual].title}</figcaption>
            <figcaption><br>Family: ${nuevaData[actual].family}</figcaption>
            <figcaption><br>Born: ${nuevaData[actual].born}</figcaption>
          </section>
        </section>
      </section>`
    }
  }
}


//___________BUSCADOR_____________________________________________________________
const search =document.getElementById("search")

search.addEventListener("keyup", function () {
  const filteredData = searcher.searchData(search.value);
  const resultsList = document.querySelector('.card');
  
  resultsList.innerHTML = "";

  filteredData.forEach(item => {
    return container.innerHTML += `<section class="flip-card">
      <section class="flip-card-inner">
        <section class="flip-card-front">
          <figure >
            <img class="imagen" src=${item.imageUrl}>
            <figcaption>${item.fullName}</figcaption>
          </figure>
        </section>
        <section class="flip-card-back">
          <figcaption><br> ${item.fullName}</figcaption>
          <figcaption><hr><br>Title :${item.title}</figcaption>
          <figcaption><br>Family: ${item.family}</figcaption>
          <figcaption><br>Born: ${item.born}</figcaption>
        </section>
      </section>
    </section> `
  });
})

//__________FILTRADO POR FAMILIA:___________________________________________________
//Constantes y eventos de selectores.

const familySelection=document.getElementById("house")

familySelection.addEventListener("change", function(){
  const resultsList = document.querySelector('.card');
  const selectedHouse =familySelection.value;

  resultsList.innerHTML = "";
  const legacy= houseFilter.cards(selectedHouse) //TODO esta es la linea que conecta con data (la declaracion de la variable nos trae el resultado de llamar a la función)

  legacy.forEach(item => {
    return container.innerHTML += `<section class="flip-card">
    <section class="flip-card-inner">
      <section class="flip-card-front">
        <figure >
          <img class="imagen" src=${item.imageUrl}>
          <figcaption>${item.fullName}</figcaption>
        </figure>
      </section>
      <section class="flip-card-back">
        <figcaption><br> ${item.fullName}</figcaption>
        <figcaption><hr><br>Title :${item.title}</figcaption>
        <figcaption><br>Family: ${item.family}</figcaption>
        <figcaption><br>Born: ${item.born}</figcaption>
      </section>
    </section>
  </section> `
  });
});

//Funcion que conecta con el mensaje con la casa.

familySelection.addEventListener("change", function(){
  const selectedHouse =familySelection.value;
  const resultsWords = document.querySelector(".words");
  const resultShield = document.getElementById("shield");
  const resultHistory = document.getElementById("history");
  const resultComment =document.querySelector(".autor");
  changeColor(selectedHouse)
  

  //a. limpiar contenidos de los espacios...
  resultsWords.innerHTML = "";
  resultComment.innerHTML= "";
  resultShield.innerHTML = "";
  resultHistory.innerHTML= "";

  const words=mottoFilter.mottoFilterFunction(selectedHouse)

  //b. Pintar la nueva informacion en los espacios...

  words.forEach(item => {
    resultsWords.innerHTML=`<p>"${item.motto}"</p>`
  })

  words.forEach(item => {
    resultComment.innerHTML=`<h3>${item.comment}</h3>`
  })
  
  words.forEach(item => {
    resultShield.innerHTML+=`<img src="${item.imageUrl}" alt= "House Shield"></img>`
  })

  words.forEach(item => {
    resultHistory.innerHTML+=`<p>${item.history}</p>`
  })
})

//Cambio del color del background

function changeColor(valueSelector) {
//  const selectedHouse2 = familySelection.value;
  let mainColor ="";

  if (valueSelector === "Baelish" || valueSelector === "Baratheon" || valueSelector === "Clegane"){
    mainColor = "	#CCAD2A";
  } 
  else if (valueSelector === "Lannister"||valueSelector=== "Bolton"|| valueSelector === "Targaryen"){
    mainColor= "#BD2E31";
  } 
  else if (valueSelector === "Stark"||valueSelector === "Greyjoy"|| valueSelector === "Seaworth"){
    mainColor= "#828282";
  } 
  else if (valueSelector === "Tarly"||valueSelector === "Tyrell"|| valueSelector=== "Mormont"){
    mainColor= "#008F39";
  }
  else if (valueSelector === "Tarth"){
    mainColor="#3B83BD";
  }  
  else if (valueSelector === "Martell"){
    mainColor= "#ED7700";
  }
  document.querySelector('main').style.backgroundColor = mainColor

}

//___________________________ORDENAR______________________________________
//Constantes y eventos de ordenar.

const order=document.getElementById("order")

order.addEventListener('input',() =>{
  removeChildNodes(container)
  fetchGots(sortData(data, order.value))

})

/*const orderSelector= document.getElementById("order")

orderSelector.addEventListener("change", function(){
  const resultsList = document.querySelector('.card');
  const selectionOrder =orderSelector.value;

  resultsList.innerHTML = "";
  const ordened= orderFunction.cards(selectionOrder) //TODO esta es la linea que conecta con data (la declaracion de la variable nos trae el resultado de llamar a la función)
*/

function removeChildNodes(parent) {   // proporcionaste es un fragmento de código en JavaScript que se utiliza para eliminar todos los nodos hijos de un elemento HTML específico.
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild)
  }
}
fetchGots(data);
