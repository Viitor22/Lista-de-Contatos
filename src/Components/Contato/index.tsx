import { Botao } from "../../Styles"
import { CardContato, TextoCard, TituloCard, BotaoExpandir, CardPrincipal} from "./style"

const Contato = () => {

    return(
        <CardContato className="card">
            <CardPrincipal>
                <TituloCard as="h3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
                        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
                    </svg> Nome: Vitor
                </TituloCard>
                <BotaoExpandir>
                    <i className="bi bi-caret-down-fill"></i>
                </BotaoExpandir>
            </CardPrincipal>
            <TextoCard>Número: 83 991759887</TextoCard>
            <TextoCard>Email: kaskdkas@gmail.com</TextoCard>
            <Botao>Editar</Botao>
            <Botao>Remover</Botao>
            <Botao>Salvar</Botao>
            <Botao>Cancelar</Botao>
        </CardContato>
    )
}

export default Contato
