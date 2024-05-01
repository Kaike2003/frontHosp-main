import { Form, Formik } from 'formik'
import { object, string } from 'yup';
import React, { useContext } from 'react'
import Input from './components/Input'
import Button from './components/Button'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../../context/AunteticacaoContext';

function Login() {

    const { logarUtilizadorCliente, logadoCliente } = useContext(AuthContext)
    const navigate = useNavigate()

    const SchemaLogin = object({
        email: string().email().required("Email é um campo obrigatório"),
        palavraPasse: string().required("Palavra passe é um campo obrigatório").min(4, "A palavra passe deve ter pelo menos 4 caracteres").max(40, "A palavra passe deve ter no máximo 40 caracteres"),

    })

    if (logadoCliente) {
        return (
            <>
                {navigate("/hospedaria/cliente")}
            </>
        )
    } else {

        return (


            <div className='h-screen bg-indigo-100 flex justify-center items-center'>

                <div className="lg:w-2/5 md:w-1/2 w-2/3">


                    <Formik
                        initialValues={{
                            email: "",
                            palavraPasse: ""
                        }}
                        validationSchema={SchemaLogin}
                        validateOnChange
                        onSubmit={async values => {

                            const email = values.email
                            const palavraPasse = values.palavraPasse
                            return logarUtilizadorCliente(email, palavraPasse)

                        }}
                    >
                        {({ errors, touched, handleChange, handleBlur }) => (

                            <Form className="">



                                <div className="bg-white p-10 rounded-lg shadow-lg min-w-full">

                                    <h1 className="text-xl font-bold text-black capitalize dark:text-white">INICIAR SESSÃO</h1>

                                    <Input
                                        id='email'
                                        titulo_label='Email'
                                        type='text'
                                        key={"email"}
                                        onchange={handleChange("email")}
                                        onblur={handleBlur("email")}
                                        placeholder="Digite seu o seu email"
                                        touched={touched.email}
                                        errors={errors.email}
                                    />

                                    <Input
                                        id='palavraPasse'
                                        titulo_label='Palavra passe'
                                        type='password'
                                        key={"palavraPasse"}
                                        onchange={handleChange("palavraPasse")}
                                        onblur={handleBlur("palavraPasse")}
                                        placeholder="Digite sua palavra passe"
                                        touched={touched.palavraPasse}
                                        errors={errors.palavraPasse}
                                    />

                                    <Button />

                                </div>



                            </Form>


                        )}
                    </Formik >


                </div>



            </div >



        )

    }



}

export default Login