import React, { useEffect, useState } from 'react';
// import NavBar from './NavBar';
import '../Style/Home.scss';
import Hero from './Hero';
import Dishes from './Dishes';
// import Aboutus from './Aboutus';
import Categories from './Categories';
import Footer from './Footer';

export const MenuContext = React.createContext();
function Home(props) {

    const[categories,setcategory] = useState([]);
    const[menu,setmenu] = useState([]);
    const[dish,setdish] = useState([]);
    // const[loading,setloading] = useState(true);

    async function fetchdata(){
        const API = "https://www.themealdb.com/api/json/v1/1/search.php?f=c";
        const response = await fetch(API);
        const datas = await response.json();
        setmenu(datas.meals);
    }

    async function fetchcategories(){
        const API = "https://www.themealdb.com/api/json/v1/1/categories.php";
        const response = await fetch(API);
        const datas = await response.json();
        setcategory(datas.categories);
    }
    async function fetchOnlydDish(){
        const API = "https://www.themealdb.com/api/json/v1/1/filter.php?c=beef";
        const response = await fetch(API);
        const data = await response.json();
        setdish(data.meals);
    }
    useEffect(()=>{
        fetchdata();
        fetchcategories();
        fetchOnlydDish();
    },[]);
    return (
        <MenuContext.Provider value={menu}>
            <div>
                <Hero/>
                {/* {!loading ? <Dishes data={menu}/>:<h1>Loading..</h1> } */}
                <Dishes data={menu}/>
                <Categories data={categories} dish={dish} menu={menu}/>
                {/* {!loading? <Categories data={categories} menu={menu}/>:null} */}
                <Footer/>
            </div>
        </MenuContext.Provider>
        
    );
}

export default Home;