/* Створити клас AuthException, розширивши клас Error. В методі constructor(code, message) визначити властивість this.message, що дорівнює code: message або code, якщо message не передано як аргумент.

Створіть змінну checkAuth, яка дорівнює результату пошуку селектора з класом check-auth у файлі index.html.

За допомогою addEventListener, виконайте обробку події click на змінній checkAuth. Функція зворотного зв'язку обробки цієї події повинна запускати блок try { } catch(e) {}.

У блоці try { } потрібно перевіряти результат, що повертає функція isAuth(). Якщо результат повернення дорівнює false, за допомогою оператора throw викинути виняток AuthException('FORBIDDEN', 'You don't have access to this page').

У блоці catch() перехопити цей виняток та передати сформоване повідомлення про помилку у діалог dialogBoxId, відобразивши його у параграфі з класом ="message".

Якщо результат повернення функції isAuth() дорівнює true, за допомогою метода window.open відкрити сторінку success.html. */


class AuthException extends Error {
  constructor(code, message) {
    super(message); // Викликаємо конструктор батьківського класу Error
    this.code = code;
    // Встановлюємо властивість message, яка дорівнює 'code: message', або просто 'code', якщо message не задано
    this.message = message ? `${code}: ${message}` : `${code}`;
  }

  toString() {
    return this.message;
  }
}

let isAuth = (auth) => auth ?? false;

let dialogBoxId = document.getElementById("dialogBox");
let checkAuth = document.querySelector(".check-auth");

// Додаємо обробник подій для кнопки "Check Auth"
checkAuth.addEventListener("click", () => {
  try {
    if (!isAuth()) {
      throw new AuthException('FORBIDDEN', "You don't have access to this page");
    } else {
      window.open("success.html", "_self");
    }
  } catch (e) {
    // У блоку catch перехоплюємо виняток AuthException і встановлюємо текст повідомлення про помилку у діалоговому вікні
    dialogBoxId.querySelector(".message").textContent = e.message;
    showDialog();
  }
});

function showDialog(e) {
  dialogBoxId.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      e.preventDefault();
    }
  });

  dialogBoxId.showModal();
}

function closeDialog() {
  dialogBoxId.close();
}
