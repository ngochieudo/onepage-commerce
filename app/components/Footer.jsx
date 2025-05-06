import React from 'react'
import Link from "next/link";
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-black text-white px-6 md:px-20 py-10">
      <div className="max-w-[1280px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {/* ORDER */}
        <div>
          <h4 className="font-bold mb-3 text-2xl">ORDER</h4>
          <ul className="space-y-2 text-xl">
            <li><Link href="#">Return & Refund Policy</Link></li>
            <li><Link href="#">Cancellation/Order Change</Link></li>
            <li><Link href="#">DMCA</Link></li>
          </ul>
        </div>

        {/* RESOURCES */}
        <div>
          <h4 className="font-bold mb-3 text-2xl">RESOURCES</h4>
          <ul className="space-y-2 text-xl">
            <li><Link href="#">Privacy Policy</Link></li>
            <li><Link href="#">Payment Methods</Link></li>
            <li><Link href="#">Terms of Services</Link></li>
            <li><Link href="#">About Us</Link></li>
            <li><Link href="#">FAQs</Link></li>
          </ul>
        </div>

        {/* CUSTOMERS */}
        <div>
          <h4 className="font-bold mb-3 text-2xl">CUSTOMERS</h4>
          <ul className="space-y-2 text-xl">
            <li><Link href="#">Case Studies</Link></li>
            <li><Link href="#">Store Examples</Link></li>
          </ul>
        </div>

        {/* CONTACT US */}
        <div>
          <Link
            href="#"
            className="inline-block bg-[#FF1E02] text-base hover:bg-red-700 text-white font-semibold px-4 py-2 mb-4"
          >
            CONTACT US
          </Link>
          <ul className="space-y-2 text-xl">
            <li><Link href="#">X</Link></li>
            <li><Link href="#">Facebook</Link></li>
            <li><Link href="#">LinkedIn</Link></li>
            <li><Link href="#">YouTube</Link></li>
            <li><Link href="#">Pinterest</Link></li>
            <li><Link href="#">Instagram</Link></li>
          </ul>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="mt-10 pt-6 text-xs text-[#616161] flex flex-col md:flex-row items-center justify-between max-w-[1280px] mx-auto">
        {/* Logo & Name */}
        <div className="flex items-center gap-2">
          <Image
            src='/store_logo_nav.png'
            alt='logo'
            width={300}
            height={80}
          />
        </div>

        {/* Copyright */}
        <p className="mt-4 md:mt-0 text-base tracking-[0.8px] font-normal">
          © 2025 HABBY PTE. LTD. All Rights Reserved. |
          <Link href="#" className="ml-1 hover:underline text-[#616161]">Privacy Policy</Link> |
          <Link href="#" className="ml-1 hover:underline text-[#616161]">Cookie Settings</Link>
        </p>
      </div>
    </footer>
  )
}

export default Footer