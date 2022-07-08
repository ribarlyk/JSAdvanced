function attachEvents() {
  //http://localhost:3030/jsonstore/phonebook
  // delete api  http://localhost:3030/jsonstore/phonebook/:key>
  //1. get dom elements
  //2. make GET request and get the response IDs
  //3. append text to DOM
  //4. make DELETE request
  //5. make POST request
  let baseurl = "http://localhost:3030/jsonstore/phonebook";
  document.getElementById("btnLoad").addEventListener("click", onLoad);
  let personElement = document.getElementById("person");
  let phoneElement = document.getElementById("phone");
  let ulElement = document.getElementById("phonebook");
  let createBtn = document.getElementById("btnCreate");

  function onLoad() {
    fetch(baseurl)
      .then((response) => response.json())
      .then((phonebook) => {
        ulElement.replaceChildren();

        Object.values(phonebook).map((x) => {
          let li = document.createElement("li");
          li.textContent = `${x.person}: ${x.phone}`;
          let deleteBtn = document.createElement("button");
          deleteBtn.textContent = "Delete";
          li.addEventListener("click", (e) => {
            let current = e.currentTarget;
            ulElement.removeChild(current);
            fetch(`http://localhost:3030/jsonstore/phonebook/${x._id}`, {
              method: "Delete",
            });
          });
          li.appendChild(deleteBtn);
          ulElement.appendChild(li);
        });
      });
  }
  createBtn.addEventListener("click", () => {
    let forPost = {
      person: `${personElement.value}`,
      phone: `${phoneElement.value}`,
    };
    if(!personElement.value || !phoneElement.value){
      return
    }
    fetch("http://localhost:3030/jsonstore/phonebook", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(forPost),
    });
    personElement.value = '';
    phoneElement.value = '';
    onLoad();
  });
}

attachEvents();
