import { create } from "zustand";


interface IStoreRota {
    rota: string
}

type TAction = {
    setRota: (rota: IStoreRota["rota"]) => void
}


export const useStoreRota = create<IStoreRota & TAction>()((set, get) => (
    {
        rota: "",
        setRota: (rota) => set(() => ({ rota: rota }))
    }
))