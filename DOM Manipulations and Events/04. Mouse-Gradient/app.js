function attachGradientEvents() {
  let gradientElement = document.getElementById("gradient");
  gradientElement.addEventListener("mousemove", onMouseMove);
  let result = document.getElementById("result");

  function onMouseMove(e) {
    result.textContent =
      Math.floor((e.offsetX / gradientElement.clientWidth) * 100) + "%";
  }
}
