import { useState } from "react"
import Router from "./components/Router"
import MenuContext from "./context/MenuContext"

function App() {
  const [toggleMenu, setToggleMenu] = useState(true)

  return (
    <MenuContext.Provider value={{ toggleMenu, setToggleMenu }}>
      <Router />
    </MenuContext.Provider>


  )
}

export default App
