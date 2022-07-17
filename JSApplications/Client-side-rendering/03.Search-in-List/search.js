import { towns } from "./towns.js";
import { html, render } from "../node_modules/lit-html/lit-html.js";

const inputElement = document.querySelector("input").value;
const townsElement = document.getElementById("towns");
//const result = document.getElementById('result')
let counter = 0;
document.querySelector("button").addEventListener("click", search);
const template = (data) => html`
  <ul>
    ${towns.map((town) => html`<li>${town}</li>`)}
  </ul>
`;

function update() {
  let result = template(towns);
  render(result, townsElement);
}

update();

let liElements = document.querySelectorAll("li");
 function search() {
  
   liElements.forEach((town) => {
    if (town.textContent.includes(inputElement) && inputElement.length > 0) {
      console.log(town.textContent.length);
      town.classList.add("active");
      counter++;
      
    } 
    document.getElementById("result").textContent = counter;
   });
   
   
}
townsElement.children = ''
