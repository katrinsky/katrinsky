// Завдання 1. Отримати всі елементи з тегом h1. Вивести на консоль тип отриманого об'єкту та його розмір. Використовуючи цикл for, вивести на консоль кожний елемент з отриманого об'єкту.

const h1Elements = document.querySelectorAll('h1');
console.log("Тип об'єкту h1Elements:", typeof h1Elements);
console.log("Розмір об'єкту h1Elements:", h1Elements.length);

for (let i = 0; i < h1Elements.length; i++) {
    console.log("Елемент", i + 1, ":", h1Elements[i]);
}

// Завдання 2. Отримати перший абзац за допомогою document.querySelector('#id') за його ідентифікатором p1. Встановити для нього стиль background-color = "gold"

const p1 = document.querySelector('#p1');
p1.style.backgroundColor = "gold";

// Завдання 3. Отримати другий абзац за допомогою document.querySelector('#id') за його ідентифікатором p2. Встановити для нього стилі background-color:gold; color: blue; font-size: 2rem;

const p2 = document.querySelector('#p2');
p2.style.backgroundColor = "gold"; 
p2.style.color = "blue"; 
p2.style.fontSize = "2rem";

// Завдання 4. Отримати третій абзац за допомогою document.querySelector('#id') за його ідентифікатором p3. Призначити для нього клас third

const p3 = document.querySelector('#p3');
p3.classList.add('third');

// Завдання 5. Отримати четвертий абзац за допомогою document.querySelector('#id') за його ідентифікатором p4. Призначити для нього класи fourth та border

const p4 = document.querySelector('#p4');
p4.classList.add('fourth', 'border');

// Завдання 6. Знайти всі елементи з класом container. Використовуючи цикл for, вивести на консоль перший елемент для кожного зі знайдених елементів.

const container = document.querySelectorAll('.container');
for (let i = 0; i < container.length; i++) {
    const firstElement = container[i].querySelector(':first-child');
    console.log("Перший елемент для контейнера", i + 1, ":", firstElement);
}

// Завдання 7. 

const containers = document.querySelectorAll('.container');
for (let i = 0; i < containers.length; i++) {
    const firstElementContent = containers[i].querySelector(':first-child').textContent;
    console.log("Вміст першого елемента для контейнера", i + 1, ":", firstElementContent);
}

// Завдання 8.Знайти колекцію всіх елементів з селектором '.container header', зберегти її в змінній headers. Використовуючи цикл for для отриманої колекції headers, замінити заголовки h1 таким чином:
// перший залишити h1
// другий замінити на h2
// третій замінити на h3
// четвертий замінити на h4 зберегти початкові атрибути id та class

const headers = document.querySelectorAll('.container header');

for (let i = 0; i < headers.length; i++) {
  const header = headers[i];
  const h1 = header.querySelector('h1');

// Зміна заголовків
  switch (i) {
    case 0:
      break;
    case 1:
      h1.outerHTML = '<h2>' + h1.textContent + '</h2>';
      break;
    case 2:
      h1.outerHTML = '<h3>' + h1.textContent + '</h3>';
      break;
    case 3:
// Зберегти атрибути id та class для h4
      const id = h1.getAttribute('id');
      const classes = h1.getAttribute('class');
      h1.outerHTML = `<h4 id="${id}" class="${classes}">${h1.textContent}</h4>`;
      break;
  }
}

/* Використовуючи цикл for для колекції headers та масив classes, додати до отриманих тегів-заголовків класи таким чином
до h1 додати клас first
до h2 додати клас second
до h3 додати клас third
до h4 додати клас fourth */

const classes = ['first', 'second', 'third', 'fourth'];

for (let i = 0; i < headers.length; i++) {
  const header = headers[i];
  const h1 = header.querySelector('h1');
  const h2 = header.querySelector('h2');
  const h3 = header.querySelector('h3');
  const h4 = header.querySelector('h4');

  switch (i) {
    case 0:
      h1.classList.add(classes[i]);
      break;
    case 1:
      h2.classList.add(classes[i]);
      break;
    case 2:
      h3.classList.add(classes[i]);
      break;
    case 3:
      h4.classList.add(classes[i]);
      break;
  }
}

