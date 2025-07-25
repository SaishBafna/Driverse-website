// "use client";
// import { useEffect, useState } from "react";
// import { useRouter, useSearchParams } from "next/navigation";

// const GmailVerify = () => {
//     const router = useRouter();
//     const searchParams = useSearchParams();
//     const [status, setStatus] = useState("Verifying...");
//     const [isLoading, setIsLoading] = useState(true);

//     useEffect(() => {
//         const verifyEmail = async () => {
//             try {
//                 // Check if query parameters are available
//                 const token = searchParams?.get("token");
//                 const email = searchParams?.get("email");

//                 if (!token || !email) {
//                     setStatus("Invalid verification link.");
//                     setIsLoading(false);
//                     return;
//                 }



//                 // Make the API call
//                 const response = await fetch(
//                     `/api/verify-email?token=${token}&email=${email}`,
//                     { method: "GET" }
//                 );

//                 const data = await response.json();

//                 if (response.ok) {
//                     setStatus("Email verified successfully! ");

//                 } else {
//                     setStatus(data.error || "Verification failed. Please try again.");
//                 }
//             } catch (error) {
//                 console.error("Verification Error:", error);
//                 setStatus("An error occurred while verifying your email. Please try again later.");
//             } finally {
//                 setIsLoading(false);
//             }
//         };

//         verifyEmail();
//     }, [router, searchParams]);

//     // Custom icon components to replace Lucide icons
//     const SuccessIcon = () => (
//         <svg xmlns="http://www.w3.org/2000/svg" className="text-green-500 animate-bounce" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//             <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
//             <polyline points="22 4 12 14.01 9 11.01"></polyline>
//         </svg>
//     );

//     const ErrorIcon = () => (
//         <svg xmlns="http://www.w3.org/2000/svg" className="text-red-500 animate-pulse" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//             <circle cx="12" cy="12" r="10"></circle>
//             <line x1="12" y1="8" x2="12" y2="12"></line>
//             <line x1="12" y1="16" x2="12.01" y2="16"></line>
//         </svg>
//     );

//     const LoadingIcon = () => (
//         <svg xmlns="http://www.w3.org/2000/svg" className="animate-spin text-blue-400" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//             <path d="M12 2v4"></path>
//             <path d="m16.2 7.8 2.9-2.9"></path>
//             <path d="M18 12h4"></path>
//             <path d="m16.2 16.2 2.9 2.9"></path>
//             <path d="M12 18v4"></path>
//             <path d="m4.9 19.1 2.9-2.9"></path>
//             <path d="M2 12h4"></path>
//             <path d="m4.9 4.9 2.9 2.9"></path>
//         </svg>
//     );

//     return (
//         // <div className="bg-gray-900 text-white min-h-screen flex items-center justify-center">
//         //     <div className="max-w-lg w-full bg-white p-8 rounded-lg shadow-lg text-center">
//         //         <h1 className="text-2xl font-bold mb-4">Email Verification</h1>
//         //         <p className="text-green-700 mb-4">{status}</p>
//         //         {isLoading && (
//         //             <div className="flex justify-center items-center space-x-2">
//         //                 <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-400 h-8 w-8"></div>
//         //                 <span>Loading...</span>
//         //             </div>
//         //         )}
//         //     </div>
//         // </div>


//         <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center p-4">
//             <div className="w-full max-w-md bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/20 overflow-hidden">
//                 <div className="p-8 text-center">
//                     <div className="mb-6 flex justify-center">
//                         {verificationState === 'idle' && <LoadingIcon />}
//                         {verificationState === 'success' && <SuccessIcon />}
//                         {verificationState === 'error' && <ErrorIcon />}
//                     </div>

//                     <h1 className="text-3xl font-extrabold mb-4 text-white">
//                         Email Verification
//                     </h1>

//                     <p className={`mb-6 text-lg font-semibold ${verificationState === 'success'
//                             ? 'text-green-400'
//                             : verificationState === 'error'
//                                 ? 'text-red-400'
//                                 : 'text-blue-200'
//                         }`}>
//                         {status || 'Verifying your email...'}
//                     </p>

//                     {isLoading && (
//                         <div className="flex items-center justify-center space-x-3">
//                             <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
//                             <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse delay-150"></div>
//                             <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse delay-300"></div>
//                         </div>
//                     )}

