// Write your Pizza Builder JavaScript in this file.

// Constants
const basePrice = 10;
const ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

// Initial value of the state (the state values can change over time)
const state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
};
console.log(state);
// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice();
}

function renderPepperoni() {
  document.querySelectorAll('.pep').forEach((onePep) => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll('.mushroom').forEach((oneMush) => {
    if (state.mushrooms) {
      oneMush.style.visibility = 'visible';
    } else {
      oneMush.style.visibility = 'hidden';
    }
  });
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach((oneGreen) => {
    if (state.greenPeppers) {
      oneGreen.style.visibility = 'visible';
    } else {
      oneGreen.style.visibility = 'hidden';
    }
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  let sectionSauce = document.querySelector('section.sauce');

  if (state.whiteSauce === true) {
    sectionSauce.classList.add('sauce-white');
  } else {
    sectionSauce.classList.remove('sauce-white');
  }
  // console.log(sectionSauce);
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  let sectionCrust = document.querySelector('section.crust');

  if (state.glutenFreeCrust === true) {
    sectionCrust.classList.add('crust-gluten-free');
  } else {
    sectionCrust.classList.remove('crust-gluten-free');
  }
  // console.log(sectionCrust);
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`

  if (state.pepperoni === true) {
    document.querySelector('.btn.btn-pepperoni').classList.remove('active');
  } else {
    document.querySelector('.btn.btn-pepperoni').classList.add('active');
  }

  if (state.mushrooms === true) {
    document.querySelector('.btn.btn-mushrooms').classList.remove('active');
  } else {
    document.querySelector('.btn.btn-mushrooms').classList.add('active');
  }

  if (state.greenPeppers === true) {
    document.querySelector('.btn.btn-green-peppers').classList.remove('active');
  } else {
    document.querySelector('.btn.btn-green-peppers').classList.add('active');
  }

  if (state.whiteSauce === true) {
    document.querySelector('.btn.btn-sauce').classList.remove('active');
  } else {
    document.querySelector('.btn.btn-sauce').classList.add('active');
  }

  if (state.glutenFreeCrust === true) {
    document.querySelector('.btn.btn-crust').classList.remove('active');
  } else {
    document.querySelector('.btn.btn-crust').classList.add('active');
  }

  // let activeButtons = document.querySelectorAll('.btn');

  // console.log(activeButtons);
  // for (let i = 0; i < activeButtons; i++) {
  //   for (const el in state) {
  //     if (el === true) {
  //       activeButtons[i].classList.add('active');
  //     } else {
  //       activeButtons[i].classList.remove('active');
  //     }
  //   }
  // }
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  // const hiddenText = document.querySelector('.hidden');
  // console.log(hiddenText);
  // console.log(state.pepperoni);

  let totalPrice = document.getElementById('totalPriceID');
  console.log(totalPrice.innerHTML);
  basicCheesePizza = 10;
  pepperoniPizza = 0;
  mushroomsPizza = 0;
  greenPeppersPizza = 0;
  whiteSaucePizza = 0;
  crustPizza = 0;

  if (state.pepperoni === true) {
    document.querySelector('#pepperoniText').classList.remove('hidden');
    pepperoniPizza += 1;
  } else {
    document.querySelector('#pepperoniText').classList.add('hidden');
  }

  if (state.mushrooms === true) {
    document.querySelector('#mushText').classList.remove('hidden');
    mushroomsPizza += 1;
  } else {
    document.querySelector('#mushText').classList.add('hidden');
  }

  if (state.greenPeppers === true) {
    document.querySelector('#greenText').classList.remove('hidden');
    greenPeppersPizza += 1;
  } else {
    document.querySelector('#greenText').classList.add('hidden');
  }

  if (state.whiteSauce === true) {
    document.querySelector('#sauceText').classList.remove('hidden');
    whiteSaucePizza += 3;
  } else {
    document.querySelector('#sauceText').classList.add('hidden');
  }

  if (state.glutenFreeCrust === true) {
    document.querySelector('#crustText').classList.remove('hidden');
    crustPizza += 5;
  } else {
    document.querySelector('#crustText').classList.add('hidden');
  }

  totalPrice.innerHTML =
    basicCheesePizza +
    pepperoniPizza +
    mushroomsPizza +
    greenPeppersPizza +
    whiteSaucePizza +
    crustPizza;
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document
  .querySelector('.btn.btn-pepperoni')
  .addEventListener('click', function () {
    state.pepperoni = !state.pepperoni;
    renderEverything();
  });

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document
  .querySelector('.btn.btn-mushrooms')
  .addEventListener('click', function () {
    state.mushrooms = !state.mushrooms;
    renderEverything();
  });

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document
  .querySelector('.btn.btn-green-peppers')
  .addEventListener('click', function () {
    state.greenPeppers = !state.greenPeppers;
    renderEverything();
  });

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').addEventListener('click', function () {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
});
// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').addEventListener('click', function () {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
});
