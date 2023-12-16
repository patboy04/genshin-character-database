import React from 'react'
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom"
import Layout from "./components/Layout.jsx"
import Navbar from './components/Navbar.jsx'
import Home, { loader as homeLoader }from "./pages/Home.jsx"
import Artifact from './pages/Artifact.jsx'
import Weapon from './pages/Weapon.jsx'
import CharacterDetails, { loader as characterLoader } from "./pages/CharacterDetails.jsx"
import Error from "./pages/Error.jsx"


const App = () => {
    const router = createBrowserRouter(createRoutesFromElements(
        <Route path='/' element={<Layout />}>
          <Route path='' element={<Navbar/>}>
            <Route index element={<Home />} loader={homeLoader}/>
            <Route path='artifacts' element={<Artifact />}/>
            <Route path='weapons' element={<Weapon />}/>
          </Route>
          <Route path='character' element={<CharacterDetails />} loader={characterLoader}/>
        </Route>
    ))

  return (
    <RouterProvider router={router}/>
  )
}

export default App