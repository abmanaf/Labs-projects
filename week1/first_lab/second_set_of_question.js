//2. Array Transformations

//A. double(arr) Doubles every number in an array.
function doubledCountArray(arr) {
  return arr.map((count) => count * 2);
}
const arrayCount = [4, 5, 6];
const doubledNumber = doubledCountArray(arrayCount);
console.log(doubledNumber);

//B. filterEven(arr) Filters out even numbers from an array.
function fiterEvenNumber(even) {
  return even.filter((e) => e % 2 === 0);
}
const arrayOfNumbers = [1, 2, 3, 5, 7, 8, 4, 10];
const displayEvenNumbers = fiterEvenNumber(arrayOfNumbers);
console.log(displayEvenNumbers);

//C.sum(arr) Calculates the sum of all numbers in an array.
function sumNumber(arr) {
  return arr.reduce((total, currentNumber) => total + currentNumber, 0);
}
const arrayNumbers = [1, 2, 3, 5, 7, 8, 4, 10];
const calculatedValue = sumNumber(arrayNumbers);
console.log(calculatedValue);

//D. average(arr) Calculates the average of all numbers in an array.
function averageNumber(arr) {
  if (arr.length === 0) return 0;
  return (
    arr.reduce((total, currentNumber) => total + currentNumber, 0) / arr.length
  );
}
const myArrayOfNumbers = [2, 3, 4, 5, 1];
const average = averageNumber(myArrayOfNumbers);
console.log(average);
