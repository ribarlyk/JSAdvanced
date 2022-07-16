import { html, render } from "../node_modules/lit-html/lit-html.js";

document.getElementById("btnLoadTowns").addEventListener("click", loadTowns);

const townsElements = (data) =>
  html`
    <ul>
      ${data.map((town) => html`<li>${town}</li>`)}
    </ul>
  `;

function loadTowns(e) {
  e.preventDefault();
  const towns = document.getElementById("towns").value.split(", ");
  const rootElement = document.getElementById("root");
  const result = townsElements(towns);
  
  render(result, rootElement);

  document.getElementById("towns").value = ''
}
