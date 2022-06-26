import React from 'react'

const Judging = () => {
  return (
    <div>
        <div class="h-[5rem] w-max max-w-[100vw]">
        <div className="heading  text-white text-3xl py-4 font-extrabold mt-[3rem] bg-gradient-to-r from-sky-600 via-green-500 to-green-400">WHAT'S THE JUDGING CRITERA ?</div>
        </div>
        <div className="table mx-auto">
            <div className="grid grid-cols-2">
                <div className="grid grid-row-3">
                    <div className="xx cell font-bold text-md"><div className='my-auto px-4'>Problem Statement: XX Points</div></div>
                    <div className="yy cell font-bold text-md"><div className='my-auto px-4'>Solution: YY Points</div></div>
                    <div className="zz cell font-bold text-md"><div className='my-auto px-4'>Co-Creation: ZZ Points</div></div>
                </div>
                <div className="grid grid-row-3">
                    <div className="xx-d cell"><div className='my-auto px-4'>Did the solution use innovative, nascent or emerging technologies ?</div></div>
                    <div className="yy-d cell"><div className='my-auto px-4'>Did this solution result in an improved user experience, and/or a cost/revenue benefit for financial institutions ?</div></div>
                    <div className="zz-d cell"><div className='my-auto px-4'>Did this solution include the use of a partner IP that can shorten time to market ?</div></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Judging