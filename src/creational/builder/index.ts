import { MainDishBuilder } from './classes/main_dish_builder';
import { VeganoDishBuilder } from './classes/vegano_dish_builder';

const mainDishBuilder = new MainDishBuilder();
mainDishBuilder.makeMeal().makeDessert();
console.log(mainDishBuilder.getMeal());
console.log(mainDishBuilder.getPrice());

mainDishBuilder.reset();

const meal2 = mainDishBuilder.makeBeverage().getMeal();
console.log(meal2);

const veganDishBuilder = new VeganoDishBuilder();
const veganMeal = veganDishBuilder.makeMeal().getMeal();

console.log(veganMeal);
console.log(veganMeal.getPrice());
