const userNavigation = document.querySelector('#user');
const guestNavigation = document.querySelector('#guest')

export function updateNavigation(){
  let serializedToken = localStorage.token;


    if(serializedToken){
        guestNavigation.style.display = 'none';
        userNavigation.style.display='inline'
    }else{
        guestNavigation.style.display = 'inline';
        userNavigation.style.display='none'
    }
}
