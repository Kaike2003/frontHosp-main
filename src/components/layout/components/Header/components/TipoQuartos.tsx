import React from 'react'
import { styled } from "styled-components"
import { NavLink } from 'react-router-dom'

const DivElemento = styled.div`
    margin-top: 20px ;
    width: 100%;
    display: flex;
    align-items: flex-start;

    @media only screen and (max-width: 600px) {
        margin: auto;
        display: flex;
        flex-direction: column;
}
`

export default function TipoQuartos() {

    // const [rota] = useStoreRota((state) => [state.rota])


    return (
        <DivElemento
        // className="mt-4 flex gap-x-8 items-center justify-between"
        >

            <div id='menu' className="flex gap-x-8 categorias">
                <NavLink to={`/hospedaria/cliente/individual`}>
                    <span className="cursor-pointer rounded-sm py-1 px-2 text-sm font-medium hover:bg-gray-100 limitar">Individual</span>
                </NavLink>

                <NavLink to={`/hospedaria/cliente/duplo`}>
                    <span className="cursor-pointer rounded-sm py-1 px-2 text-sm font-medium hover:bg-gray-100">Duplo</span>
                </NavLink>

                <NavLink to={`/hospedaria/cliente/suite`}>
                    <span className="cursor-pointer rounded-sm py-1 px-2 text-sm font-medium hover:bg-gray-100">Suite</span>
                </NavLink>

            </div>


        </DivElemento>
    )
}

