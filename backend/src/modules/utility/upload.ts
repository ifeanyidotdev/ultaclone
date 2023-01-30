import multer from "multer";

// multer configuration for handling file to upload
const upload = multer({
    storage: multer.memoryStorage(),
});

export default upload;
