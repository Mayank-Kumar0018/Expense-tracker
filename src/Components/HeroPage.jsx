import { useState } from 'react'
import Button from "./Button"


function HeroPage() {
    const [getStart , setGetStart] = useState(false)
    const [getAPI , setGetAPI] = useState(false)
    const [github , setGithub] = useState(false)

    console.log(getStart)
    console.log(getAPI)
    console.log(github)

  return (
    <>
    <main className='bg-[#EBE6E0] w-screen h-screen flex justify-center items-center flex-col gap-y-16'>

        <p className='text-[#009A6E] text-5xl font-bold'>React Currency Convertor</p>

        <div className="btn flex gap-x-8">
        <Button setterfnc = {setGetStart}  text={'Get Started'}></Button>
        <Button setterfnc = {setGetAPI}  text={'Get API'}></Button>
        <Button setterfnc = {setGithub}  text={'Github'}></Button>
        </div>
      </main>
    </>
  )
}

export default HeroPage
