import React, { useCallback, useEffect, useState } from 'react'
import InputEditar from '../components/InputEditar'
import Button from '../components/Button'
import { Formik, Form } from 'formik';
import { object, number } from 'yup';
import { api } from '../../../../services/api/getToken';
import toast from 'react-hot-toast';
import { useStoreRota } from '../../../../store/StoreRota/StoreRota';
import { useStoreAtualizar } from '../../../../store/StoreAtualizar/StoreAtualizar';


export default function EditarTelefone() {

    const [dataUtilizador, setDataUtilizador] = useState<any[]>([])
    const [rota] = useStoreRota((state) => [state.rota])
    const [emailUtilizador, setEmailUtilizador] = useState("")
    const [atualizar, setAtualizar] = useStoreAtualizar((state) => [state.atualizar, state.setAtualizar])


    useEffect(() => {
        const storageEmailUtilizador = localStorage.getItem("@Auth:email")

        setEmailUtilizador(`${storageEmailUtilizador}`)
    }, [])

    const callBack = useCallback(async () => {

        const response = await api.get(`/publico/listarTodosUtilizadores`)
        const newData = response.data
        setDataUtilizador(newData)

    }, [])

    useEffect(() => {
        callBack()
    }, [callBack, atualizar])

    const Schema = object({
        telefone: number().min(111111111, "Telefone deve ser maior ou igual a 111111111").max(999999999, "O telefone deve ser menor ou igual a 999999999").required("Telefone é um campo obrigatório"),
    })


    return (
        <React.Fragment>

            {dataUtilizador.map(({
                id,
                telefone,
                email
            }: {
                id: string,
                telefone: number,
                email: string
            }) => {

                const valores = {
                    telefone: 0,
                }

                const dadosSalvos = {
                    telefone: telefone,
                }

                if (email === emailUtilizador) {
                    return (
                        <div className='' key={id}>
                            <div className='bg-indigo-100 flex items-center justify-center h-full'>

                                <section className="w-[100%] p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
                                    <h1 className="text-xl font-bold text-black capitalize dark:text-white">EDITAR PERFIL</h1>
                                    <Formik
                                        initialValues={dadosSalvos || valores}
                                        validationSchema={Schema}
                                        // validateOnChange
                                        enableReinitialize
                                        onSubmit={async values => {

                                            console.log(values)

                                            await api.put(`/${rota}/atualizarTelefone/${id}`, {
                                                telefone: Number(values.telefone),
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

                                            <Form className="" key={id}>

                                                <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">

                                                    <InputEditar
                                                        id='telefone'
                                                        titulo_label='Telefone'
                                                        type='text'
                                                        value={values.telefone}
                                                        key={"nome"}
                                                        onchange={handleChange("telefone")}
                                                        onblur={handleBlur("telefone")}
                                                        placeholder="Digite o seu novo número telefone"
                                                        touched={touched.telefone}
                                                        errors={errors.telefone}
                                                    />


                                                </div>


                                                <Button
                                                    nome='Editar número telefone'
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
                } else {
                    return (
                        <React.Fragment>

                        </React.Fragment>
                    )
                }



            })}

        </React.Fragment>
    )
}

