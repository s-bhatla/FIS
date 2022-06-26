import React from 'react'

const Judging = () => {
  return (
    <div>
        <div className="heading">What's the Judging Criteria ?</div>
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