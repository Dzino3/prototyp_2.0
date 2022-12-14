import { t } from 'i18next'
import React from 'react'

//Subcomponent for Canceled orders
function OrderListItemCanceled({ item }) {
  return (
    <div className='progressBarhelper'>
    <div className='orderListItemCanceled'>
      <div className='block'>
        <p className='p2'>{t('listItemCLabel1')} </p>
        <p>{item.RDD !== "" ? item.RDD : "-"}</p>
        <p className='p2'>{t('listItemCLabel3')} </p>
        <p>{item.ORDER_ENTRY_DATE}</p>
      </div>
      <div className='block'>
        <p className='p2'>{t('listItemCLabel4')} </p>
        <p>{item.DATE_OF_CANCELLATION}</p>
        <p className='p2'>{t('listItemCLabel5')} </p>
        <p>{item.CANCELLATION_MONTH}</p>
      </div>
      <div className='block'>
      <p className='p2'>{t('listItemCLabel2')} </p>
      <p>{item.REQ_SHIP_DATE}</p>
      <p className='p2'>{t('listItemCLabel6')} </p>
      <p>{item.REASON}</p>
      </div>
    </div>
    <div className='progressBarImgC'></div>
    </div>
  )
}

export default OrderListItemCanceled
