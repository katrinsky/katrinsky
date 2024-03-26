// Маємо масив кольорів. Масив кольорів складається з 3 елементів. 
const colors = ['blue', 'green', 'white'];

// Завдання 1. Визначити функцію зворотного виклику під назвою "iter". Функція приймає один параметр під назвою «item». Усередині функції має бути оператор console.log, який виводить значення параметра «item» на консоль. Використовуючи forEach() та функцію iter, вивести в консоль значення кожного кольору.

function iter(item) {
    console.log(item);
}
colors.forEach(iter);

// Завдання 2. Визначити функцію зворотного виклику під назвою "iterate", яка приймає два параметри: "item" та "index". Функція повинна видавати повідомлення на консоль за допомогою шаблонних літералів. Повідомлення має містити значення «item» і значення «index» - ${item} has index ${index}. Використовуючи forEach() та функцію iterate, вивести в консоль значення кожного кольору

function iterate(item, index) {
    console.log(`${item} has index ${index}`)
}
colors.forEach(iterate);

/* Перепишіть функцію iterate, використовуючи масив colors, таким чином, щоб на консоль видавалось повідомлення 'The last iteration!', коли функція виконує останню ітерацію для елементів colors.

function iterate(item, index) {
  if (index === colors.length - 1) {
    console.log(`${item} has index ${index}. The last iteration!`);
  } else {
    console.log(`${item} has index ${index}`);
  }
}

colors.forEach(iterate); */

// Маємо масив letters
const letters = ['a', 'b', 'c'];

// Завдання 3. Визначити функцію зворотного виклику під назвою "iterate", яка приймає параметр під назвою "letter". Усередині функції має бути оператор console.log, який перевіряє, чи значення «this» дорівнює об'єкту «window». Коли функція викликається, вона повинна реєструвати «true» на консолі, якщо значення «this» дорівнює об'єкту «window».
{ function iterate(letter) {
  if (this === window)
    console.log('true')
  else {
    console.log ('false')
  }
}
letters.forEach(iterate, window);
}

// Завдання 4. Маємо масив під назвою Numbers. Встановити, чи всі числа масиву парні методом forEach()
const Numbers = [22, 3, 4, 10];
let allEven = true;
Numbers.forEach(function(number) {
  if (number % 2 !== 0) {
    allEven = false;
  }
});
    if (allEven) {
  console.log('Всі числа в масиві парні');
}   else {
  console.log('Масив містить непарні числа');
}

// Завдання 5. Маємо масив під назвою numbers. Встановити, чи всі числа масиву парні методом every()
const numbers = [22, 3, 4, 10];
{ const allEven = numbers.every(function(number) {
    return number % 2 === 0;
});
    if (allEven) {
    console.log('Всі числа в масиві парні');
  } else {
    console.log('Масив містить непарні числа');
  }
}

// Завдання 6. Маємо масив під назвою fruits. Використовуючи метод findIndex, знайти індекс першого елемента в масиві, який задовольняє умову fruit === "blueberries".
const fruits = ["apple", "banana", "cantaloupe", "blueberries", "grapefruit"];

const index = fruits.findIndex(fruit => fruit === "blueberries");
if (index !== -1) {
    console.log(`Індекс першого елемента "blueberries" в масиві: ${index}`);
  } else {
    console.log("Елемент 'blueberries' не знайдено в масиві");
  }

// Завдання 7. Маємо масив під назвою arr. Використовуючи метод find, знайти перший елемент у масиві arr, який задовольняє умову елемент > 10.
const arr = [7, 33, 47, 99, 2, 103, 79];

const foundElement = arr.find(element => element > 10);
  if  (foundElement !== undefined) {
    console.log(`Перший елемент у масиві > 10: ${foundElement}`)
  }
  else {
    console.log("Немає елементів > 10")
  }

// Завдання 8. Маємо масив під назвою array. Використовуючи метод some, перевірте, чи існує принаймні один елемент у масиві array, що є парним.
const array = [1, 2, 3, 4, 5];

const hasEven = array.some(element => element % 2 === 0);
  if (hasEven) {
    console.log('Існує принаймні один парний елемент у масиві');
  } else {
    console.log('Усі елементи у масиві не парні');
  }

// Завдання 9. Маємо масив під назвою numbers. Використовуючи метод sort, відсортуйте елементи масиву "numbers" у порядку зростання.
{ const numbers = [1, 30, 4, 21, 100000];
  numbers.sort(function(a, b) {
        return a - b;
      });
    console.log(numbers);
}




