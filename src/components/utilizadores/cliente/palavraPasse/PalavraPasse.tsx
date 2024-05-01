import React from 'react'
import { Formik, Form } from 'formik';
import { object, string } from 'yup';
import { useNavigate } from "react-router-dom"
import toast from 'react-hot-toast';
import { api } from '../../../../services/api/getToken';
import Input from './components/Input';
import Button from './components/Button';

function PalavraPasse() {


    const navigate = useNavigate()

    const SchemaPalavraPasse = object({
        email: string().email().required("Email é um campo obrigatório"),
    })

    return (


        <div className='h-screen bg-indigo-100 flex justify-center items-center'>

            <div className="lg:w-2/5 md:w-1/2 w-2/3">


                <Formik
                    initialValues={{
                        email: "",
                    }}
                    validationSchema={SchemaPalavraPasse}
                    validateOnChange
                    onSubmit={async values => {

                        await api.put("/cliente/recuperarPalavraPasse", {
                            email: values.email,
                        }).then(async (sucesso) => {

                            toast.success(sucesso.data)

                            setTimeout(() => {

                                navigate("/hospedaria/cliente/login")

                            }, 1500)

                        }).catch((error) => {
                            toast.error(error.response.data)
                            console.log(error)
                        })



                    }}
                >
                    {({ errors, touched, handleChange, handleBlur }) => (

                        <Form className="">

                            <div className="bg-white p-10 rounded-lg shadow-lg min-w-full">

                                <h1 className="text-xl font-bold text-black capitalize dark:text-white">RECUPERAR PALAVRA PASSE</h1>

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

                                <Button />

                            </div>



                        </Form>


                    )}
                </Formik >


            </div>



        </div>



    )
}

export default PalavraPasse