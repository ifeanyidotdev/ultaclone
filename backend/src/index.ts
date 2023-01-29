import express from "express";
import userRouter from "./modules/user/user.router";

const app = express();

app.use(express.urlencoded({}));
app.use(express.json());
app.use("/api/user", userRouter);

(async () => {
    app.listen(5000, () => {
        console.log("application stated on port 3000");
    });
})();

