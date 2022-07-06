function solve() {
  // 1. get dom elements
  // 2. make a fetch api request
  // 3. modify the requested data and append it to dom
  const spanElement = document.querySelector("span");
  const departBtn = document.getElementById("depart");
  const arrBtn = document.getElementById("arrive");

  let stopId = {
    next: "depot",
  };
  // arrBtn.disabled = true

  async function depart() {
    try {
      let url = `http://localhost:3030/jsonstore/bus/schedule/${stopId.next}`;
      let resp = await fetch(url);
      let data = await resp.json();
      if (resp.ok == false) {
        throw new Error(resp.statusText);
      }
      stopId = JSON.parse(JSON.stringify(data));

      spanElement.textContent = `Next stop ${stopId.name}`;
      //Презаписваме датата на първият масив за да можем да ползваме новите данни.
      //console.log(stopId)
      departBtn.disabled = true;

      arrBtn.disabled = false;
    } catch (err) {
      spanElement.textContent = "Error";
      departBtn.disabled = true;
      arrBtn.disabled = true;
    }
  }

  async function arrive() {
    departBtn.disabled = false;
    arrBtn.disabled = true;
    spanElement.textContent = `Arriving at ${stopId.name}`;
  }

  return {
    depart,
    arrive,
  };
}

let result = solve();
