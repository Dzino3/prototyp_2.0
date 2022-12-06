import React from 'react'


function OrderListItemInventory({item, t}) {
  return (
    <div className='orderListItemInventory'>
        <div className='block'>
            <p className='p2'>{t('listItemILabel1')} </p>
            <p>{item.FDD}</p>
            <p className='p2'>{t('listItemILabel2')} </p>
            <p>{item.ADD}</p>
        </div>
        <div className='block'>
            <p className='p2'>{t('listItemILabel4')} </p>
            <p>{item.BILLING_DATE !== "" ? item.BILLING_DATE : "-"}</p>
            <p className='p2'>{t('listItemILabel5')} </p>
            <p>{item.BILLING_NUMBER !== "" ? item.BILLING_NUMBER : "-"}</p>
        </div>
        <div className='block'>
            <p className='p2'>{t('listItemILabel6')} </p>
            <p>{item.DAYS_ON_INV}</p>
            <p className='p2'>{t('listItemILabel3')} </p>
            <p>{item.INV_DATE}</p>
        </div>
        <div className='block'>
            <p className='p2'>{t('listItemILabel8')} </p>
            <p>{item.QTY}</p>
        </div>
    </div>
  )
}

export default OrderListItemInventory
