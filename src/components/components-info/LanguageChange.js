import React from 'react'


const lngChange = "Lng";

function LanguageChange({lngs, i18n}) {
  return (
    <div>
      <div className='lngSelect'>
            <details className="custom-select-Lng">
              <summary className="radios-Lng">
              </summary>
              <ul className="list-Lng">
                <li className='kundenLi-Lng'>
                  {Object.keys(lngs).map((lng) => (
                    <input for={lngs[lng].nativeName} className='lngButton' type='button' value={lngs[lng].nativeName} key={lng} onClick={() => { i18n.changeLanguage(lng); lngChange = lngs[lng].nativeName }} disabled={i18n.resolvedLanguage === lng}></input>
                  ))}
                </li>
              </ul>
            </details>
          </div>
    </div>
  )
}

export default LanguageChange
