function validate() {
  let regex = /^\w*\@(\w*\.\w+)$/gm;
  const inputElement = document.querySelector("#email");
  inputElement.addEventListener("change", ifChange);

  function ifChange() {
    regex.test(inputElement.value)
      ? inputElement.classList.remove("error")
      : inputElement.classList.add("error");
  }
}
