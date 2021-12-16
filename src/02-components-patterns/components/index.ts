import { ProductImage } from './ProductImage'
import { ProductTitle  } from './ProductTitle'
import { ProductButton } from './ProductButtons'
import { ProductCard as ProductCardHoc } from './ProductsCard';
import { ProductCardHocProps } from '../interfaces/interfaces';

export { ProductImage, ProductTitle, ProductButton };

export const ProductCard: ProductCardHocProps = Object.assign(ProductCardHoc, {
    Title: ProductTitle,
    Image: ProductImage,
    Buttons: ProductButton
});

export default ProductCard;