import './sass/main.scss';
import axios from 'axios';
import modalCardTpl from './templates/modal-card.hbs';
import API from './JS/apiService'

// Проверка
API.getTrendingMovie(2).then((res) => console.log('Trending res', res))
API.getMovieBySearch('comedy', 1).then((res) => console.log('Search res', res))
API.getMovieDetails(500).then((res) => console.log('Details res', res))
API.getGenres().then((res) => console.log('Genres res', res)) 


const BASE_URL = `https://api.themoviedb.org/3`;
const API_KEY = `6a7bc4e26417129845bc117e7a600f1d`;

const modalCardContainer = document.querySelector('.modal-card-container')


// const popular = document.querySelector(".popular");

// fetchPopularToday()
//     .then((results) => renderPopularToday(results))
//     .catch((error) => console.log(error));

// function fetchPopularToday() {
//     const url = `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`;
//     return fetch(url)
//         .then(response => response.json())
//         // .then((data) => console.log(data))
        
//         .then(({ results }) => { return results })
//         .catch(error => console.log(error));
//     }
  

// function renderPopularToday(results) {
//         console.log(results)
    
//     if (!results) {
//         return
//     }
        
//     const markup = results
//         .map(({poster_path, genre_ids, original_title, release_date, vote_average}) => {
          
//             return `
//             <li class="poster-card">
//             <img class="poster-image"src="${poster_path}" alt="Poster" loading="lazy" />
//             <div class="poster-info">
//                 <h1 class="poster-title">
//                 ${original_title}
//                 </h1>
//                 <p class="poster-genre">
//                 ${genre_ids}
//                 </p>
//                 <p class="poster-release">
//                 ${release_date}
//                 </p>
//                 <p class="poster-average is-hidden">${vote_average}
//                 </p>
//             </div>
//             </li>
//              `
//         })
//         .join("");
    
//     popular.insertAdjacentHTML('beforeend', markup);
// }

    
// async function getMovieDetails(movieId) {
//     const url = `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`;
//     return await axios
//         .get(url)
//         .then((response) => {
//             console.log(response.data);
//             return response.data
            
            
//         })
    
// }

// function renderModalCard(data) {
//   const markup = modalCardTpl(data);
//   modalCardContainer.innerHTML = markup;
// }

// getMovieDetails(300).then(renderModalCard)

