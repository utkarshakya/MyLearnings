import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router";
import Home from "./src/Home";
import About from "./src/About";
import Contact from "./src/Contact";
import NotFound from "./src/404";
import Auth from "./src/Auth";
import Register from "./src/Register";
import Login from "./src/Login";

function App() {
  return (
    <>
    <BrowserRouter>
        <Link to={"/"}>Home </Link>
        <Link to={"/about"}>About </Link>
        <Link to={"/contact"}>Contact </Link>
        <Link to={"/auth"}>Auth</Link>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/contact" element={<Contact />}/>
            <Route path="/*" element={<NotFound />}/>
            <Route path="/auth">
                <Route index element={<Auth />} />
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />
            </Route>
        </Routes>
    </BrowserRouter>
    </>
  )
}

ReactDOM.createRoot(document.getElementById("root")).render(<App></App>);
