import React from 'react'

function Unsourced(unsourcedInfo) {
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
                <label className='reqInfo'>Order entry date:</label>
                <label className='reqInfo'>Order Source date:</label>
                <label className='reqInfo'>Order staus:</label>
            </div>
            <div className='infoUnsourced'>
                <h3 className='orderH3i'>Info</h3>
                <input type='text' name='info' id='ACCinfo' className='reqInfoOut' placeholder={unsourcedInfo.unsourcedInfo.RDD} disabled></input>
                <input type='text' name='info' id='ACCinfo' className='reqInfoOut' placeholder={unsourcedInfo.unsourcedInfo.REQ_SHIP_DATE} disabled></input>
                <input type='text' name='info' id='ACCinfo' className='reqInfoOut' placeholder={unsourcedInfo.unsourcedInfo.PRES_DATE} disabled></input>
                <input type='text' name='info' id='ACCinfo' className='reqInfoOut' placeholder={unsourcedInfo.unsourcedInfo.BASE_CODE} disabled></input>
                <input type='text' name='info' id='ACCinfo' className='reqInfoOut' placeholder={unsourcedInfo.unsourcedInfo.QTY} disabled></input>
                <input type='text' name='info' id='ACCinfo' className='reqInfoOut' placeholder={unsourcedInfo.unsourcedInfo.ORDER_ENTRY_DATE} disabled></input>
                <input type='text' name='info' id='ACCinfo' className='reqInfoOut' placeholder={unsourcedInfo.unsourcedInfo.ORDER_SOURCE_DATE} disabled></input>
                <input type='text' name='info' id='ACCinfo' className='reqInfoOut' placeholder={unsourcedInfo.unsourcedInfo.ORDER_STATUS} disabled></input>
            </div>
        </div>
    </div>
  )
}

export default Unsourced
