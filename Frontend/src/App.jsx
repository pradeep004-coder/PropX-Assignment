import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Signup from './Components/Signup';
import Login from './Components/Login';
import Account from './Components/Account';
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
