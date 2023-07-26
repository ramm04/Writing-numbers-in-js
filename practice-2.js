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






