import React, { useContext, useEffect, useState } from 'react'
import { TbUserCog } from "react-icons/tb";
import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useStoreRota } from '../../../../store/StoreRota/StoreRota';
import { AuthContext } from '../../../../context/AunteticacaoContext';


export default function HeaderSemSessao() {

    const navigate = useNavigate()
    const [rota] = useStoreRota((state) => [state.rota])
    const [tipoUtilizador, setTipoUtilizador] = useState("")

    useEffect(() => {
        const storageTipoUtilizador = localStorage.getItem("@Auth:tipoUtilizador")
        setTipoUtilizador(`${storageTipoUtilizador}`)
    }, [])

    const { sairUtilizadorCliente } = useContext(AuthContext)

    function terminarSessao(tipo_utilizador: string) {

        if (tipo_utilizador === localStorage.getItem("@Auth:tipoUtilizador")) {

            switch (tipo_utilizador) {

                case "cliente":
                    sairUtilizadorCliente()
                    navigate(`/hospedaria/cliente/login`)

                    break;

                default:
                    break;
            }

        }


    }

    return (
        <div className="bg-white w-full z-20 fixed">
            <div className="border py-3 px-6 ">
                <div className="flex justify-between gap-3">
                    <div className="flex items-center">
                        <Link
                            to={``}
                            className="ml-2 text-xl font-semibold text-[#252C32]"> LA Rumba
                        </Link>
                    </div>


                    <div className="ml-2 flex">

                        <Menu as="div" className="relative inline-block text-left">
                            <div>
                                <Menu.Button className="inline-flex w-full justify-center rounded-md   py-2 text-sm font-medium text-black hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                                    <div className="flex cursor-pointer items-center gap-x-1 rounded-md py-2 px-4 hover:bg-gray-100">
                                        <div className="relative">
                                            <TbUserCog
                                                size={20}
                                                color='#464646'
                                            />
                                        </div>
                                    </div>
                                </Menu.Button>
                            </div>
                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                            >
                                <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                    <div className="px-1 py-1 ">

                                        <Menu.Item>
                                            {({ active }) => (
                                                <button
                                                    className={`${active ? 'bg-violet-500 text-white' : 'text-gray-900'
                                                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                                    onClick={() => {
                                                        navigate(`/hospedaria/cliente/login`)
                                                    }}
                                                >
                                                    {active ? (
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                                                        </svg>



                                                    ) : (
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                                                        </svg>



                                                    )}
                                                    <p className='ps-3'>Iniciar sessao</p>

                                                </button>
                                            )}
                                        </Menu.Item>

                                    </div>

                                    <div className="px-1 py-1">
                                        <Menu.Item>
                                            {({ active }) => (
                                                <button
                                                    className={`${active ? 'bg-violet-500 text-white' : 'text-gray-900'
                                                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                                    onClick={() => {
                                                        navigate(`/hospedaria/cliente/criar`)
                                                    }}
                                                >
                                                    {active ? (
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9" />
                                                        </svg>


                                                    ) : (
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9" />
                                                        </svg>


                                                    )}
                                                    <p className='ps-3'

                                                    >Criar conta</p>
                                                </button>
                                            )}
                                        </Menu.Item>
                                    </div>
                                </Menu.Items>
                            </Transition>
                        </Menu>





                    </div>


                </div>

            </div>
        </div>
    )
}

