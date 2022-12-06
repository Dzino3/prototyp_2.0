import React from 'react'

function OrderListItemSourced({item, t}) {
  return (
    <div className='orderListItemSourced'>
      <div className='block'>
        <p className='p2'>{t('listItemSLabel1')} </p>
        <p>{item.FDD}</p>
        <p className='p2'>{t('listItemSLabel2')} </p>
        <p>{item.FDD_MINUS_RDD}</p>
        <p className='p2'>{t('listItemSLabel3')} </p>
        <p>{item.SOLD}</p>
      </div>
      <div className='block'>
        <p className='p2'>{t('listItemSLabel4')} </p>
        <p>{item.ORDER_ENTRY_DATE}</p>
        <p className='p2'>{t('listItemSLabel5')} </p>
        <p>{item.ORDER_SOURCE_DATE}</p>
        <p className='p2'>{t('listItemSLabel6')} </p>
        <p>{item.REQ_SHIP_DATE }</p>
      </div>
      <div className='block'>
        <p className='p2'>{t('listItemSLabel7')} </p>
        <p>{item.MACHINE_STATUS !== "" ? item.MACHINE_STATUS : "-"}</p>
        <p className='p2'>{t('listItemSLabel8')} </p>
        <p>{item.ORDER_STATUS}</p>
      </div>
      <div className='block'>
        <p className='p2'>{t('listItemSLabel9')} </p>
        <p>{item.PRES_DATE !== "" ? item.PRES_DATE : "-"}</p>
        <p className='p2'>{t('listItemSLabel10')} </p>
        <p>{item.BASE_CODE_DESCR}</p>
        <p className='p2'>{t('listItemSLabel11')} </p>
        <p>{item.QTY}</p>
        </div>
    </div>
  )
}

export default OrderListItemSourced
