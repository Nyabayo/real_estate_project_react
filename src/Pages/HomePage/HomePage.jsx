import React from 'react'
import Hero from "../../Components/Hero/Hero.jsx";
import Search from "../../Components/Search/Search.jsx";
import EstateList from "../../Components/EstateList/EstateList.jsx";
import Footer from "../../Components/Footer/Footer.jsx";

const HomePage = () => {
  return (
    <div>
      <Hero></Hero>
        <Search></Search>
        <EstateList></EstateList>
      <Footer></Footer>
    </div>
  )
}

export default HomePage