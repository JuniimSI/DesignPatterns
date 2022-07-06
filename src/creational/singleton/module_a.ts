import { MyDatabaseClassic } from './db/my-database-classic';

const myDataBaseClassic = MyDatabaseClassic.getInstance();
myDataBaseClassic.add({ name: 'Junior', age: 25 });
myDataBaseClassic.add({ name: 'Soraia', age: 27 });
myDataBaseClassic.add({ name: 'Pedro', age: 9 });

export { myDataBaseClassic };
