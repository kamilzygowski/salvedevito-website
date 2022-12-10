import React, { useRef, useState } from 'react'
import './Login.scss'
import logo from "../../assets/logo.png"
import {useHistory} from "react-router-dom"
import { useTranslation } from "react-i18next"

const Login = () => {
    const history:any = useHistory()
  const { t } = useTranslation()
  const label0: React.MutableRefObject<any> = useRef(null)
  const label1: React.MutableRefObject<any> = useRef(null)
  const label2: React.MutableRefObject<any> = useRef(null)
  const label3: React.MutableRefObject<any> = useRef(null)
  const labels: React.MutableRefObject<any>[] = [label0, label1, label2, label3]
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [confirmPassword, setConfirmPassword] = useState<string>("")
  const [name, setName] = useState<string>("")
  const emailInput = useRef(null)
  const passwordInput = useRef(null)
  const confirmPasswordInput = useRef(null)
  const nameInput = useRef(null)
  const input_values: any[] = [emailInput, passwordInput, confirmPasswordInput, nameInput]
  const onInputSelect = (e: any) => {
    try {
      labels.forEach((element: React.MutableRefObject<any>, index: number) => {
        if (!input_values[index].current)
          return
        if (input_values[index].current.value !== "") { }
        else {
          element.current.classList.remove("labelMove")
        }
      })
      if (e.target.id === "-1" || e.target.id === "")
        return
      if (!labels[e.target.id].current.classList.contains("labelMove"))
        labels[e.target.id].current.classList.add("labelMove")
    }
    catch (err) {

    }
  }
  window.addEventListener('click', (event: MouseEvent) => {
    onInputSelect(event)
  });
  return (
    <div className='Register' id='-1' onClick={onInputSelect}>
      <img src={logo} alt="" />
      {/*<h1>{t("register-get-started")}</h1>*/}
      <form autoComplete='off' onSubmit={() => history.pushState('/account')}>
        <label ref={label0}><span>{t("register-email-input")}</span></label>
        <input ref={emailInput} type="email" onSelect={onInputSelect} id="0" onChange={(val: any) => setEmail(val)} autoComplete="none" autoCorrect='off'/>
        <label ref={label1}><span>{t("register-password-input")}</span></label>
        <input ref={passwordInput} type="password" onSelect={onInputSelect} id="1" onChange={(val: any) => setPassword(val)} autoComplete="none" autoCorrect='off'/>
        <button type="submit">
          {t("login-button")}
        </button>
      </form>
    </div>
  )
}

export default Login