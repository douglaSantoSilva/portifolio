import { Routes, Route } from 'react-router-dom'

import { Home } from '../pages/Home'
import { Projects } from '../pages/Projects'
import { Technology } from '../pages/Technology'

export function AppRoutes(){ 
  return(
    <Routes>
      <Route path='/'  element={<Home />}/>
      <Route path='/projetos'  element={<Projects />}/>
      <Route path='/tecnologias'  element={<Technology />}/>
    </Routes>
  )
}