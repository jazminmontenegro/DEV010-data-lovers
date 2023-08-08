import data from './data/got/got.js';

fetch(`./data/got/motto.json`)
  .then(response => response.json())
  //.then(dataMotto => console.log(dataMotto));

const container= document.querySelector('.card')
for (let i=0 ; i<data.got.length; i++){
  //console.log(data.got[i]);
  container.innerHTML += `<figure >
  <img class="imagen" src=${data.got[i].imageUrl}>
  <figcaption>${data.got[i].firstName}</figcaption>
  </figure>`
}

//Funciones para selector de familia

//function familyselect(){
//for (let i=0 ; i<data.motto.length; i++){
//}


//SELECTORES

const search =document.getElementById("search")
const buttonSearch=document.getElementById("btnsearch")
buttonSearch.addEventListener("click", function () {
  const searched=search.value;
  console.log(searched);
})

const familySelection=document.getElementById("house")
familySelection.addEventListener("change", function(){
  const selectedHouse =familySelection.value;
  console.log (selectedHouse);
});

const orderSelection=document.getElementById("order")
orderSelection.addEventListener("change", function(){
  const selectedOrder =orderSelection.value;
  console.log (selectedOrder);
});

//const family=document.getElementById("house")
//let familySelection=document.getElementById(family.value="general")
//


//const familyWords = document.querySelector('.words')
//const autor = document.querySelector('.autor')
//const shield= document.getElementById(shield)
//const familyHistory= document.getElementById(history)