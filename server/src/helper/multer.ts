import multer, { FileFilterCallback } from "multer";

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "public")
    },
    filename: (req, file, cb) => {
        cb(null, new Date().toISOString().replace(/:/g, "_") + "-" + file.originalname)
    },
})

const fileFormat = (mimetype: string, cb: FileFilterCallback) => {

    const imagesFormats = /jpg|jpeg|png/

    const isFormatValid = imagesFormats.test(mimetype)

    if(isFormatValid) {
        cb(null, true)
    } else {
        cb(null, false)
    }
    
}

export const upload = multer({
    storage,
    fileFilter: (req, file, cb) => {
        fileFormat(file.mimetype, cb)
    },
    limits: {
        fieldSize: 1000 * 1000
    }
})