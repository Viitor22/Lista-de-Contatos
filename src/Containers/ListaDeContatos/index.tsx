import Contato from "../../Components/Contato"
import { Titulo } from "../../Styles"
import { MainContainer } from "./styles"

import { useSelector} from "react-redux";
import { RootReducer } from "../../Store";


const ListaDeContato = () => {
    const {itens, ordenar} = useSelector((state: RootReducer) => state.contato)
    const {termo} = useSelector((state: RootReducer) => state.busca)

    const filtraContatos = () => {
        return itens.filter(item => item.nome.toLowerCase().search(termo.toLowerCase()) >= 0)
    }

    const contatosOrdenados = filtraContatos().sort((a, b)=> a.nome.localeCompare(b.nome));

    const contatosFltrados = contatosOrdenados;

    return(
        <MainContainer>
            <Titulo>Contatos:</Titulo>
            {ordenar ? (
            <>
            <ul>
                {contatosFltrados.map((c)=>(
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