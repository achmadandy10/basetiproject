import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

const team = [
    { 
        name: "Team 1", 
        image: "#", 
        about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae blanditiis fugiat repudiandae ipsa nisi dolor fuga aperiam perferendis! Maiores, ex." 
    },
    { 
        name: "Team 2", 
        image: "#", 
        about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae blanditiis fugiat repudiandae ipsa nisi dolor fuga aperiam perferendis! Maiores, ex." 
    },
    { 
        name: "Team 3", 
        image: "#", 
        about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae blanditiis fugiat repudiandae ipsa nisi dolor fuga aperiam perferendis! Maiores, ex." 
    },
    { 
        name: "Team 4", 
        image: "#", 
        about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae blanditiis fugiat repudiandae ipsa nisi dolor fuga aperiam perferendis! Maiores, ex." 
    },
    { 
        name: "Team 5", 
        image: "#", 
        about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae blanditiis fugiat repudiandae ipsa nisi dolor fuga aperiam perferendis! Maiores, ex." 
    },
    { 
        name: "Team 6", 
        image: "#", 
        about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae blanditiis fugiat repudiandae ipsa nisi dolor fuga aperiam perferendis! Maiores, ex." 
    },
    { 
        name: "Team 7", 
        image: "#", 
        about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae blanditiis fugiat repudiandae ipsa nisi dolor fuga aperiam perferendis! Maiores, ex." 
    },
    { 
        name: "Team 8", 
        image: "#", 
        about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae blanditiis fugiat repudiandae ipsa nisi dolor fuga aperiam perferendis! Maiores, ex." 
    },
    { 
        name: "Team 9", 
        image: "#", 
        about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae blanditiis fugiat repudiandae ipsa nisi dolor fuga aperiam perferendis! Maiores, ex." 
    },
    { 
        name: "Team 10", 
        image: "#", 
        about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae blanditiis fugiat repudiandae ipsa nisi dolor fuga aperiam perferendis! Maiores, ex." 
    },
    { 
        name: "Team 11", 
        image: "#", 
        about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae blanditiis fugiat repudiandae ipsa nisi dolor fuga aperiam perferendis! Maiores, ex." 
    },
    { 
        name: "Team 12", 
        image: "#", 
        about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae blanditiis fugiat repudiandae ipsa nisi dolor fuga aperiam perferendis! Maiores, ex." 
    },
    { 
        name: "Team 13", 
        image: "#", 
        about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae blanditiis fugiat repudiandae ipsa nisi dolor fuga aperiam perferendis! Maiores, ex." 
    },
    { 
        name: "Team 14", 
        image: "#", 
        about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae blanditiis fugiat repudiandae ipsa nisi dolor fuga aperiam perferendis! Maiores, ex." 
    },
    { 
        name: "Team 15", 
        image: "#", 
        about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae blanditiis fugiat repudiandae ipsa nisi dolor fuga aperiam perferendis! Maiores, ex." 
    },
    { 
        name: "Team 16", 
        image: "#", 
        about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae blanditiis fugiat repudiandae ipsa nisi dolor fuga aperiam perferendis! Maiores, ex." 
    },
    { 
        name: "Team 17", 
        image: "#", 
        about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae blanditiis fugiat repudiandae ipsa nisi dolor fuga aperiam perferendis! Maiores, ex." 
    },
    { 
        name: "Team 18", 
        image: "#", 
        about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae blanditiis fugiat repudiandae ipsa nisi dolor fuga aperiam perferendis! Maiores, ex." 
    },
    { 
        name: "Team 19", 
        image: "#", 
        about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae blanditiis fugiat repudiandae ipsa nisi dolor fuga aperiam perferendis! Maiores, ex." 
    },
    { 
        name: "Team 20", 
        image: "#", 
        about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae blanditiis fugiat repudiandae ipsa nisi dolor fuga aperiam perferendis! Maiores, ex." 
    },
    { 
        name: "Team 21", 
        image: "#", 
        about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae blanditiis fugiat repudiandae ipsa nisi dolor fuga aperiam perferendis! Maiores, ex." 
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
                                <div key={index} className="p-10 border bg-white dark:bg-gray-800 dark:border-gray-700 border-gray-200 rounded-xl gap-5 flex flex-col items-center justify-center">
                                    <div className="flex flex-col items-center justify-center gap-4">
                                        <div className="rounded-full w-24 h-24 bg-gray-200">
                                        
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
                                <div key={index} className="p-10 border bg-white dark:bg-gray-800 dark:border-gray-700 border-gray-200 rounded-xl gap-5 flex flex-col items-center justify-center">
                                    <div className="flex flex-col items-center justify-center gap-4">
                                        <div className="rounded-full w-24 h-24 bg-gray-200">
                                        
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
                <h1 className="text-xl md:text-3xl font-bold">Team</h1>
                <span className="text-sm md:text-base text-center text-gray-500">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor, sunt!
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