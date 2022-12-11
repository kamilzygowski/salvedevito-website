import React, { useEffect, useState } from 'react'
import "./Account.scss"
import axios from "axios"
import { Rings } from "react-loader-spinner"
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faTrashCan, faKey, faFileText, faPersonWalkingArrowRight, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { useContext } from 'react'
import UserContext from '../../UserContext'

interface User{
  email: string;
  id: number;
  name: string;
}
const Account = () => {
  const { t, i18n } = useTranslation();
  const { setUser, name, email, id, isLoggedIn } = useContext(UserContext)
  const [isLoading, setLoading] = useState<boolean>(true)
  const get_user = () => {
    const request = axios.get(`${process.env.REACT_APP_API_URL}/user/${localStorage.getItem('userId')}`,
      {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('@token')}`
        }
      }).then(res => { return res })
    return request
  }
  const prepareUserInfo = async () => {
    const user = await get_user()
    localStorage.setItem("user", JSON.stringify(user.data))
    setUser(user.data.name, user.data.email, user.data.id, true)
    setLoading(false)
  }
  useEffect(() => {
    prepareUserInfo()
  }, [])
  return (
    <div className='Account'>
      {isLoading ? <Rings
        height='200'
        width='200'
        radius='1'
        color='#f1f2f6'
        ariaLabel='loading'
        wrapperClass='loading'
        wrapperStyle={{ width:'100%', marginTop: '200px', position: 'absolute', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      /> :
        <div className='AccountWrapper'>
          <div className='settings'>
            <p className='settingsTitle'>{t("settings-title")}</p>
            <ul className='settingsList'>
            <Link to="/" className='settingsLinks'><FontAwesomeIcon icon={faUser} className="icon"/><p>{t("myaccount-link")}</p></Link>
            <Link to="/" className='settingsLinks'><FontAwesomeIcon icon={faTrashCan} className="icon"/><p>{t("deleteaccount-link")}</p></Link>
            <Link to="/" className='settingsLinks'><FontAwesomeIcon icon={faKey} className="icon"/><p>{t("changepassword-link")}</p></Link>
            <Link to="/" className='settingsLinks'><FontAwesomeIcon icon={faEnvelope} className="icon"/><p>{t("changeemail-link")}</p></Link>
            <Link to="/" className='settingsLinks'><FontAwesomeIcon icon={faFileText} className="icon"/><p>{t("changename-link")}</p></Link>
            <Link to="/logoutscreen" className='settingsLinks'><FontAwesomeIcon icon={faPersonWalkingArrowRight} className="icon"/><p>{t("logout-link")}</p></Link>
            </ul></div>
          <div className='informations'>
          <p className='mainHeader'>{t("myaccount-title")}</p>
          <div className='infoWrapper'>
          <p className='title'>{t("generalinfo-title")}</p>
          <ul className='lists'>
            <li><p className='leftRow dark'>{t("emailaddress")}</p><p className='rightRow light'>{email}</p></li>
            <li><p className='leftRow light'>{t("createdat")}</p><p className='rightRow dark'>09.07.2022</p></li>
          </ul>
            </div>
        <div className='infoWrapper'>
        <p className='title'>{t("characterinfo-title")}</p>
          <ul className='lists'>
            <li><p className='leftRow dark'>{t("name")}</p><p className='rightRow light'>{name}</p></li>
            <li><p className='leftRow light'>{t("level")}</p><p className='rightRow dark'>15</p></li>
            <li><p className='leftRow dark'>{t("active-class")}</p><p className='rightRow light'>Hunter</p></li>
            <li><p className='leftRow light'>{t("arena-ranking")}</p><p className='rightRow dark'>1950</p></li>
            <li><p className='leftRow dark'>{t("guild")}</p><p className='rightRow light'>{t("none")}</p></li>
          </ul>
          </div>
          
          </div>
        </div>}
    </div>
  )
}

export default Account