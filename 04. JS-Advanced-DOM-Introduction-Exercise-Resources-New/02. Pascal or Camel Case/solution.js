function solve() {
  let text = document.getElementById("text").value;
  let name = document.getElementById("naming-convention").value;
  let result = "";

  if (name === "Camel Case") {
    for (let i = 0; i < text.length; i++) {
      if (text[i] === " ") {
        result += text[i + 1].toUpperCase();
        i++;
      } else {
        result += text[i].toLowerCase();
      }
    }
  } else if (name === "Pascal Case") {
    result += text[0].toUpperCase();
    for (let i = 1; i < text.length; i++) {
      if (text[i] === " ") {
        result += text[i + 1].toUpperCase();
        i++;
      } else {
        result += text[i].toLowerCase();
      }
    }
  } else {
    result += "Error";
  }

  let span = document.getElementById("result");
  span.textContent = result;
}
