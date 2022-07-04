async function loadRepos() {
	 const text  = document.getElementById('username').value;
	const repos = document.getElementById('repos');

	try{
	const resp = await fetch(`https://api.github.com/users/${text}/repos`)
	if(resp.ok === false){
		throw new Error(`${resp.status} ${resp.statusText}`)
	}
	let data = await resp.json()
	
	repos.innerHTML = ''
	for(let repo of data){
		text.value = ''
		repos.innerHTML += `<li>
		<a href="{repo.html_url}">
			${repo.full_name}
		</a>
	</li>`
	}}
	catch(err){
		alert(err.message)
	}

	}
