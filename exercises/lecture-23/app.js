const alert = document.querySelector('.alert');

// Завдання 1. Знайти на сторінці кнопку з класом btn-primary. Призначте знайденому елементу подію onclick. Написати функцію обробки події onclick, що додає CSS-клас alert-primary до елемента з класом alert (змінила з id, адже його немає у документі) та змінює значення властивості textContent цього елемента на "A simple primary alert—check it out!".

const btnPrimary = document.querySelector('.btn-primary');
btnPrimary.onclick = function() {
    alert.classList.add('alert-primary');
    alert.textContent = "A simple primary alert—check it out!";
};

// Завдання 2. Знайти на сторінці кнопку з класом btn-secondary. Додати до кнопки прослуховувач події "click". Написати функцію обробки події click, що додає CSS-клас alert-secondary до елемента з класом alert та змінює значення властивості textContent цього елемента на "A simple secondary alert—check it out!"

const btnSecondary = document.querySelector('.btn-secondary');
btnSecondary.addEventListener('click', function() {
    alert.classList.add('alert-secondary');
    alert.textContent = "A simple secondary alert—check it out!";
});

// Завдання 3. Знайти на сторінці кнопку з класом btn-success. Додати до кнопки прослуховувач події "mouseover". Написати функцію обробки події mouseover, що додає CSS-клас alert-success до елемента з класом alert та змінює значення властивості textContent цього елемента на "A simple success alert—check it out!"

const btnSuccess = document.querySelector('.btn-success');
btnSuccess.addEventListener('mouseover', function() {
    alert.classList.add('alert-success');
    alert.textContent = "A simple success alert—check it out!";
});

// Додати до кнопки прослуховувач події "mouseout". Написати функцію обробки події mouseout, що видаляє CSS-клас alert-success з елемента alert та змінює значення властивості textContent цього елемента на пустий рядок.
btnSuccess.addEventListener('mouseout', function() {
    alert.classList.remove('alert-success');
    alert.textContent = "";
});

// Завдання 4. Знайти на сторінці кнопку з класом btn-danger. Додати до кнопки прослуховувач події "focus". Написати функцію обробки події focus, що додає CSS-клас alert-danger до елемента з класом alert та змінює значення властивості textContent цього елемента на "A simple danger alert—check it out!" Додати до кнопки прослуховувач події "focusout". Написати функцію обробки події focusout, що видаляє CSS-клас alert-danger з елемента alert та змінює значення властивості textContent цього елемента на пустий рядок.

const btnDanger = document.querySelector('.btn-danger');
btnDanger.addEventListener ('focus', function() {
    alert.classList.add('alert-danger');
    alert.textContent = "A simple danger alert—check it out!";
});

btnDanger.addEventListener ('focusout', function () {
    alert.classList.remove('alert-danger');
    alert.textContent = "";
});

// Завдання 5. Знайти на сторінці кнопки з класом btn-dark та btn-light. Написати функцію toggleMode, що перемикає клас «dark-mode» елемента document.body за допомогою методу classList.toggle(). Одночасно при перемиканні класу dark-mode потрібно приховувати або показувати відповідну кнопку. Якщо ввімкнено режим dark-mode, показати кнопку btn-light та сховати кнопку dark-mode, і навпаки, якщо вимкнено режим dark-mode, показати кнопку btn-dark та сховати кнопку btn-light

const btnDark = document.querySelector('.btn-dark');
const btnLight = document.querySelector('.btn-light');

//Зробила трохи ширше, бо інкше не коректно перемикалось зі світлого

// Функція toggleDarkMode для включення режиму dark-mode та приховування/показування відповідних кнопок
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    btnDark.style.display = 'none'; // Сховати кнопку dark-mode
    btnLight.style.display = 'inline-block'; // Показати кнопку btn-light
}

// Функція toggleLightMode для включення режиму light-mode та приховування/показування відповідних кнопок
function toggleLightMode() {
    document.body.classList.toggle('dark-mode');
    btnDark.style.display = 'inline-block'; // Показати кнопку dark-mode
    btnLight.style.display = 'none'; // Сховати кнопку btn-light
}

// Призначаємо подію click на обидві кнопки
btnDark.addEventListener('click', toggleDarkMode);
btnLight.addEventListener('click', toggleLightMode);

// Завдання 6. Знайти на сторінці кнопку з класом btn-info. Додати до кнопки прослуховувач події "keypress". Написати функцію обробки події keypress, що перевіряє, чи є натиснута клавіша, клавішею "Enter". Якщо це так, типову дію події потрібно скасовувати за допомогою методу event.preventDefault(). Після скасування дії за замовчуванням, додати CSS-клас alert-info до елемента з id = alert та змінити значення властивості textContent цього елемента на "A simple info alert—check it out!";

const btnInfo = document.querySelector('.btn-info');
btnInfo.addEventListener('keypress', handleKeyPress);
function handleKeyPress(event) {
    // Перевіряємо, чи натиснута клавіша Enter (код клавіші 13)
    if (event.key === 'Enter') {
        event.preventDefault(); // Скасування типової дії події

        alert.classList.add('alert-info'); 
        alert.textContent = 'A simple info alert—check it out!'; 
    }
}

// Завдання 7. Знайти на сторінці всі селектори .card. Використовуючи цмкл for, вивести на консоль вміст кожного елемента з класом .card-title

const cards = document.querySelectorAll('.card');

for (let i = 0; i < cards.length; i++) {
    const cardTitle = cards[i].querySelector('.card-title');
    
if (cardTitle) {
    console.log(cardTitle.textContent);
    }
}

// Завдання 8. Знайти на сторінці всі селектори .card. Використовуючи цикл for, знайти для кожного елемента .card кнопку з класом .add-to-cart, додати для кожної кнопки обробник події click, що викликає функцію, яка виводить на консоль вміст кожного елемента з класом .card-title

const cards1 = document.querySelectorAll('.card');

for (let i = 0; i < cards1.length; i++) {
    const cardTitle1 = cards1[i].querySelector('.card-title');
    const addToCart = cards1[i].querySelector('.add-to-cart');

if (cardTitle1 && addToCart) {
    addToCart.addEventListener('click', function() {
    console.log(cardTitle1.textContent);
        });
    }
}