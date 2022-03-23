import { useEffect, useRef } from 'react'

export const HomeSection = () => {
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
        <section ref={ref} className="flex flex-col gap-10 pt-5 md:pt-24 md:flex-row">
            <div className="w-full md:w-1/2 md:pr-8">
                <h1 className="text-3xl md:text-6xl font-bold">Make applications fast and precise</h1>
                <p className="pt-8 text-md md:text-xl leading-relaxed text-gray-500 max-w-md">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui dolorem excepturi voluptatibus laborum animi recusandae laudantium praesentium, temporibus exercitationem quam in ratione id, labore natus nostrum unde. Iusto, aliquam deserunt.
                </p>
            </div>
            <div className="w-full h-48 md:h-auto md:w-1/2 md:pl-8">
                <div className="bg-gray-200 w-xl h-full rounded-xl"></div>
            </div>
        </section>
    )
}