import React, { createContext, useCallback, useEffect, useState } from "react"
import { api } from "../services/api/getToken"
import toast from "react-hot-toast"
import axios from "axios"
import { useStoreRota } from "../store/StoreRota/StoreRota"


type TContext = {
    logadoCliente: boolean
    utilizadorCliente: string
    logarUtilizadorCliente: (email: string, palavra_passe: string) => void
    sairUtilizadorCliente: () => void
    logadoAdmin: boolean,
    utilizadorAdmin: string,
    logarUtilizadorAdmin: (email: string, palavra_passe: string) => void,
    sairUtilizadorAdmin: () => void,
}

export const AuthContext = createContext<TContext>({
    logadoCliente: false,
    utilizadorCliente: "",
    logarUtilizadorCliente: () => { },
    sairUtilizadorCliente: () => { },
    logadoAdmin: false,
    utilizadorAdmin: "",
    logarUtilizadorAdmin: () => { },
    sairUtilizadorAdmin: () => { },

})

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {

    const [utilizadorCliente, setUtilizadorCliente] = useState<string>("")
    const [utilizadorAdmin, setUtilizadorAdmin] = useState<string>("")
    const [setRota] = useStoreRota((state) => [state.setRota])

    const CallBack = useCallback(() => {
        const loadingStoreData = () => {
            const storageToken = localStorage.getItem("@Auth:token")
            const storageEmail = localStorage.getItem("@Auth:email")
            const storageTipoUtilizador = localStorage.getItem("@Auth:tipoUtilizador")


            if (storageToken && storageEmail) {
                setUtilizadorAdmin(storageToken)
                setUtilizadorCliente(storageToken)
                setRota(`${storageTipoUtilizador}`)
            }
        }
        loadingStoreData()
    }, [])

    useEffect(() => {
        CallBack()
    }, [CallBack])


    const logarUtilizadorCliente = async (email: string, palavraPasse: string) => {

        try {

            const response = await api.post("/cliente/login", {
                email: email,
                palavraPasse: palavraPasse
            })

            if (response.data.error) {
                alert(response.data.error);
            } else {
                setUtilizadorCliente(response.data.token);
                axios.defaults.headers.common[
                    "Authorization"
                ] = `Bearer ${response.data.token}`;
                localStorage.setItem("@Auth:token", response.data.token);
                localStorage.setItem("@Auth:email", email);
                localStorage.setItem("@Auth:tipoUtilizador", "cliente");
                setRota("cliente")

                toast.success("Sessão iniciada")
            }

        } catch (error: any) {
            console.log(error);
            toast.error(`${error.response.data}`)
        }


    }

    const sairUtilizadorCliente = () => {
        localStorage.clear();
        setUtilizadorCliente("");
    };

    const logarUtilizadorAdmin = async (email: string, palavraPasse: string) => {

        try {

            const response = await api.post("/admin/login", {
                email: email,
                palavraPasse: palavraPasse
            })

            if (response.data.error) {
                alert(response.data.error);
            } else {
                setUtilizadorAdmin(response.data.token);
                axios.defaults.headers.common[
                    "Authorization"
                ] = `Bearer ${response.data.token}`;
                localStorage.setItem("@Auth:token", response.data.token);
                localStorage.setItem("@Auth:email", email);
                localStorage.setItem("@Auth:tipoUtilizador", "admin");
                setRota("admin")

                toast.success("Sessão iniciada")
            }

        } catch (error: any) {
            console.log(error);
            toast.error(`${error.response.data}`)
        }


    }

    const sairUtilizadorAdmin = () => {
        localStorage.clear();
        setUtilizadorAdmin("");
    };


    return (
        <AuthContext.Provider
            value={{
                logadoCliente: !!utilizadorCliente,
                utilizadorCliente,
                logarUtilizadorCliente,
                sairUtilizadorCliente,
                logadoAdmin: !!utilizadorAdmin,
                utilizadorAdmin,
                logarUtilizadorAdmin,
                sairUtilizadorAdmin
            }}>

            {children}

        </AuthContext.Provider>

    )

}