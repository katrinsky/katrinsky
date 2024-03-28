// Маємо масив list
const list = ['html', 'css', 'javascript', 'react.js'];
// Завдання 1. Використовуючи метод createElement, створити невпорядкований список на основі масиву list та вставити його на сторінку.

const ul = document.createElement('ul');
list.forEach(function(item) {
  const li = document.createElement('li');
  li.textContent = item;
  ul.appendChild(li);
});

const container = document.body;
container.appendChild(ul);

// Завдання 2. Маємо масив listWithHref
const listWithHref = [
    {'html': "https://developer.mozilla.org/en-US/docs/Web/HTML"}, 
    {'css': "https://developer.mozilla.org/en-US/docs/Web/CSS"}, 
    {'javascript': "https://developer.mozilla.org/en-US/docs/Web/JavaScript"}, 
    {'react.js': "https://react.dev"}
];
// Використовуючи метод createElement, створити впорядкований список на основі масиву listWithHref, де кожний елемент списку є тегом a з відповідним посиланням. Наприклад, для першого елемента списку: <a href="https://developer.mozilla.org/en-US/docs/Web/HTML">html</a>

const ol = document.createElement('ol');

listWithHref.forEach(function(itemObj) {
  const key = Object.keys(itemObj)[0];
  const value = itemObj[key];
  const li = document.createElement('li');
  const a = document.createElement('a');
  a.href = value;
  a.textContent = key;
  li.appendChild(a);
  ol.appendChild(li);
});

const container1 = document.body;
container1.appendChild(ol);

// Завдання 3. Маємо масив students
const students = [
  {'firstName': 'Tom', 'lastName': 'Cat', 'degree': 230},
  {'firstName': 'Nary', 'lastName': 'Ann', 'degree': 336},
  {'firstName': 'John', 'lastName': 'Doe', 'degree': 400},
  {'firstName': 'James', 'lastName': 'Bond', 'degree': 700},
]

// Використовуючи метод createElement, створити таблицю на основі масиву students. Заголовки стовпчиків таблиці - firstName, lastName, degree. Встановити для заголовків стовпчиків таблиці css-властивості: background-color: blue; color: azure; Додайте таблицю на сторінку.

const table = document.createElement('table');

const headers = ['firstName', 'lastName', 'degree'];
const headerRow = table.createTHead().insertRow();
headers.forEach(headerText => {
const th = document.createElement('th');
th.textContent = headerText;
th.style.backgroundColor = 'blue';
th.style.color = 'azure';
headerRow.appendChild(th);
});

const tbody = table.createTBody();
students.forEach(student => {
const row = tbody.insertRow();
Object.values(student).forEach(text => {
  const cell = row.insertCell();
  cell.textContent = text;
});
});

const container2 = document.body;
container2.appendChild(table);
