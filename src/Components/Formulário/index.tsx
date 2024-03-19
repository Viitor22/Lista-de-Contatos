import { useNavigate } from "react-router-dom";
import * as S from "./styles"
import { cadastrar } from "../../Store/reducers/contato";
import { useDispatch } from "react-redux";
import { FormEvent, useState } from "react";

const Form = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const [nome, setNome] = useState('');
    const [numero, setNumero] = useState('');
    const [email, setEmail] = useState('');
    const [grupo, setGrupo] = useState('');

    const RotaHome = () => {
        navigate('/')
    }

    const cadastrarNumero = (evento: FormEvent) => {
        evento.preventDefault()
        dispatch(cadastrar({ nome, numero, email, grupo}))
        navigate('/')
    }

    return(
        <S.FormDiv>
            <S.FieldSet>
                <S.Legenda><S.TituloCadastro style={{backgroundColor: "#0e0618"}}>Salvar contato</S.TituloCadastro></S.Legenda>
                <S.FormDiv>
                    <S.Input value={nome} onChange={({ target }) => setNome(target.value)} type="nome" placeholder="Nome"/>
                    <S.Input value={numero} onChange={({ target }) => setNumero(target.value)} type="telefone" placeholder="Telefone"/>
                    <S.Input value={email} onChange={({ target }) => setEmail(target.value)} type="e-mail" placeholder="E-mail"/>
                    <S.Input value={grupo} onChange={({ target }) => setGrupo(target.value)} type="grupo" placeholder="Grupos"/>
                    <S.BotaoCadastro onClick={cadastrarNumero} type="submit">Salvar</S.BotaoCadastro>
                    <S.BotaoCadastro onClick={RotaHome}>Cancelar</S.BotaoCadastro>
                </S.FormDiv>
            </S.FieldSet>
        </S.FormDiv>
    )
}

export default Form
