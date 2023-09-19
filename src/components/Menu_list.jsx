// import React, { useEffect, useState } from "react";
import menuListData from "../utils/get_menu_data";
import style from "../styles/menu.module.css";
const MenuList = (props) => {

    const starterMenu = props.menu.firstDishes
    const mainCourse = props.menu.secondDishes
    
    // const [food, setFood] = useState([]);
    // useEffect(() => {
    //     setFood(menuListData);
    // }, []);
    return (
        <div className={style.menu_page}>
            <div className={style.menu_items}>
                <div>
                    <img src={starterMenu.image} alt="" />
                </div>
                <div className={style.menu_list}>
                    <img src={starterMenu.icon} alt="" />
                    <h2>{starterMenu.title}</h2>
                    <div className={style.menu_list_item}>
                        <div>
                            <h3>{starterMenu.dishes.firstDish.title}</h3>
                            <p className={style.description}>
                                {starterMenu.dishes.firstDish.description}
                            </p>
                            <p className={style.calories}>
                                {starterMenu.dishes.firstDish.calories}
                            </p>
                        </div>
                        <div>
                            <p className={style.price}>{starterMenu.dishes.firstDish.price}</p>
                        </div>
                    </div>
                    <div className={style.menu_list_item}>
                        <div>
                            <h3>{starterMenu.dishes.secondDish.title}</h3>
                            <p className={style.description}>
                                {starterMenu.dishes.secondDish.description}
                            </p>
                            <p className={style.calories}>
                                {starterMenu.dishes.secondDish.calories}
                            </p>
                        </div>
                        <div>
                            <p className={style.price}>{starterMenu.dishes.secondDish.price}</p>
                        </div>
                    </div>
                    <div className={style.menu_list_item}>
                        <div>
                            <h3>{starterMenu.dishes.thirdDish.title}</h3>
                            <p className={style.description}>
                                {starterMenu.dishes.thirdDish.description}
                            </p>
                            <p className={style.calories}>
                                {starterMenu.dishes.thirdDish.calories}
                            </p>
                        </div>
                        <div>
                            <p className={style.price}>{starterMenu.dishes.thirdDish.price}</p>
                        </div>
                    </div>
                    <div className={style.menu_list_item}>
                        <div>
                            <h3>{starterMenu.dishes.fourthDish.title}</h3>
                            <p className={style.description}>
                                {starterMenu.dishes.fourthDish.description}
                            </p>
                            <p className={style.calories}>
                                {starterMenu.dishes.fourthDish.calories}
                            </p>
                        </div>
                        <div>
                            <p className={style.price}>{starterMenu.dishes.fourthDish.price}</p>
                        </div>
                    </div>
                </div>

            </div>
            <div className={style.menu_items} style={{ flexDirection: "row-reverse" }}>
                <div>
                    <img src={mainCourse.image} alt="" />
                </div>
                <div className={style.menu_list}>
                    <img src={mainCourse.icon} alt="" />
                    <h2>{mainCourse.title}</h2>
                    <div className={style.menu_list_item}>
                        <div>
                            <h3>{mainCourse.dishes.firstDish.title}</h3>
                            <p className={style.description}>
                                {mainCourse.dishes.firstDish.description}
                            </p>
                            <p className={style.calories}>
                                {mainCourse.dishes.firstDish.calories}
                            </p>
                        </div>
                        <div>
                            <p className={style.price}>{mainCourse.dishes.firstDish.price}</p>
                        </div>
                    </div>
                    <div className={style.menu_list_item}>
                        <div>
                            <h3>{mainCourse.dishes.secondDish.title}</h3>
                            <p className={style.description}>
                                {mainCourse.dishes.secondDish.description}
                            </p>
                            <p className={style.calories}>
                                {mainCourse.dishes.secondDish.calories}
                            </p>
                        </div>
                        <div>
                            <p className={style.price}>{mainCourse.dishes.secondDish.price}</p>
                        </div>
                    </div>
                    <div className={style.menu_list_item}>
                        <div>
                            <h3>{mainCourse.dishes.thirdDish.title}</h3>
                            <p className={style.description}>
                                {mainCourse.dishes.thirdDish.description}
                            </p>
                            <p className={style.calories}>
                                {mainCourse.dishes.thirdDish.calories}
                            </p>
                        </div>
                        <div>
                            <p className={style.price}>{mainCourse.dishes.thirdDish.price}</p>
                        </div>
                    </div>
                    <div className={style.menu_list_item}>
                        <div>
                            <h3>{mainCourse.dishes.fourthDish.title}</h3>
                            <p className={style.description}>
                                {mainCourse.dishes.fourthDish.description}
                            </p>
                            <p className={style.calories}>
                                {mainCourse.dishes.fourthDish.calories}
                            </p>
                        </div>
                        <div>
                            <p className={style.price}>{mainCourse.dishes.fourthDish.price}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* {food.map((foodItem) => {
                const starterMenu = foodItem.firstObject.firstDishes;
                const mainCourse = foodItem.firstObject.secondDishes;
                return (
                    <div className={style.menu_page}>
                        <div className={style.menu_items}>
                            <div>
                                <img src={starterMenu.image} alt="" />
                            </div>
                            <div className={style.menu_list}>
                                <img src={starterMenu.icon} alt="" />
                                <h2>{starterMenu.title}</h2>
                                <div className={style.menu_list_item}>
                                    <div>
                                        <h3>{starterMenu.dishes.firstDish.title}</h3>
                                        <p className={style.description}>
                                            {starterMenu.dishes.firstDish.description}
                                        </p>
                                        <p className={style.calories}>
                                            {starterMenu.dishes.firstDish.calories}
                                        </p>
                                    </div>
                                    <div>
                                        <p className={style.price}>{starterMenu.dishes.firstDish.price}</p>
                                    </div>
                                </div>
                                <div className={style.menu_list_item}>
                                    <div>
                                        <h3>{starterMenu.dishes.secondDish.title}</h3>
                                        <p className={style.description}>
                                            {starterMenu.dishes.secondDish.description}
                                        </p>
                                        <p className={style.calories}>
                                            {starterMenu.dishes.secondDish.calories}
                                        </p>
                                    </div>
                                    <div>
                                        <p className={style.price}>{starterMenu.dishes.secondDish.price}</p>
                                    </div>
                                </div>
                                <div className={style.menu_list_item}>
                                    <div>
                                        <h3>{starterMenu.dishes.thirdDish.title}</h3>
                                        <p className={style.description}>
                                            {starterMenu.dishes.thirdDish.description}
                                        </p>
                                        <p className={style.calories}>
                                            {starterMenu.dishes.thirdDish.calories}
                                        </p>
                                    </div>
                                    <div>
                                        <p className={style.price}>{starterMenu.dishes.thirdDish.price}</p>
                                    </div>
                                </div>
                                <div className={style.menu_list_item}>
                                    <div>
                                        <h3>{starterMenu.dishes.fourthDish.title}</h3>
                                        <p className={style.description}>
                                            {starterMenu.dishes.fourthDish.description}
                                        </p>
                                        <p className={style.calories}>
                                            {starterMenu.dishes.fourthDish.calories}
                                        </p>
                                    </div>
                                    <div>
                                        <p className={style.price}>{starterMenu.dishes.fourthDish.price}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={style.menu_items} style={{flexDirection:"row-reverse"}}>
                            <div>
                                <img src={mainCourse.image} alt="" />
                            </div>
                            <div className={style.menu_list}>
                                <img src={mainCourse.icon} alt="" />
                                <h2>{mainCourse.title}</h2>
                                <div className={style.menu_list_item}>
                                    <div>
                                        <h3>{mainCourse.dishes.firstDish.title}</h3>
                                        <p className={style.description}>
                                            {mainCourse.dishes.firstDish.description}
                                        </p>
                                        <p className={style.calories}>
                                            {mainCourse.dishes.firstDish.calories}
                                        </p>
                                    </div>
                                    <div>
                                        <p className={style.price}>{mainCourse.dishes.firstDish.price}</p>
                                    </div>
                                </div>
                                <div className={style.menu_list_item}>
                                    <div>
                                        <h3>{mainCourse.dishes.secondDish.title}</h3>
                                        <p className={style.description}>
                                            {mainCourse.dishes.secondDish.description}
                                        </p>
                                        <p className={style.calories}>
                                            {mainCourse.dishes.secondDish.calories}
                                        </p>
                                    </div>
                                    <div>
                                        <p className={style.price}>{mainCourse.dishes.secondDish.price}</p>
                                    </div>
                                </div>
                                <div className={style.menu_list_item}>
                                    <div>
                                        <h3>{mainCourse.dishes.thirdDish.title}</h3>
                                        <p className={style.description}>
                                            {mainCourse.dishes.thirdDish.description}
                                        </p>
                                        <p className={style.calories}>
                                            {mainCourse.dishes.thirdDish.calories}
                                        </p>
                                    </div>
                                    <div>
                                        <p className={style.price}>{mainCourse.dishes.thirdDish.price}</p>
                                    </div>
                                </div>
                                <div className={style.menu_list_item}>
                                    <div>
                                        <h3>{mainCourse.dishes.fourthDish.title}</h3>
                                        <p className={style.description}>
                                            {mainCourse.dishes.fourthDish.description}
                                        </p>
                                        <p className={style.calories}>
                                            {mainCourse.dishes.fourthDish.calories}
                                        </p>
                                    </div>
                                    <div>
                                        <p className={style.price}>{mainCourse.dishes.fourthDish.price}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div></div>
                    </div>
                );
            })} */}
        </div>
    );
};

export default MenuList;
