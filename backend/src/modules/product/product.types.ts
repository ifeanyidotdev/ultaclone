export interface Product {
    name: string;
    price: number;
    image_url: string;
    description: string;
    quantity: number;
}

export type ProductType = Omit<Product, "image_url">;
