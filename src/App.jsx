import { useState } from 'react'
import Input from './Components/Input'

function App() {
  const [getStart , setGetStart] = useState(false)
  console.log(getStart)

  return (
    <>
      <HeroPage setPage = {setGetStart}></HeroPage>
      
      <Input></Input>
    </>
  )
}

export default App
