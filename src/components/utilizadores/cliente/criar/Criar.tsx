import React from 'react'
import Button from './components/Button'
import { useNavigate } from 'react-router-dom'
import { Formik, Form } from 'formik'
import { object, string, number, date } from 'yup';
import { api } from '../../../../services/api/getToken'
import toast from 'react-hot-toast'
import Input from './components/Input'
import Select from './components/Select'

function Criar() {

    const navigate = useNavigate()

    const SchemaCriarContaAdmin = object({
        nome: string().required("Nome é um campo obrigatório").min(3, "O nome deve ter pelo menos 3 caracteres").max(40, "O nome deve ter no máximo 40 caracteres"),
        email: string().email().required("Email é um campo obrigatório"),
        telefone: number().min(111111111, "Telefone deve ser maior ou igual a 111111111").max(999999999, "O telefone deve ser menor ou igual a 999999999").required("Telefone é um campo obrigatório"),
        palavra_passe: string().required("Palavra passe é um campo obrigatório").min(4, "A palavra passe deve ter pelo menos 4 caracteres").max(40, "A palavra passe deve ter no máximo 40 caracteres"),
        data_nascimento: date().required("Data de nascimento é um campo obrigatório").max("2012-12-31", "Precisas ser maior de 18").min("1890-12-31")
    })


    return (
        <div className='bg-indigo-100 flex items-center justify-center h-screen'>

            <section className="w-[60%] p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
                <h1 className="text-xl font-bold text-black capitalize dark:text-white">CRIAR CONTA</h1>

                <Formik
                    initialValues={{
                        nome: "",
                        email: "",
                        telefone: null,
                        data_nascimento: new Date(),
                        palavra_passe: "",
                        tipo_utilizador: "ADMIN"
                    }}
                    validationSchema={SchemaCriarContaAdmin}
                    validateOnChange
                    onSubmit={async values => {

                        await api.post("/cliente/criarConta", {
                            nome: values.nome,
                            email: values.email,
                            telefone: Number(values.telefone),
                            palavraPasse: values.palavra_passe,
                            data_nascimento: new Date(values.data_nascimento),
                        }).then((sucesso) => {

                            toast.success(sucesso.data)

                            setTimeout(() => {

                                navigate("/hospedaria/cliente/autenticar")

                            }, 1500)

                            return sucesso.data

                        }).catch((error) => {
                            console.log(error)
                            toast.error(error.response.data)
                            return error.response.data
                        })

                    }}
                >
                    {({ errors, touched, handleChange, handleBlur }) => (

                        <Form className="">

                            <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">

                                <Input
                                    id='nome'
                                    titulo_label='Nome'
                                    type='text'
                                    key={"nome"}
                                    onchange={handleChange("nome")}
                                    onblur={handleBlur("nome")}
                                    placeholder="Digite seu nome"
                                    touched={touched.nome}
                                    errors={errors.nome}
                                />

                                <Input
                                    id='email'
                                    titulo_label='Email'
                                    type='email'
                                    key={"email"}
                                    onchange={handleChange("email")}
                                    onblur={handleBlur("email")}
                                    placeholder="Exemplo@gmail.com"
                                    touched={touched.email}
                                    errors={errors.email}
                                />


                                <Input
                                    id='telefone'
                                    titulo_label='Telefone'
                                    type='number'
                                    key={"telefone"}
                                    onchange={handleChange("telefone")}
                                    onblur={handleBlur("telefone")}
                                    placeholder="Digite seu número de telefone"
                                    touched={touched.telefone}
                                    errors={errors.telefone}
                                />

                                <Input
                                    id='data_nascimento'
                                    titulo_label='Date de nascimento'
                                    type='date'
                                    key={"data_nascimento"}
                                    onchange={handleChange("data_nascimento")}
                                    onblur={handleBlur("data_nascimento")}
                                    placeholder=""
                                    touched={touched.data_nascimento}
                                    errors={errors.data_nascimento}
                                />

                                <Input
                                    id='palavra_passe'
                                    titulo_label='Palavra passe'
                                    type='password'
                                    key={"palavra_passe"}
                                    onchange={handleChange("palavra_passe")}
                                    onblur={handleBlur("palavra_passe")}
                                    placeholder="Recomendamos uma palavra passe forte"
                                    touched={touched.palavra_passe}
                                    errors={errors.palavra_passe}
                                />

                            </div>

                            <Button />


                        </Form>


                    )}
                </Formik >

                <form>

                </form>
            </section>



        </div>
    )
}

export default Criar