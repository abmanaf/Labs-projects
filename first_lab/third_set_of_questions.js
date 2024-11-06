//3.Object Transformations:

//A. fullName(person) Returns the full name of a person object (givenproperties firstName and lastName)
function fullName(person) {
  return (
    person.firstName.charAt(0).toUpperCase() +
    person.firstName.slice(1) +
    " " +
    person.lastName
  );
}
const person = {
  firstName: "aliu",
  lastName: "Abdul Manaf",
};
console.log(fullName(person));

//B. isAdult(person) Checks if a person is 18 or older (given property age
function isAdult(age) {
  if (age >= 18) {
    return "The person is an adult";
  } else {
    return "The person is not an adult";
  }
}
const personAge = 72;
const checkAge = isAdult(personAge);
console.log(checkAge);

//C. filterByAge(people, minAge) Filters an array of person objects to keep only those at least minAge years old.
function filterByAge(people, minAge) {
  return people.filter((person) => person.age >= minAge);
}
const people = [
  {
    name: "Alibaba",
    age: 23,
  },
  {
    name: "Bismark",
    age: 45,
  },
  {
    name: "Alhaji",
    age: 26,
  },
  {
    name: "Faisal",
    age: 26,
  },
  {
    name: "Sule",
    age: 18,
  },
  {
    name: "Abdul Karim",
    age: 7,
  },
];

const filteredPeopleAge = filterByAge(people, 20);
console.log(filteredPeopleAge);
