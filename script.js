function fetchPost() {
  const id = document.getElementById("postId").value;
  const responseBox = document.getElementById("responseBox");

  if (!id) {
    responseBox.textContent = "Please enter a Post ID.";
    return;
  }

  fetch(`http://localhost:8080/posts/${id}`)
    .then(res => {
      if (!res.ok) throw new Error("Post not found");
      return res.json();
    })
    .then(data => {
      responseBox.textContent = JSON.stringify(data, null, 2);
    })
    .catch(err => {
      responseBox.textContent = `Error: ${err.message}`;
    });
}
