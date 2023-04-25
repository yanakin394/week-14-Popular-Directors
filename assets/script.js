// создаю переменную для массива
const directorsArr = [
    {
        name: 'Стивен Спилберг',
        career: 'Продюсер, Режиссёр, Актёр, Сценарист, Монтажёр',
        films: 'https://ru.wikipedia.org/wiki/%D0%A4%D0%B8%D0%BB%D1%8C%D0%BC%D0%BE%D0%B3%D1%80%D0%B0%D1%84%D0%B8%D1%8F_%D0%A1%D1%82%D0%B8%D0%B2%D0%B5%D0%BD%D0%B0_%D0%A1%D0%BF%D0%B8%D0%BB%D0%B1%D0%B5%D1%80%D0%B3%D0%B0',
        top_rated_film: 'Список Шиндлера'
    },
    {
        name: 'Кристофер Нолан',
        career: 'Сценарист, Продюсер, Режиссёр, Оператор, Монтажёр, Актёр, Композитор',
        films: 'https://www.film.ru/compilation/vse-filmy-kristofera-nolana-ot-luchshego-k-horoshemu',
        top_rated_film: 'Начало'
    },
    {
        name: 'Мартин МакДона',
        career: 'Сценарист, Режиссёр, Продюсер',
        films: 'https://www.film.ru/person/martin-makdonah',
        top_rated_film: 'Три билборда на границе Эббинга, Миссури'
    },
    {
        name: 'Алексей Балабанов',
        career: 'Режиссёр, Сценарист, Актёр, Продюсер',
        films: 'https://www.film.ru/person/aleksey-balabanov',
        top_rated_film: 'Брат'
    },
    {
        name: 'Питер Фаррелли',
        career: 'Продюсер, Режиссёр, Сценарист, Актёр',
        films: 'https://www.film.ru/person/piter-farrelli',
        top_rated_film: 'Зелёная книга'
    },
    {
        name: 'Юрий Быков',
        career: 'Актёр, Режиссёр, Сценарист, Композитор, Монтажёр, Продюсер',
        films: 'https://www.film.ru/person/yuriy-bykov',
        top_rated_film: 'Дурак'
    },
    {
        name: 'Жан-Марк Валле',
        career: 'Режиссер, Продюсер, Монтажёр, Актёр, Сценарист',
        films: 'https://www.film.ru/person/zhan-mark-valle',
        top_rated_film: 'Далласский клуб покупателей'
    },
];

//выбираю элемент html, куда нужно поместить данные о режиссерах
let directorsContainer = document.querySelector(".directors_container");

//вызываю метод forEach у массива
directorsArr.forEach ((item) => {
    const directorItem = document.createElement("div");     // создаю элемент див чтобы поместить элементы массива
    directorItem.className = 'director_item_wrapper';       // добавляю класс для стилей
    directorItem.innerHTML = `
        <p class="director_item_title">${item.name}</p>
        <p class="career">${item.career}</p>
        <a class="link" href="${item.films}" target="_blank">Фильмография</a>`;
    

// добавляю элементу в контейнер
    directorsContainer.appendChild(directorItem);
});

//выбираю элемент html, куда нужно поместить данные о лучших фильмах
let containerForBestMovies = document.querySelector(".movie_list");

//создаю переменную для извлечения элементов из массива
let topMovieList = directorsArr.map(function (elem) {
    const listMovie = document.createElement("span");   // создаю html элемент, куда будет помещаться информация о фильмах
    listMovie.innerHTML =                               // прописываю html разметку
    `<span class="best_movies_list">${elem.top_rated_film}, </span>`;
    containerForBestMovies.appendChild(listMovie);      // помещаю элементы в контейнер
})