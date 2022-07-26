import { Customer } from '../customer/customer';
import { Vehicle } from './vehicle';

export class IndividualCar implements Vehicle {
  pickUp(): void {
    console.log(`${this.name} está buscando ${this.customer.name} INDIVIDUAL`);
  }
  constructor(public name: string, private readonly customer: Customer) {}
}
