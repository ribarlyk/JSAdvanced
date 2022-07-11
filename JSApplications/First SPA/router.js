import { logIn } from './login.js'
import { logOut } from './logout.js'
import { register } from './register.js'
import { createRecipe } from './createRecipe.js'
import { catalog } from './catalog.js'
import {render404} from './renderer404.js'


function hideContent(){
    const main = document.querySelector('.main-content')
    for(let section of main.children){
        section.style.display = 'none'
    }
}
let routes = {
    '/' : catalog,
    '/create' : createRecipe,
    '/logout' : logOut,
    '/login' : logIn,
    '/register' : register

}


export function router(path){
    hideContent()

    let renderer = routes[path] || render404

    renderer()
}