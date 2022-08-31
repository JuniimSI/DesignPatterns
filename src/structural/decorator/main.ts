import { ProductCustomizationDecorator } from './product/product-customization-decorator';
import { ProductStampDecorator } from './product/product-stamp-decorator';
import { TShirt } from './product/t-shirt';

const tshirt = new TShirt();
const stampedTShirt = new ProductStampDecorator(tshirt);
const stampedTShirtFrontAndBack = new ProductStampDecorator(stampedTShirt);
const customizedTshirt = new ProductCustomizationDecorator(tshirt);

console.log(tshirt.getPrice(), tshirt.getName());
console.log(stampedTShirt.getPrice(), stampedTShirt.getName());
console.log(
  stampedTShirtFrontAndBack.getPrice(),
  stampedTShirtFrontAndBack.getName(),
);
console.log(customizedTshirt.getPrice(), customizedTshirt.getName());
