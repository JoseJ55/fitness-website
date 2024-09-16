export interface Product {
    id: number;
    type: string;
    image: string;
    desc: string;
    name: string;
    price: number;
    rating: number;
    stock: number;
    bought: number;
}

export interface ProductCart {
    id: number;
    type: string;
    image: string;
    desc: string;
    name: string;
    price: number;
    rating: number;
    stock: number;
    bought: number;
    amount: number;
}

export interface ProductState {
    products: Product[]; 
    selectedProduct: Product | null;
    showProduct: boolean;
    cart: ProductCart[];
    showCart: boolean;
}
