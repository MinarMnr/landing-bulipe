"use client"
import MainLogo from "@/app/assets/Logo-Main.png"
import { UserPlusIcon } from "@heroicons/react/24/solid"
import Image from "next/image"
import Link from "next/link"
import Toast from "./Toaster"

export default function Header() {
    return (
        <>
            <div className="fixed z-10 w-full top-0">
                <Toast />
                <div className="fixed w-full ">

                    <div className="flex justify-around fixed w-full bg-white">
                        <div className="flex justify-start">
                            <Image src={MainLogo} alt="MainLogo" quality={100} width={173}
                                height={41}
                                className="object-contain" />
                        </div>


                        <div className="flex justify-center py-4">
                            <ul className="inline-flex flex-row gap-8 px-1 uppercase text-[#004464]" >
                                <li ><Link href="/"
                                    > Home</Link></li>

                                <li ><Link href="/about"> About Us</Link></li>

                                <li><Link href="/program"> Programs</Link></li>
                                <li ><Link href="/location"> Locations</Link></li>
                                <li><Link href="/career"> Career & Placement</Link></li>
                                <li><Link href="/contact"> Contact Us</Link></li>


                            </ul>


                        </div>

                        <div className="flex justify-end py-4">
                            <button className="bg-orange-600 font-bold px-4  py-1 inline-flex gap-2 rounded-full" >
                                <Link href="/signin"> Sign up</Link>
                                <UserPlusIcon className="size-5" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}