import React from 'react'
import { Link } from 'react-router-dom'
import "../../../../index.css"

export default function InformacaoSemSessao() {


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

                
                    </div>
                </div>
            </div>
        </aside>
    )
}
