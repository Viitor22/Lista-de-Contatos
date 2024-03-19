import Contato from "../../Components/Contato"
import { Titulo } from "../../Styles"
import { MainContainer } from "./styles"

import {useDispatch, useSelector} from "react-redux";
import { RootReducer } from "../../Store";
import { ordemAlfabetica } from "../../Store/reducers/contato";


const ListaDeContato = () => {
    const dispatch = useDispatch()
    const {itens, ordenar} = useSelector((state: RootReducer) => state.contato)
    const {termo} = useSelector((state: RootReducer) => state.busca)

    const filtraContatos = () => {
        return itens.filter(item => item.nome.toLowerCase().search(termo.toLowerCase()) >= 0)
    }

    return(
        <MainContainer>
            <Titulo>Contatos:</Titulo>
            {ordenar ? (
            <>
            <ul>
                {filtraContatos().map((c)=>(
                    <li key={c.id}>
                        <Contato 
                        id={c.id}
                        nome={c.nome}
                        numero={c.numero}
                        email={c.email}
                        grupo={c.grupo}>
                        </Contato>
                    </li>
                ))}
            </ul>
            </>) : (
            <>
            <ul>
                {filtraContatos().map((c)=>(
                    <li key={c.id}>
                        <Contato 
                        id={c.id}
                        nome={c.nome}
                        numero={c.numero}
                        email={c.email}
                        grupo={c.grupo}>
                        </Contato>
                    </li>
                ))}
            </ul>
            </>)}
        </MainContainer>
    )
}

export default ListaDeContato