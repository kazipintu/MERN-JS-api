{
  const student = {
    name: 'A',
    age: 27,
    address: 'Bali',
  }
  const studentString = JSON.stringify(student);
  console.log(studentString);
  const studentParse = JSON.parse(studentString);
  console.log(studentParse);
}



{
  const employee = {
    name: "B",
    age: 32,
    id: 445,
    address: "India"
  }
  const employeeString = JSON.stringify(employee);
  console.log(employeeString);
  const employeeParse = JSON.parse(employeeString);
  console.log(employeeParse);
}



{
  const product = {
    name: "pen",
    type: "ball",
    Number: 555,
    store: 'amazon',
  }
  const productString = JSON.stringify(product);
  console.log(productString);
  const productParse = JSON.parse(productString);
  console.log(productParse);
}