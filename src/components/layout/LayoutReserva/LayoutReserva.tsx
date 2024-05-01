import React from 'react'
import Header from '../components/Header/Header'
import { NavLink, Outlet } from 'react-router-dom'
import ReservaConfirmada from './components/ReservaConfirmada'
import ReservaCancelada from './components/ReservaCancelada'
import ReservaPendente from './components/ReservaPendente'
import ReservaTerminada from './components/ReservaTerminada'

function LayoutReserva() {
    return (
        <React.Fragment>
            <Header />
            <div className='h-32'></div>
            <div className='flex flex-row '>
                <ReservaConfirmada />
                <ReservaCancelada />
                <ReservaPendente />
                <ReservaTerminada />
            </div>
            <div className='mt-4'>
                <Outlet />
            </div>
        </React.Fragment>
    )
}

export default LayoutReserva