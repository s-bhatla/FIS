import React from 'react'

const Judging = () => {
  return (
    <div>
        <div class="h-[5rem] w-max max-w-[100vw]">
        <div className="sm:pl-[4rem] sm:pr-[1rem] px-[1rem] text-white sm:text-3xl py-4 font-extrabold mt-[3rem] bg-gradient-to-r from-sky-600 via-green-500 to-green-400">WHAT'S THE JUDGING CRITERA ?</div>
        </div>
        <div className="table sm:ml-[4rem] ml-[1rem]">
            <div className="flex flex-col">
                <div className="flex flex-row">
                    <div className="xx l cell font-bold text-md"><div className='my-auto px-3'>Problem Statement: XX Points</div></div>
                    <div className="xx-d r cell"><div className='my-auto px-3'>Did the solution use innovative, nascent or emerging technologies ?</div></div>
                    </div>
                <div className="flex flex-row">
                    <div className="yy l cell font-bold text-md"><div className='my-auto px-3'>Solution: YY Points</div></div>
                    <div className="yy-d r cell"><div className='my-auto px-3'>Did this solution result in an improved user experience, and/or a cost/revenue benefit for financial institutions ?</div></div>
                   </div>
                <div className="flex flex-row">
                <div className="zz l cell font-bold text-md"><div className='my-auto px-3'>Co-Creation: ZZ Points</div></div>
                <div className="zz-d r cell"><div className='my-auto px-3'>Did this solution include the use of a partner IP that can shorten time to market ?</div></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Judging