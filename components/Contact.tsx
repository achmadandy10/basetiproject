import { FaEnvelope, FaLocationArrow, FaMobile } from "react-icons/fa"

const contact = [
    {
        name: "Lokasi",
        detail: "Jl. Dewi Sartika No.45 Cililitan, Kramat Jati, Jakarta Timur",
        icon: <FaLocationArrow />,
    },
    {
        name: "Email",
        detail: "admin@basetiproject.com",
        icon: <FaEnvelope />,
    },
    {
        name: "Telepon",
        detail: "0821-9785-6991",
        icon: <FaMobile />,
    },
]

export const Contact = () => {
    return (
        <div className="mt-32" id="contact">
            <div className="flex flex-col gap-2 items-center justify-center">
                <h1 className="text-xl md:text-3xl font-bold">Kontak</h1>
                <span className="text-sm md:text-base text-center text-gray-500">
                    Kami mempunyai beberapa kontak yang dapat anda hubungi.
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
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.013689309724!2d106.86046940185193!3d-6.261926462555407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f25607b23aef%3A0x8aa04db149a1fd52!2sJl.%20Dewi%20Sartika%2045%2C%20RT.2%2FRW.13%2C%20Cililitan%2C%20Kec.%20Kramat%20jati%2C%20Kota%20Jakarta%20Timur%2C%20Daerah%20Khusus%20Ibukota%20Jakarta%2013640!5e0!3m2!1sid!2sid!4v1649686648216!5m2!1sid!2sid" 
                        width="100%" 
                        height="auto" 
                        style={{ border: 0 }} 
                        className="rounded-xl"
                        loading="lazy" 
                    >    
                    </iframe>
                </div>

                <div className="">
                    <form 
                        action=""
                        className="border bg-white dark:bg-gray-800 dark:border-gray-700 border-gray-200 rounded-xl p-10"
                    >
                        <div className="mb-6">
                            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Nama Lengkap</label>
                            <input type="text" id="name" name="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                        </div>
                        <div className="mb-6">
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Alamat Email</label>
                            <input type="text" id="email" name="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                        </div>
                        <div className="mb-6">
                            <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subjek</label>
                            <input type="text" id="subject" name="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                        </div>
                        <div className="mb-6">
                            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Pesan</label>
                            <textarea id="message" name="message" rows={ 4 } className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Tinggalkan pesan anda disini..."></textarea>
                        </div>
                        <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}