//                     {!isLoading && verificationState === 'error' && (
//                         <button
//                             className="mt-4 px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
//                             onClick={() => {
//                                 // Add retry logic here
//                                 setIsLoading(true);
//                                 setVerificationState('idle');
//                             }}
//                         >
//                             Retry Verification
//                         </button>
//                     )}

//                     {!isLoading && verificationState === 'success' && (
//                         <button
//                             className="mt-4 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
//                             onClick={() => {
//                                 // Add redirect or next step logic
//                                 window.location.href = '/dashboard';
//                             }}
//                         >
//                             Continue to Dashboard
//                         </button>
//                     )}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default GmailVerify;


"use client";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

const GmailVerify = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [status, setStatus] = useState("Verifying...");
    const [isLoading, setIsLoading] = useState(true);
    const [verificationState, setVerificationState] = useState('idle');

    useEffect(() => {
        const verifyEmail = async () => {
            try {
                // Check if query parameters are available
                const token = searchParams?.get("token");
                const email = searchParams?.get("email");

                if (!token || !email) {
                    setStatus("Invalid verification link.");
                    setVerificationState('error');
                    setIsLoading(false);
                    return;
                }

                // Make the API call
                const response = await fetch(
                    `/api/verify-email?token=${token}&email=${email}`,
                    { method: "GET" }
                );

                const data = await response.json();

                if (response.ok) {
                    setStatus("Email verified successfully!");
                    setVerificationState('success');
                } else {
                    setStatus(data.error || "Verification failed. Please try again.");
                    setVerificationState('error');
                }
            } catch (error) {
                console.error("Verification Error:", error);
                setStatus("An error occurred while verifying your email. Please try again later.");
                setVerificationState('error');
            } finally {
                setIsLoading(false);
            }
        };

        verifyEmail();
    }, [router, searchParams]);

    // Custom icon components to replace Lucide icons
    const SuccessIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" className="text-green-500 animate-bounce" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <polyline points="22 4 12 14.01 9 11.01"></polyline>
        </svg>
    );

    const ErrorIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" className="text-red-500 animate-pulse" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="8" x2="12" y2="12"></line>
            <line x1="12" y1="16" x2="12.01" y2="16"></line>
        </svg>
    );

    const LoadingIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" className="animate-spin text-blue-400" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2v4"></path>
            <path d="m16.2 7.8 2.9-2.9"></path>
            <path d="M18 12h4"></path>
            <path d="m16.2 16.2 2.9 2.9"></path>
            <path d="M12 18v4"></path>
            <path d="m4.9 19.1 2.9-2.9"></path>
            <path d="M2 12h4"></path>
            <path d="m4.9 4.9 2.9 2.9"></path>
        </svg>
    );

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center p-4">
            <div className="w-full max-w-md bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/20 overflow-hidden">
                <div className="p-8 text-center">
                    <div className="mb-6 flex justify-center">
                        {verificationState === 'idle' && <LoadingIcon />}
                        {verificationState === 'success' && <SuccessIcon />}
                        {verificationState === 'error' && <ErrorIcon />}
                    </div>

                    <h1 className="text-3xl font-extrabold mb-4 text-white">
                        Email Verification
                    </h1>

                    <p className={`mb-6 text-lg font-semibold ${
                        verificationState === 'success' 
                            ? 'text-green-400' 
                            : verificationState === 'error' 
                            ? 'text-red-400' 
                            : 'text-blue-200'
                    }`}>
                        {status || 'Verifying your email...'}
                    </p>

                    {isLoading && (
                        <div className="flex items-center justify-center space-x-3">
                            <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
                            <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse delay-150"></div>
                            <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse delay-300"></div>
                        </div>
                    )}

                    {!isLoading && verificationState === 'error' && (
                        <button 
                            className="mt-4 px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                            onClick={() => {
                                // Add retry logic here
                                setIsLoading(true);
                                setVerificationState('idle');
                            }}
                        >
                            Retry Verification
                        </button>
                    )}

                    {!isLoading && verificationState === 'success' && (
                        <button 
                            className="mt-4 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                            onClick={() => {
                                // Add redirect or next step logic
                                router.push('/');
                            }}
                        >
                            Continue to Dashboard
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default GmailVerify;