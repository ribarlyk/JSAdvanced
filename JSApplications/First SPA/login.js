import { updateNavigation } from "./auth.js";

const login = document.querySelector(".login");
const loginForm = login.querySelector("form");
const url = 'http://localhost:3030/users/login'

loginForm.addEventListener("submit", (e) => {
    e.preventDefault()
  const dataForm = new FormData(loginForm);
  const email = dataForm.get("email");
  const password = dataForm.get("password");

  
  fetch(url,{
    method: "POST",
    headers:{
        'content-type': 'application/json'
    },
    body: JSON.stringify({email,password})

  })
  .then(resp => resp.json())
  .then(user=> {
    localStorage.setItem('token',JSON.stringify(user.accessToken));//сериализираме датата.
   updateNavigation()
    alert('Succesful login')
  })
  
});

export function logIn(e){
login.style.display = 'block'

}
