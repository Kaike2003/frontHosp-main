import React from 'react'
import { Link } from 'react-router-dom'
import "../../../../index.css"

export default function Informacao() {


    return (
        <aside>

            <div className={"p-8 md:p-12 lg:px-16 lg:py-24  bg-slate-900/50 mensagem_imagem_fundo"}>
                <div className="max-w-lg text-center sm:text-left">
                    <h2 className="text-2xl font-extrabold items-center px-8 py-3 text-white transition bg-gray-900 rounded-md sm:text-3xl md:text-4xl mb-2">
                        Transforme sua viagem em uma experiência inesquecível conosco!
                    </h2>

                    <p
                        className="max-w-md items-center px-8 py-3 text-white transition bg-gray-900 rounded-md md:mt-6 md:text-lg md:leading-relaxed md:block"
                    >
                        Na nossa hospedaria poderás desfrutar de acomodações confortáveis, alimentação, wi-Fi e outras comodidades tecnológicas, áreas de lazer e entretenimento, serviços de limpeza e lavanderia.
                    </p>

                    <div className="flex mt-4 sm:mt-8 gap-x-5">

                        <Link
                            className="inline-flex items-center px-8 py-3 text-white transition bg-gray-900 rounded-full shadow-lg focus:outline-none focus:ring focus:ring-yellow-400 hover:bg-gray-800"
                            to={`/hospedaria/cliente/reserva/confirmada`}
                        >
                            <span className="text-sm font-medium"> Reservas </span>


                            <svg
                                className="w-5 h-5 ml-3"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                                />
                            </svg>
                        </Link>

                        <Link
                            className="inline-flex items-center px-8 py-3 text-white transition bg-gray-900 rounded-full shadow-lg focus:outline-none focus:ring focus:ring-yellow-400 hover:bg-gray-800"
                            to={`/hospedaria/cliente/perfil/avaliacao`}
                        >
                            <span className="text-sm font-medium"> Avaliações </span>


                            <svg
                                className="w-5 h-5 ml-3"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                                />
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </aside>
    )
}
