import { MyDatabaseClassic } from './db/my-database-classic';
import { myDataBaseClassic as myDataBaseClassicFromModuleA } from './module_a';

const myDataBaseClassic = MyDatabaseClassic.getInstance();
myDataBaseClassic.add({ name: 'Junior 2', age: 25 });
myDataBaseClassic.add({ name: 'Soraia 2', age: 27 });
myDataBaseClassic.add({ name: 'Pedro 2', age: 9 });
myDataBaseClassic.show();

console.log(myDataBaseClassicFromModuleA === myDataBaseClassic);
