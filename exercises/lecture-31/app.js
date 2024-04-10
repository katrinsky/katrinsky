// Завдання 1. Створити власне сховище db.json, користуючись інструкцією How to на сервері https://my-json-server.typicode.com/
// => https://my-json-server.typicode.com/katrinsky/json/

// Завдання 2. Маємо код, що будує стрічку публікацій та поміщає отриманий результат всередину елемента з id="blog".
// Продовжити ланцюжок промісив, використовуючи метод then, де потрібно звернутись до сервера https://jsonplaceholder.typicode.com/users і для кожного userId отримати ім'я user, після чого помістити це ім'я всередину елемента з класом "author".
const url = "https://jsonplaceholder.typicode.com/posts";
const usersUrl = "https://jsonplaceholder.typicode.com/users";
const template = (item) => `
<h3>${item.title}</h3>
<div>${item.body}</div>
<p>Author: <strong><span class="author" data-id="${item.userId}"></span></strong></p>
`;

const xhrPromise = (method, url) => {
  const promise = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.send();
  
    xhr.onload = () => {
      if (xhr.status >= 400) {
        reject(xhr.response);
      } else {
        resolve(xhr.response);
      }
    };

    xhr.onerror = () => {
      reject('Something went wrong!');
    };   
  });

  return promise;
};

xhrPromise("GET", url)
  .then(response => {
    const posts = JSON.parse(response);
    let result = '';
    posts.forEach(item => {
      result += template(item);
    });
    document.getElementById("blog").innerHTML = result;

    // Отримання імен користувачів для кожного userId
    return xhrPromise("GET", usersUrl);
  })
  .then(response => {
    const users = JSON.parse(response);
    const authorElements = document.querySelectorAll('.author');
    
    authorElements.forEach(authorElement => {
      const userId = authorElement.getAttribute('data-id');
      const user = users.find(user => user.id === parseInt(userId));
      if (user) {
        authorElement.textContent = user.name;
      } else {
        authorElement.textContent = 'Author Unknown';
      }
    });
  })
  .catch(error => {
    console.error('Error:', error);
  });
