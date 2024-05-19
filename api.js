function loadApi() {
  fetch('https://jsonplaceholder.typicode.com/todos/5')
    .then(response => response.json())   //  Most developers use res instead of response
    .then(data => console.log(data))

  // document.getElementById('show-details').innerText = data.
}
// loadApi()


function loadUser() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => displayUser(data))   //  here we are calling the function diaplayUser(users)
}
// loadUser()


function displayUser(users) {
  console.log(users);

  const DIV = document.getElementById('show-details');
  for (const user of users) {
    console.log(user);
    console.log(user.phone);
    console.log(user.name);

    const li = document.createElement('li')
    li.innerText = user.name;
    DIV.appendChild(li);
    // li.innerText = user.phone;
    // console.log(li);
    // DIV.appendChild(li);

    //const DIV = document.getElementById('show-details'); loop will run everytime and JS performance will reduce, so we declare this varibale at the top of the loop.

  }

}
//displayUser()

