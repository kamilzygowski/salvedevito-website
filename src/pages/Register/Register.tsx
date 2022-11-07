import React, { useRef, useState } from 'react'
import './Register.scss'
import logo from "../../assets/logo.png"
import { useTranslation } from "react-i18next"

const Register = () => {
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
      <form autoComplete='off'>
        <label ref={label0}><span>{t("register-email-input")}</span></label>
        <input ref={emailInput} type="email" onSelect={onInputSelect} id="0" onChange={(val: any) => setEmail(val)} autoComplete="none" autoCorrect='off'/>
        <label ref={label1}><span>{t("register-password-input")}</span></label>
        <input ref={passwordInput} type="password" onSelect={onInputSelect} id="1" onChange={(val: any) => setPassword(val)} autoComplete="none" autoCorrect='off'/>
        <label ref={label2}><span>{t("register-confirmpassword-input")}</span></label>
        <input ref={confirmPasswordInput} type="password" onSelect={onInputSelect} id="2" onChange={(val: any) => setConfirmPassword(val)} autoComplete="none" autoCorrect='off'/>
        <label ref={label3}><span>{t("register-name-input")}</span></label>
        <input ref={nameInput} type="text" onSelect={onInputSelect} id="3" onChange={(val: any) => setName(val)} autoComplete="none" autoCorrect='off'/>
        <div className='terms'>
          <input type="checkbox" className='checkbox' />
          <p>{t("register-terms")}</p>
        </div>
        <button type="submit">
          {t("register-create-account")}
        </button>
      </form>
    </div>
  )
}

export default Register