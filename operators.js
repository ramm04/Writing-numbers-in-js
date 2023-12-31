//сложение
let x = 10 + 5; //15

//вычитание
let y = 10 - 5; //5

//умножение
let z = 10 * 5; //50

//деление
let q = 10 / 5; //2

//для вычисления остатка используется знак %
let w = 10 % 3; //1

//сложные вычисления
let complex = 10 + 5 * 10 - 8 / 2; //56 (приоритет очередности действий обычный)

//инкремент и декремент
 let a = 10;
 a++; //11
 a--; //10

//запись может быть префиксной
++a; //11
--a; //10

//постфиксный инкремент
console.log(a++); //10
console.log(a); //11

//постфиксный декремент
console.log(a--); //11
console.log(a) //10
 //декременты и инкременты часто используют в циклах.

 //если операция производится над одной переменной используется запись, которая называется "присвоение с операцией"
x +=5; // x = x + 5;
x -= 5;
x *= 3;
x /= 4;
x %= 5;