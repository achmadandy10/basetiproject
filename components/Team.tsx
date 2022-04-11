import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import Hammam from '../public/hammam.jpeg'
import Furqon from '../public/furqon.jpeg'
import Alkhatami from '../public/alkhatami.jpeg'
import Mario from '../public/mario.jpeg'
import Abiyyu from '../public/abiyyu.jpeg'
import Rangga from '../public/rangga.jpeg'
import Reza from '../public/reza.jpeg'
import Deka from '../public/deka.jpeg'
import Wiranto from '../public/wiranto.jpeg'
import Kamal from '../public/kamal.jpeg'

import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

const team = [
    { 
        name: "Muhamad Hammam Miftah", 
        image: Hammam, 
        about: "UI/UX Designer" 
    },
    { 
        name: "Muhammad Furqon Pakpahan", 
        image: Furqon, 
        about: "Mobile Developer" 
    },
    { 
        name: "Ahmad Alkhatami", 
        image: Alkhatami, 
        about: "Web Developer" 
    },
    { 
        name: "Mario Emmanuel Sede", 
        image: Mario, 
        about: "Konsultant IT" 
    },
    { 
        name: "Abiyyu Hasian Ma'aruf Lubis", 
        image: Abiyyu, 
        about: "Event Organizer" 
    },
    { 
        name: "Rangga Yustisio", 
        image: Rangga, 
        about: "Production House" 
    },
    { 
        name: "Reza Pahlevi", 
        image: Reza, 
        about: "AI/AR" 
    },
    { 
        name: "Achmad Andy Dekanovy", 
        image: Deka, 
        about: "Desktop Developer" 
    },
    { 
        name: "Wiranto Millennium", 
        image: Wiranto, 
        about: "Teknologi Industri" 
    },
    { 
        name: "Taufik Kamal Maulana", 
        image: Kamal, 
        about: "Finance" 
    },
]

export const Team = () => {
    const length = Math.ceil(team.length / 4)
    const decoy = []

    for (let i = 0; i < length; i++) {
        decoy.push(i)
    }

    const items = decoy.map((v ,i) => {
        if (i === 0) {
            return (
                <SwiperSlide key={i} className="grid grid-cols-2 gap-5">
                    { team.slice(0, 4).map(({ name, image, about }, index) => {
                            return (
                                <div key={index} className="p-10 border bg-white dark:bg-gray-800 dark:border-gray-700 border-gray-200 rounded-xl gap-2 flex flex-col items-center justify-center">
                                    <div className="flex flex-col items-center justify-center gap-4">
                                        <div className="rounded-full object-cover w-24 h-24 bg-gray-200">
                                            <Image src={image} alt="Avatar" width={96} height={96} className="object-cover rounded-full"/>
                                        </div>
                                        <span className="text-center font-semibold">{ name }</span>
                                    </div>

                                    <span className="text-sm md:text-base text-center text-gray-500">{ about }</span>
                                </div>
                            )
                        }) }
                </SwiperSlide> 
            )
        } else {
            return (
                <SwiperSlide key={i} className="grid grid-cols-2 gap-5">
                    { team.slice(i*4, (((i+1))*2)*2).map(({ name, image, about }, index) => {
                            return (
                                <div key={index} className="p-10 border bg-white dark:bg-gray-800 dark:border-gray-700 border-gray-200 rounded-xl gap-2 flex flex-col items-center justify-center">
                                    <div className="flex flex-col items-center justify-center gap-4">
                                        <div className="rounded-full object-cover w-24 h-24 bg-gray-200">
                                            <Image src={image} alt="Avatar" width={96} height={96} className="object-cover rounded-full"/>
                                        </div>
                                        <span className="text-center font-semibold">{ name }</span>
                                    </div>

                                    <span className="text-sm md:text-base text-center text-gray-500">{ about }</span>
                                </div>
                            )
                        }) }
                </SwiperSlide> 
            )

        }
    })

    return(
        <div className="mt-32" id="team">
            <div className="flex flex-col gap-2 items-center justify-center">
                <h1 className="text-xl md:text-3xl font-bold">Tim</h1>
                <span className="text-sm md:text-base text-center text-gray-500">
                    Team kami adalah orang-orang yang ahli di bidangnya masing-masing.
                </span>
            </div>
            
            <div className="mt-12 team-container">
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                >
                    {items}
                </Swiper>
            </div>
        </div>
    )
}