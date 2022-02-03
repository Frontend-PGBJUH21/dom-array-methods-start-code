// ARRAY METHODS

// Använda ett API för att hämta random users
// https://randomuser.me
// Kunna skapa lite olika metoder för att lista rika människor

// Select DOM elements
const main = document.getElementById("main");
const addUserBtn = document.getElementById("add-user");
const doubleBtn = document.getElementById("double");
const showMillionariesBtn = document.getElementById("show-millionaires");
const sortBtn = document.getElementById("sort");
const calculateWealthBtn = document.getElementById("calculate-wealth");

// initialize array
let data = [];

// get random user
async function getRandomUser() {
  const res = await fetch("https://randomuser.me/api");

  const data = await res.json();
  console.log(data);

  const user = data.results[0];

  const newUser = {
    name: `${user.name.first} ${user.name.last}`,
    money: Math.floor(Math.random() * 1000000),
  };

  console.log(newUser);

  addData(newUser);
}

getRandomUser();
getRandomUser();
getRandomUser();
// DOUBLE MONEY: use .map()
// we want the array with all our data and then double the money property on the user

// SORT BY RICHEST: use .sort()
// show richest first

// SHOW MILLIONAIRES: use .filter()
// property money should be greater than a million

// CALCULATE WEALTH: .reduce()

// addData function
function addData(obj) {
  data.push(obj);

  //update DOM
  updateDOM();
}

// updateDom function
function updateDOM(providedData = data) {
  // clear main div
  main.innerHTML = " <h2><strong>Person</strong> Wealth</h2>";

  providedData.forEach((person) => {
    const element = document.createElement("div");
    element.classList.add("person");
    element.innerHTML = `<strong>${person.name}</strong> ${formatMoney(
      person.money
    )}`;

    main.appendChild(element);
  });
}

// function format number as money
// https://stackoverflow.com/questions/149055/how-to-format-numbers-as-currency-string
function formatMoney(number) {
  return number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
  // lets wrap the person.money in this function
}

// add event listener
addUserBtn.addEventListener("click", getRandomUser);
