import React from 'react'

function Unsourced() {
  return (
    <div>
       <div className='orderInfo'>
            <div className='infoUnsourcedLabel'>
                <h3 className='orderH3'>Unsourced</h3>
                <label className='reqInfo'>RDD:</label>
                <label className='reqInfo'>Req. ship date:</label>
                <label className='reqInfo'>Pres date:</label>
                <label className='reqInfo'>Base Code:</label>
                <label className='reqInfo'>Qty.:</label>
                <label className='reqInfo'>CC:</label>
                <label className='reqInfo'>Order entry date:</label>
                <label className='reqInfo'>Order Source date:</label>
                <label className='reqInfo'>Order staus:</label>
            </div>
            <div className='infoUnsourced'>
                <h3 className='orderH3i'>Info</h3>
                <input type='text' name='info' id='info' className='reqInfoOut' disabled></input>
                <input type='text' name='info' id='info' className='reqInfoOut' disabled></input>
                <input type='text' name='info' id='info' className='reqInfoOut' disabled></input>
                <input type='text' name='info' id='info' className='reqInfoOut' disabled></input>
                <input type='text' name='info' id='info' className='reqInfoOut' disabled></input>
                <input type='text' name='info' id='info' className='reqInfoOut' disabled></input>
                <input type='text' name='info' id='info' className='reqInfoOut' disabled></input>
                <input type='text' name='info' id='info' className='reqInfoOut' disabled></input>
                <input type='text' name='info' id='info' className='reqInfoOut' disabled></input>
            </div>
        </div>
    </div>
  )
}

export default Unsourced
