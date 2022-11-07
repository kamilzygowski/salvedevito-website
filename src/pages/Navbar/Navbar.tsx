import React from 'react'
import "./Navbar.scss"
import "./StartButton.scss"
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
          <span className='lang'>
            <Dropdown
              callback={handleLanguageChange}
              options={[{ option: "English", value: "en" }, { option: "Polish", value: "pl" }]}
              arrowIcon={false}
              worldIcon={true}
              showText={false}
            />
          </span>
          <Link className='links' to="/login"> {t("login-title")}</Link>
          <Link className='links' to="/register"> {t("register-title")}</Link>
          <div className="buttons">
            <button className="blob-btn">
              START
              <span className="blob-btn__inner">
                <span className="blob-btn__blobs">
                  <span className="blob-btn__blob"></span>
                  <span className="blob-btn__blob"></span>
                  <span className="blob-btn__blob"></span>
                  <span className="blob-btn__blob"></span>
                </span>
              </span>
            </button>
          </div>

        </div>
      </ul>
    </div>
  )
}

export default Navbar