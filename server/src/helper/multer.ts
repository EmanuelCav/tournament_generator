import multer from "multer";

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "public")
    },
    filename: (req, file, cb) => {
        cb(null, new Date().toISOString().replace(/:/g, "_") + "-" + file.originalname)
    },
})

const fileFormat = (mimetype: string, cb: any) => {

    const imagesFormats = /jpg|jpeg|png/

    const isFormatValid = imagesFormats.test(mimetype)

    if(isFormatValid) {
        cb(null, true)
    } else {
        cb("File format is not valid")
    }
    
}

export const upload = multer({
    storage,
    fileFilter: (req, file, cb) => {
        fileFormat(file.mimetype, cb)
    },
    limits: {
        fileSize: 1000 * 1000
    }
})