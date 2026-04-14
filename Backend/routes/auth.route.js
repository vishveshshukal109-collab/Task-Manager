import express from 'express';
import { signin, signup, updateuserProfile, uploadImage, userProfile } from '../controller/auth.controller.js';
import { verifytoken } from '../utils/verifyUser.js';
import upload from '../utils/multer.js';

const router = express.Router();

router.post('/signup', signup);

router.post('/signin', signin);

router.get('/userProfile', verifytoken, userProfile);

router.put('/updateUserProfile', verifytoken, updateuserProfile);

router.post("/uploadImage", upload.single('Image'), uploadImage );

export default router; 
