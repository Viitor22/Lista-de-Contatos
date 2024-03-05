import BarraLateral from "../../Containers/BarraLateral"
import Header from "../../Containers/Header"
import ListaDeContato from "../../Containers/ListaDeContatos"
import { Secao } from "../../Styles"


const Home = () => {
    return(
        <>
            <Header></Header>
            <Secao>
                <BarraLateral></BarraLateral>
                <ListaDeContato></ListaDeContato>
            </Secao>
        </>
    )
}

export default Home