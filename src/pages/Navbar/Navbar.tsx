import React from 'react'
import "./Navbar.scss"
import { useTranslation } from "react-i18next"
import { Link } from 'react-router-dom'
import Dropdown from '../../components/Dropdown/Dropdown'

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const handleLanguageChange = (e: any) => {
    const lng: string = e.target.title
    i18n.changeLanguage(lng)
    localStorage.setItem("lng", lng)
  }
  return (
    <div className='Navbar'>
      <ul>
        <div>
        <Link className='links' to="/"> SalveDevito</Link>
        <Link className='links' to="/news">{t("news-title")}</Link>
        <Link className='links' to="/downloads"> {t("download-title")}</Link>
        <Link className='links' to="/wiki"> {t("wiki-title")}</Link>
        <Link className='links' to="/highscores"> {t("highscores-title")}</Link>
        </div>
        <div>
        <Link className='links' to="/login"> {t("login-title")}</Link>
        <Link className='links' to="/register"> {t("register-title")}</Link>
        <div className='links'>
          <Dropdown
            callback={handleLanguageChange}
            options={[{ option: "English", value: "en" }, { option: "Polish", value: "pl" }]}
          />
        </div>
        </div>
      </ul>
    </div>
  )
}

export default Navbar