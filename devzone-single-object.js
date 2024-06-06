console.log('connected');

{
  const student = {
    id: 1,
    name: 'ahmad',
    phone: 12345,
    address: 'jannah',
  }
  console.log(student);

  const studentString = JSON.stringify(student);
  console.log(studentString);

  const studentParse = JSON.parse(studentString);
  console.log(studentParse);
}


{
  function loadData() {
    fetch("https://jsonplaceholder.typicode.com/todos/20")
      .then(response => response.json())
      //.then(data => console.log(data))
      .then(data => showData(data))
  }

  function showData(user) {
    console.log(user);
    const divNew = document.getElementById('div-new')
    divNew.innerHTML = `
    <p>id: ${user.id} </p>
    <p>title: ${user.title} </p>
    <p>userId: ${user.userId} </p>
    `

  }
}
