function attachEvents() {
  // http://localhost:3030/jsonstore/messenger
  //1.get dom form elements
  //2. make post request with the data from inputs
  //3. make get request to get all the messages and display them in textarea
  let textareaElement = document.getElementById("messages");
  let nameElement = document.getElementsByName("author")[0];
  let messageElement = document.getElementsByName("content")[0];
  document.getElementById("submit").addEventListener("click", onSubmit);
  document.getElementById("refresh").addEventListener("click", onRefresh);
  textareaElement.value = ''

   function onSubmit() {
    const url = "http://localhost:3030/jsonstore/messenger";
    let result = {
      author: nameElement.value,
      content: messageElement.value,
    };
    nameElement.value = "";
    messageElement.value = "";
     fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(result),
    }).then(resp =>resp.json())
    .then(data =>{})
    ;
    
  }

  function onRefresh() {
    const url = "http://localhost:3030/jsonstore/messenger";
 
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        
        let dataOf = Object.entries(data)
          .map((x) => `${x[1].author}: ${x[1].content}`)
          .join("\n");
          textareaElement.value = dataOf
      });
  }
}
attachEvents();
