import React  from "react";
// import Card from "./peges/Card";
// import Edit from "./peges/Edit";
// import Admin, {UserContext} from "./peges/Admin";
// import AdminElt from "./peges/AdminElt";
// import Redurs from "./peges/Redurs";
import Home from "./peges/Home";
import {Routes , Route, NavLink } from 'react-router-dom';
import Navber from "./conponents/Navbar";
 function Add(){ 
        return (
            <>
                
                <Routes>
                    <Route path="/" element={<Navber />} >
                        <Route path="home" element={<Home title='Home' />} />
                        <Route path="about" element={<Home title='about' />} />
                        <Route path="bazz" element={<Home title='bazz' />} />
                        <Route path="link" element={<Home title='link' />} />
                        <Route path="/" element={<Home title='Home' />} />
                    </Route>
                        <Route path="*" element={<div>bu xato   <NavLink to={'/home'}>Home</NavLink></div>} />
                </Routes>
            </>
        );
} 
export default Add;