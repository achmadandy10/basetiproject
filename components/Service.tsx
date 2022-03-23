import { useEffect, useRef } from "react"

const service = [
    {
        title: 'Service 1',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati corporis beatae consectetur porro, libero aliquam illum adipisci quod explicabo. Deserunt, corporis excepturi! Magnam quos obcaecati distinctio repudiandae temporibus recusandae modi.',
    },
    {
        title: 'Service 2',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati corporis beatae consectetur porro, libero aliquam illum adipisci quod explicabo. Deserunt, corporis excepturi! Magnam quos obcaecati distinctio repudiandae temporibus recusandae modi.',
    },
    {
        title: 'Service 3',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati corporis beatae consectetur porro, libero aliquam illum adipisci quod explicabo. Deserunt, corporis excepturi! Magnam quos obcaecati distinctio repudiandae temporibus recusandae modi.',
    },
    {
        title: 'Service 4',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati corporis beatae consectetur porro, libero aliquam illum adipisci quod explicabo. Deserunt, corporis excepturi! Magnam quos obcaecati distinctio repudiandae temporibus recusandae modi.',
    },
]

export const Service = () => {
    const ref = useRef(null)
    const refCardOdd = useRef(null)
    const refCardEven = useRef(null)

    useEffect(() => {
      async function animate() {
        if (ref.current) {
            const sr = (await import("scrollreveal")).default
            sr().reveal(ref.current, { delay: 500 })
        }
        if (refCardOdd.current) {
            const sr = (await import("scrollreveal")).default
            sr().reveal(refCardOdd.current, { delay: 500 })
        }

        if (refCardEven.current) {
            const sr = (await import("scrollreveal")).default
            sr().reveal(refCardEven.current, { delay: 500 })
        }
      }
      animate()
    }, [])

    return (
        <div className="mt-20">
            <div ref={ref} className="flex flex-col gap-2 items-center justify-center">
                <h1 className="text-xl md:text-3xl font-bold">Service</h1>
                <span className="text-sm md:text-base text-center text-gray-500">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor, sunt!
                </span>
            </div>

            <div className="flex flex-col gap-10 md:gap-20 mt-12">
                {service.map(({title, description}, index) => {
                    if (index % 2 === 0) {
                        return (
                            <div ref={refCardOdd} key={index} className="flex flex-col-reverse gap-5 md:flex-row">
                                <div className="md:w-1/2 md:pr-8">
                                    <div className="bg-gray-200 w-xl h-72 rounded-xl"></div>
                                </div>
                                <div className="md:w-1/2 md:pl-8 flex flex-col justify-center">
                                    <h1 className="text-xl md:text-2xl font-bold">{title}</h1>
                                    <p className="pt-2 leading-relaxed text-sm md:text-base text-gray-500 max-w-md">
                                        {description}
                                    </p>
                                </div>
                            </div>
                        )
                    } else {
                        return (
                            <div ref={refCardEven} key={index} className="flex flex-col gap-5 md:flex-row">
                                <div className="md:w-1/2 md:pr-8 flex flex-col justify-center">
                                    <h1 className="text-xl md:text-2xl font-bold">{title}</h1>
                                    <p className="pt-2 leading-relaxed text-sm md:text-base text-gray-500 max-w-md">
                                        {description}
                                    </p>
                                </div>
                                <div className="md:w-1/2 md:pl-8">
                                    <div className="bg-gray-200 w-xl h-72 rounded-xl"></div>
                                </div>
                            </div>
                        )
                    }
                })}
            </div>
        </div>
    )
}