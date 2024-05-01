import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Informacao from './components/Informacao/Informacao'
import TipoQuarto from './components/TipoQuarto/TipoQuarto'
import Localizacao from './components/Localizacao/Localizacao'
import Servicos from './components/Servicos/Servicos'
import Sobre from './components/Sobre/Sobre'
import Galeria from './components/Galeria/Galeria'
import HeaderSemSessao from './components/Header/HeaderSemSessao'
import InformacaoSemSessao from './components/Informacao/InformacaoSemSessao'

function LayoutSemSessao() {
    return (
        <React.Fragment>
            <HeaderSemSessao />
            <div className='w-full h-[6rem] sm:h-[6rem] md:h-[5rem] lg:h-[6rem]' />
            <InformacaoSemSessao />

            <div>
                <h1 className='text-2xl font-bold text-gray-800 lg:text-3xl dark:text-white text-center mt-10 mb-10'>Serviços</h1>
            </div>

            <Servicos />

            <div className="h-24 bg-white"></div>


            <div>
                <h1 className='text-2xl font-bold text-gray-800 lg:text-3xl dark:text-white text-center mt-10 mb-10'>Detalhes</h1>
            </div>


            <TipoQuarto />


            <div className="h-24 bg-white"></div>

            <div>
                <h1 className='text-2xl font-bold text-gray-800 lg:text-3xl dark:text-white text-center mt-10 mb-10'>Galeria</h1>
            </div>

            <Galeria />


            <div className="h-24 bg-white"></div>

            <div>
                <h1 className='text-2xl font-bold text-gray-800 lg:text-3xl dark:text-white text-center mt-10 mb-10'>Sobre</h1>
            </div>

            <Sobre />


            <div className="h-24 bg-white"></div>

            <div>
                <h1 className='text-2xl font-bold text-gray-800 lg:text-3xl dark:text-white text-center mt-10 mb-10'>Localização</h1>
            </div>

            <Localizacao />

            <Footer />
        </React.Fragment >
    )
}

export default LayoutSemSessao