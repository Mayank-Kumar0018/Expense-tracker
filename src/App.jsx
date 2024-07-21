import { useState } from 'react'
import HeroPage from "./Components/HeroPage"

function App() {
  const [getStart , setGetStart] = useState(false)
  console.log(getStart)

  return (
    <>
      <HeroPage setPage = {setGetStart}></HeroPage>
    </>
  )
}

export default App
