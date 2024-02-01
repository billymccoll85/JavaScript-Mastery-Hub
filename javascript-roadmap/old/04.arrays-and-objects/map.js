/* 
In the provided code, there are two examples of using the map function.

Example with numbers:

The numbers array contains a list of numbers.
The map function is used on the numbers array, passing an arrow function (number) => number * 2 as the callback function.
The arrow function takes each number in the array and multiplies it by 2.
The map function returns a new array called doubledNumbers with the transformed values.
Finally, the doubledNumbers array is logged to the console.
Example with companies:

The companies array contains a list of objects, where each object represents a company with a name and an industry.
The map function is used on the companies array, passing an arrow function (company) => { return { name: company.name.toUpperCase(), industry: company.industry }; } as the callback function.
The arrow function takes each company object in the array and creates a new object with the name converted to uppercase and the same industry.
The map function returns a new array called modifiedCompanies with the transformed objects.
Finally, the modifiedCompanies array is logged to the console.
In both cases, the map function allows us to iterate over an array and apply a transformation to each element, creating a new array with the transformed values.
*/

// An array of numbers
const numbers = [1, 2, 3, 4, 5];

// Using the map function to double each number in the array
const doubledNumbers = numbers.map((number) => number * 2);

// Outputting the doubled numbers
console.log(doubledNumbers);

// An array of company names
const companies = [
    { name: 'Company A', industry: 'Technology' },
    { name: 'Company B', industry: 'Finance' },
    { name: 'Company C', industry: 'Healthcare' },
    { name: 'Company D', industry: 'Retail' },
    { name: 'Company E', industry: 'Automotive' },
    { name: 'Company F', industry: 'Entertainment' },
    { name: 'Company G', industry: 'Telecommunications' },
    { name: 'Company H', industry: 'Energy' },
    { name: 'Company I', industry: 'Hospitality' },
    { name: 'Company J', industry: 'Education' }
];

// Using the map function to create a new array with modified company names
const modifiedCompanies = companies.map((company) => {
    return { name: company.name.toUpperCase(), industry: company.industry };
});

// Outputting the modified company names
console.log(modifiedCompanies);

