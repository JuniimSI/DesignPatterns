import { Customer } from '../customer/customer';
import { Vehicle } from './vehicle';

export class EnterpriseCar implements Vehicle {
  pickUp(): void {
    console.log(`${this.name} está buscando ${this.customer.name} ENTERPRISE`);
  }
  constructor(public name: string, private readonly customer: Customer) {}
}
