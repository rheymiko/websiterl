import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Materi from "./Materi";
import Simulasi from "./Simulasi";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/simulasi" element={<Simulasi />}></Route>
        <Route path="/materi" element={<Materi />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
