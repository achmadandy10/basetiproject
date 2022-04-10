import { FaEnvelope, FaLocationArrow, FaMobile } from "react-icons/fa"

const contact = [
    {
        name: "Location",
        detail: "Jl. blablablalbalbalbalbalbalba",
        icon: <FaLocationArrow />,
    },
    {
        name: "Email",
        detail: "achmadandy2@gmail.com",
        icon: <FaEnvelope />,
    },
    {
        name: "Call",
        detail: "+62 85876829359",
        icon: <FaMobile />,
    },
]

export const Contact = () => {
    return (
        <div className="mt-32" id="contact">
            <div className="flex flex-col gap-2 items-center justify-center">
                <h1 className="text-xl md:text-3xl font-bold">Contact</h1>
                <span className="text-sm md:text-base text-center text-gray-500">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor, sunt!
                </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-10 mt-12">
                <div className="border bg-white dark:bg-gray-800 dark:border-gray-700 border-gray-200 rounded-xl p-10">
                    <ul className="flex flex-col gap-5 mb-10">
                        {contact.map(({name, detail, icon}, index) => {
                            return (
                                <li key={index} className="flex gap-5 items-center">
                                    <div className="rounded-full p-4 bg-gray-200 dark:bg-gray-900">
                                        {icon}
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <span className="text-md font-bold">{name}</span>
                                        <p className="text-sm text-gray-500">{detail}</p>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!4v1647760817891!6m8!1m7!1srKvARC21OwYF3ip-iMyoLA!2m2!1d-6.262094596854809!2d106.8644349074138!3f58.52158599984699!4f-18.79602867552053!5f0.7820865974627469" 
                        width="100%" 
                        height="auto" 
                        style={{ border: 0 }} 
                        className="rounded-xl"
                        loading="lazy"
                    ></iframe>
                </div>

                <div className="">
                    <form 
                        action=""
                        className="border bg-white dark:bg-gray-800 dark:border-gray-700 border-gray-200 rounded-xl p-10"
                    >
                        <div className="mb-6">
                            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Name</label>
                            <input type="text" id="name" name="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                        </div>
                        <div className="mb-6">
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email Address</label>
                            <input type="text" id="email" name="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                        </div>
                        <div className="mb-6">
                            <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
                            <input type="text" id="subject" name="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                        </div>
                        <div className="mb-6">
                            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Message</label>
                            <textarea id="message" name="message" rows={ 4 } className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a comment..."></textarea>
                        </div>
                        <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}