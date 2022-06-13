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
import OrderList from "./Pages/OrderList/OrderList"
import Profile from "./Pages/Profile/Profile";





function App() {
  
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/addProduct" element={<AddPorduct/>}/>
        <Route path="/sales" element={<Sales/>}/>
        <Route path="/user " element={<Usear/>}/>        
        <Route path="/products" element={<Product/>}/>
        {/* Quick Menu */}
        

        {/* Notifications */}  
        <Route path="/feedback" element={<FeedBack/>}/>
        <Route path="/messages" element={<Massages/>}/>
        
       
        {/* Staf */}
        <Route path="/orderList" element={<OrderList/>}/>
        <Route path="/settings/profile" element={<Profile/>}/>
       

      </Routes>
  
    </div>
  );
}

export default App;