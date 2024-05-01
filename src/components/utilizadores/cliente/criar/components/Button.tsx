import React from 'react'
import { Link } from 'react-router-dom'

export default function Button() {
    return (
        <div className="flex justify-end mt-6">
            <button
                type='submit'
                className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-700 focus:outline-none focus:bg-gray-600
                font-medium
                ">
                Criar conta
            </button>

            <Link
                to="/hospedaria/cliente/login"
                className="px-6 ms-4 py-2 leading-5 text-white transition-colors duration-200 transform bg-blue-500 rounded-md  hover:bg-blue-700  focus:outline-none focus:bg-gray-600
                font-medium
                ">
                Iniciar sessão
            </Link>
        </div>
    )
}
