import React from 'react'


function OrderListItemInventory({item}) {
  return (
    <div className='orderListItemInventory'>
        <div className='block'>
            <p className='p2'>Factory delivery date: </p>
            <p>{item.FDD}</p>
            <p className='p2'>ADD: </p>
            <p>{item.ADD}</p>
            <p className='p2'>Inv. date: </p>
            <p>{item.INV_DATE}</p>
        </div>
        <div className='block'>
            <p className='p2'>Billing date: </p>
            <p>{item.BILLING_DATE}</p>
            <p className='p2'>Billing number: </p>
            <p>{item.BILLING_NUMBER}</p>
        </div>
        <div className='block'>
            <p className='p2'>Days on Inv.: </p>
            <p>{item.DAYS_ON_INV}</p>
            <p className='p2'>Order status: </p>
            <p>{item.ORDER_STATUS}</p>
        </div>
        <div className='block'>
            <p className='p2'>Qty.: </p>
            <p>{item.QTY}</p>
        </div>
    </div>
  )
}

export default OrderListItemInventory
