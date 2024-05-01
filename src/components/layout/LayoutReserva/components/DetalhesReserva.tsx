import React, { useCallback, useEffect, useRef, useState } from 'react'
import InputEditar from './InputEditar'
import Button from './Button'
import { Formik, Form } from 'formik';
import { object, string, number, date } from 'yup';
import { api } from '../../../../services/api/getToken';
import { useNavigate } from "react-router-dom"
import toast from 'react-hot-toast';
import dateFormat from 'dateformat';
import { useStoreAtualizar } from '../../../../store/StoreAtualizar/StoreAtualizar';
import { useStoreReserva } from '../../../../store/StoreReserva/StoreReserva';

export default function DetalhesReserva() {

    const navigate = useNavigate()
    const [data, setData] = useState<any[]>([])
    const [atualizar, setAtualizar] = useStoreAtualizar((state) => [state.atualizar, state.setAtualizar])
    const [reservaID, quartoID] = useStoreReserva((state) => [state.reservaID, state.quartoID])
    const [storageEmail, setStoraEmail] = useState("")
    const [quartos, setQuartos] = useState<any>([])

    const callBackEmail = useCallback(() => {

        const email = localStorage.getItem("@Auth:email")

        setStoraEmail(`${email}`)

    }, [])

    useEffect(() => {
        callBackEmail()
    }, [callBackEmail])

    const callBack = useCallback(async () => {

        const response = await api.get("/publico/listarTodasReservas")
        const newData = response.data
        setData(newData)

        const responseQuartos = await api.get("/publico/listarTodosQuartos")
        const newDataQuartos = responseQuartos.data
        setQuartos(newDataQuartos)

    }, [])

    useEffect(() => {
        callBack()
    }, [callBack])

    const SchemaEditarReserva = object({
        dataEntrada: date().required("Data de entrada é um campo obrigatório"),
        dataSaida: date().required("Data de saida é um campo obrigatório").min(new Date()),
    })


    return (
        <React.Fragment>

            {data.map(({
                id,
                dataEntrada,
                dataSaida,
                quartoId,
                valorTotal
            }: {
                id: string,
                dataSaida: string,
                dataEntrada: string,
                quartoId: string,
                valorTotal: number
            }) => {



                const valores = {
                    dataEntrada: new Date(),
                    dataSaida: new Date(),
                }

                const dadosSalvos = {
                    dataSaida: dateFormat(new Date(dataSaida), "yyyy-mm-dd"),
                    dataEntrada: dateFormat(new Date(dataEntrada), "yyyy-mm-dd"),
                }

                if (id === reservaID) {

                    return quartos.map(({ id, tipoQuarto }: { id: string, valorTotal: number, tipoQuarto: string }) => {

                        if (id === quartoId) {



                            return (
                                <div className='' key={id}>
                                    <div className='bg-indigo-100 flex items-center justify-center h-full'>

                                        <section className="w-[100%] p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
                                            <h1 className="text-xl font-bold text-black capitalize dark:text-white">DETALHE RESERVA</h1>
                                            <Formik
                                                initialValues={dadosSalvos || valores}
                                                validationSchema={SchemaEditarReserva}
                                                // validateOnChange
                                                enableReinitialize
                                                onSubmit={async values => {


                                                }}
                                            >
                                                {({ errors, touched, values, handleChange, handleBlur, setFieldValue }) => (

                                                    <Form className="">

                                                        <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">


                                                            <div>
                                                                <label
                                                                    className="text-black dark:text-gray-200 font-medium"
                                                                    htmlFor={id}>Email</label>
                                                                <input
                                                                    id={id}
                                                                    type={"email"}
                                                                    value={storageEmail}
                                                                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                                                                    disabled={true}
                                                                />

                                                            </div>

                                                            <div>
                                                                <label
                                                                    className="text-black dark:text-gray-200 font-medium"
                                                                    htmlFor={id}>Valor total</label>
                                                                <input
                                                                    id={id}
                                                                    type={"email"}
                                                                    value={valorTotal}
                                                                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                                                                    disabled={true}
                                                                />

                                                            </div>

                                                            <div>
                                                                <label
                                                                    className="text-black dark:text-gray-200 font-medium"
                                                                    htmlFor={id}>Tipo de quarto</label>
                                                                <input
                                                                    id={id}
                                                                    type={"text"}
                                                                    value={tipoQuarto}
                                                                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                                                                    disabled={true}
                                                                />

                                                            </div>


                                                            <InputEditar
                                                                id='dataEntrada'
                                                                titulo_label='Data de entrada'
                                                                type='date'
                                                                key={"dataEntrada"}
                                                                value={values.dataEntrada}
                                                                onchange={handleChange("dataEntrada")}
                                                                onblur={handleBlur("dataEntrada")}
                                                                placeholder=""
                                                                touched={touched.dataEntrada}
                                                                errors={errors.dataEntrada}
                                                                disabled={true}
                                                            />

                                                            <InputEditar
                                                                id='dataSaida'
                                                                titulo_label='Data de saida'
                                                                type='date'
                                                                key={"dataSaida"}
                                                                value={values.dataSaida}
                                                                onchange={handleChange("dataSaida")}
                                                                onblur={handleBlur("dataSaida")}
                                                                placeholder=""
                                                                touched={touched.dataSaida}
                                                                errors={errors.dataSaida}
                                                                disabled={true}
                                                            />




                                                        </div>



                                                    </Form>


                                                )}
                                            </Formik >

                                            <form>

                                            </form>
                                        </section>



                                    </div >
                                </div>
                            )



                        } else {
                            return <React.Fragment />
                        }



                    })

                } else {
                    return (
                        <React.Fragment>

                        </React.Fragment>
                    )
                }



            })}

        </React.Fragment >
    )
}

