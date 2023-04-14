import Slidershow from '@/components/slider/Slidershow'
import Header from '@/containers/header/Header'
import About from '@/containers/sections/About'
import DoctorRanking from '@/containers/sections/DoctorRanking'
import Services from '@/containers/sections/Services'

export default function Home() {

  return (
    <main>
      <Header/>
      <Slidershow autoplay={false} controls={true} interval={5000} speed={500}/>
      <About/>
      <Services />
      <DoctorRanking />
    </main>
  )
}
