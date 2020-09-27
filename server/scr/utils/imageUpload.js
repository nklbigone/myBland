import { expression } from "joi";
import multer from "multer";

const storage = multer.diskStorage({
    destination: './storage/',
    filename: function(req, file, cb){
        cb(null, file.fieldname + '_' + Date());
    }
});

const uploads = multer({
    storage: storage
}).single('blogPicture');


export const upload = multer({storage})