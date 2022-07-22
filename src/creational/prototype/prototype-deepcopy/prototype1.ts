export interface Prototype {
  clone(): Prototype;
}

export class Person implements Prototype {
  public addresses: Address[] = [];

  clone(): this {
    const newObj = Object.create(this);
    return newObj;
  }

  addAddress(address: Address): void {
    this.addresses.push(address);
  }

  constructor(public name: string, public age: number) {}
}

export class Address {
  constructor(public street: string, public number: number) {}
}

const address1 = new Address('Av Brasil', 15);
const person1 = new Person('Luiz', 30);
person1.addAddress(address1);

person1.addresses[0].street = 'bla';

const person2 = person1.clone();

person2.name = 'PERSON 2';
console.log(person2);
console.log(person2.addresses);
