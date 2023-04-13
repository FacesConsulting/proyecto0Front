import Slidershow from '@/components/slider/Slidershow'
import Header from '@/containers/header/Header'

export default function Home() {

  return (
    <main>
      <Header/>
      <Slidershow autoplay={false} controls={true} interval={5000} speed={500}/>
    </main>
  )
}
