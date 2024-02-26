import NavHeader from "../../Components/BotaoHeader"
import { Titulo } from "../../Styles"
import { HeaderContainer } from "./styles"

const Header = () => {
    return (
    <HeaderContainer>
        <Titulo>Lista de Contatos</Titulo>
        <div>
            <NavHeader></NavHeader>
        </div>
    </HeaderContainer>
    )
}

export default Header