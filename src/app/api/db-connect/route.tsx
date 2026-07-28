import { connectDB } from "@/db/db";
import { NextResponse } from "next/server";

export const GET = async () => {
    try {
        await connectDB();
        return NextResponse.json({ message: "Connected to MongoDB Successfully" });
    } catch (error) {
        return NextResponse.json({ message: "Error connecting to MongoDB", error: error }, { status: 500 });
    }
}