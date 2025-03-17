import '@/lib/db';
import UserSchema from "@/lib/schema/User";
import { NextResponse as res } from "next/server";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (request: NextRequest): Promise<NextResponse> => {
    try {
        const body: Record<string, any> = await request.json();
        const user = new UserSchema(body);
        await user.save();
        return res.json({ success: true });
    } catch (err: any) {
        return res.json(
            { success: false, message: err.message },
            { status: 500 }
        );
    }
};