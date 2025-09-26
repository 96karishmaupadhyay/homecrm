import React from 'react'
import Navbar from '../../components/navbar/navbar'
import HeroSection from '../../components/heroSection/heroSection'
import Partners from '../../sections/partners/partners'
import ScrollLaptop from '../../components/scrollLaptop/scrollLaptop'
import Faq from '../../components/faq/faq'
import Footer from '../../components/footer/footer'
import Features from '../../sections/features/features'
import PricingSection from '../../sections/pricing/pricingSection'
import Integration from '../../components/integration/integration'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <ScrollLaptop/>
      <Features/>
      <PricingSection/>
      {/* <Partners/> */}
      <Integration/>
    <Faq/>
    <Footer/>
    </div>
  )
}

export default Home
