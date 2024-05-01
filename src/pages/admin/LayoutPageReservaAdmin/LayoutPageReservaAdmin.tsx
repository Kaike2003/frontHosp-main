import React from 'react'
import HeaderAdmin from '../../../components/layout/components/Header/HeaderAdmin'
import Footer from '../../../components/layout/components/Footer/Footer'
import { Outlet } from 'react-router-dom'
import Reserva from '../../../components/utilizadores/LayoutReserva/Reserva'

function LayoutQuartoReservaAdmin() {
    return (
        <React.Fragment>
            <HeaderAdmin />
            <div className='h-32'></div>
            <div className='flex flex-row'>
                <Reserva />
            </div>

            <div className='mt-3'>
                <Outlet />
            </div>
            <Footer />
        </React.Fragment>
    )
}

export default LayoutQuartoReservaAdmin