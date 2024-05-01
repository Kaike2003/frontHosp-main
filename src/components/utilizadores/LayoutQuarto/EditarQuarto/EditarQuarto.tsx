import React, { useCallback, useEffect, useState } from 'react'
import InputEditar from '../components/InputEditar'
import Button from '../components/Button'
import { Formik, Form } from 'formik';
import { object, string, date, number } from 'yup';
import { api } from '../../../../services/api/getToken';
import { useNavigate } from "react-router-dom"
import toast from 'react-hot-toast';
import { useStoreRota } from '../../../../store/StoreRota/StoreRota';
import dateFormat from 'dateformat';
import { useStoreAtualizar } from '../../../../store/StoreAtualizar/StoreAtualizar';
import { useStoreQuartoId } from '../../../../store/StoreQuartoId/StoreQuartoId';


export default function EditarQuarto() {

    const navigate = useNavigate()
    const [dataQuarto, setDataQuarto] = useState<any[]>([])
    const [rota] = useStoreRota((state) => [state.rota])
    const [emailUtilizador, setEmailUtilizador] = useState("")
    const [atualizar, setAtualizar] = useStoreAtualizar((state) => [state.atualizar, state.setAtualizar])
    const [quartoId] = useStoreQuartoId((state) => [state.quartoId])


    useEffect(() => {
        const storageEmailUtilizador = localStorage.getItem("@Auth:email")

        setEmailUtilizador(`${storageEmailUtilizador}`)
    }, [])

    const callBack = useCallback(async () => {

        const response = await api.get(`/admin/listarQuarto`)
        const newData = response.data
        setDataQuarto(newData)

    }, [])

    useEffect(() => {
        callBack()
    }, [callBack, atualizar])


    const Schema = object({
        nome: string().required("Nome é um campo obrigatório").min(3, "O nome deve ter pelo menos 3 caracteres").max(40, "O nome deve ter no máximo 40 caracteres"),
        tipo_quarto: string().required("Nome é um campo obrigatório").min(3, "O nome deve ter pelo menos 3 caracteres").max(40, "O nome deve ter no máximo 40 caracteres"),
        preco: number().required().min(1000).max(1000000000),
        descricao: string().min(20).max(400).required()
    })


    return (
        <React.Fragment>

            {dataQuarto.map(({
                id,
                nome,
                preco,
                tipoQuarto,
                descricao
            }: {
                id: string,
                nome: string,
                preco: number,
                tipoQuarto: string,
                descricao: string
            }) => {

                const valores = {
                    nome: "",
                    tipo_quarto: "",
                    preco: 0,
                    descricao: ""
                }

                const dadosSalvos = {
                    nome: nome,
                    tipo_quarto: tipoQuarto,
                    preco: preco,
                    descricao: descricao
                }


                if (quartoId === id) {
                    return (
                        <div className='' key={id}>
                            <div className='bg-indigo-100 flex items-center justify-center h-full'>

                                <section className="w-[100%] p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
                                    <h1 className="text-xl font-bold text-black capitalize dark:text-white">EDITAR QUARTO</h1>
                                    <Formik
                                        initialValues={dadosSalvos || valores}
                                        validationSchema={Schema}
                                        validateOnChange
                                        enableReinitialize
                                        onSubmit={async values => {

                                            await api.put(`/admin/editarQuarto/${id}`, {
                                                nome: values.nome,
                                                tipo_quarto: values.tipo_quarto,
                                                preco: values.preco,
                                                email: emailUtilizador,
                                                descricao: values.descricao
                                            }).then((res) => {

                                                if (atualizar === true) {
                                                    setAtualizar(false)
                                                } else {
                                                    setAtualizar(true)
                                                }

                                                navigate("/hospedaria/admin/quarto/listar")

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
                                                        id='preco'
                                                        titulo_label='preco'
                                                        type='number'
                                                        key={"preco"}
                                                        value={values.preco}
                                                        onchange={handleChange("preco")}
                                                        onblur={handleBlur("preco")}
                                                        placeholder="10000 kz"
                                                        touched={touched.preco}
                                                        errors={errors.preco}
                                                    />

                                                    <InputEditar
                                                        id='descricao'
                                                        titulo_label='Descricao'
                                                        type='text'
                                                        key={"descricao"}
                                                        value={values.descricao}
                                                        onchange={handleChange("descricao")}
                                                        onblur={handleBlur("descricao")}
                                                        placeholder="Descricao"
                                                        touched={touched.descricao}
                                                        errors={errors.descricao}
                                                    />

                                                    <div>
                                                        <label className="text-black font-medium dark:text-gray-200" htmlFor="passwordConfirmation">Tipo de quarto</label>
                                                        <select
                                                            name="tipo_quarto"
                                                            id="tipo_quarto"
                                                            onChange={handleChange("tipo_quarto")}
                                                            defaultValue={values.tipo_quarto}
                                                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring
">
                                                            <option value="">Tipo de quarto</option>
                                                            <option value="INDIVIDUAL">INVDIVUAL</option>
                                                            <option value="DUPLO">DUPLO</option>
                                                            <option value="SUITE">SUITE</option>
                                                        </select>
                                                        {touched.tipo_quarto && errors.tipo_quarto && <div className="font-medium">{String(errors.tipo_quarto)}</div>}

                                                    </div >


                                                </div>


                                                <Button
                                                    nome='Editar quarto'
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

