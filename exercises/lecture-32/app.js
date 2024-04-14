// Використовуючи метод fetch замість XMLHttpRequest, переписати сценарій app.js
const url = "https://jsonplaceholder.typicode.com/posts";

const template = (item) => `
  <h3>${item.title}</h3>
  <div>${item.body}</div>
  <p>Author: <strong><span class="author" data-id="${item.userId}"></span></strong></p>
`;

const fetchPromise = async (url) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}, Text: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Fetch error:', error);
  }
};

console.log(fetchPromise(url));

fetchPromise(url)
  .then(posts => {
    let result = '';
    posts.forEach(item => {
      result += template(item);
    });
    document.getElementById("blog").innerHTML = result;
    
    const users = document.querySelectorAll('.author');
    users.forEach(async user => {
      try {
        const userData = await fetchPromise(`https://jsonplaceholder.typicode.com/users/${user.dataset.id}`);
        console.log(userData.name);
        user.textContent = userData.name;
      } catch (error) {
        console.error('User fetch error:', error);
      }
    });
  });
