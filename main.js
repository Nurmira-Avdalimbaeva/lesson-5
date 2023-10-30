            // 1) Математические расчеты и функции

            // Создайте две функции, add и multiply; пусть каждая принимает по два аргумента.
            //  Функция add должна складывать аргументы и возвращать результат, а функция multiply — перемножать аргументы.
            // С помощью только этих двух функций вычислите следующее несложное выражение: 36325 * 9824 + 777


// function add( a, b ) {
//     c = a + b;
//     return c;
// }
// function multiply( a, b ) {
//     c = a * b;
//     return c;
// }
// result = add(multiply(36325, 9824), 777);
// console.log( result );


            // 2) Сделайте функцию, которая возвращает квадрат числа. Число передается параметром.

// function square(number) {
//     return number * number;
//   } 
//   const num = 5;
//   const squaredNum = square(num);
//   console.log(`Квадрат числа ${num} равен ${squaredNum}`);


            // 3) Сделайте функцию, которая возвращает сумму двух чисел.

// function addNumbers(a, b) {
//     return a + b;
//   } 
//   const num1 = 5;
//   const num2 = 7;
//   const sum = addNumbers(num1, num2);
//   console.log(`Сумма ${num1} и ${num2} равна ${sum}`);

         
            // 4) Сделайте функцию, которая отнимает от первого числа второе и делит на третье.

// function subtractiondivision(первое, второе, третье) {
//     if (typeof первое === 'number' && typeof второе === 'number' && typeof третье === 'number') {
//     if (третье !== 0) {
//       const result = (первое - второе) / третье;
//       return result;
//     } else {
//       return "Ошибка: деление на ноль.";
//     }
//     } else {
//       return "Ошибка: Все аргументы должны быть числами.";
//     }
//   }
//   const первое_число = 10;
//   const второе_число = 5;
//   const третье_число = 2;
  
//   const result= subtractiondivision(первое_число, второе_число, третье_число);
//   console.log(result); 
  


            // 5) Сделайте функцию, которая принимает параметром число от 1 до 7, а возвращает день недели на русском языке.

// function getDayOfWeekInRussian(dayNumber) {
//     if (dayNumber === 1) {
//         return "Понедельник";
//     } else if (dayNumber === 2) {
//         return "Вторник";
//     } else if (dayNumber === 3) {
//         return "Среда";
//     } else if (dayNumber === 4) {
//         return "Четверг";
//     } else if (dayNumber === 5) {
//         return "Пятница";
//     } else if (dayNumber === 6) {
//         return "Суббота";
//     } else if (dayNumber === 7) {
//         return "Воскресенье";
//     } else {
//         return "Неверный день недели";
//     }
// }

// const dayNumber = 1; 
// const dayOfWeek = getDayOfWeekInRussian(dayNumber);
// console.log("День недели: " + dayOfWeek);

  