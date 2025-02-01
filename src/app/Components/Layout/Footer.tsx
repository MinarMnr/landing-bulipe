import Image from 'next/image'
import React from 'react'
import logo from "../../assets/Logo-Main.png"
import x from "../../assets/x.png"
import lin from "../../assets/in.png"
import f from "../../assets/f.png"
import google from "../../assets/google.png"
import app from "../../assets/app.png"
import Link from 'next/link'
import { ArrowRightIcon } from '@heroicons/react/24/solid'

export default function Footer() {
  return (
    <div>
      <footer className="bg-gray-900 text-white ">
        <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-4 gap-8 p-5">
          <div className="">
            <Image src={logo} alt="BULIPE Logo" className="mb-4" />
            <p className="text-sm text-gray-400">
              Bulipe Tech as a visionary agent collaborates with its parent
              companies from the US and UK to bring forth a far-reaching Digital
              Skills Development project for the everchanging workforce of
              Bangladesh.
            </p>
            <div className="flex space-x-4 mt-4">
              <Link href="#"><Image src={lin} alt="lin" /></Link>
              <Link href="#"><Image src={x} alt="x" /></Link>
              <Link href="#"><Image src={f} alt="f" /></Link>



            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 uppercase">Addresses</h3>
            <p className="text-sm text-gray-400">Mobile: 01712 944 876</p>
            <p className="text-sm text-gray-400">info@bulipetech.com</p>
            <p className="text-sm text-gray-400">
              House: B2, Road: 23/16, Block: A, Banani, Dhaka-1213
            </p>
            <a href="#" className="mt-2 inline-block text-orange-500">
              Country Offices
            </a>
          </div>

          <div className='uppercase'>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-orange-500">
              <li className="flex gap-2 items-center">
                <ArrowRightIcon className='size-5'></ArrowRightIcon>
                <Link href="#" >
                  Home
                </Link>
              </li>
              <li className="flex gap-2 items-center">
                <ArrowRightIcon className='size-5'></ArrowRightIcon>
                <Link
                  href="#"
                >
                  About Us
                </Link>
              </li>
              <li className="flex gap-2 items-center">
                <ArrowRightIcon className='size-5'></ArrowRightIcon>
                <Link
                  href="#"
                >
                  Our Programs
                </Link>
              </li>
              <li className="flex gap-2 items-center">
                <ArrowRightIcon className='size-5'></ArrowRightIcon>
                <Link
                  href="#"
                >
                  Career & Placement
                </Link>
              </li>
              <li className="flex gap-2 items-center">
                <ArrowRightIcon className='size-5'></ArrowRightIcon>
                <Link
                  href="#"
                >
                  Contact Us
                </Link>
              </li>
              <li className="flex gap-2 items-center">
                <ArrowRightIcon className='size-5'></ArrowRightIcon>
                <Link
                  href="#"

                >
                  News & Media
                </Link>
              </li>
              <li className="flex gap-2 items-center">
                <ArrowRightIcon className='size-5'></ArrowRightIcon>
                <Link
                  href="#"

                >
                  Privacy & Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Get the App</h3>
            <div className="flex flex-col space-y-2">
              <Link
                href="#"

              ><Image src={google} alt='google' /></Link>

              <Link
                href="#"

              > <Image src={app} alt='app' /></Link>

            </div>
          </div>
        </div>

        <div className="bg-gray-100 py-4 mt-10">
          <p className="text-center text-sm text-gray-500">
            © 2025{" "}
            <span className="text-orange-500">Bulipe Tech Limited</span> all
            rights reserved.
          </p>
          <div className="w-72 h-0.5 bg-gray-500 mx-auto mt-2 rounded"></div>
          <div className="max-w-[1100px] mx-auto">
            <p className='mt-8 text-center text-[#848484]'>
              The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog once upon a time. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog once upon a time. The quick brown fox jumps over the lazy dog. The lazy dog once upon a time. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog once upon a time.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
