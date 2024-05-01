import React from 'react'
import { Link } from 'react-router-dom'

function Servicos() {
  return (
    <div className="bg-white dark:bg-gray-800 h-full py-6 sm:py-8 lg:py-8">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">

        <p className="hidden  text-gray-600 dark:text-gray-300 md:block">
          Hospedagem a curto prazo;
        </p>
        <p className="hidden  text-gray-600 dark:text-gray-300 md:block">
          Limpeza dos quartos;
        </p>
        <p className="hidden  text-gray-600 dark:text-gray-300 md:block">
          Troca de roupa de cama e toalhas;
        </p>
        <p className="hidden  text-gray-600 dark:text-gray-300 md:block">
          Café da manhã e outras refeições.
        </p>
      </div>
    </div>
  )
}

export default Servicos