import { BrowserRouter, Route, Routes } from "react-router-dom"
import DetailedCharacter from "./layouts/DetailedCharacter"
import Characters from "./layouts/Characters"

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
