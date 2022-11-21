import React from 'react'

function OrderListItemCanceled({item}) {
  return (
    <div className='orderListItemCanceled'>
        <div className='block'>
            <p className='p2'>RDD: </p>
            <p>{item.RDD}</p>
            <p className='p2'>Req. ship date: </p>
            <p>{item.REQ_SHIP_DATE}</p>
            <p className='p2'>Order entry date: </p>
            <p>{item.ORDER_ENTRY_DATE}</p>
        </div>
        <div className='block'>
            <p className='p2'>Date of cancellation:</p>
            <p>{item.DATE_OF_CANCELLATION}</p>
            <p className='p2'>Cancellation Moth: </p>
            <p>{item.CANCELLATION_MONTH}</p>
            <p className='p2'>Reason: </p>
            <p>{item.REASON}</p>
        </div>
    </div>
  )
}

export default OrderListItemCanceled
