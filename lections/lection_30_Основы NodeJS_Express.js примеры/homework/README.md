# Изучить материал
* https://learn.javascript.ru/screencast/nodejs

# Практика

# Лекция

1) Реализовать сборку языковых файлов (`*_{ln_code}.js`), которые имеют вид модуля с константой - объектом внутри. Использовать node.js скрипт.
        main_RU.js
        const lang = {
            "main_head_title": "Название компании"
        }

        main_EN.js
        const lang = {
            "main_head_title": "Company name"
        }

        // all
        {
            RU: {
                "main_head_title": "Название компании"
            },
            EN: {
                "main_head_title": "Company name"
            }
        }
2) Есть 4 файла изображения с различным именем, нам надо переименовать их и расположить в нужном порядке (пользователь сам определяет через переменные окружения). Также в переменных окружения устанавливается локализация изображения.

        Имя на входе - foo.jpg, dd.png
        Имя на выходе - image_FR_01.png, image_FR_02.jpg

3) Реализовать сборку языковых файлов используя gulp, все файлы локализации будут json.

4) Скомпилировать sass с переменными и миксинами.
        Переменные в _vars.sass, _fonts.sass, _general.sass
        Миксины в _mixins.sass, _res.sass