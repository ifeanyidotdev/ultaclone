export interface Product {
    name: string;
    price: number;
    image_url: string;
    description: string;
    quantity: number;
}

export interface User {
    name: string;
    email: string;
    phonenumber: string;
}
export interface Purchase {
    product_id: number;
    tx_ref: string;
    amount: number;
    customer: User;
    status: string;
}

export type PurchaseData = Omit<Purchase, "status">;
export type ProductType = Omit<Product, "image_url">;
