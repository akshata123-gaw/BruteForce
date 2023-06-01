
import { AppBar, Toolbar, styled } from '@mui/material';
import React from 'react';
import img from '../Assets/Images/wce.jpg';
import './NavBar1.css'


import { NavLink } from 'react-router-dom';



const Header = styled(AppBar)`
    background: primary;
`;

const Tabs = styled(NavLink)`
    color: #FFFFFF;
    margin-right: 20px;
    text-decoration: none;
    font-size: 20px;
`;

const NavBar1 = () => {
    return (
        <div>
            {/* <div className="content"> */}
                <Header position="static">
                    <Toolbar>
                        <Tabs to="./" exact>WCE Placement Portal</Tabs>
                        <Tabs to="/signup" exact>Sign Up</Tabs>
                        <Tabs to="/login" exact>Login</Tabs>
                        {/* <Tabs to="/addappo" exact>Annual Year</Tabs> */}
                        {/* <Tabs to="add" exact>Add student</Tabs> */}
                    </Toolbar>
                </Header>
                
                <div className="image-area">
                <div className="text-overlay">
                <div className="scrolling-text">
                <marquee behavior="scroll" direction="left">
                <h2>Welcome to WCE PLacement Portal! </h2>
                </marquee>
            </div>
                    
                </div>
                {/* <div className="card">Card content goes here sddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd</div> */}
                </div> {/* Container for the full-page image */}
            {/* </div> */}
        </div>
    );
};
{/* <div className="image-area">
        <img className="image" src={img}></img>
</div> */}




export default NavBar1;