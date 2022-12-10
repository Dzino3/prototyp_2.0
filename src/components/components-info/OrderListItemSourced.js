import React from 'react'

function OrderListItemSourced({item, t}) {
  const todayString = new Date();

  function formatDate(date){
    //parameter date is in the dd.m.yyyy format but we want it to be m.dd.yyyy so we can use it to calculate time differences
    return new Date(date.slice(3,5) + "/" +  date.slice(0,2) + "/" +date.slice(6,10))
  }

  return (
  <div className='progressBarhelper'>
    <div className='orderListItemSourced'>
      <div className='block'>
        {console.log(formatDate("26.09.2022"))}
        <p className='p2'>{t('listItemSLabel1')} </p>
        <p>{item.FDD + " (" + Math.round((formatDate(item.FDD).getTime()-todayString.getTime()) / (1000 * 3600 *24)) + " days left)"}</p>
        <p className='p2'>{t('listItemSLabelRDD')}</p>
        <p>{item.RDD}</p>
        <p className='p2'>{t('listItemSLabel2')} </p>
        <p>{item.FDD_MINUS_RDD}</p>
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
      <p className='p2'>{t('listItemSLabel3')} </p>
        <p>{item.SOLD}</p>
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
    <div className='progressBarImgS'></div>
  </div>
  )
}

export default OrderListItemSourced
