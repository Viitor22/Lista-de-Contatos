import { configureStore } from '@reduxjs/toolkit'
import contatoReducer from './reducers/contato'
import buscaReducer from './reducers/busca'

const store = configureStore({
    reducer: {
        contato: contatoReducer,
        busca: buscaReducer,
    }
})

export type RootReducer = ReturnType<typeof store.getState>

export default store
