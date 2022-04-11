import Image from "next/image"
import ImageTwo from '../public/image2.svg'
import ImageThree from '../public/image3.svg'

const service = [
    {
        image: ImageTwo,
        title: 'Teknologi Industri',
        description: 'Teknologi Industri adalah hasil pengembangan, perbaikan, invensi, dan/atau inovasi dalam bentuk teknologi proses dan teknologi produk termasuk rancang bangun dan perekayasaan, metode, dan/atau sistem yang diterapkan dalam kegiatan Industri. Kami melayani jasa untuk beberapa teknologi industri seperti:',
        children: [
            { title: 'Situs Website' },
            { title: 'Aplikasi Mobile' },
            { title: 'UI/UX' },
            { title: 'Aplikasi Desktop' },
            { title: 'AI & AR' },
        ]
    },
    {
        image: ImageThree,
        title: 'Rumah Produksi',
        description: 'Industri kreatif yang merujuk kepada perusahaan yang menyokong produksi karya-karya audio, visual, audiovisual, dan acara televisi atau radio sesuai peraturan perundang-undangan yang berlaku di suatu negara.',
        children: []
    },
]

export const Service = () => {
    return (
        <div className="mt-20" id="service">
            <div className="flex flex-col gap-2 items-center justify-center">
                <h1 className="text-xl md:text-3xl font-bold">Layanan</h1>
                <span className="text-sm md:text-base text-center text-gray-500">
                    Kami memiliki layanan yang dapat membuat anda mengembangkan bisnis anda.
                </span>
            </div>

            <div className="flex flex-col gap-10 md:gap-20 mt-12">
                {service.map(({image, title, description, children}, index) => {
                    if (index % 2 === 0) {
                        return (
                            <div key={index} className="flex flex-col-reverse gap-5 md:flex-row">
                                <div className="md:w-1/2 md:pr-8">
                                    <div className="rounded-xl w-xl h-72 object-cover">
                                        <Image src={image} alt="Image Service" layout="responsive"/>
                                    </div>
                                </div>
                                <div className="md:w-1/2 md:pl-8 flex flex-col justify-center">
                                    <h1 className="text-xl md:text-2xl font-bold">{title}</h1>
                                    <p className="pt-2 leading-relaxed text-sm md:text-base text-gray-500 max-w-md">
                                        {description}
                                    </p>
                                    <div className="grid grid-cols-3 gap-5 mt-5">
                                        {children.map(({title}, idx) => {
                                            return (
                                                <span 
                                                    key={idx} 
                                                    className="border rounded-xl flex items-center justify-center py-3 px-5"
                                                >
                                                    {title}
                                                </span>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                        )
                    } else {
                        return (
                            <div key={index} className="flex flex-col gap-5 md:flex-row">
                                <div className="md:w-1/2 md:pr-8 flex flex-col justify-center">
                                    <h1 className="text-xl md:text-2xl font-bold">{title}</h1>
                                    <p className="pt-2 leading-relaxed text-sm md:text-base text-gray-500 max-w-md">
                                        {description}
                                    </p>
                                    <div className="grid grid-cols-3 gap-5 mt-5">
                                        {children.map(({title}, idx) => {
                                            return (
                                                <span 
                                                    key={idx} 
                                                    className="border rounded-xl flex items-center justify-center py-3 px-5"
                                                >
                                                    {title}
                                                </span>
                                            )
                                        })}
                                    </div>
                                </div>
                                <div className="md:w-1/2 md:pl-8">
                                    <div className="w-xl h-72 rounded-xl">
                                        <Image src={image} alt="Image Service" layout="responsive"/>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                })}
            </div>
        </div>
    )
}