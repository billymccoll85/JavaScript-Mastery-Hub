// Define an object representing a city
const city = {
  id: 1,
  name: 'New York City',
  population: 8537673,
};

// Convert the city object to a JSON string
const str = JSON.stringify(city);

console.log(str.id); // Output: undefined (id is not accessible in the JSON string)

// Parse the JSON string back into an object
const obj = JSON.parse(str);

console.log(obj.id); // Output: 1 (id is accessible in the parsed object)

// Define an array of city objects
const cities = [
  {
    id: 1,
    name: 'New York City',
    population: 8537673,
  },
  {
    id: 2,
    name: 'Los Angeles',
    population: 3977683,
  },
];

// Convert the cities array to a JSON string
const str2 = JSON.stringify(cities);

console.log(str2); // Output: [{"id":1,"name":"New York City","population":8537673},{"id":2,"name":"Los Angeles","population":3977683}]
