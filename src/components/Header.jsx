import React, { useEffect, useState } from 'react';
import style from '../styles/header.module.css'
// import { Link } from 'react-router-dom';
import firstIcon from '../assets/gallery/icons/header_icons/MagnifyingGlass.png'
import secondIcon from '../assets/gallery/icons/header_icons/User.png'
import thirdIcon from '../assets/gallery/icons/header_icons/Tote.png'
import Navigation from './Navigation';
import { useCart } from '../utils/context';

const Header = () => {
    const { cartItems, openCartModal, totalCount } = useCart()
    const [isCartEmpty, setIsCartEmpty] = useState(false);
    const [total_count, setTotalCount] = useState(0)

    const chackCountIcon = () => {
        return cartItems.length > 0 ? setIsCartEmpty(true) : setIsCartEmpty(false);
    }

    useEffect(() => {
        chackCountIcon()
        setTotalCount(totalCount)
    }, [cartItems])

    return (
        <div className={style.header}>
            <div className={style.header_container}>
                <div>
                    <h2 className={style.logo}>
                        <span>Food </span>
                        tuck
                    </h2>
                </div>
                <Navigation />
                <ul className={style.nav_header_buttons}>
                    {isCartEmpty && (
                        <div className={style.count} style={{ }}>
                            {total_count}
                        </div>
                    )}
                    <li>
                        <button>
                            <img src={firstIcon} alt="Search Icon" />
                        </button>
                    </li>
                    <li>
                        <img src={secondIcon} alt="User icon" />
                    </li>
                    <li>
                        <img src={thirdIcon} alt="Cart icon" onClick={() => openCartModal()} />
                    </li>
                </ul>
            </div>

        </div>
    );
}

export default Header;
