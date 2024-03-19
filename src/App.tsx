import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import EstiloGlobal, {Container } from './Styles'

import NovoCadastro from './Pages/NovoCadastro'
import Home from './Pages/Home'

import store from './Store'
import { Provider } from 'react-redux'

function App() {
  const rotas = createBrowserRouter([
    {
      path: '/',
      element: <Home></Home>
    },
    {
      path: '/novo',
      element: <NovoCadastro></NovoCadastro>
    }
  ])

  return (
    <Provider store = {store}>
      <EstiloGlobal></EstiloGlobal>
      <Container>
        <RouterProvider router={rotas}></RouterProvider>
      </Container>
    </Provider>
  )
}

export default App
