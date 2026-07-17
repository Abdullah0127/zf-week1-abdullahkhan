import { useEffect } from 'react'
import Hero from '../components/Hero'

function Home() {

  useEffect(()=>{
    document.title = "Abdullah Khan | Home";
  }, [])
  return (
    <div>
      <Hero/>
    </div>
  )
}

export default Home