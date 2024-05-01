import { Form, Formik } from 'formik';
import React from 'react'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom'
import { object, string } from 'yup';
import Input from './components/Input';
import Button from './components/Button';
import { api } from '../../../../services/api/getToken';


function Autenticar() {

    const navigate = useNavigate()

    const SchemaAutenticar = object({
        codigo: string().required("Código de autenticação é um campo obrigatório").min(11, "O código de autenticação deve ter pelo menos 11 caracteres").max(40, "O código de autenticação deve ter no máximo 40 caracteres"),
    })

    return (


        <div className='h-screen bg-indigo-100 flex justify-center items-center'>

            <div className="lg:w-2/5 md:w-1/2 w-2/3">


                <Formik
                    initialValues={{
                        codigo: "",
                    }}
                    validationSchema={SchemaAutenticar}
                    validateOnChange
                    onSubmit={async values => {

                        await api.put("/cliente/autenticarConta", {
                            codigo: values.codigo,
                        }).then((sucesso) => {

                            toast.success(sucesso.data)


                            setTimeout(() => {

                                navigate("/hospedaria/cliente/login")

                            }, 1000)

                        }).catch((error) => {
                            toast.error(error.response.data)
                            console.log(error)
                        })



                    }}
                >
                    {({ errors, touched, handleChange, handleBlur }) => (

                        <Form className="">



                            <div className="bg-white p-10 rounded-lg shadow-lg min-w-full">

                                <h1 className="text-xl font-bold text-black capitalize dark:text-white">AUTENTICAR CONTA</h1>

                                <Input
                                    id='codigo'
                                    titulo_label='Código de autenticação'
                                    type='text'
                                    key={"codigo"}
                                    onchange={handleChange("codigo")}
                                    onblur={handleBlur("codigo")}
                                    placeholder="Digite seu o código de autenticação"
                                    touched={touched.codigo}
                                    errors={errors.codigo}
                                />

                                <Button />

                            </div>



                        </Form>


                    )}
                </Formik >

                <form>

                </form>
            </div>



        </div>



    )
}

export default Autenticar