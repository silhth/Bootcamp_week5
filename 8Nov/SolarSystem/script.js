
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

// const rows = (row, rowIt) => {

//     if (row.name !== rowIt.name) {
//         let newrow = {
//             name: rowIt.name,
//             radius: row.radius,
//             surface: row.surface
//         }
//         return newrow

//     }


// };

// const newmm = solarSystem.map(rows(...solarSystem, ...solarSystemIt))


// const aa = (planets) => {let pname = array.forEach(element => {
    
// });}
// console.log(aa(solarSystemIt))
const rows = solarSystem.map((row) => {
    const mmm = (o => o.name !== row.name ? Object.values(o) : Object.values(row))
           let newrow = {
            name: mmm(solarSystemIt),
            radius: row.radius,
            surface: row.surface
        }
        return newrow

    }


);

        
console.log(rows);


// // const mmm = (a,b)=> {
// //     a.name !== b.name ? a.name: b.name
// // }

// // const cc= mmm(...solarSystemIt, ...solarSystem)
// console.log (solarSystemIt)
// console.log(...solarSystemIt)
// // solarSystemIt.find(o => o.name !== row.name ? o.name: row.name)
