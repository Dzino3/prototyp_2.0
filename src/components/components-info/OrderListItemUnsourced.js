import React from 'react'

function OrderListItemUnsourced({item, t}) {
  return (
    <div className='orderListItemUnsourced'>
      
      <div className='block'>
        <p className='p2'>{t('listItemULabel2')} </p>
        <p>{item.ORDER_ENTRY_DATE}</p>
        <p className='p2'>{t('listItemSLabel3')} </p>
        <p>{item.SOLD}</p>
      </div>
      <div className='block'>
      <p className='p2'>{t('listItemCLabel1')} </p>
      <p>{item.RDD}</p>
        <p className='p2'>{t('listItemULabel5')} </p>
        <p>{item.REQ_SHIP_DATE}</p>
      </div>
      <div className='block'>
        <p className='p2'>{t('listItemULabel6')} </p>
        <p>{item.PRES_DATE !== "" ? item.PRES_DATE : "-"}</p>
        <p className='p2'>{t('listItemULabel7')} </p>
        <p>{item.BASE_CODE_DESCR}</p>
      </div>
      <div className='block'>
        <p className='p2'>{t('listItemULabel8')} </p>
        <p>{item.QTY}</p>
      </div>
    </div>
  )
}

export default OrderListItemUnsourced
