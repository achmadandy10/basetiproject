import Image from 'next/image'
import Link from 'next/link'
import { FaBars } from 'react-icons/fa'
// import { DarkMode } from './DarkMode'
import LogoBlack from '../public/logo-black-2.png'

const menu = [
    { uri: '#home', name: 'Beranda' },
    { uri: '#service', name: 'Layanan' },
    { uri: '#projects', name: 'Projects' },
    { uri: '#team', name: 'Team' },
    { uri: '#contact', name: 'Kontak' },
]

export const Header = () => {   
    return (
        <div className='flex items-center justify-between py-5 md:py-10'>
            <Link href={'/'}>
                <a className='font-bold text-xl w-32'>
                    <Image src={LogoBlack} alt="Logo BaseTI"/>
                </a>
            </Link> 

            <div className='md:flex items-center gap-12'>
                <div className="hidden md:block">
                    <ul className='flex items-center space-x-10'>
                        {menu.map(({uri, name}, index) => {
                            return (
                                <li key={index}>
                                    <Link href={uri}>
                                        <a className='text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200'>{name}</a>
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </div>

                <div className="flex items-center gap-5">
                    {/* <DarkMode/> */}
                    
                    <button type="button" className="md:hidden bg-gray-200 hover:bg-gray-300 focus:ring-4 focus:outline-none focus:ring-gray-400 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                        <FaBars/>
                    </button>
                </div>
            </div>

        </div>
    )
}