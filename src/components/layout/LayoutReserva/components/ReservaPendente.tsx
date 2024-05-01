import React from 'react'
import { NavLink } from 'react-router-dom'

function ReservaPendente() {
    return (
        <div className='flex justify-between place-items-center mx-5 mt-2 menu'>
            <NavLink
                to={`/hospedaria/cliente/reserva/pendente`}
                className="inline-flex items-center px-8 py-3 text-white transition bg-gray-900 rounded-full shadow-lg focus:outline-none focus:ring focus:ring-yellow-400 hover:bg-gray-800 cursor-pointer navLink"
                onClick={() => { }}
            >
                <span className="text-sm font-medium"> Pendentes </span>

            </NavLink>
            <div>
            </div>
        </div>
    )
}

export default ReservaPendente