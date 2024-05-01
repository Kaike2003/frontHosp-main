import React from 'react'
import { NavLink } from 'react-router-dom'
import { useStoreRota } from '../../../store/StoreRota/StoreRota'

function Avaliacao() {

    const [rota] = useStoreRota((state) => [state.rota])

    return (
        <div className='flex justify-between place-items-center mx-5 mt-2 menu'>
            <NavLink
                to={`/hospedaria/${rota}/perfil/avaliacao`}
                className="inline-flex items-center px-8 py-3 text-white transition bg-gray-900 rounded-full shadow-lg focus:outline-none focus:ring focus:ring-yellow-400 hover:bg-gray-800 cursor-pointer navLink"
                onClick={() => { }}
            >
                <span className="text-sm font-medium"> Avaliação  </span>

            </NavLink>
            <div>
            </div>
        </div>
    )
}

export default Avaliacao