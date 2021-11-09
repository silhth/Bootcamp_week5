
const solarSystem = [
    { name: 'Sun', radius: 696340, surface: 'star' },
    { name: 'Mercury', radius: 2440, surface: 'terrestrial' },
    { name: 'Venus', radius: 6052, surface: 'terrestrial' },
    { name: 'Earth', radius: 6371, surface: 'terrestrial' },
    { name: 'Mars', radius: 3389, surface: 'terrestrial' },
    { name: 'Jupiter', radius: 69911, surface: 'gas giant' },
    { name: 'Saturn', radius: 58232, surface: 'gas giant' },
    { name: 'Uranus', radius: 25362, surface: 'ice giant' },
    { name: 'Neptune', radius: 24622, surface: 'ice giant' },
];

const solarSystemIt = [
    { name: 'Sole' },
    { name: 'Mercurio' },
    { name: 'Venere' },
    { name: 'Terra' },
    { name: 'Marte' },
    { name: 'Giove' },
    { name: 'Saturno' },
    { name: 'Uranio' },
    { name: 'Nettuno' },
];


const diameter = (planets) => planets.radius * 2;


const solarSystemDiameter = solarSystem.map(diameter);
console.log(diameter);


const pName =solarSystem.map(planet => planet.name);


const translatedP = pName.map((planet) => {
    if (planet === 'Sun') return 'Sole';
    if (planet === 'Mercury') return 'Mercurio';
    if (planet === 'Venus') return 'Venere';
    if (planet === 'Earth') return 'Terra';
    if (planet === 'Mars') return 'Marte';
    if (planet === 'Jupiter') return 'Giove';
    if (planet === 'Saturn') return 'Saturno';
    if (planet === 'Uranus') return 'Uranio';
    if (planet === 'Neptune') return 'Nettuno';
});





// const solarIt = solarSystem.map(planet => {
//     if (planet.name === 'Sun') {planet.name === 'Sole'} ;
//     if (planet.name === 'Mercury')  {planet.name ===  'Mercurio'};
//     if (planet.name === 'Venus')  {planet.name ===  'Venere'};
//     if (planet.name === 'Earth')  {planet.name ===  'Terra'};
//     if (planet.name === 'Mars')  {planet.name ===  'Marte'};
//     if (planet.name === 'Jupiter')  {planet.name ===  'Giove'};
//     if (planet.name === 'Saturn')  {planet.name ===  'Saturno'};
//     if (planet.name === 'Uranus')  {planet.name ===  'Uranio'};
//     if (planet.name === 'Neptune')  {planet.name ===  'Nettuno'};
//     return planet
// })
    
// console.log(solarIt)

const translate = (planet) => {
    switch (planet.name) {
      case 'Sun':
        planet.name = 'Sole';
        break;
  
      case 'Mercury':
        planet.name = 'Mercurio';
        break;
  
      case 'Venus':
        planet.name = 'Venere';
        break;
  
      case 'Earth':
        planet.name = 'Terra';
        break;
  
      case 'Mars':
        planet.name = 'Marte';
        break;
  
      case 'Jupiter':
        planet.name = 'Giove';
        break;
  
      case 'Saturn':
        planet.name = 'Saturno';
        break;
  
      case 'Uranus':
        planet.name = 'Uranio';
        break;
  
      case 'Neptune':
        planet.name = 'Nettuno';
        break;
  
    }
    return planet
  }

  const solarIta = solarSystem.map(translate);

//   console.log(solarIta)
