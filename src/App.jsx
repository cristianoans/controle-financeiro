import CadastroUsuario from "./pages/CadastroUsuario/CadastroUsuario";
import { Home } from "./pages/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Root } from "./pages/Root/Root";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Root />}>
                        <Route path="/" element={<Home />} />
                    </Route>
                    {/* <Route path="/login" element={<Login />}/> */}
                    <Route path="/cadastro" element={<CadastroUsuario />}/>
                </Routes>
            </BrowserRouter>
            <Toaster />
        </div>
  );
}

export default App;
