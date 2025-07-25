const form = document.getElementById('commentForm');
const commentList = document.getElementById('commentList');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  
  const username = document.getElementById('username').value.trim();
  const commentText = document.getElementById('commentText').value.trim();

  if (username && commentText) {
    const li = document.createElement('li');
    li.innerHTML = `<strong>${username}</strong><br>${commentText}`;
    commentList.appendChild(li);

    form.reset();
  }
});
