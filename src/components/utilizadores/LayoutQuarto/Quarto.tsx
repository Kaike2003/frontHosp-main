import React from 'react'
import { NavLink } from 'react-router-dom'
import { useStoreRota } from '../../../store/StoreRota/StoreRota'

function Quarto() {

    const [rota] = useStoreRota((state) => [state.rota])

    return (
        <div className='flex justify-between place-items-center mx-5 mt-2 menu gap-x-3'>
            <NavLink
                to={`/hospedaria/${rota}/quarto/criar`}
                className="inline-flex items-center px-8 py-3 text-white transition bg-gray-900 rounded-full shadow-lg focus:outline-none focus:ring focus:ring-yellow-400 hover:bg-gray-800 cursor-pointer navLink"
                onClick={() => { }}
            >
                <span className="text-sm font-medium"> Criar  </span>

            </NavLink>

            <NavLink
                to={`/hospedaria/${rota}/quarto/listar`}
                className="inline-flex items-center px-8 py-3 text-white transition bg-gray-900 rounded-full shadow-lg focus:outline-none focus:ring focus:ring-yellow-400 hover:bg-gray-800 cursor-pointer navLink"
                onClick={() => { }}
            >
                <span className="text-sm font-medium"> Listar  </span>

            </NavLink>
            <div>
            </div>
        </div>
    )
}

export default Quarto