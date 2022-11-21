import React from 'react'

function Availability(produktInfo) {
  return (
    <div>
      
      <h2 className='avalH22'>{produktInfo.produktInfo.PRODUCT}</h2>
        <div className='orderInfo'>
            <div className='infoSourcedLabel'>
                <h3 className='orderH3'>Availability</h3>
                <label className='reqInfo'>BASE_CODE:</label>
                <label className='reqInfo'>BUNDLE:</label>
                <label className='reqInfo'>BEST_CASE:</label>
                <label className='reqInfo'>WORST_CASE:</label>
                <label className='reqInfo'>COMMENTS:</label>
            </div>
            <div className='infoSourced'>
                <h3 className='orderH3i'>Info</h3>
                <input type='text' name='info' id='BASE_CODEinfo' className='reqInfoOut' placeholder={produktInfo.produktInfo.BASE_CODE} disabled></input>
                <input type='text' name='info' id='BUNDLEinfo' className='reqInfoOut' placeholder={produktInfo.produktInfo.BUNDLE} disabled></input>
                <input type='text' name='info' id='BEST_CASEinfo' className='reqInfoOut' placeholder={produktInfo.produktInfo.BEST_CASE} disabled></input>
                <input type='text' name='info' id='WORST_CASEinfo' className='reqInfoOut' placeholder={produktInfo.produktInfo.WORST_CASE} disabled></input>
                <input type='text' name='info' id='COMMENTSinfo' className='reqInfoOut' placeholder={produktInfo.produktInfo.COMMENTS} disabled></input>
       
            </div>
        </div>
    </div>
  )
}

export default Availability
