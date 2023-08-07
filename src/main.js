//import { example } from './data.js';
// import data from './data/lol/lol.js';
//import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';
import data from './data/got/got.js';


const container= document.querySelector('.card')
for (let i=0 ; i<data.got.length; i++){
  //console.log(data.got[i]);
  container.innerHTML += `<figure >
  <img class="imagen" src=${data.got[i].imageUrl}>
  <figcaption>${data.got[i].firstName}</figcaption>
  </figure>`
}
