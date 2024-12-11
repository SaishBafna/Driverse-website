import { useRouter } from 'next/router';

export default function Verify() {
  const router = useRouter();
  const { email } = router.query;

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md text-center">
        <h1 className="text-2xl font-bold mb-4">Email Verified</h1>
        <p className="text-gray-700">
          {email ? `Thank you for verifying your email: ${email}` : 'Email verification failed.'}
        </p>
      </div>
    </div>
  );
}



