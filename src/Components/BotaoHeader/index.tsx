import * as S from './style.ts'

const NavHeader = () => {
    return (
    <S.nav role="navigation">
        <ul>
            <S.li>
                <S.button href="#Adicionar">
                    <span className="inner"></span>
                    <i className="bi bi-plus-square"></i>
                </S.button>
            </S.li>
            <S.li>
                <S.button href="#Pesquisar">
                    <span className="inner"></span>
                    <i className="bi bi-search"></i>
                </S.button>
            </S.li>
            <S.li>
                <S.button href="#Editar">
                    <span className="inner"></span>
                    <i className="bi bi-pencil"></i>
                </S.button>
            </S.li>
        </ul>
    </S.nav>
    )
} 

export default NavHeader
