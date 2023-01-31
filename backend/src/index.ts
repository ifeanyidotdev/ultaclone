import express from "express";
import cors from "cors";
import userRouter from "./modules/user/user.router";
import productRouter from "./modules/product/product.router";
import path from "path";
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.urlencoded({}));
app.use(express.json());
app.use(cors());
app.use("/public", express.static(path.join(__dirname, "static", "public")));

app.use("/api/user", userRouter);
app.use("/api/product", productRouter);

(async () => {
    app.listen(PORT, () => {
        console.log("application stated on port " + PORT + "");
    });
})();
