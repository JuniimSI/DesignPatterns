import { EnterpriseCustomerVehicleFactory } from './factories/enterprise-customer-vehicle-factory';
import { IndividualCustomerVehicleFactory } from './factories/individual-customer-vehicle-factory';

const enterpriseFactory = new EnterpriseCustomerVehicleFactory();
const individualFactory = new IndividualCustomerVehicleFactory();

const car1 = enterpriseFactory.createVehicle('Celta', 'Júnior');
const car2 = individualFactory.createVehicle('Fusca', 'Helena');

car1.pickUp();
car2.pickUp();
