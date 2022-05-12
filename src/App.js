import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Pages/About/About";
import Appoinment from "./Pages/Appoinment/Appoinment";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Login/Register";
import RequireAuth from "./Pages/Login/RequireAuth";
import Navbar from "./Pages/Shared/Navbar";

function App() {
  return (
    <div className="max-w-[2000px] mx-auto">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route
          path="/appoinment"
          element={
            <RequireAuth>
              <Appoinment></Appoinment>
            </RequireAuth>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
