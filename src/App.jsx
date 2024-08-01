import { useState } from 'react'
import Input from './Components/Input'
import HeroPage from './Components/HeroPage'
import Button from './Components/Button'
import useCurrencyInfo from "./hooks/useCurrencyInfo"
function App() {
  const [getStart , setGetStart] = useState(false)
  const [amount , setAmount] = useState(0)
  const [currentCurrency , setCurrentCurrency] = useState('usd')
  const [changeCurrency , setChangeCurrency] = useState('inr')
  const currencyInfo = useCurrencyInfo(currentCurrency)
  // console.log(currentCurrency + "current")
  // console.log(changeCurrency + "change")
  // console.log(getStart)
  console.log(amount)
  if (getStart){
    return (
      <>
      <nav className='bg-[#EBE6E0] p-4'>
      <Button setterfnc = {setGetStart}>Home</Button>
    </nav>
      <main className='bg-[#EBE6E0] text-[#009A6E]  w-screen h-screen flex justify-center items-center flex-col'>
        <div className='bg-[#009A6E] flex flex-col justify-center items-center gap-2 w-[36rem] p-8 rounded-2xl'>
          <Input info = {currencyInfo} currencyType1 = {setCurrentCurrency} currentC = {currentCurrency} amount = {amount} changeAmount = {setAmount} ></Input>
          <div>
            <button onClick={() => {
              setCurrentCurrency(changeCurrency)
              setChangeCurrency(currentCurrency)
            }} className='text-white bg-red-600 p-2 rounded-md absolute translate-x-[-13px] translate-y-[-20px] hover:bg-red-800'>Swap</button>
            </div>
          <Input info = {currencyInfo}  currencyType2 = {setChangeCurrency} changeC = {changeCurrency} amount = {amount * currencyInfo[changeCurrency]} changeAmount = {setAmount}></Input>
        </div>
      </main>
    
      

      
      </>
    );
  }

  return (
    <>

      <HeroPage setPage = {setGetStart}></HeroPage>

      
    </>
  )
}

export default App
