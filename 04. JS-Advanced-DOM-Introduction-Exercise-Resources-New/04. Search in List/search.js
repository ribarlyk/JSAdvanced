function search() {
  let towns = Array.from(document.querySelectorAll("#towns li"));
  let searchElement = document.getElementById("searchText").value;
  counter = 0;

  towns.forEach((element) => {
    if (
      element.textContent.includes(searchElement) &&
      searchElement.length > 0
    ) {
      counter++;
      element.style.fontWeight = "bold";
      element.style.textDecoration = "underline";
      console.log(searchElement);
    } else {
      element.style.fontWeight = "normal";
      element.style.textDecoration = "none";
    }
  });
  let result = document.querySelector("#result");
  console.log(result.textContent);
  result.textContent = `${counter} matches found`;
}
