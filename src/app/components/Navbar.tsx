import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="w-[1920px] h-[92px] flex justify-between items-center px-[220px] py-[16px] bg-[#043873] text-white">
      {/* Logo Section */}
      <div className="flex items-center">
        <Image 
          src="/assets/Logo.png" // Correct root-relative path
          alt="Logo" 
          width={191} 
          height={34} 
          className="mr-2"
        />
        <h1 className="text-xl font-bold"></h1>
      </div>

      {/* Links Section */}
      <div className="flex gap-8">
        <Link href="#" className="text-lg hover:underline">
          Product
        </Link>
        <Link href="#" className="text-lg hover:underline">
          Solution
        </Link>
        <Link href="#" className="text-lg hover:underline">
          Resources
        </Link>
        <Link href="#" className="text-lg hover:underline">
          Pricing
        </Link>
    
      </div>
    </nav>
  );
}
