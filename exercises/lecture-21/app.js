// Завдання 1. Перетворити рядок fruits у масив. Результат зберегти у масиві fruits.
const fruits = 'apple banana cantaloupe blueberries grapefruit';

const fruitsArray = fruits.split(' ');
console.log(fruitsArray);

// Завдання 2. Використовуючи цикл for, вивести на консоль список елементів з масиву fruits.

for (let i = 0; i < fruitsArray.length; i++) {
    console.log(fruitsArray[i]);
}

// Завдання 3. Використовуючи цикл while, вивести на консоль список елементів з масиву fruits.

let i = 0;
while (i < fruitsArray.length) {
    console.log(fruitsArray[i]);
    i++;
}

// Завдання 4. Використовуючи цикл do...while, вивести на консоль список елементів з масиву fruits.

{ let i = 0;
do {
    console.log(fruitsArray[i]);
    i++;
} while (i < fruitsArray.length);
}

// Завдання 5. Використовуючи цикл for...of, вивести на консоль список елементів з масиву fruits.

for (let fruit of fruitsArray) {
    console.log(fruit);
}

// Завдання 6. Маємо масив Numbs.
const Numbs = [1,2,3,4,5,6,7,8,9,10];

// Використовуючи цикл for, вивести на консоль парні елементи з масиву Numbs.

for (let i = 0; i < Numbs.length; i++) {
    if (Numbs[i] % 2 === 0) {
      console.log(Numbs[i]);
    }
  }

// Завдання 7. Маємо масив names:
const names = ['Batman'];

// Додати 'Joker' в кінець масиву names:
names.push('Joker');
console.log(names);

// Завдання 8. Маємо масив names:
{ const names = ['Batman'];

// Додати 'Joker' на початок масиву names
names.unshift('Joker');
console.log(names);
}

// Завдання 9. Маємо масив names:
names1 = ['Batman', 'Joker', 'Bane'];

// Додати 'Catwoman' на початок масиву names, використовуючи метод unshift
names1.unshift('Catwoman');
console.log(names1);

// Завдання 10. Маємо масив names:
names2 = ['Batman', 'Joker', 'Bane'];

// Додати 'Catwoman' на початок масиву names, використовуючи оператор ...
names2 = ['Catwoman', ...names2];
console.log(names2);

// Завдання 11. Маємо масив names
names3 = ['Batman', 'Joker', 'Bane'];

// Додати до names елемент 'Catwoman', розмістивши його з індексом 1
names3.splice(1, 0, 'Catwoman');
console.log(names3);

// Завдання 12. Маємо масив names
const names4 = ['Batman', 'Catwoman', 'Joker', 'Bane'];

// Видалити елементи 'Catwoman' і 'Joker' з масиву names:
names4.splice(1, 2);
console.log(names4);

// Завдання 13. Маємо масив names:
const names5 = ['Batman', 'Catwoman', 'Joker', 'Bane'];

// Замінити елементи 'Catwoman' і 'Joker' на 'Alfred' у масиві names
names5.splice(1, 2, 'Alfred');
console.log(names5);

// Завдання 14. Маємо масив names:
const names6 = ['Batman', 'Catwoman', 'Joker', 'Bane'];

// Перевірити чи існує рядок 'Alfred' у масиві names, і якщо не існує, додати його до кінця масиву.
if (!names6.includes('Alfred')) {
    names6.push('Alfred');
  }
  
console.log(names6);

// Завдання 15. Маємо масив names:
const names7 = ['Batman', 'Catwoman', 'Joker', 'Bane', 'Alfred'];

// Перевірити, чи існує рядок 'Alfred' у масиві names, і якщо існує, видалити його з масиву.
if (names7.includes('Alfred')) {
    const index = names7.indexOf('Alfred');
    names7.splice(index, 1);
  }
  
console.log(names7);
