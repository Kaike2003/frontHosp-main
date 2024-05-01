import React from 'react'
import { Link } from 'react-router-dom'


function Individual() {
    return (
        <div className="bg-white dark:bg-gray-800 h-screen py-6 sm:py-8 lg:py-12">
            <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                <div className="mb-4 flex items-center justify-between gap-8 sm:mb-8 md:mb-12">
                    <div className="flex items-start flex-col">

                        <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl dark:text-white">Quarto Individual</h2>

                        <p className="hidden max-w-screen-sm text-gray-600 dark:text-gray-300 md:block">
                            Características típicas de um quarto individual em nossa hospedaria: cama individual, banheiro privativo, área de estar, comodidades básicas, armazenamento e decoração simples.
                        </p>
                    </div>


                </div>

                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">


<Link to="#"
    className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
    <img
        src={require("../../../../../assets/quarto/quarto_1.jpg")}
        loading="lazy" alt="Photo by Minh Pham" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

    <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
    </div>

    <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg"></span>
</Link>

<Link to="#"
    className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80">
    <img
        src={require("../../../../../assets/quarto/quarto_2.jpg")}
        loading="lazy"
        alt="Photo by Magicle"
        className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
    />

    <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
    </div>

    <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg"></span>
</Link>

<Link to="#"
    className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80">
    <img
        src={require("../../../../../assets/quarto/quarto_3.jpg")}
        loading="lazy"
        alt="Photo by Martin Sanchez"
        className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" 
        />

    <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
    </div>

    <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg"></span>
</Link>

<Link to="#"
    className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
    <img 
    src={require("../../../../../assets/quarto/quarto_4.jpg")}
    loading="lazy" alt="Photo by Lorenzo Herrera" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

    <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
    </div>

    <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Retro</span>
</Link>
</div>
            </div>
        </div>
    )
}

export default Individual