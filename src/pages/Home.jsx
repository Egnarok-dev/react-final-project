import React from 'react';
import Header from '../components/Header';
import style from '../styles/homePage.module.css';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import fasebookIcon from '../assets/gallery/icons/home_page_icons/facebook.svg'
import twitterIcon from '../assets/gallery/icons/home_page_icons/twitter.svg'
import pinterestIcon from '../assets/gallery/icons/home_page_icons/pinterest.svg'
import dishPhoto from '../assets/gallery/images/home_page_images/main_banner_dish.png'
import OurAchievements from '../components/Our_achievements';
import checkIcon from '../assets/gallery/icons/home_page_icons/check_icon.png'
import firstSectionFirstDish from '../assets/gallery/images/home_page_images/first_section_first_dish.png'
import firstSectionSecondDish from '../assets/gallery/images/home_page_images/first_section_second_dish.png'
import firstSectionThirdDish from '../assets/gallery/images/home_page_images/first_section_third_dish.png'
import secondSectionFirstDish from '../assets/gallery/images/home_page_images/second_section_first_dish.png'
import secondSectionSecondDish from '../assets/gallery/images/home_page_images/second_section_second_dish.png'
import secondSectionThirdDish from '../assets/gallery/images/home_page_images/second_section_third_dish.png'
import secondSectionFourthDish from '../assets/gallery/images/home_page_images/second_section_fourth_dish.png'
import dill from '../assets/gallery/images/home_page_images/dill.png'
import thirdSectionFirstDish from '../assets/gallery/images/home_page_images/third_section_first_dish.png'
import thirdSectionSecondDish from '../assets/gallery/images/home_page_images/third_section_second_dish.png'
import thirdSectionThirdDish from '../assets/gallery/images/home_page_images/third_section_third_dish.png'
import thirdSectionFourthDish from '../assets/gallery/images/home_page_images/third_section_fourth_dish.png'
import thirdSectionFifthDish from '../assets/gallery/images/home_page_images/third_section_fifth_dish.png'
import thirdSectionSixthDish from '../assets/gallery/images/home_page_images/third_section_sixth_dish.png'
import thirdSectionFastFoodIcon from '../assets/gallery/icons/home_page_icons/third_section_fast_food_icon.png'
import thirdSectionLunchIcon from '../assets/gallery/icons/home_page_icons/third_section_luch_icon.png'
import thirdSectionDinnerIcon from '../assets/gallery/icons/home_page_icons/third_section_dinner_icon.png'
import fifthSectionChiefChef from '../assets/gallery/images/home_page_images/fifth_screen_first_photo.png'
import fifthSectionAssistantChef from '../assets/gallery/images/home_page_images/fifth_screen_second_photo.png'
import fifthSectionAdvertisingChef from '../assets/gallery/images/home_page_images/fifth_screen_third_photo.png'
import fifthSectionChef from '../assets/gallery/images/home_page_images/fifth_screen_fourth_photo.png'
import Banner from '../components/Banner';
import BlogPostHomePage from '../components/Blog_post_home_page';
import Carousel from '../components/Carousel';
import carouselStyle from '../utils/carousel'

