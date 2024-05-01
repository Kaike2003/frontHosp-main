import { create } from "zustand"

interface IStoreRotaStoreModalAchado {
    abrir: boolean
}


type Action = {
    abrirModal: (abrir: IStoreRotaStoreModalAchado["abrir"]) => void
    fecharModal: (abrir: IStoreRotaStoreModalAchado["abrir"]) => void
}

export const useStoreModal = create<IStoreRotaStoreModalAchado & Action>((set, get) => (
    {
        abrir: false,
        abrirModal: (abrir) => set(() => ({ abrir: true })),
        fecharModal: (abrir) => set(() => ({ abrir: false })),
    }
))


