import React, { useState, useEffect } from 'react';
import './Home.css'
import Header from '../../../components/Navbar/Header/Header'
import ExploreMenu from '../../../components/Navbar/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../../components/FoodDisplay/FoodDisplay';
import AppDownload from '../../../components/AppDownload/AppDownload';

const Home = () => {

    const [category, setCategory] = useState("ALL");

  return (
    <div>
    <Header/>
    <ExploreMenu category={category} setCategory={setCategory}/>
    <FoodDisplay category={category}/>
    <AppDownload/>
    </div>
  )
}

export default Home