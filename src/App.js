import { Routes, Route } from "react-router-dom";
import Main from "./pages/userpage/Main";
import "./App.css";
import Login from "./components/log/Login";
import Registration from "./components/registration/Registration";
import Contact from "./pages/contact/Contact";
import Products from "./pages/products/Products";
import Aboutus from "./pages/aboutus/Aboutus";

function App() {
  return (
    <div className="App">
    
      <Routes>
      <Route path="/main" element={<Main/>} />
      <Route path="/registration" element={<Registration/>}/>
      <Route path='/products' element={<Products/>}/>
      <Route path='/aboutus' element={<Aboutus/>}/>
      <Route path='/contact' element={<Contact/>}/>
       <Route path="/" element={<Login />} />
       <Route path="*" element={<h1>404 : page not found</h1>} />
         
        
      </Routes>
    </div>
  );
}

export default App;
