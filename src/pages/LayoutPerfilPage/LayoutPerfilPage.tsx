import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../components/layout/components/Header/Header'
import Footer from '../../components/layout/components/Footer/Footer'
import Editar from '../../components/utilizadores/LayoutPerfil/Editar'
import Telefone from '../../components/utilizadores/LayoutPerfil/Telefone'
import Email from '../../components/utilizadores/LayoutPerfil/Email'
import Avaliacao from '../../components/utilizadores/LayoutPerfil/Avaliacao'


function LayoutPerfilPage() {
    return (
        <React.Fragment>
            <Header />
            <div className='h-32'></div>
            <div className='flex flex-row'>
                <Editar />
                <Telefone />
                <Email />
                <Avaliacao />
            </div>

            <div className='mt-3'>
                <Outlet />
            </div>
            <Footer />
        </React.Fragment>
    )
}

export default LayoutPerfilPage