import cubes from "./cubes.js";

const results = document.querySelector('.search__results');
const categories = document.querySelectorAll('.search__category');
const type = document.querySelector('.search__input--type');
const submit = document.querySelector('.search__form');

function displayPuzzles(puzzles) {
   puzzles.forEach(puzzle => {
      const markup = `
         <div class="puzzle">
            <img class="puzzle__image" alt="${puzzle.type}" src="./assets/${puzzle.type}.jpg" />

            <div class="puzzle__info">
               <p>Model: <span class="puzzle__model">${puzzle.model}</span></p>
               <p>Size: <span class="puzzle__type">${puzzle.type}</span></p>
               <p>Price: <span class="puzzle__price">${puzzle.price}</span></p>
               <img class="puzzle__stars" alt="stars" src="./assets/2stars.png" >
            </div>
         </div>
      `;

      results.insertAdjacentHTML('beforeend', markup);

      results.classList.add('search__results--display');
   });
}

submit.addEventListener('submit', e => {
   e.preventDefault();

   e.preventDefault();

   const category = Array.from(categories).find(c => c.checked);

   if (!category.value) return;

   results.innerHTML = '';
   results.classList.remove('search__results--display');

   const puzzles = cubes.filter(cube => 0 <= cube.price && cube.price <= 20);

   displayPuzzles(puzzles);
});