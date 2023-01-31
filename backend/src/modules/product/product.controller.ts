import axios from "axios";
import { Request, Response } from "express";
import cloud from "../utility/cloud";
import path from "path";
import { Product, ProductType } from "./product.types";
import ProductService from "./product.service";
import { UploadApiResponse } from "cloudinary";

const productService: ProductService = new ProductService();

class ProductController {
    axios: any = axios;
    /**
     * this handles the creation of a new product
     * taking in @name @price @description @quantity and a  @file
     * @returns 200 on successful creation else
     * @returns 500
     */
    async post(req: Request, res: Response): Promise<Response> {
        const { name, price, description, quantity }: ProductType = req.body;
        try {
            const file_url: string = await upload_to_cloud(req.file!);

            const product: Product = {
                name: name,
                price: parseInt(price.toString()),
                description: description,
                quantity: parseInt(quantity.toString()),
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
     *
     * this method returns all the available product
     *
     */
    async get(req: Request, res: Response): Promise<Response> {
        try {
            const all_product = await productService.getAllProduct();
            return res.status(200).json({
                message: "successful",
                data: all_product,
            });
        } catch (error) {
            return res.status(500).json({
                message: "internal server error ",
            });
        }
    }

    /**
     * generates a payment link for the purchase of a product
     */
    async payment(req: Request, res: Response): Promise<Response> {
        const product_id: number = Number(req.params.id);
        const { url, email, phonenumber, name } = req.body;
        try {
            const product = await productService.getProductById(product_id);
            if (!product) {
                return res.status(400).json({ message: "product not found" });
            }

            //configure flutter wave data
            const data = {
                tx_ref: "hooli-tx-1920bbtytty",
                amount: String(product.price),
                currency: "NGN",
                redirect_url: url,
                customer: {
                    email: email,
                    phonenumber: phonenumber,
                    name: name,
                },
            };

            // send a request to flutter wave for the payment link
            const response = await axios.post(
                "https://api.flutterwave.com/v3/payments",
                data,
                {
                    headers: {
                        Authorization: `Bearer ${process.env.FLW_SECRET}`,
                    },
                }
            );
            console.log(response.data);
            return res
                .status(200)
                .json({ message: "successful", data: response.data.data.link });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: "internal server error" });
        }
    }

    async getSingleProduct(req: Request, res: Response): Promise<Response> {
        const product_id: number = Number(req.params.id);
        try {
            const product = await productService.getProductById(product_id);
            if (!product) {
                return res.status(400).json({ message: "product not found" });
            }
            return res
                .status(200)
                .json({ message: "successful", data: product });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: "internal server error" });
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
        file.path
    );
    return file_data.secure_url;
}
export default new ProductController();
