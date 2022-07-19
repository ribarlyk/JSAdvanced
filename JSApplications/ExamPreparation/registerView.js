import { html, render } from "./node_modules/lit-html/lit-html.js";
const mainElement = document.getElementById("site-content");



const template = () => html`
  <section id="register-page" class="register">
    <form id="register-form" action="" method="" @submit=${onRegister}>
      <fieldset>
        <legend>Register Form</legend>
        <p class="field">
          <label for="email">Email</label>
          <span class="input">
            <input type="text" name="email" id="email" placeholder="Email" />
          </span>
        </p>
        <p class="field">
          <label for="password">Password</label>
          <span class="input">
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
            />
          </span>
        </p>
        <p class="field">
          <label for="repeat-pass">Repeat Password</label>
          <span class="input">
            <input
              type="password"
              name="confirm-pass"
              id="repeat-pass"
              placeholder="Repeat Password"
            />
          </span>
        </p>
        <input class="button submit" type="submit" value="Register" />
      </fieldset>
    </form>
  </section>
`;

export function regView() {
  const result = template();
  render(result, mainElement);
}
const url = "http://localhost:3030/users/register";

async function onRegister(e) {
  e.preventDefault();
  const regForm = document.getElementById("register-form");
  const dataForm = new FormData(regForm);
  let email = dataForm.get("email");
  let password = dataForm.get("password");
  const emailValue = document.getElementById("email").value;
  const passValue = document.getElementById("email").value;
  const repasslValue = document.getElementById("email").value;
  
    if (emailValue === "" || passValue === "" || repasslValue === "") {
      throw new Error("Fields cannot be empty");
    }else{
  
  try {
    let response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    if (response.ok === false) {
      throw new Error("False");
    }
    let data = await response.json();
    localStorage.setItem('user',JSON.stringify(data));
  } catch (error) {
    alert(error.message);
  }
 }
}
