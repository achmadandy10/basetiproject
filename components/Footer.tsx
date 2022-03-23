import Image from "next/image"

export const Footer = () => {
    return (
        <footer className="p-4 bg-white md:px-24 md:py-8 dark:bg-gray-800">
            <div className="sm:flex sm:items-center sm:justify-between">
                <a href="https://flowbite.com" className="flex items-center mb-4 sm:mb-0 gap-5">
                    <Image src="/favicon.ico" height={50} width={50} className="mr-3 h-8" alt="BaseTI Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">BaseTI</span>
                </a>
                <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6 ">About</a>
                    </li>
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6">Privacy Policy</a>
                    </li>
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6 ">Licensing</a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline">Contact</a>
                    </li>
                </ul>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <a href="https://github.com/achmadandy10" className="hover:underline">BaseTI</a>. All Rights Reserved.
            </span>
        </footer>
    )
}