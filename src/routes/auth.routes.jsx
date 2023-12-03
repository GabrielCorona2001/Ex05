import {Routes, Route} from 'react-router-dom'

import { Home } from "../pages/home/index"
import { Destiny } from "../pages/destinos/index"

export function AuthRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/destino' element={<Destiny />}></Route>
        </Routes>
    )
}