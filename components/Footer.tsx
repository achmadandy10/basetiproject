import Image from "next/image"
import Link from "next/link"
import LogoBlack from '../public/logo-black-2.png'

export const Footer = () => {
    return (
        <footer className="p-4 bg-white md:px-24 md:py-8 dark:bg-gray-800">
            <div className="sm:flex sm:items-center sm:justify-between">
                <Link href="/">
                    <a className="flex items-center mb-4 sm:mb-0 gap-5">
                        <Image src={LogoBlack} height={80} width={200} className="mr-3 h-8" alt="BaseTI Logo" />
                    </a>
                </Link>
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