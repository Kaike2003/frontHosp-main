import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { api } from '../../../../services/api/getToken'
import {
    MaterialReactTable,
    useMaterialReactTable,
    type MRT_ColumnDef,
} from 'material-react-table';
import { Box, IconButton } from '@mui/material';
import dateFormat from 'dateformat';
import { Ellipsis, FilePenLine, FileX } from 'lucide-react';
import { useStoreAtualizar } from '../../../../store/StoreAtualizar/StoreAtualizar';
import toast from 'react-hot-toast';
import { useStoreReserva } from '../../../../store/StoreReserva/StoreReserva';
import { useNavigate } from 'react-router-dom';


//example data type
type TReserva = {
    dataEntrada: string,
    dataSaida: string
    estado: string
    id: string
    quartoId: string
    utilizadorId: string
    valorTotal: number
};

function TabelaTerminada() {

    const navigate = useNavigate()
    const [reserva, setReserva] = useState([])
    const [storageEmail, setStoraEmail] = useState("")
    const [atualizar, setAtualizar] = useStoreAtualizar((state) => [state.atualizar, state.setAtualizar])
    const [setReservaId] = useStoreReserva((state) => [state.setReservaId])


    const callBack = useCallback(() => {

        const email = localStorage.getItem("@Auth:email")

        setStoraEmail(`${email}`)

    }, [])

    useEffect(() => {
        callBack()
    }, [callBack])

    const callBackReserva = useCallback(() => {

        api.get(`/funcionalidade/listarReservasTerminadas/${storageEmail}`).then(async (sucesso) => {
            console.log(sucesso.data)
            setReserva(sucesso.data)
        }).catch((error) => {
            console.log(error)
        })

    }, [storageEmail])

    useEffect(() => {
        callBackReserva()
    }, [callBackReserva, atualizar])

    const data: TReserva[] = reserva


    const columns = useMemo<MRT_ColumnDef<TReserva>[]>(
        () => [
            {
                accessorKey: 'estado', //access nested data with dot notation
                header: 'Reserva',
                size: 150,
            },
            {
                accessorKey: 'valorTotal',
                header: 'Valor total',
                size: 150,
            },

            {
                accessorKey: 'dataEntrada',
                header: 'Data de entrada',
                size: 150,
                Cell: ({ cell }) => (
                    <Box
                        component="span"
                        sx={(theme) => ({
                            color: '#121212',
                            maxWidth: '9ch',
                            p: '0.25rem',
                        })}
                    >
                        {dateFormat(cell.getValue<string>(), "dd-mm-yyyy")}
                    </Box>
                ),
            },


            {
                accessorKey: 'dataSaida',
                header: 'Data de saida',
                size: 150,
                Cell: ({ cell }) => (
                    <Box
                        component="span"
                        sx={(theme) => ({
                            color: '#121212',
                            maxWidth: '9ch',
                            p: '0.25rem',
                        })}
                    >
                        {dateFormat(cell.getValue<string>(), "dd-mm-yyyy")}
                    </Box>
                ),
            },
        ],
        [],
    );

    const table = useMaterialReactTable({
        columns,
        data,
        enableRowActions: true,
        renderRowActions: ({ row }) => (
            <Box>

                <IconButton
                    color='info'
                    title='Detalhes'
                    onClick={() => {

                        setReservaId(row.original.id, row.original.quartoId)
                        navigate("/hospedaria/cliente/reserva/detalhe")


                    }}>
                    <Ellipsis />
                </IconButton>

                <IconButton
                    color='error'
                    title='Deletar'
                    onClick={async () => {

                        await api.delete(`/funcionalidade/deletarReserva/${row.original.id}`).then((sucesso) => {

                            toast.success(sucesso.data)

                            if (atualizar === false) {
                                setAtualizar(true)
                            } else {
                                setAtualizar(false)
                            }

                        }).catch((error) => {
                            toast.error(error.response.data)
                        })

                    }}>
                    <FileX />
                </IconButton>
            </Box>
        ),
    });

    return (
        < MaterialReactTable table={table} />
    )

};



export default TabelaTerminada