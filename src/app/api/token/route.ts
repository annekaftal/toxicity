import dotenv from 'dotenv'
import jwt from 'jsonwebtoken'
import {NextResponse} from "next/server"
import { decode } from 'punycode'


dotenv.config()

export const verifyToken = (token: string | undefined): string | boolean => {
    if (token && process.env.TOKEN_SECRET) {
        try {

            const decoded = jwt.verify(token, process.env.TOKEN_SECRET) as string;
            return decoded;

        } catch (err) {

            throw new Error('invalid token');
            
        }
    } else {
        return false;
    }
}
export async function GET(req:Request) {

    try {

    const token  = req.headers.get('authorization')?.split(' ')[1]    
    const tokenCheck = verifyToken(token)

    if (!tokenCheck) {
        throw new Error('error while trying to verify token')
    }

    return NextResponse.json({tokenCheck});
    

    } catch (error) {
        console.error(error)
        return NextResponse.error()
    }

}