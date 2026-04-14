import express from 'express';
import { signin, signup, updateuserProfile, userProfile } from '../controller/auth.controller.js';
import { verifytoken } from '../utils/verifyUser.js';

const router = express.Router();

router.post('/signup', signup);

router.post('/signin', signin);

router.get('/userProfile', verifytoken, userProfile);

router.put('/updateUserProfile', verifytoken, updateuserProfile);

export default router; 
