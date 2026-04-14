import multer from 'multer';

// Configure multer storage
const storage = multer.diskStorage({
     destination: (req, file, cb) => {
          cb(null, 'uploads/'); // Specify the destination folder for uploaded files
     },
     filename: (req, file, cb) => {
          cb(null, `${Date.now()}-${file.originalname}`); // Generate a unique filename for the uploaded file
     }
})

// filter to allow only image files
const fileFilter = (req, file, cb) => {
    const allowedTypes = ['image/jpeg', 'image/png', 'image/jpg'];
    
    if (allowedTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(new Error('Invalid file type. Only image files are allowed.'), false);
    }
}

const upload = multer({ storage, fileFilter });

export  default upload 