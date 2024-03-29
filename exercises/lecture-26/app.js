// Завдання 1. 
function calculate(operation, initialValue, numbers) {
    let result = initialValue;
    for (const number of numbers) {
      result = operation(result, number);
    }
    return result;
}
  
function sum(n1, n2) {
    return n1 + n2;
}
  
function multiply(n1, n2) {
    return n1 * n2;
}
  
console.log(calculate(sum, 0, [1, 2, 4]));      
console.log(calculate(multiply, 1, [1, 2, 4])); 

// Завдання 2. Маємо масив student_names
let student_names = ["Wick", "Malcolm", "Smith"]

// Застосувати до масиву student_names метод map, щоб отримати на консолі результат у такому вигляді: name: Wick | index: 0 | array: [ "Wick", "Malcolm", "Smith" ] name: Malcolm | index: 1 | array: [ "Wick", "Malcolm", "Smith" ] name: Smith | index: 2 | array: [ "Wick", "Malcolm", "Smith" ]
student_names.map(function(name, index, array) {
    console.log(`name: ${name} | index: ${index} | array: [ "${array.join('", "')}" ]`);
});

// Завдання 3. Маємо масив об'єктів students_information, що представляє результати іспитів кожного студента у полі degree:
let students_information = [
    {"name": "Wick", "degree": 375}, 
    {"name": "Malcolm", "degree": 405}, 
    {"name": "Smith", "degree": 453},
];

// Максимальна оцінка degree = 600 Розрахувати відсоткове значення отриманої оцінки по кожному студенту, використовуючи метод map, та вивести на консоль отриманий результат у такому вигляді: { name: "Wick", degree: 375, percentage: 62.5 } { name: "Malcolm", degree: 405, percentage: 67.5 } { name: "Smith", degree: 453, percentage: 75.5 }​
let maxDegree = 600;

let result = students_information.map(function(student) {
let percentage = (student.degree / maxDegree) * 100;
  return {
    name: student.name,
    degree: student.degree,
    percentage: percentage
  };
});

result.forEach(item => console.log(item));


/* Завдання 4. Маємо масив :
[1, 2, 3, [10, 11, 12], 21, 22, 23, [31, 32, 33, 34], [41, 42]];
Використовуючи метод reduce, звести масив до одномірного
[ 1, 2, 3, 10, 11, 12, 21, 22, 23, 31, 32, 33, 34, 41, 42 ] */

const array = [1, 2, 3, [10, 11, 12], 21, 22, 23, [31, 32, 33, 34], [41, 42]];

const flattedArray = array.reduce((accumulator, currentValue) => {
  return accumulator.concat(currentValue);
}, []);

console.log(flattedArray);

// Завдання 5. Створити конструктор прототипу масиву upperCase(), що перетворює символи рядка у символи верхнього регістру.

Array.prototype.upperCase = function() {
    for (let i = 0; i < this.length; i++) {
      if (typeof this[i] === 'string') {
        this[i] = this[i].toUpperCase();
      }
    }
  };

  function myFunc() {
    let arr = ["Algorithm", "Data Structure", "Operating System", "html"];
    arr.upperCase();
    console.log(arr);
  }
  
  myFunc(); // [ 'ALGORITHM', 'DATA STRUCTURE', 'OPERATING SYSTEM', 'HTML' ]
  
