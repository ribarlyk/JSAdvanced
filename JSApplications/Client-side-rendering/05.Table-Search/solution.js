import { html, render } from "../node_modules/lit-html/lit-html.js";

const url = "http://localhost:3030/jsonstore/advanced/table";
document.querySelector("#searchBtn").addEventListener("click", onClick);
let input = document.querySelector("#searchField").value;
const tb = document.querySelector("tbody");

let students;
const template = (student) => html`
  <tr class=${student.match ? "select" : ""}>
    <td>${student.info.firstName} ${student.info.lastName}</td>
    <td>${student.info.email}</td>
    <td>${student.info.course}</td>
  </tr>
`;

getData();

function onClick() {
  input = document
    .querySelector("#searchField")
    .value.trim()
    .toLocaleLowerCase();
  for (let student of students) {
    if (input.length > 0) {
      student.match = Object.values(student.info).some((v) =>
        v.toLocaleLowerCase().includes(input)
      );
    }
  }
  document.querySelector("#searchField").value = "";
  update();
}

function update() {
  render(students.map(template), tb);
}

async function getData() {
  let response = await fetch(url);
  let data = await response.json();
  students = Object.values(data).map((s) => ({ info: s, match: false }));
  update();
}
