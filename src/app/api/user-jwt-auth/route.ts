import '@/lib/db';
import { NextRequest, NextResponse } from "next/server";
import jwt from 'jsonwebtoken';
import UserSchema from "@/lib/schema/User";

export const GET = async (request: NextRequest): Promise<NextResponse> => {
    try {
        const token = request.cookies.get("accessToken")?.value;
        if (!token) return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 });

        const secret = process.env.ACCESS_TOKEN_SECRET;
        if (!secret) throw new Error("ACCESS_TOKEN_SECRET is missing");

        const decoded = jwt.verify(token, secret);
        if (!decoded || typeof decoded !== "object") return NextResponse.json({ success: false, message: "Invalid token" }, { status: 401 });

        const user = await UserSchema.findOne({ email: decoded.email }, "categories");
        if (!user) return NextResponse.json({ success: false, message: "User not found" }, { status: 404 });

        return NextResponse.json({ success: true, categories: user.categories });
    } catch (err: any) {
        return NextResponse.json({ success: false, message: err.message }, { status: 500 });
    }
};
