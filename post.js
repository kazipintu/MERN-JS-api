console.log('connected');
function loadPost() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(data => displayPost(data))

}

loadPost()

function displayPost(posts) {
  console.log(posts);
  const postBoxDiv = document.getElementById("post");
  for (const post of posts) {
    console.log(post);
    const div = document.createElement('div');
    div.classList.add("div-design")
    div.innerHTML = `
    <h2> ${post.id} </h2>
    <p> ${post.userId} </p>
    <h3> ${post.title} </h6>
    <p> ${post.body} </p>
    `
    console.log(div);

    postBoxDiv.appendChild(div)
  }

}

/*  ~ SIMILAR IN LOOK DIFFERENT IN DATA ~  */