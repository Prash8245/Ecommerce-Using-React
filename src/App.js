import './App.css';
import React,{useState} from 'react';
import NavBar from './components/NavBar.js';
import Main from './components/Main.js';
import Home from './components/Home';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import { Addalert } from './components/context/alertContext';
// import Contentclass from './components/contentClass';

import all from './components/Api/all.json';
import electronics from './components/Api/electronic.json';
import jewelery from './components/Api/jewelery.json';
import mens from './components/Api/mens.json';
import womens from './components/Api/women.json';
import access from './components/Api/accessories.json';
import decoration from './components/Api/decoration.json';
import Content  from './components/content';
import Products from './components/Product';
import Cart from './components/Cart';

function App() {
  const [alertShow, SetalertShow] = useState(false);

  return (
    <div className="App">
      <Addalert.Provider value={{alertShow,SetalertShow}} >
        <NavBar/>
        {/* <Contentclass category="" /> */}
          <Routes>
          <Route exact path="" key="navHome" element={<Home/>} />
            <Route exact path="/home" key="Home" element={<Home/>} />

            <Route path="/main" key="navMain" element={<Main comp={<Content key="all" data={all}/>}/>} />
            <Route path="/all" key="allData" element={<Main comp={<Content key="all" data={all}/>}/>} />
            <Route path="/electronic" key="catelec" element={<Main comp={<Content key="electronics" data={electronics}/>}/>} />
            <Route path="/jewelery" key="catJewel" element={<Main comp={<Content key="jewel" data={jewelery}/>}/>} />
            <Route path="/mens" key="catMens" element={<Main comp={<Content key="men" data={mens}/>}/>} />
            <Route path="/womens" key="catWomens" element={<Main comp={<Content key="women" data={womens}/>}/>} />
            <Route path="/access" key="catAccess" element={<Main comp={<Content key="access" data={access}/>}/>} />
            <Route path="/decor" key="catDecor" element={<Main comp={<Content key="decor" data={decoration}/>}/>} />
            
            <Route path="/product" key="products" element={<Products />} />
            <Route path="/cart" key="Cart" element={<Cart />} />
          </Routes>
        <Footer/>
      </Addalert.Provider>
      
    </div>
  );
}

export default App;
