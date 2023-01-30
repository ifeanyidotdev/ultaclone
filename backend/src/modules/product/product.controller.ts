import { Request, Response } from "express";
import cloud from "../utility/cloud";
import path from "path";
import { Product, ProductType } from "./product.types";
import ProductService from "./product.service";

const productService: ProductService = new ProductService();

class ProductController {
    /**
     * this handles the creation of a new product
     * taking in @name @price @decription @quantity and a  @file
     * @returns 200 on successful createion else
     * @returns 500
     */
    async post(req: Request, res: Response): Promise<Response> {
        const { name, price, description, quantity }: ProductType = req.body;
        try {
            const file_url: string = await this.upload_to_cloud(req.file!);

            const product: Product = {
                name: name,
                price: price,
                description: description,
                quantity: quantity,
                image_url: file_url,
            };
            const product_data = await productService.createProduct(product);

            if (!product_data) {
                return res
                    .status(500)
                    .json({ message: "could not create product" });
            }

            return res.status(200).json({
                message: "product created successful",
                product: product,
            });
        } catch (error) {
            console.log("upload error =>", error);
            return res.status(500).json({
                message: "internal server error ",
            });
        }
    }

    /**
     * takes in a file/image and returns a string/ url of the image pointing to tha cloud
     * @param file is the image of the product you are uploading
     * @returns a url of the image uploaded to the cloud
     */
    private async upload_to_cloud(file: Express.Multer.File): Promise<string> {
        const hax: number = Math.round(Math.random() * 1e9);
        const file_name = hax + path.extname(file.originalname as string);

        const file_data = await cloud.v2.uploader.upload(file_name);
        return file_data.url;
    }
}
export default new ProductController();
