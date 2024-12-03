import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="w-full h-[92px] flex justify-between items-center px-8 py-4 bg-[#043873] text-white">
      {/* Logo Section */}
      <div className="flex items-center">
        <Image
          src="/assets/Logo.png"
          alt="Logo"
          width={191}
          height={34}
          className="mr-2"
        />
      </div>

      {/* Links Section */}
      <div className="flex gap-6 items-center">
        <Link
          href="#"
          className="font-inter text-[16px] font-medium leading-[20px] tracking-[-0.02em] hover:underline"
        >
          Product
        </Link>
        <Link
          href="#"
          className="font-inter text-[16px] font-medium leading-[20px] tracking-[-0.02em] hover:underline"
        >
          Solution
        </Link>
        <Link
          href="#"
          className="font-inter text-[16px] font-medium leading-[20px] tracking-[-0.02em] hover:underline"
        >
          Resources
        </Link>
        <Link
          href="#"
          className="font-inter text-[16px] font-medium leading-[20px] tracking-[-0.02em] hover:underline"
        >
          Pricing
        </Link>
        {/* Login Button */}
        <button
          className="w-[100px] h-[40px] px-4 py-2 bg-[#FFE492] text-[#043873] font-inter text-[14px] font-medium leading-[18px] tracking-[-0.02em] rounded-tl-lg opacity-100"
        >
          Login
        </button>
      </div>
    </nav>
  );
}
