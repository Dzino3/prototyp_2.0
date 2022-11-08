import React from 'react'

function Sourced(sourcedInfo) {
  return (
    <div>
      
      <h2>{sourcedInfo.sourcedInfo.ORDER_NUMBER}</h2>
        <div className='orderInfo'>
            <div className='infoSourcedLabel'>
                <h3 className='orderH3'>Sourced</h3>
                <label className='reqInfo'>Base Code Description:</label>
                <label className='reqInfo'>Factory Delivery:</label>
                <label className='reqInfo'>Original Factory Delivery:</label>
                <label className='reqInfo'>Requested Delivery:</label>
                <label className='reqInfo'>FDD-RDD:</label>
                <label className='reqInfo'>Sold:</label>
                <label className='reqInfo'>Order entry date:</label>
                <label className='reqInfo'>Order source date:</label>
                <label className='reqInfo'>Machine status:</label>
                <label className='reqInfo'>Order staus:</label>
                <label className='reqInfo'>Req. ship date:</label>
                <label className='reqInfo'>Pres date:</label>
                <label className='reqInfo'>Qty.:</label>
                <label className='reqInfo'>CC:</label>
            </div>
            <div className='infoSourced'>
                <h3 className='orderH3i'>Info</h3>
                <input type='text' name='info' id='Base Code Descriptioninfo' className='reqInfoOut' placeholder={sourcedInfo.sourcedInfo.BASE_CODE_DESCR} disabled></input>
                <input type='text' name='info' id='FDDinfo' className='reqInfoOut' placeholder={sourcedInfo.sourcedInfo.FDD} disabled></input>
                <input type='text' name='info' id='OFDDinfo' className='reqInfoOut' placeholder={sourcedInfo.sourcedInfo.OFDD} disabled></input>
                <input type='text' name='info' id='RDDinfo' className='reqInfoOut' placeholder={sourcedInfo.sourcedInfo.RDD} disabled></input>
                <input type='text' name='info' id='FDD-RDDinfo' className='reqInfoOut' placeholder={sourcedInfo.sourcedInfo.FDD_MINUS_RDD} disabled></input>
                <input type='text' name='info' id='Soldinfo' className='reqInfoOut' placeholder={sourcedInfo.sourcedInfo.SOLD} disabled></input>
                <input type='text' name='info' id='Order entry dateinfo' className='reqInfoOut' placeholder={sourcedInfo.sourcedInfo.ORDER_ENTRY_DATE} disabled></input>
                <input type='text' name='info' id='Order source dateinfo' className='reqInfoOut' placeholder={sourcedInfo.sourcedInfo.ORDER_SOURCE_DATE} disabled></input>
                <input type='text' name='info' id='Machine statusinfo' className='reqInfoOut' placeholder={sourcedInfo.sourcedInfo.MACHINE_STATUS} disabled></input>
                <input type='text' name='info' id='Order stausinfo' className='reqInfoOut' placeholder={sourcedInfo.sourcedInfo.ORDER_STATUS} disabled></input>
                <input type='text' name='info' id='Req. ship dateinfo' className='reqInfoOut' placeholder={sourcedInfo.sourcedInfo.REQ_SHIP_DATE} disabled></input>
                <input type='text' name='info' id='Pres dateinfo' className='reqInfoOut' placeholder={sourcedInfo.sourcedInfo.PRES_DATE} disabled></input>
                <input type='text' name='info' id='Qtyinfo' className='reqInfoOut' placeholder={sourcedInfo.sourcedInfo.QTY} disabled></input>
                <input type='text' name='info' id='CCinfo' className='reqInfoOut' placeholder={sourcedInfo.sourcedInfo.CC} disabled></input>
            </div>
        </div>
    </div>
  )
}

export default Sourced
