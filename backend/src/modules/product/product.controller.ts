import { Request, Response } from "express";
import cloud from "../utility/cloud";
import path from "path";
import { Product, ProductType } from "./product.types";
import ProductService from "./product.service";
import { UploadApiResponse } from "cloudinary";

// const productService: ProductService = new ProductService();

class ProductController {
    private productService: ProductService = new ProductService();

    /**
     * this handles the creation of a new product
     * taking in @name @price @decription @quantity and a  @file
     * @returns 200 on successful createion else
     * @returns 500
     */
    async post(req: Request, res: Response): Promise<Response> {
        const { name, price, description, quantity }: ProductType = req.body;
        try {
            const file_url: string = await upload_to_cloud(req.file!);

            const product: Product = {
                name: name,
                price: price,
                description: description,
                quantity: quantity,
                image_url: file_url,
            };
            const product_data = await this.productService.createProduct(
                product
            );

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
}
/**
 * takes in a file/image and returns a string/ url of the image pointing to tha cloud
 * @param file is the image of the product you are uploading
 * @returns a url of the image uploaded to the cloud
 */
async function upload_to_cloud(file: Express.Multer.File): Promise<string> {
    const hax: number = Math.round(Math.random() * 1e9);
    const file_name: string = hax + path.extname(file.originalname as string);

    const file_data: UploadApiResponse = await cloud.v2.uploader.upload(
        file_name
    );
    return file_data.url;
}
export default new ProductController();