const Home = () => {
    const {homePage} = carouselStyle
    return (
        <div className={style.home_page_container}>
            <Header />
            <div className={style.main_banner_background}>
                <div className={style.main_banner}>
                    <div className={style.social_icons_container}>
                        <div className={style.color_line}></div>
                        <ul className={style.social_icons}>
                            <li>
                                <Link className={style.nav_link}><img src={fasebookIcon} alt="fasebook icon" /></Link>
                            </li>
                            <li>
                                <Link className={style.nav_link}><img src={twitterIcon} alt="twitter icon" /></Link>
                            </li>
                            <li>
                                <Link className={style.nav_link}><img src={pinterestIcon} alt="pinterest icon" /></Link>
                            </li>
                        </ul>
                        <div className={style.color_line}></div>
                    </div>
                    <div className={style.main}>
                        <h2>Its Quick & Amusing!</h2>
                        <h1>
                            <span className={style.the}>The </span>
                            <span>Art of speed food Quality</span>
                        </h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed pharetra dictum neque massa congue</p>
                        <Link className={style.link}>See Menu</Link>
                    </div>
                    <div className={style.dish_photo}>
                        <img src={dishPhoto} alt="main dish" />
                    </div>
                </div>
            </div>
            <div className={style.content_container}>
                <div className={style.first_section}>
                    <div className={style.about_us_section}>
                        <h3>About us</h3>
                        <h2>
                            <span>We </span> 
                            Create the best foody product
                        </h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.</p>
                        <ul>
                            <li>
                                <img src={checkIcon} alt="check icon" />
                                Lacus nisi, et ac dapibus sit eu velit in consequat.
                            </li>
                            <li>
                                <img src={checkIcon} alt="check icon" /> 
                                Quisque diam pellentesque bibendum non dui volutpat fringilla  
                            </li>
                            <li>
                                <img src={checkIcon} alt="check icon" /> 
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit
                            </li>
                        </ul>
                        <Link className={style.first_section_link}>Read More</Link>
                    </div>
                    <div className={style.our_dishes}>
                        <img src={firstSectionFirstDish} alt="sendwich with egg" />
                        <img src={firstSectionSecondDish} alt="dish" />
                        <img src={firstSectionThirdDish} alt="sandwich with vegetables" />
                    </div>
                </div>
                <div className={style.second_section}>
                    <h3>Food Category</h3>
                    <h2>
                        <span>Choose </span>
                        Food Iteam
                    </h2>
                    <ul className={style.food_item}>
                        <li>
                            <img src={secondSectionFirstDish} alt="discount dish" />
                            <p>Save 30%</p>
                            <p>Fast Food Dish</p>
                        </li>
                        <li>
                            <img src={secondSectionSecondDish} alt="burger" />
                        </li>
                        <li>
                            <img src={secondSectionThirdDish} alt="chef salat" />
                        </li>
                        <li>
                            <img src={secondSectionFourthDish} alt="donats" />
                        </li>
                    </ul>
                </div>
                <div className={style.background_image}>
                    <img src={dill} alt="dill" />
                </div>
                <div className={style.third_section}>
                    <div className={style.our_dishes}>
                        <div className={style.first_block}>
                            <img src={thirdSectionFirstDish} alt="tacos" />
                            <img src={thirdSectionSecondDish} alt="burger" />
                        </div>
                        <div className={style.second_block}>
                            <div className={style.first_indoor_unit}>
                                <img src={thirdSectionThirdDish} alt="nuggets" />
                                <img src={thirdSectionFourthDish} alt="cheeseburger" />
                            </div>
                            <div className={style.second_indoor_unit}>
                                <img src={thirdSectionFifthDish} alt="burger menu" />
                                <img src={thirdSectionSixthDish} alt="meet with brockley" />
                            </div>
                        </div>
                    </div>
                    <div className={style.why_we_description}>
                        <h3>Why Choose us</h3>
                        <h2>
                            <span>Extra </span>
                            ordinary taste And Experienced 
                        </h2>
                        <p className={style.desc}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.</p>
                        <div className={style.aside}>
                            <div>
                                <img src={thirdSectionFastFoodIcon} alt="burger" />
                                <p>Fast Food</p>
                            </div>
                            <div>
                                <img src={thirdSectionLunchIcon} alt="cookie" />
                                <p>Lunch</p>
                            </div>
                            <div>
                                <img src={thirdSectionDinnerIcon} alt="wine" />
                                <p>Dinner</p>
                            </div>
                        </div>
                        <div className={style.our_experiense}>
                            <div></div>
                            <p className={style.number}>30+</p>
                            <p>
                                <span>Years of </span> <br />
                                Experienced
                            </p>
                        </div>
                    </div>
                </div>
                <OurAchievements />
                <div style={{width:"1320px", height:"700px", border:"1px solid white", margin:"0 auto"}}></div>
                
                <div className={style.fourt_section}></div>
                <div className={style.fifth_section}>
                    <h3>Chefs</h3>
                    <h2>
                        <span>Meet </span>
                        Our Chef
                    </h2>
                    <ul className={style.our_chef}>
                        <li>
                            <img src={fifthSectionChiefChef} alt="discount dish" />
                            <p>
                                <span>D.Estwood</span> <br />
                                Chief Chef
                            </p>
                        </li>
                        <li>
                            <img src={fifthSectionAssistantChef} alt="burger" />
                            <p>
                                <span>D.Scoriesh</span> <br />
                                Assistant Chef
                            </p>
                        </li>
                        <li>
                            <img src={fifthSectionAdvertisingChef} alt="chef salat" />
                            <p>
                                <span>M. William</span> <br />
                                Advertising Chef
                            </p>
                        </li>
                        <li>
                            <img src={fifthSectionChef} alt="donats" />
                            <p>
                                <span>W.Readfroad</span> <br />
                                Chef
                            </p>
                        </li>
                    </ul>
                    <Link className={style.link}>See More</Link>
                </div>
                <Carousel textStyle={homePage}/>
                <Banner/>
                <BlogPostHomePage/>
            </div>
            
            <Footer />
        </div>
    );
}

export default Home;
