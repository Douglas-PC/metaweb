import Link from 'next/link';

const NotFound = () => (
  <div className="bg-primary-black text-white flex min-h-screen items-center justify-center">
    <div className="text-center p-6">
      <h1 className="text-4xl font-bold mb-4">Page Not Found</h1>
      <p className="opacity-70 mb-6">The page you are looking for doesn&apos;t exist or was moved.</p>
      <Link href="/" className="underline text-blue-300">Return Home</Link>
    </div>
  </div>
);

export default NotFound;
