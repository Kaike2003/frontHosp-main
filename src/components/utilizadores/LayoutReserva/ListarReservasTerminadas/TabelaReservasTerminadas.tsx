import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { api } from '../../../../services/api/getToken'
import {
    MaterialReactTable,
    useMaterialReactTable,
    type MRT_ColumnDef,
} from 'material-react-table';
import { Box, IconButton } from '@mui/material';
import dateFormat from 'dateformat';
import { useStoreAtualizar } from '../../../../store/StoreAtualizar/StoreAtualizar';
import toast from 'react-hot-toast';
import { FilePenLine, FileX, Check } from 'lucide-react';
import { useStoreReserva } from '../../../../store/StoreReserva/StoreReserva';
import { useNavigate } from 'react-router-dom';
import { Ellipsis } from 'lucide-react';

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

function TabelaReservasTerminadas() {

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

        api.get(`/publico/listarTodasReservasTerminadas`).then(async (sucesso) => {
            console.log(sucesso.data)
            setReserva(sucesso.data)
        }).catch((error) => {
            console.log(error)
        })

    }, [])

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
            }

            ,
            {
                accessorKey: 'id',
                header: 'Id',
                size: 200,
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
    });

    return (
        < MaterialReactTable

            table={table} />
    )

};



export default TabelaReservasTerminadas