function addItem() {
  let addIt = document.getElementById("newItemText").value;
  let li = document.createElement("li");
  let ulElement = document.getElementById("items");
  li.textContent = addIt;
  let remove = document.createElement("a");

  let textRemove = document.createTextNode("[Delete]");
  remove.appendChild(textRemove);
  remove.href = "#";
  remove.addEventListener("click", deleteItem);
  li.appendChild(remove);
  ulElement.appendChild(li);

  function deleteItem(e) {
    e.target.parentElement.remove();
  }
}
