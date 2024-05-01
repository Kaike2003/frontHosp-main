import React, { useCallback, useEffect, useState } from 'react'
import { api } from '../../../../services/api/getToken'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { ICardQuarto } from '../../../../interface'
import { useStoreQuarto } from '../../../../store/StoreQuarto/StoreQuarto'
import { useStoreModal } from '../../../../store/StoreModal/StoreModal'
import { Form, Formik } from 'formik'
import { object, date } from 'yup';
import dateFormat from 'dateformat';
import toast from 'react-hot-toast'
import { useStoreAtualizar } from '../../../../store/StoreAtualizar/StoreAtualizar'


function ModalQuartos() {

    const SchemaAgendamento = object({
        dataEntrada: date().required("Data de entrada é um campo obrigatório").max(new Date("2024-12-31")).min(new Date()),
        dataSaida: date().required("Data de saida é um campo obrigatório").max(new Date("2024-12-31")).min(new Date())
    })

    const valoresInicias = {
        dataEntrada: new Date(),
        dataSaida: new Date(),
    }

    const [dataQuarto, setDataQuarto] = useState([])
    const [quarto] = useStoreQuarto((state) => [state.quarto])
    const [abrir, fecharModal] = useStoreModal((state) => [state.abrir, state.fecharModal])
    const [email, setEmail] = useState("")
    const [atualizar, setAtualizar] = useStoreAtualizar((state) => [state.atualizar, state.setAtualizar])


    const callBack = useCallback(async () => {
        const storageEmail = localStorage.getItem("@Auth:email")
        setEmail(`${storageEmail}`)

        await api.get("/publico/listarTodosQuartos").then((res) => {
            setDataQuarto(res.data)
        }).catch((error) => {
            console.log(error)
        })

    }, [])



    useEffect(() => {
        callBack()
    }, [callBack, quarto])


    return (
        <div key={quarto}>
            {dataQuarto.map(({ id, descricao, disponibilidade, preco, nome, tipoQuarto }: ICardQuarto) => {
                if (quarto === id) {
                    return (
                        <Transition
                            key={id + nome}
                            appear show={abrir} as={Fragment}>
                            <Dialog as="div" className="relative z-10"
                                onClose={fecharModal}
                            >
                                <Transition.Child
                                    as={Fragment}
                                    enter="ease-out duration-300"
                                    enterFrom="opacity-0"
                                    enterTo="opacity-100"
                                    leave="ease-in duration-200"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                >
                                    <div className="fixed inset-0 bg-black bg-opacity-25" />
                                </Transition.Child>

                                <div className="fixed inset-0 overflow-y-auto">
                                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                                        <Transition.Child
                                            as={Fragment}
                                            enter="ease-out duration-300"
                                            enterFrom="opacity-0 scale-95"
                                            enterTo="opacity-100 scale-100"
                                            leave="ease-in duration-200"
                                            leaveFrom="opacity-100 scale-100"
                                            leaveTo="opacity-0 scale-95"
                                        >
                                            <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">


                                                <div className="mt-20">

                                                    <div
                                                        style={{ cursor: "pointer" }}
                                                        className="group max-w-full relative  flex flex-col items-center justify-center  p-1 text-black-500 hover:bg-gray-200 hover:text-black
                                            
                                             w-full  border-transparent bg-blue-100 px-4 py-2 text-sm font-medium focus:outline-none focus-visible:ring-2
                                                focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:bg-gray-100 disabled:text-gray-300
                                                disabled:cursor-not-allowed
                                                mb-2 rounded-md
                                            " >

                                                        <p className="">Detalhes</p>

                                                        <div className="
                                                
                                                absolute top-10 mb-6 origin-bottom transform rounded text-white opacity-0 transition-all duration-300 group-hover:opacity-100
                                                
                                                
                                                ">

                                                            <div className="
                                                        
                                                        mt-1 mb-2 w-full justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-black hover:bg-blue-200 focus:outline-none focus-visible:ring-2
                                                focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:bg-gray-100 disabled:text-gray-300
                                                disabled:cursor-not-allowed">
                                                                <Dialog.Title
                                                                    as="h3"
                                                                    className="text-lg font-medium leading-6 text-gray-900"
                                                                >
                                                                    {nome}
                                                                </Dialog.Title>
                                                                {descricao}
                                                            </div>
                                                        </div>
                                                    </div>




                                                    <div>
                                                        <img
                                                            className="imagemDetalhe rounded-md"
                                                            src={require(`../../../../assets/${tipoQuarto}.jpg`)}
                                                            alt={descricao}


                                                        />
                                                    </div>


                                                    <Formik
                                                        initialValues={valoresInicias}
                                                        validationSchema={SchemaAgendamento}
                                                        validateOnChange
                                                        enableReinitialize
                                                        onSubmit={async values => {

                                                            await api.post(`/funcionalidade/criarReserva/${quarto}`, {
                                                                email: email,
                                                                dataEntrada: new Date(values.dataEntrada),
                                                                dataSaida: new Date(values.dataSaida)
                                                            }).then((res) => {
                                                                toast.success(res.data)
                                                                fecharModal(false)

                                                                if (atualizar === true) {
                                                                    setAtualizar(false)
                                                                } else {
                                                                    setAtualizar(true)
                                                                }

                                                            }).catch((error) => {
                                                                toast.error(error.response.data)
                                                                console.log(error)
                                                            })

                                                        }}
                                                    >
                                                        {({ errors, touched, values, handleChange, handleBlur, setFieldValue }) => (

                                                            <Form className="" key={id}>


                                                                <div className='mt-2 flex flex-col gap-3'>
                                                                    <input
                                                                        value={String(dateFormat(new Date(values.dataEntrada), "yyyy-mm-dd"))}
                                                                        onChange={handleChange("dataEntrada")}
                                                                        onBlur={handleBlur("dataEntrada")}
                                                                        type='date'
                                                                        placeholder='Nº documento ou filiaçao'
                                                                        className='w-full justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2
                                                focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:bg-gray-100 disabled:text-gray-300
                                                disabled:cursor-not-allowed'/>
                                                                    {touched.dataEntrada && errors.dataEntrada && <div className="font-medium">{String(errors.dataEntrada)}</div>}

                                                                    <input
                                                                        value={String(dateFormat(new Date(values.dataSaida), "yyyy-mm-dd"))}
                                                                        onChange={handleChange("dataSaida")}
                                                                        onBlur={handleBlur("dataSaida")}
                                                                        type='date'
                                                                        placeholder='Nº documento ou filiaçao'
                                                                        className='w-full justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2
                                                focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:bg-gray-100 disabled:text-gray-300
                                                disabled:cursor-not-allowed'/>
                                                                </div>
                                                                {touched.dataSaida && errors.dataSaida && <div className="font-medium">{String(errors.dataSaida)}</div>}

                                                                {disponibilidade === true ?
                                                                    <div className='mt-2'>
                                                                        <button
                                                                            type='submit'
                                                                            className='w-full justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2
                                                                 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:bg-gray-100 disabled:text-gray-300
                                                                 disabled:cursor-not-allowed'>Agendar</button>
                                                                    </div>
                                                                    :
                                                                    <div className='mt-2'>
                                                                        <button
                                                                            type='submit'
                                                                            disabled={true}
                                                                            className='w-full justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2
                                                focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:bg-red-900 disabled:text-gray-300
                                                disabled:cursor-not-allowed'>Agendar</button>
                                                                    </div>
                                                                }

                                                            </Form>


                                                        )}
                                                    </Formik >





                                                </div>
                                            </Dialog.Panel>
                                        </Transition.Child>
                                    </div>
                                </div>
                            </Dialog>
                        </Transition>
                    )
                } else {
                    return <React.Fragment />
                }
            })}
        </div>
    )
}

export default ModalQuartos