import React from 'react'
import { Link } from 'react-router-dom'

export default function Button() {
    return (
        <div className="flex justify-center mt-6">

            <button
                type='submit'
                className="px-6 me-4 py-2 leading-5 text-white transition-colors duration-200 transform bg-blue-500 rounded-md  hover:bg-blue-700  focus:outline-none focus:bg-gray-600
                font-medium text-base
                ">
                Iniciar sessão
            </button>

            <Link
                to="/hospedaria/admin/criar"
                className="px-6 me-4 py-2 leading-5 text-white transition-colors duration-200 transform bg-blue-500 rounded-md  hover:bg-blue-700  focus:outline-none focus:bg-gray-600
                font-medium text-base
                ">
                Criar conta
            </Link>

            <Link
                to="/hospedaria/admin/palavrapasse"
                className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-700 focus:outline-none focus:bg-gray-600 text-base
                font-medium
                ">
                Esqueceu a senha
            </Link>


        </div>
    )
}
