function displayFreedomFighters(fighters) {
  fighters.forEach((fighter, index) => {
    console.log(`${index + 1}. ${fighter}`);
  });
}


const femaleFreedFighters = [
  "Indira Gandhi",
  "Joan of Arc",
  "Rosa Parks",
  "Malala Yousafzai",
  "Emmeline Pankhurst"
];

displayFreedomFighters(femaleFreedFighters);