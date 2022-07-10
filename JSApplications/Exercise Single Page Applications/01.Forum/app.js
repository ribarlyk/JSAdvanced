//1. get form 
//2. make POST request to  http://localhost:3030/jsonstore/collections/myboard/posts
//3.


const url = 'http://localhost:3030/jsonstore/collections/myboard/posts'
const form = document.querySelector('form');
form.addEventListener('submit',onSubmit)

async function onSubmit(e){
    e.preventDefault()
let newForm = new FormData(form)
let user = newForm.get('username').trim();
let title = newForm.get('topicName').trim();
let post = newForm.get('postText').trim();

let dataObj = {
    user,
    title,
    post
        }
try{
let resp = await fetch('url',{
    method: 'POST',
    headers:{
        'Content-Type': 'application/json'
    },
    body : JSON.stringify(dataObj)
   
})
if(resp.status != 200){
    throw new Error('Request failed')
}}catch(err){
    alert(err.message);
}


}