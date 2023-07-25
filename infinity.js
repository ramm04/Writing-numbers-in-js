// В js есть специальное значение - Infinity (бесконечность)
Infinity > 100500; // true
-Infinity < -100500; // true

// В js деление на ноль равно бесконечности
100500 / 0; // Infinity :)

// а вот дальше интереснее

Infinity === Infinity; // true

Infinity > Infinity; // false
Infinity < Infinity; // false

Infinity >= Infinity; // true
Infinity <= Infinity; // true

Infinity + Infinity; // Infinity
Infinity - Infinity; // -Infinity

Infinity - Infinity; // NaN (not a number)
-Infinity + Infinity; // NaN (not a number)
Infinity / Infinity; // NaN (not a number) 

Infinity / 10; // Infinity
Infinity * 10; // Infinity
Infinity ** 10; // Infinity
Infinity ** Infinity; // Infinity


Infinity ** -Infinity; // 0
(-Infinity) ** Infinity; // Infinity

/*
- Не используйте Infinity без явной необходимости!
- Всё,  что делает бесконечность ещё более бесконечной,
  возвращает бесконечность.
- Любые операции с бесконечностью и числом вернут бесконечность.
- Уменьшение бесконечности при делении и вычитании (прибавление при отрицательной) 
  бесконечности в js не работает.
- Две бесконечности равны.
- Деление на 0 в js даёт бесконечность.
*/
