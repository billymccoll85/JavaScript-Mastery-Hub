const fruits = ['apple', 'banana', 'orange', 'grape', 'kiwi', 'mango'];

const juicyFruits = fruits.filter(function (fruit) {
    return fruit === 'orange' || fruit === 'grape' || fruit === 'mango';
});

// Short version
const juicyFruits2 = fruits.filter((fruit) =>
    ['orange', 'grape', 'mango'].includes(fruit)
);

const footballClubs = [
    { name: 'Real Madrid', country: 'Spain', founded: 1902 },
    { name: 'Manchester United', country: 'England', founded: 1878 },
    { name: 'Bayern Munich', country: 'Germany', founded: 1900 },
    { name: 'Juventus', country: 'Italy', founded: 1897 },
    { name: 'Barcelona', country: 'Spain', founded: 1899 },
    { name: 'Liverpool', country: 'England', founded: 1892 },
    { name: 'AC Milan', country: 'Italy', founded: 1899 },
    { name: 'Ajax', country: 'Netherlands', founded: 1900 },
    { name: 'Boca Juniors', country: 'Argentina', founded: 1905 },
];

// Get only Spanish football clubs
const spanishClubs = footballClubs.filter(
    (club) => club.country === 'Spain'
);
// console.log(spanishClubs);

// Get football clubs founded in or after 1900
const modernClubs = footballClubs.filter((club) => club.founded >= 1900);
// console.log(modernClubs);

// Get football clubs that have a name longer than 10 characters
const longNameClubs = footballClubs.filter(
    (club) => club.name.length > 10
);

console.log(longNameClubs);
