import { useNavigate } from "react-router-dom";
import * as S from "./styles"

const Form = () => {
    const navigate = useNavigate();

    const RotaHome = () => {
        navigate('/')
    }

    return(
        <S.FormDiv>
            <S.FieldSet>
                <S.Legenda><S.TituloCadastro style={{backgroundColor: "#0e0618"}}>Salvar contato</S.TituloCadastro></S.Legenda>
                <S.FormDiv>
                    <S.Input type="nome" placeholder="Nome"/>
                    <S.Input type="telefone" placeholder="Telefone"/>
                    <S.Input type="e-mail" placeholder="E-mail"/>
                    <S.Input type="grupo" placeholder="Grupos"/>
                    <S.BotaoCadastro>Salvar</S.BotaoCadastro>
                    <S.BotaoCadastro onClick={RotaHome}>Cancelar</S.BotaoCadastro>
                </S.FormDiv>
            </S.FieldSet>
        </S.FormDiv>
    )
}

export default Form
