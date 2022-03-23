import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { FaRegSun, FaRegMoon } from 'react-icons/fa';

export const DarkMode = () => {
    const { systemTheme, theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)
    
    useEffect(() => {
      setMounted(true)
    }, [])
    

    const renderThemeChanged = () => {
        if (!mounted) return null

        const currentTheme = theme === 'system' ? systemTheme : theme
        
        if (currentTheme === 'dark') {
            document.documentElement.classList.remove('dark')
            return (
                <FaRegMoon className='cursor-pointer' onClick={ () => setTheme('light') } />
            )
        } else {
            document.documentElement.classList.add('dark')
            return (
                <FaRegSun className='cursor-pointer' onClick={ () => setTheme('dark') }/>
            )
        }
    }

    return renderThemeChanged()
}