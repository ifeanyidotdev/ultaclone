import { PrismaClient } from "@prisma/client";
import prisma from "../utility/prisma";
import { Product, Purchase, PurchaseData } from "./product.types";

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
    /**
     * creates a partial product, that gets updated when the purchase is completed
     * */
    async createPurchaseByProductId(data: PurchaseData) {
        const purchase_data = await this.prisma.purchase.create({
            data: {
                productId: data.product_id,
                transactionRef: data.tx_ref,
                amount: data.amount,
                status: "pending",
            },
        });
        return purchase_data;
    }

    /**
     * updates the data base about a purchase made on the site by is ref id
     * */
    async updatePurchaseByTransactionRef(tx_ref: string, status: string) {
        const purchase_data = await this.prisma.purchase.update({
            where: {
                transactionRef: tx_ref,
            },
            data: {
                status: status,
            },
        });
        return purchase_data;
    }

    /**
     *
     * @param tx_ref
     * @returns and returns a purchase data that matches the transaction ref
     */
    async getPurchaseByTxRef(tx_ref: string) {
        const purchase_data = await this.prisma.purchase.findFirst({
            where: {
                transactionRef: tx_ref,
            },
        });
        return purchase_data;
    }
}
export default ProductService;
