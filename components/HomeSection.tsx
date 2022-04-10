import Image from 'next/image'
import ImageOne from '../public/image1.svg'

export const HomeSection = () => {    
    return (
        <section className="flex flex-col pt-5 md:flex-row" id="home">
            <div className="w-full flex flex-col justify-center">
                <h1 className="text-3xl md:text-6xl font-bold">
                    Halo, Selamat Datang di BaseTI
                </h1>
                <p className="pt-8 text-md md:text-xl leading-relaxed text-gray-500 max-w-md">
                    Kami adalah sebuah perusahaan yang menawarkan jasa dalam bidang teknologi industri. 
                </p>
            </div>
            <div className="w-full h-48 md:h-auto">
                <div className="w-xl h-full rounded-xl">
                    <Image src={ ImageOne } alt="Image One"/>
                </div>
            </div>
        </section>
    )
}