import React, { useCallback, useEffect, useState } from 'react'
import InputEditar from '../components/InputEditar'
import Button from '../components/Button'
import { Formik, Form } from 'formik';
import { object, string, date } from 'yup';
import { api } from '../../../../services/api/getToken';
import { useNavigate } from "react-router-dom"
import toast from 'react-hot-toast';
import { useStoreRota } from '../../../../store/StoreRota/StoreRota';
import { useStoreAtualizar } from '../../../../store/StoreAtualizar/StoreAtualizar';


function PerfilAvaliacao() {


    const navigate = useNavigate()
    const [rota] = useStoreRota((state) => [state.rota])
    const [emailUtilizador, setEmailUtilizador] = useState("")
    const [atualizar, setAtualizar] = useStoreAtualizar((state) => [state.atualizar, state.setAtualizar])

    useEffect(() => {
        const storageEmailUtilizador = localStorage.getItem("@Auth:email")

        setEmailUtilizador(`${storageEmailUtilizador}`)
    }, [])

    const Schema = object({
        mensagem: string().required("Mensagem é um campo obrigatório").min(3, "A mensagem deve ter pelo menos 3 caracteres").max(400, "A mensagem deve ter no máximo 40 caracteres"),
    })

    const valores = {
        mensagem: "",
    }

    return (
        <div>
            <div className='bg-indigo-100 flex items-center justify-center h-full'>

                <section className="w-[100%] p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
                    <h1 className="text-xl font-bold text-black capitalize dark:text-white">AVALIAÇÃO</h1>
                    <Formik


                        initialValues={valores}
                        validationSchema={Schema}
                        // validateOnChange
                        enableReinitialize
                        onSubmit={async values => {

                            console.log(values)

                            await api.post(`/funcionalidade/criarAvaliacao`, {
                                email: String(emailUtilizador),
                                mensagem: String(values.mensagem),
                            }).then((res) => {

                                if (atualizar === true) {
                                    setAtualizar(false)
                                } else {
                                    setAtualizar(true)
                                }

                                return toast.success(res.data)

                            }).catch((error) => {
                                toast.error(error.response.data)
                            })

                        }}
                    >
                        {({ errors, touched, values, handleChange, handleBlur, setFieldValue }) => (

                            <Form>

                                <div className="">

                                    <div>

                                        <textarea
                                            className='w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring'
                                            value={values.mensagem}
                                            key={"mensagem"}
                                            name=""
                                            id=""
                                            cols={30}
                                            rows={10}
                                            onChange={handleChange("mensagem")}
                                            onBlur={handleBlur("mensagem")}
                                            placeholder="Digite o sua avaliacao"
                                        />
                                    </div>


                                    <div>
                                        {touched && errors && <div className="font-medium">{String(errors.mensagem)}</div>}
                                    </div>

                                </div>


                                <Button
                                    nome='Comentar'
                                />

                            </Form>


                        )}
                    </Formik >

                    <form>

                    </form>
                </section>


            </div >
        </div>
    )
}

export default PerfilAvaliacao