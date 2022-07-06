async function getInfo() {
  //get dom elements
  const inputEl = document.getElementById("stopId").value;
  const btn = document.getElementById("submit");
  const div = document.getElementById("stopName");
  const ul = document.getElementById("buses");

  //make request
  let url = `http://localhost:3030/jsonstore/bus/businfo/${inputEl}`;
  try {
    let resp = await fetch(url);
    let data = await resp.json();

    //parse response to the div element
    ul.innerHTML = "";
    div.textContent = data.name;
    if (resp.ok == false) {
      throw new Error("resp");
    }
    Object.entries(data.buses).forEach((el) => {
      let liEl = document.createElement("li");
      liEl.textContent = `Bus ${el[0]} arrives in ${el[1]} minutes`;
      ul.appendChild(liEl);
    });
  } catch (err) {
    div.textContent = "Error";
    ul.innerHTML = "";
  }
}
// http://localhost:3030/jsonstore/bus/businfo/:busId
