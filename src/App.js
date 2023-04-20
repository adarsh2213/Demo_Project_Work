import {BrowserRouter ,Route, Routes } from "react-router-dom";
import "./App.css";
import Content from "./Components/Content";
import Create from "./Components/Create";
import Header from "./Components/Header";
import Login from "./Components/Login";
import Registration from "./Components/Registration";


function App() {
  return (
    <>
    <BrowserRouter>
    <Header />
   <Routes>

   <Route path="*" element={   <Login/>}></Route>
   <Route path="/login" element={   <Login/>}></Route>
   <Route path="/registration" element={  <Registration/> }></Route>
   <Route path="/content" element={  <Content/> }></Route>

   
   <Route path="/create" element={ <Create />}></Route>
  
 </Routes>
     
    </BrowserRouter>
    
     
     
    </>
  );
}

export default App;
