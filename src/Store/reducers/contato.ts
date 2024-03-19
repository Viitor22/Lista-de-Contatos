import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Contato from "../../Models/Contato";

type ContatoState = {
    itens: Contato[],
    ordenar: boolean
}

const initialState: ContatoState = {
    itens: [
        {
            id: 1,
            nome: 'Vitor',
            numero: '83991759887',
            email: 'iajdask@gmail.com',
            grupo: 'Família',
        }
    ],
    ordenar: false,
}

const contatoSlice = createSlice({
    name: "contato",
    initialState,
    reducers: {
        remover: (state, action: PayloadAction<number>) => {
            state.itens = [
                ...state.itens.filter((contato) => contato.id !== action.payload)
            ]
        },
        editar: (state, action: PayloadAction<Contato>) => {
            const indexContato = state.itens.findIndex((c) => c.id === action.payload.id)

            if (indexContato >= 0) {
                state.itens[indexContato] = action.payload
            }
        },
        cadastrar: (state, action: PayloadAction<Omit<Contato, 'id'>>) => {
            const ContatoExiste = state.itens.find(Contato => Contato.nome === action.payload.nome)

            if (ContatoExiste) {
                alert("Já existe um contato com esse nome")
            } else {
                const ultimoContato = state.itens[state.itens.length - 1]

                const ContatoNovo = {
                    ...action.payload,
                    id: ultimoContato ? ultimoContato.id + 1 : 1
                }
                state.itens.push(ContatoNovo)
            }
        },

        removerTUDO: (state) => {
            for (let i = 0; i < state.itens.length; i++) {
                state.itens.splice(i)
            }
        },

        setOrdenar: (state, action: PayloadAction<boolean>) => {
            state.ordenar = action.payload
        }
    }
})

export const { remover, editar, cadastrar, removerTUDO, setOrdenar} = contatoSlice.actions

export default contatoSlice.reducer