// Завдання 1. Знайти елемент ul у документі та запам'ятати його у змінній ul.
const ul = document.querySelector('ul');

// Завдання 2. За допомогою JSON.parse прочитати елемент localStorage з ключем items та зберегти його в масиві itemsArray. Якщо елемент відсутній, створити його зі значенням [].
let itemsArray;

const items = localStorage.getItem('items');

if (items) {
  itemsArray = JSON.parse(items);
} else {
  itemsArray = [];
}

// Завдання 3. Написати функцію addTask(text), що створює елемент li з властивістю textContent, яка дорівнює значенню, що передається за допомогою аргументу функції text. Кожний створений елемент li функція повинна додавати до елемента ul.
function addTask(text) {
    const li = document.createElement('li');
    li.textContent = text;
    ul.appendChild(li);
}

// Завдання 4. Використовуючи метод forEach та функцію addTask, згенерувати вміст елемента ul, відображаючи його на сторінці.
itemsArray.forEach(addTask);

// Завдання 5. Знайти елемент input у документі та запам'ятати його у змінній input.
const input = document.getElementById('item');

// Завдання 6. Написати функцію add(), що додає до масиву itemsArray значення, введене користувачем в полі input, та зберігає цей масив у localStorage з ключем items, використовуючи метод JSON.stringify. Одночасно візуалізувати доданий елемент на сторінці, використовуючи функцію addTask.
function add() {
    const newItemText = input.value.trim();

    if (newItemText !== '') {
      itemsArray.push(newItemText);
      localStorage.setItem('items', JSON.stringify(itemsArray));
      addTask(newItemText);
      input.value = '';
    }
  }
  
  // Завдання 7. Написати функцію del(), що чистить localStorage, масив itemsArray та значення властивості ul.innerHTML.

  function del() {
    localStorage.clear();
    itemsArray = [];
    ul.innerHTML = '';
  }
  
  

  

