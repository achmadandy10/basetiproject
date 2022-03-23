import Link from 'next/link'
import { useEffect, useRef } from 'react'
import { FaBars } from 'react-icons/fa'
import { DarkMode } from './DarkMode'

const menu = [
    { uri: '#home', name: 'Home' },
    { uri: '#service', name: 'Service' },
    { uri: '#project', name: 'Project' },
    { uri: '#about', name: 'About' },
    { uri: '#contact', name: 'Contact' },
]

export const Header = () => {   
    const ref = useRef(null)

    useEffect(() => {
      async function animate() {
        if (ref.current) {
            const sr = (await import("scrollreveal")).default
            sr().reveal(ref.current, { delay: 500 })
        }
      }
      animate()
    }, [])

    return (
        <div ref={ref} className='flex items-center justify-between py-5 md:py-10'>
            <Link href={'/'}>
                <a className='font-bold text-xl'>BaseTI</a>
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
                    <DarkMode/>
                    
                    <button type="button" className="md:hidden bg-gray-200 hover:bg-gray-300 focus:ring-4 focus:outline-none focus:ring-gray-400 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                        <FaBars/>
                    </button>
                </div>
            </div>

        </div>
    )
}