import { Botao, Titulo } from "../../Styles"
import { Input } from "./styles"

const Form = () => {

    return(
        <form>
            <Titulo as="h3">Salvar novo contato</Titulo>
            <Input type="nome" placeholder="Nome"/>
            <Input type="telefone" placeholder="Telefone"/>
            <Input type="e-mail" placeholder="E-mail"/>
            <Input type="grupo" placeholder="Grupos"/>
            <Botao>Salvar</Botao>
            <Botao>Cancelar</Botao>
        </form>
    )
}

export default Form
