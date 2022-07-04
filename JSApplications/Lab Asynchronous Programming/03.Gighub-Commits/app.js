async function loadCommits() {
  const id = document.getElementById("username").value;
  const repo = document.getElementById("repo").value;
  const kist = document.getElementById("commits");
  try{
  const resp = await fetch(
    `https://api.github.com/repos/${id}/${repo}/commits`
  );
  if (resp.ok === false) {
    throw new Error(`${resp.status} ${resp.statusText}`);
  }
  const data = await resp.json();
  kist.innerHTML = ''
  for(let { commit } of data){
    
   kist.innerHTML += `<li>${commit.author.name}: ${commit.message}</li>`
   
  
  }}
  catch( err){
    kist.innerHTML = `Error: ${err.message}`
  }
}
