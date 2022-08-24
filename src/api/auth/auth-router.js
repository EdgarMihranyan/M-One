import express from 'express';
import {
     signInC, signUpC, verifyEmailC,
} from './auth-controller.js';
import {
     isCorrectPropertyAV, validateSignUpUser,
     validateSignInUser,
     validateUserToken,
} from './auth-validator.js';

const router = express.Router();

router.post(
     '/signin',
     ...validateSignInUser,
     signInC,
);
router.post(
     '/signup',
     ...validateSignUpUser,
     isCorrectPropertyAV,
     signUpC,
);
router.post(
     '/verify',
     ...validateUserToken,
     verifyEmailC,
);

export default router;
