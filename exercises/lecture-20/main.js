// Завдання 1. Створити об'єкт person, що має властивості name з типом рядка та age з типом цілого числа. Надати значення цим властивостям. Вивести значення властивостей об'єкту на консоль
let person = {
    name: "Катерина", // властивість з ім'ям
    age: 33 // властивість з віком
};
console.log("Ім'я:", person.name);
console.log("Вік:", person.age);

// Завдання 2. Змінити тип властивості name з рядка на об'єкт, з ключами firstName та lastName. Надати значення цим властивостям. Вивести значення властивостей об'єкту на консоль.
{ let person = {
    name: {
        firstName: "Катерина",
        lastName: "Столярова" 
    },
    age: 33
};
console.log("Ім'я:", person.name.firstName, person.name.lastName);
console.log("Вік:", person.age);
}

// Завдання 3. Створити метод об'єкту bio(), що виводить на консоль ім'я, прізвище та вік person.
{ let person = {
    name: {
        firstName: "Катерина",
        lastName: "Столярова"
    },
    age: 33,
    bio: function() {
        console.log("Ім'я:", this.name.firstName, this.name.lastName);
        console.log("Вік:", this.age);
    }
};
    person.bio();
}

// Завдання 4. Створити метод об'єкту introduceSelf, що виводить на консоль Hi! I'm firstName.
{ let person = {
    name: {
        firstName: "Катерина",
        lastName: "Столярова"
    },
    age: 33,
    introduceSelf: function() {
        console.log("Hi! I'm ", this.name.firstName);
    }
};
    person.introduceSelf();
}

// Завдання 5. Створити функцію-шаблон createPerson, що приймає аргумент name та повертає новий об'єкт з властивістю name та методом introduceSelf. Створити за допомогою createPerson 2 екземпляри об'єкта.
function createPerson(name) {
    return {
        name: name,
        introduceSelf: function() {
            console.log("Hi! I'm " + this.name + "!");
        }
    };
}
let person1 = createPerson("Оксана");
person1.introduceSelf();

let person2 = createPerson("Василь");
person2.introduceSelf();

// Завдання 6. Створити функцію-конструктор Person, що приймає аргумент name та повертає новий об'єкт з властивістю name та методом introduceSelf. Створити за допомогою Person 2 екземпляри об'єкта mary та tom.
function Person(name) {
    this.name = name;
    this.introduceSelf = function() {
        console.log("Hi! I'm " + this.name + "!");
    }
}
let mary = new Person("mary");
mary.introduceSelf();
// визначити, чи містить об'єкт mary властивість під назвою prop.
if ('prop' in mary) {
    console.log('Об\'єкт mary має властивість prop.');
} else {
    console.log('Об\'єкт mary не має властивості prop.');
}

let tom = new Person("tom");
tom.introduceSelf();

// Завдання 7. 

const DirtyMartini = {
    english_please: function() {
        console.log(`ingredients:
        6 fluid ounces gin
        1 dash dry vermouth (0.0351951ml) 
        1 fluid ounce brine from olive jar
        4 stuffed green olives`);
    },
    excuse_my_french: function() {
        console.log(`ingrédients:
        170.4786 ml de gin
        1 trait de vermouth sec (0.0351951ml) 
        28.4131 ml de saumure du pot d'olive
        4 olives vertes farcies`);
    }
};

DirtyMartini.english_please();
DirtyMartini.excuse_my_french();
