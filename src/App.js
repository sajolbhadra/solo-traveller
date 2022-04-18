import { Route,  Routes } from 'react-router-dom';
import './App.css';
import AboutUs from './Pages/Aboutus/AboutUs';
import Blog from './Pages/Blog/Blog';
import ContactUs from './Pages/ContactUs/ContactUs';
import Destinations from './Pages/Destinations/Destinations';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login/Login';
import NotFound from './Pages/NotFound/NotFound';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/destinations' element={<Destinations></Destinations>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/about-us' element={<AboutUs></AboutUs>}></Route>
        <Route path='/contact-us' element={<ContactUs></ContactUs>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Login></Login>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
