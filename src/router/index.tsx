import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AdminCriarPage from '../pages/utilizadoresPage/adminPage/AdminCriarPage'
import AdminAutenticarPage from '../pages/utilizadoresPage/adminPage/AdminAutenticarPage'
import AdminLoginPage from '../pages/utilizadoresPage/adminPage/AdminLoginPage'
import AdminPalavraPasse from '../pages/utilizadoresPage/adminPage/AdminPalavraPasse'
import ClienteCriarPage from '../pages/utilizadoresPage/clientePage/ClienteCriarPage'
import ClienteAutenticarPage from '../pages/utilizadoresPage/clientePage/ClienteAutenticarPage'
import ClienteLoginPage from '../pages/utilizadoresPage/clientePage/ClienteLoginPage'
import ClientePalavraPasse from '../pages/utilizadoresPage/clientePage/ClientePalavraPasse'
import LayoutPage from '../pages/LayoutPage/LayoutPage'
import LayoutDuploPage from '../pages/LayoutDuploPage/LayoutDuploPage'
import LayoutSuitePage from '../pages/LayoutSuitePage/LayoutSuitePage'
import LayoutIndividualPage from '../pages/LayoutIndividualPage/LayoutIndividualPage'
import LayoutReserva from '../components/layout/LayoutReserva/LayoutReserva'
import RotasPrivadasCliente from './RotasPrivadasCliente'
import TabelaReserva from '../components/layout/LayoutReserva/components/TabelaConfirmada'
import ReservaConfirmada from '../components/layout/LayoutReserva/components/ReservaConfirmada'
import TabelaPendente from '../components/layout/LayoutReserva/components/TabelaPendente'
import TabelaTerminada from '../components/layout/LayoutReserva/components/TabelaTerminada'
import TabelaCancelada from '../components/layout/LayoutReserva/components/TabelaCancelada'
import TabelaConfirmada from '../components/layout/LayoutReserva/components/TabelaConfirmada'
import LayoutEditarReserva from '../pages/LayoutEditarReserva/LayoutEditarReserva'
import LayoutDetalheReservaPage from '../pages/LayoutDetalheReservaPage/LayoutDetalheReservaPage'
import LayoutPerfilPage from '../pages/LayoutPerfilPage/LayoutPerfilPage'
import EditarPerfil from '../components/utilizadores/LayoutPerfil/EditarPerfil/EditarPerfil'
import EditarTelefone from '../components/utilizadores/LayoutPerfil/EditarTelefone/EditarTelefone'
import EditarEmail from '../components/utilizadores/LayoutPerfil/EditarEmail/EditarEmail'
import Avaliacao from '../components/utilizadores/LayoutPerfil/Avaliacao'
import PerfilAvaliacao from '../components/utilizadores/LayoutPerfil/PerfilAvaliacao/PerfilAvaliacao'
import LayoutPageSemSessao from '../pages/LayoutPage/LayoutPageSemSessao'
import RotasPrivadasAdmin from './RotasPrivadasAdmin'
import LayoutPageAdmin from '../pages/admin/LayoutPageAdmin/LayoutPageAdmin'
import LayoutPageReservaAdmin from '../pages/admin/LayoutPageReservaAdmin/LayoutPageReservaAdmin'
import LayoutQuartoAdmin from '../pages/admin/LayoutQuartoAdmin/LayoutQuartoAdmin'
import CriarQuarto from '../components/utilizadores/LayoutQuarto/CriarQuarto/CriarQuarto'
import ListarQuartos from '../components/utilizadores/LayoutQuarto/ListarQuartos/ListarQuartos'
import EditarQuarto from '../components/utilizadores/LayoutQuarto/EditarQuarto/EditarQuarto'
import ListarReservasPendentes from '../components/utilizadores/LayoutReserva/ListarReservasPendentes/ListarReservasPendentes'
import ListarReservasTerminadas from '../components/utilizadores/LayoutReserva/ListarReservasTerminadas/ListarReservasTerminadas'
import ListarReservasCanceladas from '../components/utilizadores/LayoutReserva/ListarReservasCanceladas/ListarReservasCanceladas'
import ListarReservasConfirmadas from '../components/utilizadores/LayoutReserva/ListarReservasConfirmadas/ListarReservasConfirmadas'
import LayoutPerfilPageAdmin from '../pages/LayoutPerfilPageAdmin/LayoutPerfilPageAdmin'


