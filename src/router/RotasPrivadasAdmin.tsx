import React, { useContext } from 'react'
import { AuthContext } from '../context/AunteticacaoContext'
import { Navigate, Outlet } from 'react-router-dom'

function RotasPrivadasAdmin() {

    const { logadoAdmin } = useContext(AuthContext)


    return (
        logadoAdmin ? <Outlet /> : <Navigate to={"/hospedaria/admin"} />
    )
}

export default RotasPrivadasAdmin