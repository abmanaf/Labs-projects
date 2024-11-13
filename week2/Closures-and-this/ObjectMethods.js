const person = {
    name: 'Alibaba',
    age: 73,
    greet(){
        console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old`)
    }
}
const newPerson = {name: 'Abdul Manaf', age: 45};
person.greet();
person.greet.call(newPerson);
person.greet.apply(newPerson);
person.greet.bind(newPerson);