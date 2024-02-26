import Contato from "../../Components/Contato"
import { Titulo } from "../../Styles"
import { MainContainer } from "./styles"


const ListaDeContato = () => {
    return(
        <MainContainer>
            <Titulo>Contatos:</Titulo>
            <ul>
                <li>
                    <Contato></Contato>
                </li>
                <li>
                    <Contato></Contato>
                </li>
                <li>
                    <Contato></Contato>
                </li>
                <li>
                    <Contato></Contato>
                </li>
                <li>
                    <Contato></Contato>
                </li>
            </ul>
        </MainContainer>
    )
}

export default ListaDeContato