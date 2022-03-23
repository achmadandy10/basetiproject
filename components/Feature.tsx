import { useEffect, useRef } from 'react'
import { FaAward, FaClock, FaMoneyBillWave } from 'react-icons/fa'

const feature = [
    {
        icon: <FaAward/>,
        title: 'Feature 1',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit odio aspernatur consequatur provident, obcaecati assumenda. Tempora amet nesciunt sed nemo.',
    },
    {
        icon: <FaClock/>,
        title: 'Feature 2',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit odio aspernatur consequatur provident, obcaecati assumenda. Tempora amet nesciunt sed nemo.',
    },
    {
        icon: <FaMoneyBillWave/>,
        title: 'Feature 3',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit odio aspernatur consequatur provident, obcaecati assumenda. Tempora amet nesciunt sed nemo.',
    },
]

export const Feature = () => {
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
        <div className="pt-10 md:p-12">
            <div className="flex flex-col md:flex-row gap-5">
                {feature.map(({icon, title, description}, index) => {
                    return (
                        <div ref={ref} key={index} className="flex flex-col p-8 space-y-4 bg-white rounded-xl border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                            <div className='flex items-center space-x-3'>
                                <span className='text-xl'>{icon}</span>
                                <h2 className='text-xl font-semibold'>{title}</h2>
                            </div>
                            <p className='text-sm leading-relaxed text-gray-500'>{description}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}