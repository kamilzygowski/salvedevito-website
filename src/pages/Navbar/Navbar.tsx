import React, { useEffect, useState } from 'react'
import "./Navbar.scss"
import "./StartButton.scss"
import { useTranslation } from "react-i18next"
import { Link } from 'react-router-dom'
import Dropdown from '../../components/Dropdown/Dropdown'

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isLoggedIn, setLoggedIn] = useState<boolean>(false)
  const handleLanguageChange = (e: any) => {
    const lng: string = e.target.title
    i18n.changeLanguage(lng)
    localStorage.setItem("lng", lng)
  }
  useEffect(() => {
    if(localStorage.getItem("userId") !== null || localStorage.getItem("userId") !== ""){
      setLoggedIn(true)
    }else {
      setLoggedIn(false)
      console.log(localStorage.getItem("userId"))
    }
  })
  return (
    <div className='Navbar'>
      <ul>
        <div>
          <Link className='links' to="/"><div>SalveDevito</div></Link>
          <Link className='links' to="/news"><div>{t("news-title")}</div></Link>
          <Link className='links' to="/downloads"><div>{t("download-title")}</div></Link>
          <Link className='links' to="/wiki"><div>{t("wiki-title")}</div></Link>
          <Link className='links' to="/highscores"><div>{t("highscores-title")}</div></Link>
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
          {isLoggedIn ?  
          <Link className='links' to="/login"> {t("login-title")}</Link>
          :<Link className='links' to="/login"> {t("account-title")}</Link>}
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