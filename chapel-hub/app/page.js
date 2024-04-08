import Image from "next/image";
import Sidebar from '../components/Sidebar'; // Import your Sidebar component

export default function Home() {
  return (
    <div className="flex h-screen">
      {/* Include the Sidebar component */}
      <Sidebar />

      {/* Main content */}
      <div className="flex flex-col items-center justify-center w-full bg-gray-100">
        {/* Adjust the Tailwind classes as needed */}
        <h1 className="text-3xl font-bold mb-4">Chapel Hub</h1>
        <p>Welcome to Chapel Hub!</p>
      </div>
    </div>
  );
}
