import { FaAward, FaClock, FaMoneyBillWave } from 'react-icons/fa'

const feature = [
    {
        icon: <FaAward/>,
        title: 'Profesional',
        description: 'Perusahaan kami dapat dipercaya dalam mengurus semua kebutuhan yang anda perlukan.',
    },
    {
        icon: <FaClock/>,
        title: 'Tepat Waktu',
        description: 'Perusahaan kami mengurus semua kebutuhan yang anda perlukan tepat pada waktunya.',
    },
    {
        icon: <FaMoneyBillWave/>,
        title: 'Harga Terjangkau',
        description: 'Perusahaan kami menawarkan harga yang sangat sesuai dengan kebutuhan yang anda inginkan.',
    },
]

export const Feature = () => {
    return (
        <div className="pt-10 md:p-12">
            <div className="flex flex-col md:flex-row gap-5">
                {feature.map(({icon, title, description}, index) => {
                    return (
                        <div key={index} className="flex flex-col p-8 space-y-4 bg-white rounded-xl border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
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