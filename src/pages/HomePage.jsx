import React from 'react'
import Hero from '../components/HomePage/Hero';
import MainSection from '../components/HomePage/MainSection';
import Items from '../components/HomePage/Items';

const HomePage = () => {
  return (
    <div className='bg-slate-50'>
      <Hero/>
      <MainSection/>
      <Items/>
    </div>
  )
}

export default HomePage