import EstiloGlobal, {Container, Secao } from './Styles'
import Header from "./Containers/Header"
import Cadastro from './Containers/Cadastro'
import BarraLateral from './Containers/BarraLateral'
import ListaDeContato from './Containers/ListaDeContatos'

function App() {

  return (
    <>
    <EstiloGlobal></EstiloGlobal>
    <Container>
      <Header></Header>
      <Secao>
        <BarraLateral></BarraLateral>
        <ListaDeContato></ListaDeContato>
      </Secao>
      <Cadastro></Cadastro>
    </Container>
    </>
  )
}

export default App
