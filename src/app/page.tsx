import Slidershow from '@/components/slider/Slidershow'
import Footer from '@/containers/landingPage/footer/Footer'
import Header from '@/containers/landingPage/header/Header'
import About from '@/containers/landingPage/sections/About'
import DoctorRanking from '@/containers/landingPage/sections/DoctorRanking'
import Services from '@/containers/landingPage/sections/Services'
import Team from '@/containers/landingPage/sections/Team'
import Testimonials from '@/containers/landingPage/sections/Testimonials'

export default function Home () {
  return (
    <main>
      <Header />
      <Slidershow autoplay={true} controls={true} interval={5000} speed={500} />
      <About />
      <Services />
      <DoctorRanking />
      <Team />
      <Testimonials />
      <Footer />
    </main>
  )
}
