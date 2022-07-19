import { html, render } from "./node_modules/lit-html/lit-html.js";
const mainElement = document.getElementById("site-content");
import page from './node_modules/page/page.mjs';


const template = () => html`
  <section id="login-page" class="login">
    <form id="login-form" action="" method="" @submit=${onLogin}>
      <fieldset>
        <legend>Login Form</legend>
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
        <input class="button submit" type="submit" value="Login" />
      </fieldset>
    </form>
  </section>
`;
export function loginView() {
  const result = template();
  render(result, mainElement);
}
const url = "http://localhost:3030/users/login";

async function onLogin(e) {
  console.log('da ')
  e.preventDefault()
const loginForm = document.getElementById("login-form");
let formData = new FormData(loginForm);

  const email = formData.get("email");
  const password = formData.get("password");
  
    let response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    

    let data = await response.json();
    localStorage.setItem('user',JSON.stringify(data))
  
}
