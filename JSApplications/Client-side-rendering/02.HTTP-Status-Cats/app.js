import { cats } from "./catSeeder.js";
import { html, render } from "../node_modules/lit-html/lit-html.js";

const catsSection = document.getElementById("allCats");

const listTemplate = (data) => html`
  <ul>
    ${data.map(
      (cat) => html`<li>
        <img
          src="./images/${cat.imageLocation}.jpg"
          width="250"
          height="250"
          alt="Card image cap"
        />
        <div class="info">
          <button class="showBtn" @click="${onToggle}">Show status code</button>
          <div class="status" style="display: none" id=${cat.id}>
            <h4>${cat.statusCode}</h4>
            <p>${cat.statusMessage}</p>
          </div>
        </div>
      </li>`
    )}
  </ul>
`;
function update(){
    const result = listTemplate(cats);
    render(result, catsSection);
}
update()

function onToggle(e) {
  const divElement = e.target.parentNode.querySelector(".status");
  const btn = e.target.parentNode.querySelector(".showBtn");

  if (divElement.style.display === "none") {
    btn.textContent = "Hide status info";
    divElement.style.display = "block";
  } else {
    btn.textContent = "Show status code";
    divElement.style.display = "none";
  }
}
