import { Navigation, Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import App1 from '../public/app1.jpg'
import App2 from '../public/app2.jpg'
import App3 from '../public/app3.jpg'
import App4 from '../public/app4.png'
import App5 from '../public/app5.png'
import App6 from '../public/app6.png'
import Image from 'next/image';

const portfolio = [
    {
        title: "Teknologi Industri",
        detail: [
            { title: "Mobile", image: App1 },
            { title: "Mobile", image: App2 },
            { title: "Mobile", image: App3 },
            { title: "Website", image: App4 },
            { title: "Website", image: App5 },
            { title: "Website", image: App6 },
        ],
    },
]

export const Portfolio = () => {
    return (
        <div className="mt-32" id="projects">
            <div className="flex flex-col gap-2 items-center justify-center">
                <h1 className="text-xl md:text-3xl font-bold">Projek</h1>
                <span className="text-sm md:text-base text-center text-gray-500">
                    Kami memiliki layanan yang dapat membuat anda mengembangkan bisnis anda.
                </span>
            </div>

            { portfolio.map(({ title, detail }, index) => {
                return (
                    <div className="bg-white border p-10 rounded-xl gap-10 mt-12" key={ index }>
                        <h3 className="mb-5 text-xl font-semibold">{title}</h3>
                        <div className="text-black">
                            <Swiper
                                modules={[Navigation, Pagination]}
                                spaceBetween={ 20 }
                                slidesPerView={4}
                                navigation
                                pagination={{ clickable: true }}
                            >
                                { detail.map(({title, image}, index) => {
                                    return(
                                        <SwiperSlide key={ index } className="rounded-xl">
                                            <div className="bg-gray-200 w-full h-72 rounded-xl object-cover">
                                                <Image src={image} alt="Project Thumbnail" layout="responsive" className="object-cover rounded-xl"/>
                                                <div className="absolute bottom-0 left-0 text-white text-center px-4 py-2 rounded-b-xl bg-gray-900 w-full">
                                                    <span className="">
                                                        { title }
                                                    </span>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    )
                                }) }
                            </Swiper>
                        </div>
                    </div>
                )
            }) }
        </div>
    )
}