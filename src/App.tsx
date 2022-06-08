import { BrowserRouter, Route, Routes } from "react-router-dom"
import Characters from "./layouts/Characters"
import DetailedCharacter from "./layouts/DetailedCharacter"

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Characters />} />
          <Route path="/DetailedCharacter/:id" element={<DetailedCharacter />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
