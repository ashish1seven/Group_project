import React from 'react';
import Categories from '../components/Categories';
import Navbar from '../components/navbar';
import bgImg from '../Images/header-back.jpeg';
const Home = () => {
    return (
        <>
        <div className='h-[90%] w-screen' style={{backgroundImage:`url(${bgImg})`, backgroundPosition:'center',backgroundSize:'cover'}}>
            <Navbar/>
        </div>
        <div className='h-full mt-10'>
            <h1 className='text-pink-700 text-2xl font-semibold text-center'>Discover Experiences</h1>
            <p className='text-center text-[#333333] text-lg mt-5'>This site is for everyone. Choose from thousands of interests to find local like-minded people and groups.</p>
            <Categories />
        </div>
        </>
    );
}

export default Home;
