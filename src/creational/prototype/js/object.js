const personPrototype = {
  firstName: 'Junior',
  lastName: 'Fernandes',
  age: 25,

  fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

const anotherPerson = Object.create(personPrototype);
anotherPerson.firstName = 'Jooa';
console.log(anotherPerson);
console.log(anotherPerson.firstName);
console.log(anotherPerson.fullName());
