import { useNavigate } from "react-router-dom";
import { Botao, Texto, Titulo } from "../../Styles"
import { Aside } from "./style"


const BarraLateral = () => {
    const navigate = useNavigate();

    const RotaCadastro = () => {
        navigate('/novo')
    }

    return (
        <Aside>
            <Titulo as="h2">
            Adicione e cadastre números de telefone online e gratuitamente
            </Titulo>
            <Texto>Um modelo gratuito para criar uma lista telefônica com contatos para você, seu escritório ou associação de proprietários. Mais do que uma simples compilação de números de telefone, este modelo é projetado para ser um aliado eficaz na gestão de suas conexões. Ao utilizá-lo, você não apenas cria uma lista funcional, mas também estabelece uma ferramenta dinâmica para manter o registro de relações importantes ao longo do tempo. Adicione um novo número já!!!</Texto>
            <Botao onClick={RotaCadastro}>Adicionar novo número</Botao>
        </Aside>
    )
}

export default BarraLateral

