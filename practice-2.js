/*
Вычисляем расстояние между двумя точками.
Даны координаты x, y двух точек. Нужно вывести расстояние между ними.
Вычисляем по теореме Пифагора.
*/

let x1 = 10;
let y1 = 2;

let x2 = -3;
let y2 = 3;

// Используем функцию abs, которая вычисляет абсолютное значение.
let cathetus1 = Math.abs(x1 - x2);
let cathetus2 = Math.abs(y1 - y2);

// Сочетаем несколько операций для вычисления гипотенузы.
// Берём корень квадратный из суммы квадратов катетов. 
// Math.sqrt - корень квадратный; Math.pow - возведение в степень.
console.log(Math.sqrt(
    Math.pow(cathetus1, 2) + Math.pow(cathetus2, 2)
));


/*
Сравниваем два дробных числа с указанной точностью.
Даны два числа и кол-во знаков после запятой, которое необходимо учитывать.
Вывести информацию, равны ли эти числа, больше ли первое число или меньше второго.
*/

let first = 0.1 + 0.2 + 0.033;
let second = 0.33334;
let precision = 3; // Точность. Количество знаков после запятой.

// Нормализуем сравниваемые числа под указанную точность (три знака после запятой)
let firstNormalized = Math.round(
    first = Math.pow(10, precision)
);
let secondNormalized = Math.round(
    second = Math.pow(10, precision)
);

// Далее выводим результак в консоль
console.log('Исходные числа равны', first === second); // false
console.log('Числа равны', firstNormalized === secondNormalized); // true
console.log('Первое число больше', firstNormalized > secondNormalized);
console.log('Первое число меньше', firstNormalized < secondNormalized);


/* 
Генератор случайных целых чисел от m до n.
Учесть, что n необязательно меньше, чем m!
*/

let n = -100;
let m = 350;

// кол-во цифр, котоные могут быть сгенерированы
let range = Math.abs(m - n);

// округленное число от 0 до range
let numberInRange = Math.round(Math.random() * range); // 400 чисел

// левая граница возможного числа
let min = Math.min(n, m);
console.log(min * numberInRange);


/*
 Выводим отдельно целую и дробную части числа с точностью n.
*/

let precision_1 = 3; // кол-во знаков после запятой. Неьлзя в одном блоке объявить одну переменную.
let number = 0x12f + .3 + .1;

console.log('Исходное число', number); // 303.0000000000003

// Для получения целого числа используем функцию Math.floor - (округляет в меньшую сторону)
console.log('Целая часть', Math.floor(number));
// остаток от деления на 1 возвращает дробную часть
console.log('Дробная часть', Math.round(number % 1 * Math.pow(10, precision_1)));
