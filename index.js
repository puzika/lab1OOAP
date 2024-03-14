import cubes from "./cubes.js";

const results = document.querySelector('.search__results');
const categories = document.querySelectorAll('.search__category');
const type = document.querySelector('.search__input--type');
const submit = document.querySelector('.search__form');

class Puzzle {
   price;
   model;
   stars;

   constructor(price, model, stars) {
      this.price = price;
      this.model = model;
      this.stars = stars;
   }

   getMarkup() { }

   display() {
      const markup = this.getMarkup();

      results.classList.add('search__results--display');

      results.insertAdjacentHTML('afterbegin', markup);
   }
}

class Cube extends Puzzle {
   getMarkup() {
      return `
         <div class="puzzle">
            <img class="puzzle__image" alt="cube" src="./assets/cube.jpg" />

            <div class="puzzle__info">
               <p>Model: <span class="puzzle__model">${this.model}</span></p>
               <p>Size: <span class="puzzle__type">cube</span></p>
               <p>Price: <span class="puzzle__price">${this.price}</span></p>
               <img class="puzzle__stars" alt="stars" src="./assets/${this.stars}stars.png" >
            </div>
         </div>
      `;
   }
}

class Pyraminx extends Puzzle {
   getMarkup() {
      return `
         <div class="puzzle">
            <img class="puzzle__image" alt="pyraminx" src="./assets/pyraminx.jpg" />

            <div class="puzzle__info">
               <p>Model: <span class="puzzle__model">${this.model}</span></p>
               <p>Size: <span class="puzzle__type">pyraminx</span></p>
               <p>Price: <span class="puzzle__price">${this.price}</span></p>
               <img class="puzzle__stars" alt="stars" src="./assets/${this.stars}stars.png" >
            </div>
         </div>
      `;
   }
}

class Megaminx extends Puzzle {
   getMarkup() {
      return `
         <div class="puzzle">
            <img class="puzzle__image" alt="megaminx" src="./assets/megaminx.jpg" />

            <div class="puzzle__info">
               <p>Model: <span class="puzzle__model">${this.model}</span></p>
               <p>Size: <span class="puzzle__type">megaminx</span></p>
               <p>Price: <span class="puzzle__price">${this.price}</span></p>
               <img class="puzzle__stars" alt="stars" src="./assets/${this.stars}stars.png" >
            </div>
         </div>
      `;
   }
}

class PuzzleFactory {
   puzzles = [];

   minPrice;
   maxPrice;
   stars;

   constructor(type) {
      this.type = type;
   }

   createPuzzles() {
      this.createCubes();
      this.createPyraminxes();
      this.createMegaminxes();

      return this.puzzles;
   }

   createCubes() {
      for (const cube of cubes) {
         const { price, model, type } = cube;

         if (this.minPrice <= price && price <= this.maxPrice && type === 'cube') this.puzzles.push(new Cube(price, model, this.stars));
      }

      return this.puzzles;
   }

   createPyraminxes() {
      for (const cube of cubes) {
         const { price, model, type } = cube;

         if (this.minPrice <= price && price <= this.maxPrice && type === 'pyraminx') this.puzzles.push(new Pyraminx(price, model, this.stars));
      }

      return this.puzzles;
   }

   createMegaminxes() {
      for (const cube of cubes) {
         const { price, model, type } = cube;

         if (this.minPrice <= price && price <= this.maxPrice && type === 'megaminx') this.puzzles.push(new Megaminx(price, model, this.stars));
      }

      return this.puzzles;
   }
}

class BudgetFacory extends PuzzleFactory {
   minPrice = 0;
   maxPrice = 20;
   stars = 2
}

class MediumFacory extends PuzzleFactory {
   minPrice = 21;
   maxPrice = 50;
   stars = 3
}

class PremiumFacory extends PuzzleFactory {
   minPrice = 51;
   maxPrice = Infinity;
   stars = 5;
}

submit.addEventListener('submit', (e) => {
   e.preventDefault();

   const category = Array.from(categories).find(c => c.checked);

   if (!category.value) return;

   results.innerHTML = '';
   results.classList.remove('search__results--display');

   let factory;

   if (category.value === 'budget') factory = new BudgetFacory();
   else if (category.value === 'medium') factory = new MediumFacory();
   else factory = new PremiumFacory();

   const puzzles = factory.createPuzzles();

   puzzles.forEach(puzzle => puzzle.display());
});


// function displayResults(category, brand, type) {
//    const searchCategory = cubes[category];

//    for (const cube of searchCategory) {
//       if (cube.brand === brand && cube.type === type) {
//          const markup = `
//             <div class="cube">
//                <img class="cube__image" alt="cube" src="./assets/cube.jpg" />

//                <div class="cube__info">
//                   <p>Model: <span class="cube__model">${cube.model}</span></p>
//                   <p>Size: <span class="cube__type">${cube.type}</span></p>
//                   <p>Price: <span class="cube__price">${cube.price}</span></p>
//                </div>
//             </div>
//          `;

//          results.insertAdjacentHTML('beforeend', markup);

//          results.classList.add('search__results--display');
//       }
//    }
// }

// submit.addEventListener('click', (e) => {
//    e.preventDefault();

//    const category = Array.from(categories).find(c => c.checked);

//    if (!category.value &&
//       !brand.value &&
//       !type.value) return;

//    results.innerHTML = '';
//    results.classList.remove('search__results--display');

//    displayResults(
//       category.value.toLowerCase(),
//       brand.value.toLowerCase(),
//       type.value.toLowerCase()
//    );
// })
