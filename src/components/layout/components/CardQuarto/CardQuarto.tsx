import React from 'react'
import { ICardQuarto } from '../../../../interface'
import "../../../../index.css"
import { useStoreQuarto } from '../../../../store/StoreQuarto/StoreQuarto'
import { useStoreModal } from '../../../../store/StoreModal/StoreModal'

function CardQuarto({ id, disponibilidade, nome, preco, tipoQuarto, descricao }: ICardQuarto) {

    const [setQuarto] = useStoreQuarto((state) => [state.setQuarto])
    const [abrirModal] = useStoreModal((state) => [state.abrirModal])

    return (
        <div key={id}>
            <div
                key={id}
                onClick={() => {
                    abrirModal(true)
                    setQuarto(id)
                }}
                className='break-inside relative overflow-hidden flex flex-col justify-between space-y-3 text-sm rounded-xl max-w-[20rem] mb-4 bg-blue-100 text-black dark:bg-slate-800 dark:text-white cursor-pointer'>
                <div className='flex items-center justify-between font-medium p-4'>
                    <span className='uppercase text-xs'>
                        <div
                            className='uppercase text-xs flex flex-row items-center space-bw'
                        >
                            <div className='text-green-500'>
                                {tipoQuarto} - {nome}
                            </div>

                        </div>
                    </span>
                    <span>
                        <div>
                            {disponibilidade === true ? <div className='text-green-500 flex uppercase text-xs'>
                                Sim
                            </div> :
                                <div className='text-red-500 flex uppercase text-xs'>
                                    Não
                                </div>
                            }
                        </div>
                    </span>
                    <span className='text-xs text-slate-500'>{preco}kz/dia</span>
                </div>
                <div className='px-4 flex flex-row items-center space-x-3'>

                    <span className='text-base font-medium 
        
                limitarLetras'>{descricao}</span>
                </div>
                <div className='flex justify-between items-center'>
                    <img
                        className='imgObjectoPerdido rounded-xl'
                        src={require(`../../../../assets/${tipoQuarto}.jpg`)}
                        alt={descricao}
                    />
                </div>
            </div >
        </div>
    )
}

export default CardQuarto