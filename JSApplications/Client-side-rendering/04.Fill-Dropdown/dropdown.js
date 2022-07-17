import { html, render } from "../node_modules/lit-html/lit-html.js";

const selectElement = document.querySelector("div");
const url = "http://localhost:3030/jsonstore/advanced/dropdown";

async function getData() {
  let resp = await fetch(url);
  return await resp.json();
}

const options = Object.values(await getData());

let template = (data) =>
  html`
    <select id="menu">
      ${data.map((x) => html`<option value=${x._id}>${x.text}</option>`)}
    </select>
  `;

function update(option) {
  let result = template(option);
  render(result, selectElement);
}
update(options);

const form = document.querySelector("form");
form.addEventListener("submit", addItem);
async function addItem(e) {
  e.preventDefault();
  let formData = new FormData(form);
  const text = formData.get("text");

  let response = await fetch(url, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({ text }),
  });
  options.push(await response.json());
  
  update(options);
}
