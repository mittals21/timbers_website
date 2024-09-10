import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import AddInventory from "./pages/addInventoryRecords/AddInventory"

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AddInventory/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
