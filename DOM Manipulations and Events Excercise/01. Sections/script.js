function create(words) {
  const content = document.getElementById("content");

  for (const word of words) {
    let p = document.createElement("p");
    let div = document.createElement("div");
    p.textContent = word;
    p.style.display = "none";
    div.addEventListener("click", show);
    div.appendChild(p);
    content.appendChild(div);
  }

  function show(e) {
    e.target.firstChild.style.display = "";
  }
}
