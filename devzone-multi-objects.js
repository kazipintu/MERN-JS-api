console.log('connected');

function loadUsers() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(object => displayUsers(object))
}
loadUsers()

function displayUsers(users) {
  console.log(users);

  const divMultiObject = document.getElementById('div-multi-object')
  for (const user of users) {
    console.log(user)
    const divUser = document.createElement('div')
    divUser.classList.add('div-user')
    divUser.innerHTML = `
    <h3>Name: ${user.name}</h3>
    <p>Username: ${user.username}</p>
    <p>Email: ${user.email}</p>
    <p>Address: ${user.address.street} </p>
    <p>City: ${user.address.city} </p>
    <p>company name: ${user.company.name} </p>  
    `
    divMultiObject.appendChild(divUser)
  }


}