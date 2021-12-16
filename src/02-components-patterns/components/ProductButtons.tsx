import { useContext } from "react"
import { ProductContext } from "./ProductsCard"
import styles from '../styles/styles.module.css'

export const ProductButton = () => {
    const {increaseBy, counter} = useContext(ProductContext)
    return (
        <div className={ styles.buttonsContainer }>
                <button 
                    type="button" 
                    className={ styles.buttonMinus}
                    onClick={ () => increaseBy(-1)}
                > 
                    - 
                </button>
                <div className={ styles.countLabel }>{counter}</div>
                <button 
                    type="button" 
                    className={ styles.buttonAdd}
                    onClick={ () => increaseBy(+1)}
                > 
                    + 
                </button>
            </div>
    )
}