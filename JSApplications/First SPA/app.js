import { router } from "./router.js";
import { updateNavigation } from "./auth.js";

router('/');
updateNavigation();


const navItem = document.querySelector('.navigation');
navItem.addEventListener('click', onNavigate);

function onNavigate(e){
     e.preventDefault()
    if(e.target.tagName == 'A'){
        let url = new URL(e.target.href)
        
        document.querySelector('.active').classList.remove('active');
        e.target.classList.add('active');
        router(url.pathname)
       
    }
}