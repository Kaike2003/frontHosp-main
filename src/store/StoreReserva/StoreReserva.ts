import { create } from "zustand"

interface IStoreRota {
    reservaID: string
    quartoID: string
}


type Action = {
    setReservaId: (reservaID: IStoreRota["reservaID"], quartoID: IStoreRota["quartoID"]) => void
}


export const useStoreReserva = create<IStoreRota & Action>((set, get) => (
    {
        reservaID: "",
        quartoID: "",
        setReservaId: (reservaID, quartoID) => set(() => ({ reservaID: reservaID, quartoID: quartoID }))
    }
))


