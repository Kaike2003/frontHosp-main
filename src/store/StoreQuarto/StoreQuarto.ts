import { create } from "zustand";


interface IStoreQuarto {
    quarto: string
}

type TAction = {
    setQuarto: (atualizar: IStoreQuarto["quarto"]) => void
}


export const useStoreQuarto = create<IStoreQuarto & TAction>()((set, get) => (
    {
        quarto: "",
        setQuarto: (quarto) => set(() => ({ quarto: quarto }))
    }
))