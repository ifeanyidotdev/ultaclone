import express from "express";

const app = express();

app.use(express.urlencoded({}));
app.use(express.json());

(async () => {
    app.listen(5000, () => {
        console.log("application stated on port 3000");
    });
})();
