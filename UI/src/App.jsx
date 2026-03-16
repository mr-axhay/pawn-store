import NavBar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import { Routes , Route } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Logout from "./components/Logout";
import ManageUsers from "./components/Manageusers";
import Categories from "./components/Categories";
import AdminHomePage from "./components/AdminHomePage";
import AddCategory from "./components/AddCategory";
import PaymentButton from "./components/PaymentButton";


function App() {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <NavBar />
      <div className="page-container">
      <Routes>
        <Route path='/' element={<Home />} ></Route>
        <Route path='/register' element={<Register />} ></Route>
        <Route path='/login' element={<Login />} ></Route>
        <Route path='/logout' element={<Logout />} ></Route>
        <Route path='/manageUsers' element={<ManageUsers />} ></Route>
        <Route path='/categories' element={<Categories />} ></Route>
        <Route path='/admin' element={<AdminHomePage />} ></Route>
        <Route path='/addCategory' element={<AddCategory />} ></Route>
        <Route path='/pay' element={<PaymentButton />} ></Route>
        
      </Routes>
      </div>
      {/* <Footer /> */}
    </main>
  );
}

export default App;
