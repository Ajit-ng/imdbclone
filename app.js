// const url = 'https://imdb-top-100-movies.p.rapidapi.com/';
// const options = {
//     method: 'GET',
//     headers: {
//         'X-RapidAPI-Key': '6d9cb45588msh800abe8ba78a523p17d89bjsn336c85963ad9',
//         'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
//     }
// };

// async function fetchData() {
//     try {
//         const response = await fetch(url, options);
//         const result = await response.json();
//         localStorage.setItem("movies", JSON.stringify(result));
//     } catch (error) {
//         console.error(error);
//     }
// }

window.addEventListener("DOMContentLoaded", () => {
    showData();
    const searchForm = document.querySelector('.search-container form');
    const searchInput = document.querySelector('.search-box');

    searchForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const searchword = searchInput.value.trim().toLowerCase();
        filterMovies(searchword);
    });
});

function showData() {
    let movies = JSON.parse(localStorage.getItem("movies"));
    for (let i = 0; i < movies.length; i++) {
        let div = document.createElement("div");
        div.className = "box";
        div.setAttribute("id", i);
        div.addEventListener("click", () => {
            window.location.href = "nextpage.html";
            localStorage.setItem("movie", JSON.stringify(movies[i]));
        })
        let html = `<img src="${movies[i].image}">
            <h2>${movies[i].rating}</h2>
            <h2>${movies[i].title}</h2>
            <button>Trailer</button>
            <button>Watch</button>`;
        div.innerHTML += html; 
        document.querySelector(".mainpage").appendChild(div);
        console.log(movies[i]);
    }
}

function filterMovies(searchword) {
    const movies = JSON.parse(localStorage.getItem("movies"));
    const mainPage = document.querySelector(".mainpage");
    mainPage.innerHTML = ''; 

    for (let i = 0; i < movies.length; i++) {
        if (movies[i].title.toLowerCase().includes(searchword)) {
            let div = document.createElement("div");
            div.className = "box";
            div.setAttribute("id", i);
            div.addEventListener("click", () => {
                window.location.href = "nextpage.html";
                localStorage.setItem("movie", JSON.stringify(movies[i]));
            })
            let html = `<img src="${movies[i].image}">
                <h2>${movies[i].rating}</h2>
                <h2>${movies[i].title}</h2>
                <button>Trailer</button>
                <button>Watch</button>`;
            div.innerHTML = html;
            mainPage.appendChild(div);
        }
    }
}
