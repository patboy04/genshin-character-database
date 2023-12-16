import React from 'react'
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom"
import Layout from "./components/Layout.jsx"
import Navbar from './components/Navbar.jsx'
import Home, { loader as characterLoader }from "./pages/Home.jsx"
import Artifact, {loader as artifactLoader} from './pages/Artifact.jsx'
import Weapon, {loader as weaponLoader} from './pages/Weapon.jsx'
import CharacterDetails, { loader as characterDetailsLoader } from "./pages/CharacterDetails.jsx"
import ArtifactDetails, { loader as artifactDetailsLoader } from './pages/ArtifactDetails.jsx'
import Error from "./pages/Error.jsx"


const App = () => {
    const router = createBrowserRouter(createRoutesFromElements(
        <Route path='/' element={<Layout />}>
          <Route path='' element={<Navbar/>}>
            <Route index element={<Home />} loader={characterLoader}/>
            <Route path='artifacts' element={<Artifact />} loader={artifactLoader}/>
            <Route path='weapons' element={<Weapon />} loader={weaponLoader}/>
          </Route>
          <Route path='character' element={<CharacterDetails />} loader={characterDetailsLoader}/>
          <Route path='/artifacts/artifact_details' element={<ArtifactDetails />} loader={artifactDetailsLoader}/>
        </Route>
    ))

  return (
    <RouterProvider router={router}/>
  )
}

export default App