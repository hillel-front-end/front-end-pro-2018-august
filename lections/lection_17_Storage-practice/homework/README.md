# Изучить материал

+ https://tproger.ru/articles/localstorage/
+ https://developer.mozilla.org/ru/docs/Web/API/Storage
+ https://developer.mozilla.org/ru/Add-ons/WebExtensions/API/cookies
+ https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/JSON

# Практика

1) Эмулируем работу корзины. В правом верхнем углу список набранных товаров (определяем по id).
Товары расположены в ряд по центру. Создаем 5 разных типов товаров.

+ Кнопка Add to cart
+ Кнопка Remove (из корзины)
+ Кнопка Remove All
+ При перезагрузке страницы прорисовываются ранее выбранные товары 


\* При клике на товар, корзина прорисовывает список выбранных товаров

\** Если товар уже ранее был выбран, то увеличивается счетчик - Товар "id 205" x2 штуки

Дизайнерские решение должны быть максимально примитивными.

# Лекция

1) Создаем 2 блока, с кнопкой Show и счетчиком counter(в виде числа).
При нажатии на Show - counter показывает количество кликов на соответствующий блок. 
При перезагрузке страницы counter должен сохраняться.

2) Создать кнопку ClearCounters()

3) Создать кнопку setCounter(), который запрашивает id блока и устанавливает значение( в типе number ) в counter.

4) При увеличении counter-а - каждое значение до 50 должно окрашивать соответствующий блок в случайно сгенерированный цвет. Цвета генерируются при изменении counter-a и сохраняются в Storage. Когда значение доходит до 50 - применяется цвет по умолчанию.
        'this.style.backgroundColor = "rgb(x, y, z)";' 
                     -> x = getRand(256)
                        y = getRand(256)
                        z = getRand(256)
