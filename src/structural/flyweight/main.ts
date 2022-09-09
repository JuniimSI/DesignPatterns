import { deliveryContext } from './delivery/delivery-context';
import { DeliveryFactory } from './delivery/delivery-factory';

const factory = new DeliveryFactory();
deliveryContext(factory, 'Luiz', '20A', 'AvBrasil', 'SP');
deliveryContext(factory, 'Helena', '20A', 'AvBrasil', 'SP');
deliveryContext(factory, 'Joana', '502', 'AvBrasil', 'SP');
deliveryContext(factory, 'Júnior', '2', 'Rua A', 'CE');

console.log();
console.log(factory.getLocations());
