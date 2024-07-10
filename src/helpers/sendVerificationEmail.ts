import { resend } from "@/lib/resend";

import VerificationEmail from "../../emials/VerificationEmail";
import { ApiResponse } from "@/types/ApiResponse";

export async function sendVerificationEmail(
    email: string,
    username: string,
    verifyCode: string,
): Promise<ApiResponse>{
    try {
        await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: email,
            subject: "Verification Code",
            react: VerificationEmail({ username, otp: verifyCode}),
        });
        return {
            success: true,
            message:"Verification Email sent successfully" 
        }
    } catch (emailRrror) {
        console.log("Error sending verification email: ", emailRrror);
        return {
            success: false,
            message:"Failed to send verification email"
        }
    }
}