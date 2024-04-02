/* Є проста реєстраційна форма з полями для імені користувача, електронної пошти, пароля та кнопки «Надіслати». Існує також контейнер div (errorMessages) для відображення повідомлень про помилки перевірки. 
Написати JavaScript-код для обробки надсилання форми та виконання перевірки на стороні клієнта.

Перевірка форми: потрібно отримати значення імені користувача, електронної пошти та пароля.

Виконати базову перевірку:

ім’я користувача не може бути пустим,
електронна адреса має бути у правильному форматі,
пароль має містити принаймні 8 символів,
пароль має містити принаймні одну велику літеру, одну малу літеру, одну цифру та один спеціальний символ.
Обробка помилок: якщо будь-яка перевірка не вдасться, потрібно показати відповідне повідомлення про помилку. Повідомлення про помилки відображаються в розділі errorMessages.

Скидання форми: після успішної реєстрації потрібно скинути значення полів форми. */

document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("registrationForm");
    const errorMessages = document.getElementById("errorMessages");
  
form.addEventListener("submit", function(event) {
    event.preventDefault(); // Зупиняємо стандартну подію надсилання форми
  
errorMessages.innerHTML = ""; // Очищуємо повідомлення про помилки перед новою перевіркою
  
// Отримуємо значення полів форми
const username = form.elements["username"].value.trim();
const email = form.elements["email"].value.trim();
const password = form.elements["password"].value;
  
// Базова перевірка
    if (username === "") {
        displayError("Username cannot be empty");
    return;
      }
  
    if (!isValidEmail(email)) {
        displayError("Invalid email format");
    return;
      }
  
    if (password.length < 8 || !isValidPassword(password)) {
        displayError("Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one digit, and one special character");
    return;
      }
alert("Registration successful!"); // Повідомлення при успіху

// Скидання форми
form.reset();
    });
  
// Функція для перевірки правильності формату email
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
  
// Функція для перевірки пароля
function isValidPassword(password) {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+=[\]{};':"\\|,.<>/?-]).{8,}$/;
    return passwordRegex.test(password);
}
  
// Функція для відображення повідомлення про помилку
function displayError(message) {
    const errorMessageElement = document.createElement("div");
    errorMessageElement.classList.add("error-message");
    errorMessageElement.textContent = message;
    errorMessages.appendChild(errorMessageElement);
}
});
  