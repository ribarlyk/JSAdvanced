function addItem() {
  let inputField = document.getElementById("newItemText").value;
  let newLiElement = document.createElement("li");
  let parent = document.querySelector("#items");
  parent.appendChild(newLiElement);
  newLiElement.textContent = inputField;
}
