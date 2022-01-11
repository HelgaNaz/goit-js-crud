import './sass/main.scss';

const popular = document.querySelector(".popular");



// Загружает тренды текущего дня
const BASE_URL = `https://api.themoviedb.org/3`;
const API_KEY = `6a7bc4e26417129845bc117e7a600f1d`;

fetchPopularToday()
    .then((results) => renderPopularToday(results))
    .catch((error) => console.log(error));

function fetchPopularToday() {
    const url = `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`;
    return fetch(url)
        .then(response => response.json())
        // .then((data) => console.log(data))
        
        .then(({ results }) => { return results })
        .catch(error => console.log(error));
    }
  

function renderPopularToday(results) {
        console.log(results)
    
    if (!results) {
        return
    }
        
    const markup = results
        .map(({poster_path, genre_ids, original_title, release_date, vote_average}) => {
          
            return `
            <li class="poster-card">
            <img class="poster-image"src="${poster_path}" alt="Poster" loading="lazy" />
            <div class="poster-info">
                <h1 class="poster-title">
                ${original_title}
                </h1>
                <p class="poster-genre">
                ${genre_ids}
                </p>
                <p class="poster-release">
                ${release_date}
                </p>
                <p class="poster-average is-hidden">${vote_average}
                </p>
            </div>
            </li>
             `
        })
        .join("");
    
    popular.insertAdjacentHTML('beforeend', markup);
}

    
  