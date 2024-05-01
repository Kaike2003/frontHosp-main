import React, { useContext } from 'react'
import { AuthContext } from '../context/AunteticacaoContext'
import { Navigate, Outlet } from 'react-router-dom'

function RotasPrivadasCliente() {

    const { logadoCliente } = useContext(AuthContext)


    return (
        logadoCliente ? <Outlet /> : <Navigate to={"/hospedaria/cliente"} />
    )
}

export default RotasPrivadasCliente