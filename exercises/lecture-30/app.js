// Завдання 1. 

async function waitForUserInput() {
    await new Promise(resolve => setTimeout(resolve, 10000)); // Чекаємо 10 секунд

    const firstName = document.querySelector('input[name="firstName"]').value.trim();
    const lastName = document.querySelector('input[name="lastName"]').value.trim();

    if (firstName === '' && lastName === '') {
        document.getElementById('waiting').textContent = "I'm missing You";
    } else {
        document.getElementById('waiting').textContent = `Hello ${firstName} ${lastName}!`;
    }
}

waitForUserInput();


// Завдання 2.

const xhr = new XMLHttpRequest();

xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);

xhr.onload = function() {
    if (xhr.status === 200) {
        var posts = JSON.parse(xhr.responseText);
        var postsHTML = '';
        posts.forEach(function(post) {
            postsHTML += `
                <h3>${post.title}</h3>
                <p>${post.body}</p>
            `;
        });
        
        document.getElementById('demo').innerHTML = postsHTML;
    } else {
        console.error("Request failed: ", xhr.status);
    }
};

xhr.send();
