import '@/lib/db';
import { NextResponse as res } from "next/server";
import bcrypt from 'bcryptjs';
import UserSchema from "@/lib/schema/User";
import jwt from 'jsonwebtoken';
import { NextRequest, NextResponse } from "next/server";

interface TokenPayload {
    _id: string;
    fullname: string;
    email: string;
}

const getToken = (payload: TokenPayload): { accessToken: string; refreshToken: string } => {
    const secret = process.env.ACCESS_TOKEN_SECRET;
    if (!secret) throw new Error("ACCESS_TOKEN_SECRET is missing in environment variables");

    const accessToken = jwt.sign(payload, secret, { expiresIn: '7d' });
    const refreshToken = jwt.sign(payload, secret, { expiresIn: '7d' });

    return { accessToken, refreshToken };
};

export const POST = async (request: NextRequest): Promise<NextResponse> => {
    try {
        const { email, password }: { email: string; password: string } = await request.json();
        const user = await UserSchema.findOne({ email });

        if (!user)
            return res.json(
                { success: false, message: 'User does not exist!' },
                { status: 404 }
            );

        const isLogin = await bcrypt.compare(password, user.password);

        if (!isLogin)
            return res.json(
                { success: false, message: 'Incorrect Password' },
                { status: 401 }
            );

        const token = getToken({
            _id: user._id.toString(),
            fullname: user.fullname,
            email: user.email
        });

        const result = res.json({ success: true });

        result.cookies.set("accessToken", token.accessToken, {
            httpOnly: true,
            secure: process.env.PROD === "true",
            path: '/'
        });

        result.cookies.set("refreshToken", token.refreshToken, {
            httpOnly: true,
            secure: process.env.PROD === "true",
            path: '/'
        });

        return result;
    } catch (err: any) {
        return res.json(
            { success: false, message: err.message },
            { status: 500 }
        );
    }
};
