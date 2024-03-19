import { useNavigate } from 'react-router-dom';
import * as S from './style.ts'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootReducer } from '../../Store/index.ts';
import { buscar } from '../../Store/reducers/busca.ts';
import { ordemAlfabetica, removerTUDO, setOrdenar } from '../../Store/reducers/contato.ts';

const NavHeader = () => {
    const dispatch = useDispatch()
    const {termo} = useSelector((state: RootReducer) => state.busca);
    const { itens, ordenar} = useSelector((state: RootReducer) => state.contato)

    const [BotaoPesquisaAtivo, setBotaoPesquisaAtivo] = useState(false);
    const [BotaoEditarAtivo, setBotaoEditarAtivo] = useState(false);
    const [BotaoOrdenarAtivo, setBotaoOrdenarAtivo] = useState(false);
    const navigate = useNavigate();

    ordenar === BotaoOrdenarAtivo;

    const RotaCadastro = () => {
        navigate('/novo')
    }

    const filtraContatos = () => {
        return itens.filter(item => item.nome.toLowerCase().search(termo.toLowerCase()) >= 0)
    }

    const nomes = () => {
        let nomes = filtraContatos().map((c)=>(c.nome.toLowerCase()))
        return nomes.sort()
    }

    return (
    <S.nav role="navigation">
        <ul>
            <S.li>
                <S.button onClick={RotaCadastro}>
                    <span className="inner"></span>
                    <i className="bi bi-plus-square"></i>
                </S.button>
            </S.li>
            <S.li>
                <S.button onClick={() => setBotaoPesquisaAtivo(!BotaoPesquisaAtivo)} href="#Pesquisar">
                    <span style={{
                        height:  BotaoPesquisaAtivo ? '56px' : '',
                        marginLeft: BotaoPesquisaAtivo ? '-28px' : '',
                        marginTop: BotaoPesquisaAtivo ? '-28px' : '',
                        width: BotaoPesquisaAtivo ? '56px' : '',
                        transition: '0.4s ease;'
                    }} className="inner"></span>
                    <i style={{
                    backgroundColor: BotaoPesquisaAtivo ? '#fff':'',
                    color: BotaoPesquisaAtivo ? '#141516':'',
                    transition: '0.4s ease;'
                }} className="bi bi-search"></i>
                </S.button>
            </S.li>
            {BotaoPesquisaAtivo ? (
                <S.li>
                    <S.BarraPesquisa className="container">
                        <input placeholder='Buscar...' className='js-search' type="text" value={termo} onChange={evento => dispatch(buscar(evento.target.value))}/>
                    </S.BarraPesquisa>
                </S.li>
                    
                ) : (
                    <></>
                )}
            <S.li>
                <S.button onClick={() => setBotaoEditarAtivo(!BotaoEditarAtivo)} href="#Editar">
                    <span style={{
                        height:  BotaoEditarAtivo ? '56px' : '',
                        marginLeft: BotaoEditarAtivo ? '-28px' : '',
                        marginTop: BotaoEditarAtivo ? '-28px' : '',
                        width: BotaoEditarAtivo ? '56px' : '',
                        transition: '0.4s ease;'
                    }} className="inner"></span>
                    <i style={{
                    backgroundColor: BotaoEditarAtivo ? '#fff':'',
                    color: BotaoEditarAtivo ? '#141516':'',
                    transition: '0.4s ease;'
                }}  className="bi bi-pencil"></i>
                </S.button>
                {BotaoEditarAtivo ? (
                    <>
                    <S.Arrow></S.Arrow>
                    <S.MenuEditar>
                        <a onClick={() => {dispatch(ordemAlfabetica(nomes())), dispatch(setOrdenar(ordenar)), setBotaoOrdenarAtivo(!BotaoOrdenarAtivo)}}>Organizar <i className="bi bi-alphabet-uppercase"></i></a>
                        <a onClick={() => dispatch(removerTUDO())}>Deletar Lista <i className="bi bi-trash"></i></a>
                        <a href='https://github.com/Viitor22/Lista-de-Contatos'>Compartilhar <i className="bi bi-share"></i></a>
                    </S.MenuEditar>
                    </>
                ) : (
                    <></>
                )}
            </S.li>
        </ul>
    </S.nav>
    )
} 

export default NavHeader
