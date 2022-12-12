import React from 'react'
import { useTranslation } from 'react-i18next'
import "./Downloads.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudArrowDown } from '@fortawesome/free-solid-svg-icons'
const Downloads = () => {
  const { t } = useTranslation()
  return (
    <div className='Downloads'>
      <div className='banner'>
      <div className='download-button-wrapper'>
        <p>{t("download-client")}</p>
        <FontAwesomeIcon icon={faCloudArrowDown} className="icon"/>
        </div>
      </div>
      
        <div className='requirements'>

        </div>
    </div>
  )
}

export default Downloads