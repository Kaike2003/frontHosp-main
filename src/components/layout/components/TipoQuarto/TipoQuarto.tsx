import React from 'react'
import { Link } from 'react-router-dom'
import Individual from './components/Individual'
import Duplo from './components/Duplo'
import Suite from './components/Suite'

function TipoQuarto() {
    return (
        <React.Fragment>
            <div className='bg-red-200'>
                <Individual />
                <div className="h-24 bg-white"></div>
                <Duplo />
                <div className="h-24 bg-white"></div>
                <Suite />
                <div className="h-24 bg-white"></div>
            </div>
        </React.Fragment>
    )
}

export default TipoQuarto