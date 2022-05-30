import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import AddPorduct from './Pages/AddPorduct/AddPorduct';
import FeedBack from "./Pages/Feedback/FeedBack";
import Usear from "./Pages/Usear/Usear";
import Sales from "./Pages/Sales/Sales";
import Product from "./Pages/Products/Product";
import Massages from "./Pages/Massages/Massages";
import Manage from "./Pages/Manage/Manage";





function App() {
  
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/addProduct" element={<AddPorduct/>}/>
        <Route path="/sales" element={<Sales/>}/>

        {/* Quick Menu */}
        <Route path="/user" element={<Usear/>}/>        
        <Route path="/products" element={<Product/>}/>

        {/* Notifications */}
       
        <Route path="/feedback" element={<FeedBack/>}/>
        <Route path="/messages" element={<Massages/>}/>
       
        {/* Staf */}
        <Route path="/manage" element={<Manage/>}/>

      </Routes>
  
    </div>
  );
}

export default App;