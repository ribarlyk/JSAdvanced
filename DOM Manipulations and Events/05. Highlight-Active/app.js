function focused() {
  const sections = Array.from(document.querySelectorAll("div input"));

  sections.forEach((el) => {
    el.addEventListener("focus", onFocus);
    el.addEventListener("blur", onBlur);
  });

  function onFocus(e) {
    e.target.parentElement.classList.add("focused");
  }
  function onBlur(e) {
    e.target.parentElement.classList.remove("focused");
  }
}
