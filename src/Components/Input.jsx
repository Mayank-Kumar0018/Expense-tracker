import { useState } from 'react'
import Button from './Button'


function Input({info , currencyType1 = false , currencyType2 = false , currentC = false , changeC = false , amount = 0 , changeAmount}) {
  // const currencyInfo  = useCurrencyInfo('inr')




  return (
    <>
    
      

        <div className=' bg-[#fea639] p-4 flex gap-x-32 w-96 rounded-md'>
          <div className="left flex flex-col gap-y-4">
            <label>
              From
            </label>
            <input type="number"
              className='bg-[#EBE6E0] font-bold text-lg outline-none w-32 focus:border-b-2 border-[#009A6E] '
              value={amount}
              onChange={e => changeAmount(e.target.value) } />
          </div>
          <div className="right flex flex-col items-end gap-y-4">
            <label>
              Currency type
            </label>
            <select value={(currentC || changeC)} className='bg-[#deddef]' onChange={e => {
              if(currencyType1){
                currencyType1(e.target.value)
              }
              else{
                currencyType2(e.target.value)
              }
            }}>
              {Object.keys(info).map((e) => {
                return <option key={e} value={e}>{e}</option>;

              })}
              {/* <option value="inr">INR</option> */}
              
            </select>

          </div>

        </div>


    </>
  )
}

export default Input
