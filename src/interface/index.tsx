import { FormikErrors, FormikTouched } from "formik"
import React from "react"


export interface TInput {
    id: string
    type: "text" | "password" | "number" | "email" | "date"
    titulo_label: string
    placeholder: string
    value?: string | number
    onchange: (e: React.ChangeEvent<HTMLInputElement>) => void
    onblur: (e: React.FocusEvent<HTMLInputElement, Element>) => void
    touched: boolean | undefined | FormikTouched<Date>
    errors: string | undefined | FormikErrors<Date>
    disabled?: boolean
}

export interface TQuartos {
    aprovado: boolean
    create_at: Date
    descricao: string
    disponibilidade: boolean
    id: string
    nome: string
    preco: number
    publicado: boolean
    tipoQuarto: string
    update_at: Date
    utilizadorId: string
}

export interface ICardQuarto {
    id: string
    nome: string
    tipoQuarto: string
    descricao: string
    disponibilidade: boolean
    preco: number
}

export interface ISelect {
    value?: string | number
    onchange: (e: React.ChangeEvent<HTMLSelectElement>) => void
    onblur: (e: React.FocusEvent<HTMLSelectElement, Element>) => void
    touched: boolean | undefined | FormikTouched<Date>
    errors: string | undefined | FormikErrors<Date>
}

export interface IEstruturaObjecto {
    id: string
    nome: string
    foto: string
    achado?: boolean
    perdido?: boolean
    descricao: string
}

export interface IData {
    id: string
    nome: string
    foto: string
    descricao: string
    entregue: boolean
    achado: boolean
    perdido: boolean
    publicado: boolean
    aprovado: boolean,
}

export interface IEstruturaObjecto {
    nome: string
    foto: string
    descricao: string
    achado?: boolean
    perdido?: boolean
}

export interface IDocumentoAchado {
    id: string
    nome: string
    foto: string
    descricao: string
}