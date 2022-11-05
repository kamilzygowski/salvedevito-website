import React from 'react'
import "./Navbar.scss"
import { useTranslation } from "react-i18next"
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
        <li>SalveDevito</li>
        <li>{t("news-title")}</li>
        <li>{t("download-title")}</li>
        <li>{t("wiki-title")}</li>
        <li>{t("highscores-title")}</li>
        </div>
        <div>
        <li>{t("login-title")}</li>
        <li>{t("register-title")}</li>
        <li>
          <Dropdown
            callback={handleLanguageChange}
            options={[{ option: "English", value: "en" }, { option: "Polish", value: "pl" }]}
          />
        </li>
        </div>
      </ul>
    </div>
  )
}

export default Navbar