export const sampleData = [
  { size: 850, beds: 2, age: 5, loc: 'city', price: 90000 },
  { size: 900, beds: 2, age: 20, loc: 'suburb', price: 70000 },
  { size: 1500, beds: 3, age: 10, loc: 'city', price: 180000 },
  { size: 2000, beds: 4, age: 2, loc: 'city', price: 320000 },
  { size: 1200, beds: 3, age: 15, loc: 'suburb', price: 140000 },
  { size: 600, beds: 1, age: 30, loc: 'rural', price: 30000 },
];

export const locEncode = (loc) => loc === 'city' ? 1 : loc === 'suburb' ? 0.8 : 0.6;
