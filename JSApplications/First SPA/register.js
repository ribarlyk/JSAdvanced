const classRegister = document.querySelector(".register");
const form = classRegister.querySelector("form");
//const guestElement = document.querySelector("#guest");

let url = "http://localhost:3030/users/register";

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let newForm = new FormData(form);

  const email = newForm.get("email");
  const password = newForm.get("password");
  const repass = newForm.get("rePass");

  if (password === repass) {
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ email, password, repass }),
    })
      .then((resp) => resp.json())
      .then((user) => {
        if(user.message != undefined){
        alert(user.message)
      }else{
        alert('Succesfully registered')
      }
        ;
      })

      .catch((err) => {
        alert(err);
      });
  } else {
    alert("Passwords don`t match");
  }
});

export function register() {
  classRegister.style.display = "inline";
}
