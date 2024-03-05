import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import EstiloGlobal, {Container } from './Styles'

import NovoCadastro from './Pages/NovoCadastro'
import Home from './Pages/Home'

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
    <>
    <EstiloGlobal></EstiloGlobal>
    <Container>
      <RouterProvider router={rotas}></RouterProvider>
    </Container>
    </>
  )
}

export default App
