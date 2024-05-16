function loadApi() {
  fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())   //  Most developers use res instead of response
    .then(data => console.log(data))

  // document.getElementById('show-details').innerText = data.

}

