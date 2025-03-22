import '@/lib/db';
import UserSchema from "@/lib/schema/User";
import { NextRequest, NextResponse } from "next/server";
import jwt from 'jsonwebtoken';

interface TokenPayload {
    _id: string;
    fullname: string;
    email: string;
}

const verifyToken = (token: string): TokenPayload | null => {
    try {
        const secret = process.env.ACCESS_TOKEN_SECRET;
        if (!secret) throw new Error("ACCESS_TOKEN_SECRET is missing in environment variables");

        return jwt.verify(token, secret) as TokenPayload;
    } catch (error) {
        console.error("Invalid or expired token:", error.message);
        return null;
    }
};

export const POST = async (request: NextRequest): Promise<NextResponse> => {
    try {
        // Get the token from cookies
        const token = request.cookies.get("accessToken")?.value;
        console.log(token)
        if (!token) {
            return NextResponse.json({ success: false, message: "Unauthorized: No token provided" }, { status: 401 });
        }

        // Verify token and extract user details
        const decoded = verifyToken(token);
        console.log(decoded)
        if (!decoded) {
            return NextResponse.json({ success: false, message: "Unauthorized: Invalid token" }, { status: 401 });
        }

        // Get request body
        const { categories } = await request.json();
        if (!categories || typeof categories !== "object") {
            return NextResponse.json({ success: false, message: "Valid categories are required" }, { status: 400 });
        }

        // Flatten the categories array
        const flattenedCategories = Object.values(categories).flat();
        console.log("Flattened categories:", flattenedCategories);

        // Update the user's categories
        const updatedUser = await UserSchema.findOneAndUpdate(
            { email: decoded.email }, // Match by email from token
            { $set: { categories: flattenedCategories } }, // Update categories
            { new: true, runValidators: true }
        );

        if (!updatedUser) {
            return NextResponse.json({ success: false, message: "User not found" }, { status: 404 });
        }

        // Return success response
        return NextResponse.json({
            success: true,
            message: "Categories updated successfully",
            categories: updatedUser.categories
        });

    } catch (err: any) {
        console.error("Error updating categories:", err);
        return NextResponse.json({ success: false, message: err.message }, { status: 500 });
    }
};
