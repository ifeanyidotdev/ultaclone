import multer from "multer";
import path from "path";

// multer configuration for handling file to upload
const upload = multer({
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, path.join(__dirname, "../../../public/static"));
        },
    }),
});

// const upload = multer({
//     storage: multer.memoryStorage(),
// });

export default upload;
