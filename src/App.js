import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from './Components/Navbar';
import LoginPage from "./Components/LoginPage";
import Hero from './Components/Hero';
import SplitPdf from "./Components/SplitPdf";
import MergePdf from "./Components/MergePdf";
import CompressPdf from "./Components/CompressPdf";
import SignUpPage from "./Components/SignUpPage";
import EditPdf from "./Components/EditPdf";


function App() {
  
  return (
    
  <>
  <BrowserRouter>
  <Navbar/>
  <Routes>
  <Route path="/" element={<Hero/>}/>
  <Route path="/MergePdf" element={<MergePdf/>} />
  <Route path="/SplitPdf" element={<SplitPdf/>} />
  <Route path="/CompressPdf" element={<CompressPdf/>} />
  <Route path="/LoginPage" element={<LoginPage/>}/>
  <Route path="/SignUpPage" element={<SignUpPage/>}/>

  </Routes>
  
 </BrowserRouter>
 <EditPdf/>
  </>
  );
}

export default App;
