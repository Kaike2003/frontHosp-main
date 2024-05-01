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
import { Ellipsis, FilePenLine, FileX } from 'lucide-react';
import { useStoreReserva } from '../../../../store/StoreReserva/StoreReserva';
import { useNavigate } from 'react-router-dom';
import { useStoreQuartoId } from '../../../../store/StoreQuartoId/StoreQuartoId';



//example data type
type TQuarto = {
    id: string,
    nome: string,
    preco: number,
    tipoQuarto: "DUPLO" | "SUITE" | "INDIVIUDAL",
    disponibilidade: boolean,
    descricao: string,
    publicado: boolean,
    aprovado: boolean,
    utilizadorId: string
    create_at: Date
};

function TabelaQuarto() {

    const navigate = useNavigate()

    const [quarto, setQuarto] = useState([])
    const [storageEmail, setStoraEmail] = useState("")
    const [atualizar, setAtualizar] = useStoreAtualizar((state) => [state.atualizar, state.setAtualizar])

    const [setQuartoId] = useStoreQuartoId((state) => [state.setQuartoId])


    const callBack = useCallback(() => {

        const email = localStorage.getItem("@Auth:email")

        setStoraEmail(`${email}`)

    }, [])

    useEffect(() => {
        callBack()
    }, [callBack])

    const callBackReserva = useCallback(() => {

        api.get(`/admin/listarQuarto`).then(async (sucesso) => {
            console.log(sucesso.data)
            setQuarto(sucesso.data)
        }).catch((error) => {
            console.log(error)
        })

    }, [])


    useEffect(() => {
        callBackReserva()
    }, [callBackReserva, atualizar])



    const data: TQuarto[] = quarto


    const columns = useMemo<MRT_ColumnDef<TQuarto>[]>(
        () => [
            {
                accessorKey: 'nome', //access nested data with dot notation
                header: 'Nome',
                size: 0,
            },
            {
                accessorKey: 'tipoQuarto',
                header: 'Tipo de quarto',
                size: 0,
            },

            {
                accessorKey: 'preco',
                header: 'Preço',
                size: 0,
            },

            {
                accessorKey: 'descricao',
                header: 'Desçricao',
                size: 500,
            },

            {
                accessorKey: 'create_at',
                header: 'Data',
                size: 0,
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

                        setQuartoId(row.original.id)
                        navigate("/hospedaria/admin/quarto/editar")

                    }}>
                    <FilePenLine />
                </IconButton>

                <IconButton
                    color='error'
                    title='Deletar'
                    onClick={async () => {

                        await api.delete(`/admin/deletarQuarto/${row.original.id}`).then((sucesso) => {

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



export default TabelaQuarto