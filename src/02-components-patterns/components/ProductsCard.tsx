import styles from '../styles/styles.module.css'
import { useProduct } from '../hooks/useProduct'
import { createContext } from 'react'
import { ProductCardProps, ProductContextProps } from '../interfaces/interfaces'


export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;





export const ProductCard = ({ children, product }: ProductCardProps) => {

    const { counter, increaseBy} = useProduct();
    return (
        <Provider value={{
            counter,
            increaseBy,
            product
        }}>
        <div className={ styles.productCard }>
            {/* <img className={ styles.productImg } src="./coffee-mug.png" alt="coffee Mug" /> */}
            {/* <ProductImage img={product.img}/>
            <ProductTitle title={product.title} />
            <ProductButton counter={counter} increaseBy={increaseBy} /> */}
            {children}
        </div>
        </Provider>
    )
}