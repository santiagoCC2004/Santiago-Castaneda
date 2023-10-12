import Jwt from "jsonwebtoken";
import { TOKEN_SECRET } from '../config.js';

export function createTokenAccess(payload){
    return new Promise((resolve, reject) => {
        Jwt.sign(
            payload,
            TOKEN_SECRET,
            {
                expiresIn: "1d"
            },
            (err, token) => {
                if(err) reject(err);
                resolve(token)
            }
        )
    });
}