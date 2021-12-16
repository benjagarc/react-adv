import { ReactElement } from 'react';

export interface ProductCardProps{
    product: Product;
    children?: ReactElement | ReactElement[]; 
}

export interface Product{
    id: string;
    title: string;
    img?: string;
}

// export interface ProductButtonProps {
//     counter: number;
//     increaseBy: (couter: number) => void
// }

export interface ProductContextProps {
    counter: number;
    increaseBy: (counter: number) => void
    product: Product;
}


export interface ProductCardHocProps {
    ({ children, product }: ProductCardProps) : JSX.Element,
    Title: ({ title }: {title?: string | undefined}) => JSX.Element;
    Image: ({ img }: {img?: string | undefined}) => JSX.Element;
    Buttons: () => JSX.Element;
}