function Router() {

    const caminhoPrincipalAdmin = "hospedaria/admin"
    const caminhoPrincipalClinte = "hospedaria/cliente"


    return (
        <Routes>

            {/* admin */}



            <Route
                path={`/${caminhoPrincipalAdmin}/criar`}
                Component={AdminCriarPage}
            />

            <Route
                path={`/${caminhoPrincipalAdmin}/autenticar`}
                Component={AdminAutenticarPage}
            />

            <Route
                path={`/${caminhoPrincipalAdmin}/login`}
                Component={AdminLoginPage}
            />

            <Route
                path={`/${caminhoPrincipalAdmin}/palavrapasse`}
                Component={AdminPalavraPasse}
            />


            {/* Sem sessao */}

            <Route
                path='/hospedaria'
            >

                <Route
                    index
                    Component={LayoutPageSemSessao}
                />

                <Route
                    path={`/hospedaria/suite`}
                    Component={LayoutSuitePage}
                />

                <Route
                    path={`/hospedaria/duplo`}
                    Component={LayoutDuploPage}
                />

                <Route
                    path={`/hospedaria/individual`}
                    Component={LayoutIndividualPage}
                />


            </Route>

            <Route
                path='/hospedaria/admin'
                Component={RotasPrivadasAdmin}
            >

                <Route
                    index
                    Component={LayoutPageAdmin}
                />

                <Route
                    path={`/${caminhoPrincipalAdmin}/perfil`}
                    Component={LayoutPerfilPageAdmin}
                >
                    <Route
                        path='informacao'
                        Component={EditarPerfil}
                    />

                    <Route
                        path='telefone'
                        Component={EditarTelefone}
                    />

                    <Route
                        path='email'
                        Component={EditarEmail}
                    />

                </Route>

                <Route
                    path='/hospedaria/admin/quarto'
                    Component={LayoutQuartoAdmin}
                >

                    <Route
                        path='criar'
                        Component={CriarQuarto}
                    />

                    <Route
                        path='listar'
                        Component={ListarQuartos}
                    />

                    <Route
                        path='editar'
                        Component={EditarQuarto}
                    />

                </Route>

                <Route
                    path='/hospedaria/admin/reserva'
                    Component={LayoutPageReservaAdmin}
                >

                    <Route
                        path='validar'
                        Component={ListarReservasPendentes}
                    />

                    <Route
                        path='confirmadas'
                        Component={ListarReservasConfirmadas}
                    />

                    <Route
                        path='terminadas'
                        Component={ListarReservasTerminadas}
                    />

                    <Route
                        path='canceladas'
                        Component={ListarReservasCanceladas}
                    />

                </Route>




            </Route>

            <Route
                path="/hospedaria/cliente"
                Component={RotasPrivadasCliente}
            >

                <Route
                    index
                    Component={LayoutPage}
                />

                <Route
                    path={`/${caminhoPrincipalClinte}/perfil`}
                    Component={LayoutPerfilPage}
                >
                    <Route
                        path='informacao'
                        Component={EditarPerfil}
                    />

                    <Route
                        path='telefone'
                        Component={EditarTelefone}
                    />

                    <Route
                        path='email'
                        Component={EditarEmail}
                    />

                    <Route
                        path={`avaliacao`}
                        Component={PerfilAvaliacao}
                    />


                </Route>



                <Route
                    path={`/${caminhoPrincipalClinte}/suite`}
                    Component={LayoutSuitePage}
                />

                <Route
                    path={`/${caminhoPrincipalClinte}/duplo`}
                    Component={LayoutDuploPage}
                />

                <Route
                    path={`/${caminhoPrincipalClinte}/individual`}
                    Component={LayoutIndividualPage}
                />



                <Route
                    path={`/${caminhoPrincipalClinte}/reserva`}
                    Component={LayoutReserva}
                >

                    <Route
                        path={`confirmada`}
                        Component={TabelaConfirmada}
                    />

                    <Route
                        path={`pendente`}
                        Component={TabelaPendente}
                    />

                    <Route
                        path={`cancelada`}
                        Component={TabelaCancelada}
                    />


                    <Route
                        path={`terminada`}
                        Component={TabelaTerminada}
                    />

                    <Route
                        path={`/${caminhoPrincipalClinte}/reserva/editar`}
                        Component={LayoutEditarReserva}
                    />

                    <Route
                        path={`/${caminhoPrincipalClinte}/reserva/detalhe`}
                        Component={LayoutDetalheReservaPage}
                    />

                </Route>

            </Route>

            {/* <Route
                path={`/${caminhoPrincipalClinte}`}
                Component={LayoutPage}
            /> */}






            {/* Conta */}

            <Route
                path={`/${caminhoPrincipalClinte}/criar`}
                Component={ClienteCriarPage}
            />

            <Route
                path={`/${caminhoPrincipalClinte}/autenticar`}
                Component={ClienteAutenticarPage}
            />

            <Route
                path={`/${caminhoPrincipalClinte}/login`}
                Component={ClienteLoginPage}
            />

            <Route
                path={`/${caminhoPrincipalClinte}/palavrapasse`}
                Component={ClientePalavraPasse}
            />



        </Routes>
    )
}

export default Router