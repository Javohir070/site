import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
function Navber(props) {
    return (
        <div>
            <ul>
                <li>
                 <NavLink to={'/home'}>Home</NavLink>   
                </li>
                <li>
                 <NavLink to={'/about'}>About</NavLink>   
                </li>
                <li>
                 <NavLink to={'/bazz'}>Bazz</NavLink>   
                </li>
                <li>
                 <NavLink to={'/link'}>Link</NavLink>   
                </li>
            </ul>
            <Outlet />
        </div>
    );
}

export default Navber;