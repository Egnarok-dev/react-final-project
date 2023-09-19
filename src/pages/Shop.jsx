import React, { useEffect, useState } from 'react';
import pageTitleArr from '../utils/page_banner';
import fetchData from '../utils/get_chop_data'
import Header from '../components/Header';
import TitlePageBanner from '../components/Title_page_banner';
import PaginationShop from '../components/Pagination_shop';
import Footer from '../components/Footer';

const Shop = () => {
    const [{ ourShop }] = pageTitleArr
    console.log({ ourShop });
    const [dish, setDish] = useState([])
    
    useEffect(() => {
        const responseData = async () => {
            try {
                const response = await fetchData()
                setDish(response)
            } catch (error) {
                console.error(error)
            }
        }
        responseData()
    }, [])
    return (
        <div>
            <Header/>
            <TitlePageBanner pageTitle={ourShop}/>
            <PaginationShop/>
            <Footer/>
        </div>
    );
}

export default Shop;
