import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Homepage from './Components/Homepage'
import Navbar from './Components/Navbar'
import CountDown from './Components/Countdown'
import Footer from './Components/Footer'
import Codepage from './Components/FeatureCode'


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <Homepage/>

    <div className=''>
      {/* <Codepage/> */}
    </div>

    <div className="flex flex-col gap-10 justify-center items-center h-[50vh] border-[.1px] border-neutral-600 rounded-2xl text-neutral-400"
    style={{
      backgroundImage:
      "url('/src/assets/magicpattern-starry-night-1748601598208.jpeg')",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
    }}>
  <CountDown />
</div>
    
    <div className=''>
    <Footer/>

    </div>

    </>
  )
}

export default App
