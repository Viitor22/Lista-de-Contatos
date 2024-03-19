import { useState } from "react"
import * as S from "./style"

import ContatoClass from '../../Models/Contato'
import { useDispatch } from "react-redux"
import { editar, remover } from "../../Store/reducers/contato"

type Props = ContatoClass

const Contato = ({id, nome: nomeAntigo, numero: numeroAntigo, email: emailAntigo, grupo: grupoAntigo}: Props) => {
    const dispatch = useDispatch()
    const [EstaEditando, setEstaEditando] = useState(false);
    const [CardAtivo, setCardAtivo] = useState(false);

    const [nome, setNome] = useState(nomeAntigo);
    const [numero, setNumero] = useState(numeroAntigo);
    const [email, setEmail] = useState(emailAntigo);
    const [grupo, setGrupo] = useState(grupoAntigo);

    function cancelarEdicao(){
        setEstaEditando(false);
    } 

    return(
        <S.CardContato className="card">
            {EstaEditando ? (
                <>
                <S.Input value={nome} onChange={({ target }) => setNome(target.value)} type="nome" placeholder="Nome:"/>
                <S.Input value={numero} onChange={({ target }) => setNumero(target.value)} type="telefone" placeholder="Telefone"/>
                <S.Input value={email} onChange={({ target }) => setEmail(target.value)} type="e-mail" placeholder="E-mail"/>
                <S.Input value={grupo} onChange={({ target }) => setGrupo(target.value)} type="grupo" placeholder="Grupo"/>
                <S.BotaoCard onClick={() => {dispatch(editar({
                    nome,
                    numero,
                    email,
                    grupo,
                    id}))
                    cancelarEdicao()
                    }}
                    >Salvar</S.BotaoCard>
                <S.BotaoCard onClick={() => cancelarEdicao()}>Cancelar</S.BotaoCard>
                </>
            ) : (
                <>
                <S.CardPrincipal>
                <S.TituloCard as="h3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
                        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
                    </svg>Nome: {nome}
                </S.TituloCard>
                <S.BotaoExpandir    style={{
                    transform: CardAtivo ? 'rotate(180deg)' : ''
                }} onClick={() => setCardAtivo(!CardAtivo)}>
                    <i className="bi bi-caret-down-fill"></i>
                </S.BotaoExpandir>
                </S.CardPrincipal>
                {CardAtivo ? (
                    <>
                    <S.TextoCard>Número: {numero}</S.TextoCard>
                    <S.TextoCard>Email: {email}</S.TextoCard>
                    <S.TextoCard>Grupo: {grupo}</S.TextoCard>
                    <S.BotaoCard onClick={() => setEstaEditando(true)}>Editar</S.BotaoCard>
                    <S.BotaoCard onClick={() => dispatch(remover(id))}>Remover</S.BotaoCard>
                    </>
                ) : (
                    <>
                    </>
                )
            }
            </>
            )}
        </S.CardContato>
    )
}

export default Contato
