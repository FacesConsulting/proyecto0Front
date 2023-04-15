import Slidershow from '@/components/slider/Slidershow'
import Footer from '@/containers/footer/Footer'
import Header from '@/containers/header/Header'
import About from '@/containers/sections/About'
import DoctorRanking from '@/containers/sections/DoctorRanking'
import Services from '@/containers/sections/Services'
import Team from '@/containers/sections/Team'
import Testimonials from '@/containers/sections/Testimonials'

export default function Home() {

  return (
    <main>
      <Header/>
      <Slidershow autoplay={true} controls={true} interval={5000} speed={500}/>
      <About/>
      <Services />
      <DoctorRanking />
      <Team/>
      <Testimonials />
      <Footer />
    </main>
  )
}
