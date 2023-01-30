import express from "express";
import userRouter from "./modules/user/user.router";
import productRouter from "./modules/product/product.router";
require("dotenv").config();

const app = express();

app.use(express.urlencoded({}));
app.use(express.json());
app.use("/api/user", userRouter);
app.use("/api/product", productRouter);

(async () => {
    app.listen(5000, () => {
        console.log("application stated on port 3000");
    });
})();
