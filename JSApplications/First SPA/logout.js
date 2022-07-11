import { updateNavigation } from "./auth.js";
export function logOut(){
    localStorage.removeItem('token')
    updateNavigation()
    
}