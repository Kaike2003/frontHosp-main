import { create } from "zustand";


interface IStoreAtualizar {
    atualizar: boolean
}

type TAction = {
    setAtualizar: (atualizar: IStoreAtualizar["atualizar"]) => void
}


export const useStoreAtualizar = create<IStoreAtualizar & TAction>()((set, get) => (
    {
        atualizar: false,
        setAtualizar: (atualizar) => set(() => ({ atualizar: atualizar }))
    }
))