import { Navigation, Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useEffect, useRef } from 'react';

const portfolio = [
    {
        title: "Web",
        image: "#",
        detail: [
            { title: "web 1", image: "#", alt: "#" },
            { title: "web 2", image: "#", alt: "#" },
            { title: "web 3", image: "#", alt: "#" },
            { title: "web 4", image: "#", alt: "#" },
        ],
    },
    {
        title: "Mobile",
        image: "#",
        detail: [
            { title: "mobile 1", image: "#", alt: "#" },
            { title: "mobile 2", image: "#", alt: "#" },
            { title: "mobile 3", image: "#", alt: "#" },
            { title: "mobile 4", image: "#", alt: "#" },
        ],
    },
    {
        title: "UI/UX",
        image: "#",
        detail: [
            { title: "uiux 1", image: "#", alt: "#" },
            { title: "uiux 2", image: "#", alt: "#" },
            { title: "uiux 3", image: "#", alt: "#" },
            { title: "uiux 4", image: "#", alt: "#" },
        ],
    },
    {
        title: "EO",
        image: "#",
        detail: [
            { title: "EO 1", image: "#", alt: "#" },
            { title: "EO 2", image: "#", alt: "#" },
            { title: "EO 3", image: "#", alt: "#" },
            { title: "EO 4", image: "#", alt: "#" },
        ],
    },
]

export const Portfolio = () => {
    const ref = useRef(null)
    const refCard = useRef(null)

    useEffect(() => {
      async function animate() {
        if (ref.current) {
            const sr = (await import("scrollreveal")).default
            sr().reveal(ref.current, { delay: 500 })
        }
        if (refCard.current) {
            const sr = (await import("scrollreveal")).default
            sr().reveal(refCard.current, { delay: 500 })
        }
      }
      animate()
    }, [])

    return (
        <div ref={ref} className="mt-32">
            <div className="flex flex-col gap-2 items-center justify-center">
                <h1 className="text-xl md:text-3xl font-bold">Portfolio</h1>
                <span className="text-sm md:text-base text-center text-gray-500">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor, sunt!
                </span>
            </div>

            { portfolio.map(({ image, detail }, index) => {
                return (
                    <div ref={refCard} className="grid grid-cols-1 md:grid-cols-5 gap-10 mt-12" key={ index }>
                        <div className="col-span-3 md:col-span-2">
                            <div className="w-full md:pr-8">
                                <div className="bg-gray-200 w-full h-72 rounded-xl"></div>
                            </div>
                        </div>
                        <div className="text-black col-span-3">
                            <Swiper
                                modules={[Navigation, Pagination]}
                                breakpoints={{
                                    300: {
                                        slidesPerView: 2
                                    }
                                }}
                                spaceBetween={ 20 }
                                slidesPerView={3}
                                navigation
                                pagination={{ clickable: true }}
                                onSwiper={(swiper) => console.log(swiper)}
                                onSlideChange={() => console.log('slide change')}
                            >
                                { detail.map(({title, image, alt}, index) => {
                                    return(
                                        <SwiperSlide key={ index }>
                                            <div className="bg-gray-200 w-full h-72 rounded-xl">
                                                <div className="absolute bottom-0 left-0 px-4 py-2 rounded-b-xl bg-black/20 w-full">
                                                    { title }
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