import { ProductImage, ProductTitle, ProductButton, ProductCard } from "../components"

const product = {
    id: '1',
    title: 'Café 1 - nuevo',
    img: `./coffee-mug.png`

}
export const ShoppingPage = () => {
    return (
        <div>
            <h1>Shopping Store</h1>
            <div style={{
                display: `flex`,
                flexDirection: `row`,
                flexWrap: `wrap`
            }}>

                <ProductCard product={product}>
                    <ProductCard.Image />
                    <ProductCard.Title />
                    <ProductCard.Buttons />
                </ProductCard>
                <ProductCard product={product}>
                    <ProductImage/>
                    <ProductTitle title="Cambiando titulo" />
                    <ProductButton />
                </ProductCard>
            </div>
        </div>
    )
}