import cloudinary from "cloudinary";

cloudinary.v2.config({
    api_key: process.env.CLOUD_API_KEY,
    cloud_name: process.env.CLOUD_NAME,
    api_secret: process.env.CLOUD_SECRET_KEY,
});

export default cloudinary;
