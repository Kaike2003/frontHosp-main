import React, { useCallback, useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';
import { api } from '../../../../services/api/getToken';
import { TQuartos } from '../../../../interface';
import CardQuarto from '../../components/CardQuarto/CardQuarto';
import "../../../../index.css"
import { useStoreAtualizar } from '../../../../store/StoreAtualizar/StoreAtualizar';

function ScrollIndividual() {

    const [data, setData] = useState([])
    const [limite, setLimite] = useState(12)
    const [atualizar] = useStoreAtualizar((state) => [state.atualizar])

    const callBack = useCallback(async () => {

        await api.get(`/publico/listarTodosQuartoIndividuas/20`).then((res) => {
            setData(res.data)
        }).catch((error) => {
            console.log(error)
        })

    }, [])

    useEffect(() => {
        callBack()
    }, [callBack, atualizar])

    const fetchMoreData = async () => {
        alert("funcionando")
        await api.get(`/publico/listarTodosQuartoIndividuas/${limite}`).then((res) => {
            setData(res.data)
            setLimite(limite + 10)
        }).catch((error) => {
            console.log(error)
        })
    }

    console.log(data)

    return (
        <div>
            <div className='h-36'></div>
            <div
                id="scrollableDiv"
                style={{
                    height: 580,
                    overflow: 'auto',
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                {/*Put the scroll bar always on the bottom*/}
                <InfiniteScroll
                    className='elementoInfiniteScroll'
                    dataLength={data.length}
                    next={fetchMoreData}
                    style={{
                        // display: 'flex',
                        // flexDirection: 'row',
                        // alignItems: "center",
                        // justifyContent: "center",
                        // flexWrap: "wrap"
                    }}  //To put endMessage and loader to the top.
                    inverse={true} //
                    hasMore={true}
                    loader={<h4>Loading...</h4>}
                    scrollableTarget="scrollableDiv"
                >

                    {data.map(({ id, tipoQuarto, preco, descricao, disponibilidade, nome }: TQuartos, index) => {
                        return (
                            <div>
                                <React.Fragment>
                                    <div className="p-4 md:w-full sm:w-1/2 w-full">
                                        <CardQuarto
                                            descricao={descricao}
                                            disponibilidade={disponibilidade}
                                            id={id}
                                            nome={nome}
                                            preco={preco}
                                            tipoQuarto={tipoQuarto}
                                            key={id}
                                        />
                                    </div>
                                </React.Fragment>
                            </div>
                        )
                    })}

                </InfiniteScroll>
            </div>
        </div >
    )
}

export default ScrollIndividual