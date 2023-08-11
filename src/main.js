//IMPORTACION DE BASES DE DATOS Y OTROS ARCHIVOS

import data from './data/got/got.js';
import {searcher} from "./data.js";
import { houseFilter } from './data.js';

//import { changeBackColor } from "./color.js";
//import motto from './data/got/motto.js';

//TODO  fetch(`./data/got/motto.json`)
//TODO .then(response => response.json())

//VISUALIZACIÓN Y PAGINACIÓN
//Constantes necesarias

const container = document.querySelector('.card')
//const search = document.querySelector('.search')
const previous = document.querySelector('.previous')
const next = document.querySelector('.next')

const elementsArray = data.got.length; //elemtos de la api
const itemPag = 12;     // cuantos elementos indico en la pagina
const numPag = Math.ceil(elementsArray / itemPag);        // MATH para redondear, numeros de paginas redondeando hacia arriba
let pagAct = 0; //pagina actual

//Eventos de paginación
// capturar datos de los botone y input


/*search.addEventListener('keyup', () => { // Registra un evento a un objeto en específico
  removeChildNodes(container)            // limpiar el container
  fetchGots(buscar(data, search.value.toLowerCase())) // buscar en data, search.value
})*/

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
    let actual = (prueba * itemPag) + i;
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
function removeChildNodes(parent) {   // proporcionaste es un fragmento de código en JavaScript que se utiliza para eliminar todos los nodos hijos de un elemento HTML específico.
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild)
  }
}
fetchGots(data);

//BUSCADOR
//Constantes necesarias
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

//SELECTORES:
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

//TODO funcion que hara que cambie el color

//familySelection.addEventListener("change", changeBackColor.changeColor)

//TODO funcion que conectara el mensaje con la casa.

/*familySelection.addEventListener("change", function(){
  const resultsWords = document.querySelector('.words');
  const selectedHouse =familySelection.value;
 
  resultsWords.innerHTML = "";
  const words= houseFilter.motto(selectedHouse) 

  words.forEach(item => {
    return Text.innerHTML +=
    return words.textContent
  });*/
