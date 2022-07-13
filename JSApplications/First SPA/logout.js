import { updateNavigation } from "./auth.js";
const url = 'http://localhost:3030/users/logout'
export function logOut(){
    fetch(url,{
        method:'GET',
        headers: {
            'content-type': 'application/json',
            'X-Authorization': JSON.parse(localStorage.getItem('token'))
        }
    }).then(resp=>resp.json())
    localStorage.removeItem('token')
    updateNavigation()
    
}