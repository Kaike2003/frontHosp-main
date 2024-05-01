import React, { useCallback, useEffect, useState } from 'react'
import InputEditar from '../components/InputEditar'
import Button from '../components/Button'
import { Formik, Form } from 'formik';
import { object, string, date } from 'yup';
import { api } from '../../../../services/api/getToken';
import { useNavigate } from "react-router-dom"
import toast from 'react-hot-toast';
import { useStoreRota } from '../../../../store/StoreRota/StoreRota';
import dateFormat from 'dateformat';
import { useStoreAtualizar } from '../../../../store/StoreAtualizar/StoreAtualizar';


export default function EditarPerfil() {

    const navigate = useNavigate()
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
        nome: string().required("Nome é um campo obrigatório").min(3, "O nome deve ter pelo menos 3 caracteres").max(40, "O nome deve ter no máximo 40 caracteres"),
        dataNascimento: date().required("Data de nascimento é um campo obrigatório").max("2012-12-31", "Precisas ser maior de 18").min("1890-12-31")
    })


    return (
        <React.Fragment>

            {dataUtilizador.map(({
                id,
                nome,
                email,
                dataNascimento,
            }: {
                id: string,
                nome: string,
                email: string,
                dataNascimento: string,
            }) => {

                const valores = {
                    nome: "",
                    dataNascimento: new Date(),
                }

                const dadosSalvos = {
                    nome: nome,
                    dataNascimento: dateFormat(new Date(dataNascimento), "yyyy-mm-dd"),
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

                                            await api.put(`/${rota}/atualizarInformacaoPerfil/${id}`, {
                                                nome: String(values.nome),
                                                data_nascimento: new Date(values.dataNascimento)
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
                                                        id='nome'
                                                        titulo_label='Nome'
                                                        type='text'
                                                        value={values.nome}
                                                        key={"nome"}
                                                        onchange={handleChange("nome")}
                                                        onblur={handleBlur("nome")}
                                                        placeholder="Digite o seu nome"
                                                        touched={touched.nome}
                                                        errors={errors.nome}
                                                    />


                                                    <InputEditar
                                                        id='data_nascimento'
                                                        titulo_label='Data de nascimento'
                                                        type='date'
                                                        key={"data_nascimento"}
                                                        value={values.dataNascimento}
                                                        onchange={handleChange("dataNascimento")}
                                                        onblur={handleBlur("dataNascimento")}
                                                        placeholder=""
                                                        touched={touched.dataNascimento}
                                                        errors={errors.dataNascimento}
                                                    />

                                                </div>


                                                <Button
                                                    nome='Editar perfil'
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

