const objects = [
    {
      number: 45,
    },
    {
      number: 4,
    },
    {
      number: 9,
    },
    {
      number: 16,
    },
    {
      number: 25,
    },
    {
      number: 16,
    },
    {
      number: 24,
    }
];

const numbers = objects.filter(obj => obj.number < 20).map(obj => obj.number);
console.log(numbers);
const total = objects.reduce((acc, obj) => acc + obj.number, 0);
console.log(total);