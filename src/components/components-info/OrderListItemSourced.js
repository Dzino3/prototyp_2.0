import React from 'react'

function OrderListItemSourced({item}) {
  return (
    <div className='orderListItemSourced'>
      <div className='block'>
        <p className='p2'>Factory delivery date: </p>
        <p>{item.FDD}</p>
        <p className='p2'>FDD - RDD: </p>
        <p>{item.FDD_MINUS_RDD}</p>
        <p className='p2'>Sold: </p>
        <p>{item.SOLD}</p>
      </div>
      <div className='block'>
        <p className='p2'>Order entry date: </p>
        <p>{item.ORDER_ENTRY_DATE}</p>
        <p className='p2'>Order source date: </p>
        <p>{item.ORDER_SOURCE_DATE}</p>
        <p className='p2'>Req. ship date: </p>
        <p>{item.REQ_SHIP_DATE}</p>
      </div>
      <div className='block'>
        <p className='p2'>Machine status: </p>
        <p>{item.MACHINE_STATUS}</p>
        <p className='p2'>Order status: </p>
        <p>{item.ORDER_STATUS}</p>
      </div>
      <div className='block'>
        <p className='p2'>Pres. date: </p>
        <p>{item.PRES_DATE}</p>
        <p className='p2'>Base Code Desciption: </p>
        <p>{item.BASE_CODE_DESCR}</p>
        <p className='p2'>Qty.: </p>
        <p>{item.QTY}</p>
        </div>
    </div>
  )
}

export default OrderListItemSourced
