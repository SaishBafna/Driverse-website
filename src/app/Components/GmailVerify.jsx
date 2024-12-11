"use client"
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

const GmailVerify = () => {
    const router = useRouter();
    const searchParams = useSearchParams(); // Using Next.js hook for query parameters
    const [status, setStatus] = useState("Verifying...");
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const verifyEmail = async () => {
            const token = searchParams.get("token");
            const email = searchParams.get("email");

            if (!token || !email) {
                setStatus("Invalid verification link.");
                setIsLoading(false);
                return;
            }

            try {
                const response = await fetch(`/api/verify-email?token=${token}&email=${email}`, {
                    method: "GET",
                });

                const data = await response.json();

                if (response.ok) {
                    setStatus("Email verified successfully! Redirecting...");
                    setTimeout(() => router.push("/login"), 3000); // Redirect to login page
                } else {
                    setStatus(data.error || "Verification failed. Please try again.");
                }
            } catch (error) {
                console.error("Verification Error:", error);
                setStatus("An error occurred while verifying your email. Please try again later.");
            } finally {
                setIsLoading(false);
            }
        };

        verifyEmail();
    }, [router, searchParams]);

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h1>Email Verification</h1>
            <p>{status}</p>
            {isLoading && (
                <div style={{ marginTop: "20px" }}>
                    <span>Loading...</span>
                </div>
            )}
        </div>
    );
};

export default GmailVerify;
