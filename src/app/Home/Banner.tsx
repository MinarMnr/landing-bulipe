import Image from "next/image";
import Hero from "../assets/hero-image.jpg"
import Link from "next/link";
import { InformationCircleIcon, UserPlusIcon } from "@heroicons/react/24/solid";

export default function Banner() {


    return (
        <div>
            <section className="w-full">
                <div className="py-8 bg-[#014463]">
                    <div className="container mx-auto px-4 py-36 ">
                        <div className="flex flex-col lg:flex-row items-center -mx-4">

                            <div className="w-1/2 px-4 text-justify">
                                <h1 className="text-xl">ELEVATING</h1>
                                <h1 className="text-4xl font-bold mb-8 ">IT Service Industry with Digital Skills Development</h1>
                                <p className="text-xl text-white mb-8">
                                    {"Bulipe Tech as a visionary agent collaborates with its parent companies from the USA and UK to bring forth a far-reaching Digital Skills Development project for the ever-changing workforce of Bangladesh."}
                                </p>
                                <button className="bg-orange-500 px-6 py-1 font-bold inline-flex gap-2 rounded-full" >
                                <Link href="#">Enroll Now</Link>
                                <UserPlusIcon className="size-5" />
                                </button>

                                <button className="text-orange-500 px-6 py-1  border-orange-500 border-2 ml-4 font-bold inline-flex gap-2 rounded-full" >
                                <Link href="#">Read More</Link>
                                <InformationCircleIcon className="size-5" />
                                </button>
                          
                            </div>


                            <div className="w-full lg:w-1/2 px-4 mt-8 lg:mt-0 items-center justify-center flex">
                                <Image
                                    src={Hero}
                                    alt={"hero"}
                                    className="w-1/2 h-auto md:w-full"
                                />
                            </div>
                        </div>
                    </div>


                </div>

            </section>

        </div>
    );
}