import { create } from "zustand";


interface IStoreQuarto {
    quartoId: string
}

type TAction = {
    setQuartoId: (quartoId: IStoreQuarto["quartoId"]) => void
}


export const useStoreQuartoId = create<IStoreQuarto & TAction>()((set, get) => (
    {
        quartoId: "",
        setQuartoId: (quartoId) => set(() => ({ quartoId: quartoId }))
    }
))