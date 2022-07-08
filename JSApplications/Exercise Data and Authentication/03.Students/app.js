//1. fetch to http://localhost:3030/jsonstore/collections/students
//2. create student and fetch;
//3. extract student with fetch
//4. append all students to dom
const baseurl = "http://localhost:3030/jsonstore/collections/students";
const form = document.getElementById("form");
const table = document.querySelector("#results tbody");

window.addEventListener("load", loadStudents);
form.addEventListener("submit", createStudent);

async function loadStudents() {
  try {
    let response = await fetch(baseurl);
    if (response.status != 200) {
      throw new Error("Error");
    }
    let students = await response.json();

    Object.values(students).forEach((r) => {
      let studenten = creator(
        "tr",
        creator("td", r.firstName),
        creator("td", r.lastName),
        creator("td", r.facultyNumber),
        creator("td", r.grade)
      );
      
      table.appendChild(studenten);
    });
  } catch (err) {
    alert(err.message);
  }
}
async function createStudent(e) {
  e.preventDefault();

  let students = new FormData(form);

  let info = [...students.values()];

  table.replaceChildren();

  try {
    let response = await fetch(baseurl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName: info[0],
        lastName: info[1],
        facultyNumber: info[2],
        grade: info[3],
      }),
    });
    if (response.status != 200) {
      throw new Error("Error");
    }
    loadStudents();
  } catch (err) {
    alert(err.message);
  }
}

function creator(type, ...content) {
  let elements = document.createElement(type);

  content.forEach((x) => {
    if (typeof x == "number" || typeof x == "string") {
      x = document.createTextNode(x);
    }
    elements.appendChild(x);
  });
  return elements;
}
