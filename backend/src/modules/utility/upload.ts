import multer from "multer"

// multer configuration for handling file to upload
const upload = multer({
    storage: multer.diskStorage({})
})


export default upload