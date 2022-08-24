import jwt from 'jsonwebtoken';

const secret = 'vesemir';
export const sign = (data, expiresIn) => jwt.sign(data, secret, { expiresIn });

export const verify = (token) => jwt.verify(token, secret);
