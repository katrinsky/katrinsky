// Завдання 1. Маємо код
let str1 = 'I\'m a string!';
let str2 = "I'm a string!";

// Чи мають рядки str1 та str2 однакову довжину. Перевірити на рівність (недбалу та строгу) рядки str1 та str2.
console.log(str1 == str2); // true (недбале порівняння)
console.log(str1 === str2); //true (строге порівнянна)
console.log(str1.length == str2.length); // true (довжина рядків однакова)

// Завдання 2. Повернути перший символ рядка string5. Виконайте завдання, використовуючи індекс та метод charAt.
let string5 = 'Hello World';
console.log(string5.charAt(0)); // H

// Завдання 3. повернути символ J рядка str3:
let str3 = "Hello Javascript";
console.log(str3.charAt(6)); // J

// Завдання 4. Використовуючи індекс, отримати доступ до останнього символу рядка двома способами
let str4 = "Hello";
console.log(str4[str4.length -1]); // o
console.log(str4.charAt(str4.length - 1)); // o

// Завдання 5. Напишіть три варіанти функції lastChar, що повертає останній символ рядка
function lastCharCharAt(str4) {
    return str4.charAt(str4.length - 1);
  }
console.log(lastCharCharAt(str4)); // o

function lastCharSlice(str4) {
    return str4.slice(-1);
  }
console.log(lastCharSlice(str4)); // o

function lastCharIndexing(str4) {
    return str4[str4.length - 1];
  }
console.log(lastCharIndexing(str4)); // o

// Завдання 6. Маємо код
let a = 'When candles are out,';
let b = 'all cats are grey.';
// Використовуючи метод concat, вивести на консоль: When candles are out, all cats are grey
console.log(a.concat(' ', b));

// Завдання 7. Маємо код
{ let fact = "Fifteen is the same as"
let a = 5;
let b = 10;
// Використовуючи змінні a, b, fact, змінити значення fact та вивести його на консоль, щоб результат виглядав так: Fifteen is the same as 15
console.log(fact + ' ' + (a + b)); // Fifteen is the same as 15
} 

// Завдання 8. Маємо код
let firstName = "Tom";
let lastName = "Cat";
// Напишіть функцію getFullName, що повертає результат: "Tom Cat"
function getFullName(firstName, lastName) {
    return firstName + ' ' + lastName;
}
console.log(getFullName(firstName, lastName)); // Tom Cat

// Завдання 9. Напишіть функцію greeting, що використовує виклик функції getFullName та повертає такий результат: Hello, Tom Cat!
function greeting(firstName, lastName) {
    return 'Hello, ' + getFullName(firstName, lastName) + '!';
}
console.log(greeting(firstName, lastName)); // Hello, Tom Cat!

// Завдання 10. Використовуючи функцію greeting, створити такий шаблон: <div><h1>Hello, Tom Cat!</h1></div>
let template = `<div><h1>${greeting(firstName, lastName)}</h1></div>`;
console.log(template);

// Завдання 11. Маємо наступний код:
let string1 = "  The name of our game  ";
// Потрібно отримати такі результати
console.log(string1.trim());  // "The name of our game"
console.log(string1.trimStart()); // "The name of our game  "
console.log(string1.trimEnd()); // "  The name of our game"

const phoneNumber = '\t  555-123\n ';
// Потрібно отримати такі результати
console.log(phoneNumber.trim()); // => '555-123'
const phoneNumber1 = '\t  555-123 \\n ';
console.log(phoneNumber1.trimStart()); // => '555-123 \n'

// Завдання 12. Маємо наступний код:
let sentence = 'Always look on the bright side of life';
// Перевірити, чи містить рядок значення 'look up'
console.log(sentence.includes('look up'));
// Перевірити, чи містить рядок значення 'look on'
console.log(sentence.includes('look on'));
// Перевірити, чи містить рядок значення 'look on'Б починаючи з 8-ї позиції
console.log(sentence.includes('look on', 8));

// Завдання 13. Маємо наступний код
{ let sentence = 'Always look on the bright side of life'; 
// Знайти індекс символу 'l'
 console.log(sentence.indexOf('l')); // 1
// Знайти індекс символу 'l', починаючи з 3-ї позиції
 console.log(sentence.indexOf('l', 3)); // 7
// Знайти індекс символу 'L'
 console.log(sentence.indexOf('L')); // -1 (не знайдено)
}

// Завдання 14. Маємо наступний код:
{ let sentence = 'Always look on the bright side of life';
console.log(sentence.substring(7)); // Отримати підрядок 'look on the bright side of life
console.log(sentence.substring(0, 6)) // Отримати підрядок 'Always'
console.log(sentence.substring(7, 11)); // Отримати підрядок 'look'
}

// Завдання 15. Створити регулярний вираз, який призначений для перевірки імені користувача, що може містити цифри, літери у нижньому регістрі та символи - і _. Довжину імені користувача встановити від 8 до 16 знаків.
let usernameRegex = /^[a-z0-9_-]{8,16}$/;

// Завдання 16. Створити регулярний вираз, який призначений для перевірки email на коректність.
let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// Завдання 17. Маємо наступний код:
{ let sentence = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in sapien eu velit eleifend ullamcorper eget vitae nulla. Aenean euismod purus sed neque dictum, nec lobortis ante faucibus.';
// Напишіть функцію truncateText скорочення тексту до 50 символів, використовуючи метод substring
function truncateTextSubstring(sentence) {
    return sentence.substring(0, 50);
  }
console.log(truncateTextSubstring(sentence)); 

function truncateTextSubstr(sentence) {
    return sentence.substr(0, 50);
  }
  console.log(truncateTextSubstr(sentence));
}






  
  



