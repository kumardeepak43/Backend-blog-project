import React, { useState } from "react"
import { NavLink } from "react-router-dom";

const Navbar = () => {

    const [isActive, setIsActive] = useState(false);

    const handleClick = event => {
        setIsActive(current => !current);
    };

    return (
        <>
            <div className="headingDiv">
                <p className="the">The</p>
                <h1 class="heading">Siren</h1>
            </div>



            <label className="threeLinesDiv" onClick={handleClick}>
                <div className="threeLines"></div>
                <div className="threeLines"></div>
                <div className="threeLines"></div>
            </label>
            <input type="checkbox" id="threeline"></input>




            <div className='link'>
                <NavLink to="/" className={({ isActive }) => (isActive ? "activeLinksName" : "linksName")}>Home</NavLink>
                <NavLink to="/bollywood" className={({ isActive }) => (isActive ? "activeLinksName" : "linksName")}>Bollywood</NavLink>
                <NavLink to="/technology" className={({ isActive }) => (isActive ? "activeLinksName" : "linksName")}>Technology</NavLink>
                <NavLink to="/hollywood" className={({ isActive }) => (isActive ? "activeLinksName" : "linksName")}>Hollywood </NavLink>
                <NavLink to="/places" className={({ isActive }) => (isActive ? "activeLinksName" : "linksName")}>Places</NavLink>
                <NavLink to="/food" className={({ isActive }) => (isActive ? "activeLinksName" : "linksName")}>Food</NavLink>
            </div>




            <div className={isActive ? 'MQlink' : 'threeline'} onClick={handleClick}>
                <NavLink to="/" className={({ isActive }) => (isActive ? "activeLinksName" : "linksName")}>Home</NavLink>
                <NavLink to="/bollywood" className={({ isActive }) => (isActive ? "activeLinksName" : "linksName")}>Bollywood</NavLink>
                <NavLink to="/technology" className={({ isActive }) => (isActive ? "activeLinksName" : "linksName")}>Technology</NavLink>
                <NavLink to="/hollywood" className={({ isActive }) => (isActive ? "activeLinksName" : "linksName")}>Hollywood </NavLink>
                <NavLink to="/places" className={({ isActive }) => (isActive ? "activeLinksName" : "linksName")}>Places</NavLink>
                <NavLink to="/food" className={({ isActive }) => (isActive ? "activeLinksName" : "linksName")}>Food</NavLink>
            </div>
        </>
    )
}

export default Navbar;