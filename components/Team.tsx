import { useEffect, useRef } from "react"

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
]

export const Team = () => {
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

    return(
        <div className="mt-32">
            <div ref={ref} className="flex flex-col gap-2 items-center justify-center">
                <h1 className="text-xl md:text-3xl font-bold">Team</h1>
                <span className="text-sm md:text-base text-center text-gray-500">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor, sunt!
                </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">
                { team.map(({ name, image, about }, index) => {
                    return (
                        <div ref={refCard} key={ index } className="p-10 border bg-white dark:bg-gray-800 dark:border-gray-700 border-gray-200 rounded-xl gap-5 flex flex-col items-center justify-center">
                            <div className="flex flex-col items-center justify-center gap-4">
                                <div className="rounded-full w-24 h-24 bg-gray-200">
                                
                                </div>
                                <span className="text-center font-semibold">{ name }</span>
                            </div>

                            <span className="text-sm md:text-base text-center text-gray-500">{ about }</span>
                        </div>
                    )
                }) }
            </div>
        </div>
    )
}