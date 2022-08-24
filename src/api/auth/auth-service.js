import { ServerError } from '../../utils/custom-errors.js';
import { errorSignIn, errorVerify } from '../../constants/constant-errors.js';
import { createUserS, getUserByEmailS, updateUserS } from '../user/users-service.js';
import { comparePassword } from '../../utils/bcrypt.js';
import { mailer, messageMail } from '../../utils/nodemailer.js';
import { sign, verify } from '../../utils/JWT.js';

export const signInS = async (user) => {
     const { email, password } = user;
     const got = await getUserByEmailS(email);
     if (!got) throw new ServerError(404, undefined, errorSignIn);
     const checkPassword = await comparePassword(password, got.password);
     if (!checkPassword) throw new ServerError(404, undefined, errorSignIn);
     if (!got.isVerifiedEmail) throw new ServerError(404, email, errorVerify);
     return { message: 'Success' };
};
export const signUpS = async (user) => {
     const createdUser = await createUserS(user);
     const token = sign({ id: createdUser.id }, '5h');
     await mailer(messageMail('M-One', user.email, token));
     return { message: `${createdUser.email} address sent message, confirm to login` };
};
export const verifyEmailS = async (token) => {
     const verified = verify(token);
     await updateUserS(verified.id, { isVerifiedEmail: true });
     return { message: 'verification was successful' };
};
