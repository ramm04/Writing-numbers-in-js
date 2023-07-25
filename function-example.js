/**Функция - кусок кода который можно переиспользовать. 
 * Пример: вычисление решения квадратного уравнения 
 * a*x*x + b*x + c = 0
 * @return значение x
*/

function squarX(a, b, c) {
    let d = b * b - 4 * a * c;
    if (d < 0) {
        return [];
    } else {
        if (d === 0) {
            return [-b / (2 * a)];
        }

        // корень дискриминанта
        let dRoot = Math.sqrt(d);
        // [x1, x2]
        return [(-b + dRoot) / (2 * a), (-b - dRoot) / (2 * a)];
    }
}
 
/* Вычисляем x для разных значений a b и c.*/
squarX(1, 2, 3);
squarX(3, 2, 1);
