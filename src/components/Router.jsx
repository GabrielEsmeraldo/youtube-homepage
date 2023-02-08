import { BrowserRouter, Route, Routes } from "react-router-dom"

import Home from '../pages/Home'
import Contact from '../pages/Contact'

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/contact" element={<Contact />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router