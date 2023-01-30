import { PrismaClient } from "@prisma/client";
import { Product } from "./product.types";

class ProductService {
    prisma: PrismaClient = new PrismaClient();

    /**
     *
     * this handles the creating of a product and retuens a promise of the
     * product when succesfful or retuens an error when not
     */
    async createProduct(product: Product) {
        const product_data = this.prisma.product.create({
            data: {
                name: product.name,
                price: product.price,
                image: product.image_url,
                quantity: product.quantity,
                description: product.description,
            },
        });

        return product_data;
    }
}
export default ProductService;
