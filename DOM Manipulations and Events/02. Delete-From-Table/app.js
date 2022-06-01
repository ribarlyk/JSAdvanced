function deleteByEmail() {
  let tableRows = Array.from(
    document.querySelectorAll("tbody tr td:nth-child(2)")
  );
  let inputField = document.querySelector("input").value;
  let resultElement = document.querySelector("#result");

  for (const li of tableRows) {
    if (li.textContent === inputField) {
      let row = li.parentNode;
      console.log(row.parentNode)
      row.parentNode.removeChild(li.parentNode);
      resultElement.textContent = "Deleted.";
    } else {
      resultElement.textContent = "Not found.";
    }
  }
}
