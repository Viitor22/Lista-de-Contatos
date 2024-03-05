import * as S from "./style"

const Contato = () => {
    return(
        <S.CardContato className="card">
            <S.CardPrincipal>
                <S.TituloCard as="h3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
                        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
                    </svg> Nome: Vitor
                </S.TituloCard>
                <S.BotaoExpandir>
                    <i className="bi bi-caret-down-fill"></i>
                </S.BotaoExpandir>
            </S.CardPrincipal>
            <S.TextoCard>Número: 83 991759887</S.TextoCard>
            <S.TextoCard>Email: kaskdkas@gmail.com</S.TextoCard>
            <S.BotaoCard>Editar</S.BotaoCard>
            <S.BotaoCard>Remover</S.BotaoCard>
        </S.CardContato>
    )
}

export default Contato
