import data from './data/got/motto.js';

const changeBackColor = {

  changeColor: function() {
  const main = document.main; 
  if (selector.value === "Baelish"||selector.value === "Baratheon"|| selector.value === "Clegane"){
    main.style.backgroundColor="#FF0000";
  } 
  else if (selector.value === "Lannister"||selector.value === "Bolton"|| selector.value === "Targaryen"){
    main.style.backgroundColor= "#cf010b";
  } 
  else if (selector.value === "Stark"||selector.value === "Greyjoy"|| selector.value === "Seaworth"){
    main.style.backgroundColor= "#828282";
  } 
  else if (selector.value === "Tarly"||selector.value === "Tyrell"|| selector.value === "Mormont"){
    main.style.backgroundColor= "#008F39";
  }
  else if (selector.value === "Tarth"){
    main.style.backgroundColor="#3B83BD";
  }  else if (selector.value === "Martell"){
    main.style.backgroundColor= "#FF8000";
  }
})}

export default changeBackColor