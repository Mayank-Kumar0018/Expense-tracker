import { useState } from 'react'


function Input() {


  return (
    <>
      <main className='bg-[#EBE6E0] text-[#009A6E]  w-screen h-screen flex justify-center items-center flex-col'>
        <div className='bg-[#009A6E] p-12'>
            <div className=' bg-[#EBE6E0] p-4 flex gap-x-32'>
                <div className="left flex flex-col gap-y-4">
                    <label>
                        From
                    </label>
                    <input  type="number" 
                    className='bg-[#EBE6E0] font-bold text-lg outline-none w-32 focus:border-b-2 border-[#009A6E] '
                    value={0} />
                </div>
                <div className="right flex flex-col items-end gap-y-4">
                    <label>
                        Currency type
                    </label>
                    <select className='bg-[#deddef]'>
                        <option value="usd">usd</option>
                        <option value="inr">INR</option>
                    </select>

                </div>

            </div>
        </div>
      </main>
    </>
  )
}

export default Input
