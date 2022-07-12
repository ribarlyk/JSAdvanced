const createRec = document.querySelector(".create");
const form = createRec.querySelector("form");
const url = "http://localhost:3030/data/recipes";
form.addEventListener("submit", onCreate);

export function createRecipe() {
  createRec.style.display = "block";
}

function onCreate(e) {
    e.preventDefault()
  let formData = new FormData(form);
  const name = formData.get("name");
  const img = formData.get("img");
  const ingredients = formData.get("ingredients");
  const steps = formData.get("steps");

  const data = {
    name,
    img,
    ingredients,
    steps
  }
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data)
      
  })
  .then((resp) => resp.json())
  .then((recipe) => {
    console.log(recipe)})
  }
