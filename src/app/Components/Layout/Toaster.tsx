import { useEffect, useState } from "react";


export default function Toast() {

    const [isToast, setIsToast] = useState(true);

    useEffect(() => {
        setIsToast(true)
    }, [])

    const handleClose = () => {
        setIsToast(false)
    }

    return (
        <>

            {isToast ? (
                <section
                    className="flex w-full bg-[#A6E2E2]"
                >
                    <div className="container mx-auto">
                        <div className="flex flex-col md:flex-row justify-center">
                            <div className="flex flex-row gap-2 lg:gap-8 p-2">
                                <div
                                    className="my-auto text-4xl font-bold tracking-wide leading-none text-center"

                                >
                                    <span className="text-bold bg-gradient-to-t from-orange-400 to-orange-600 inline-block text-transparent bg-clip-text">
                                        100%
                                    </span>
                                </div>
                                <div
                                    className="w-[135px] p-1.5 my-auto text-center text-sm text-sky-900 rounded-xl border border-sky-900 border-solid"

                                >
                                    <b><span className="text-red-500">Scholarship</span> on all of
                                        our programs</b>
                                </div>
                            </div>
                            <div className="flex flex-row gap-2 lg:gap-4 p-2 justify-center">
                                <div
                                    className="text-sm my-auto leading-6 text-sky-900"
                                    role="text"

                                >
                                    Exclusively for the physically challenged, and third-gender
                                    communities!
                                </div>
                                <button
                                    className="p-2 justify-items-end text-white"
                                    onClick={handleClose}
                                >
                                    X
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            ) : null}


        </>
    )


}