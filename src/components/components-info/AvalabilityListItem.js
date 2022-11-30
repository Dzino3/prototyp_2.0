import React, { useState, useEffect } from 'react'


function AvalabilityListItem({ item, selec = false, t}) {

  const [selected, setSelected] = useState(selec);

  const toggle = () => {
    setSelected(!selected)
  }

  return (
    <div>
      <div className='item'>
        <div className='beforeDiv' onClick={() => toggle()}>
          <div className='orderDiv1'>
            <div></div>
            <h3 className='listItemH3'>{item.PRODUCT}</h3>

            <div className='orderDiv2'>
              <div className='orderListDivFlex'>
                <p className='p1'>{t('avalItemLabel1')} {item.BASE_CODE}</p>
                <p></p>
              </div>
              <div className='orderListDivFlex'>
                <p className='p1'>{t('avalItemLabel2')} {item.BUNDLE}</p>
                <p></p>
              </div>
            </div>

          </div>
            <div className='orderListDivFlex'>
              <p className='p1Status'>{t('avalItemLabel3')} {item.CATEGORY}</p>
              <p></p>
            </div>


          <span className='toggleSpan'>{selected === true ? '▼' : '◄'}</span>
        </div>
        <div>
          <div className={selected === true ? 'afterDivshow' : 'afterDiv'}>
            <div className='afterDiv1'>
              <div className='flex'>
                <p className='p3'>{t('avalItemLabel4')}: {item.BEST_CASE}</p>
                <p className='p3'>{t('avalItemLabel5')}: {item.WORST_CASE}</p>
                <p className='p3'>{t('avalItemLabel6')}: {item.COMMENTS_RESTRICTIONS}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AvalabilityListItem
