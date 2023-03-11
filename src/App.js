import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./PageComponent/MainPage";
import RegisterPage from "./PageComponent/RegisterPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
