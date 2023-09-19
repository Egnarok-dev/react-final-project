import React from 'react';
import { Link } from 'react-router-dom';
import style from '../styles/header.module.css'

const Navigation = () => {
    return (
        <div>
            <ul className={style.nav_header}>
                    <li>
                        <Link to="/" className={style.nav_link}>Home</Link>
                    </li>
                    <li>
                        <Link to="/menu" className={style.nav_link}>Menu</Link>
                    </li>
                    <li>
                        <Link to="/blog" className={style.nav_link}>Blog</Link>
                    </li>
                    <li>
                        <Link to="/chef" className={style.nav_link}>Chef</Link>
                    </li>
                    <li>
                        <Link to="/about" className={style.nav_link}>About</Link>
                    </li>
                    <li>
                        <Link to="/shop" className={style.nav_link}>Shop</Link>
                    </li>
                    <li>
                        <Link to="/" className={style.nav_link}>Contact</Link>
                    </li>
                </ul>
        </div>
    );
}

export default Navigation;
