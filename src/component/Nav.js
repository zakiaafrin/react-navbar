import React from 'react';
// import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const style = {
    color: 'black',
    fontWeight: 'bold'
}

const Nav = () => {
    return (
        <nav>
            {/* <a href='/'>Home</a>
            <a href='/about'>About</a>
            <a href='/contact'>Contact</a>
            <a href='/AxiosFormApp'>AxiosFormApp</a> */}

            {/* <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/contact'>Contact</Link>
            <Link to='/AxiosFormApp'>AxiosFormApp</Link> */}

            <NavLink exact activeStyle={style} to='/'>Home </NavLink>
            <NavLink activeStyle={style} to='/about'> About </NavLink>
            <NavLink activeStyle={style} to='/contact'> Contact </NavLink>
            <NavLink activeStyle={style} to='/AxiosFormApp'> AxiosFormApp </NavLink>
        </nav>
    )
}

export default Nav