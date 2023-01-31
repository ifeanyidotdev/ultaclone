import { PrismaClient } from "@prisma/client";
import prisma from "../utility/prisma";
import { Product } from "./product.types";

class ProductService {
    prisma: PrismaClient = prisma;
    /**
     *
     * this handles the creating of a product and returns a promise of the
     * product when successful or returns an error when not
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

    async getAllProduct() {
        const all_product = await this.prisma.product.findMany();
        return all_product;
    }

    async getProductById(id: number) {
        const product_data = await this.prisma.product.findFirst({
            where: {
                id: id,
            },
        });
        return product_data;
    }
}
export default ProductService;
