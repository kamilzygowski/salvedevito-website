import React, { useRef, useState } from 'react'
import './Register.scss'
import logo from "../../assets/logo.png"
import { useTranslation } from "react-i18next"
import axios from 'axios'
import { Rings } from 'react-loader-spinner'

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
  const [terms, setTerms] = useState<boolean>(false)
  const [error, setError] = useState<string>("")
  const [isLoading, setLoading] = useState<boolean>(false)
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
  const resetInputs = () => {
    setName("")
    setPassword("")
    setConfirmPassword("")
    setName("")
    setTerms(false)
  }
  const register_request = async () => {
    const request = axios.post(`${process.env.REACT_APP_API_URL}/register`, {
      "email": email,
      "password": password,
      "name": name
    },
      {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('@token')}`
        }
      }).then(res => { return res })
    return request
  }
  const handleRegister = async () => {
    if (password !== confirmPassword) {
      setError('Password and repeat password are not the same')
      return
    }
    if (email.length < 4) {
      setError("Email is too short")
      return
    } else if (password.length < 3) {
      setError("Password is too short")
      return
    } else if (name.length < 4) {
      setError("Name is too short")
      return
    } else if (!terms) {
      setError("You have to read and accept the terms of service")
      return
    } else {
      setLoading(true)
      try {
        const response: any = await register_request()
        if (response.status === 200 || response.status === 201) {
          resetInputs()
          setError("")
          setLoading(false)
        }
      }
      catch (err: any) {
        console.warn(err)
        setError(err.response.data.message)
        setLoading(false)
      }

    }
  }

  window.addEventListener('click', (event: MouseEvent) => {
    onInputSelect(event)
  });
  return (
    <div className='Register' id='-1' onClick={onInputSelect}>
      {isLoading ? <Rings
        height='200'
        width='200'
        radius='1'
        color='#f1f2f6'
        ariaLabel='loading'
        wrapperClass='loading'
        wrapperStyle={{ width: '100%', marginTop: '200px', position: 'absolute', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      /> :
        <form autoComplete='off' onSubmit={handleRegister}>
          <img src={logo} alt="" />
          <h1>{t("register-get-started")}</h1>
          <label ref={label0}><span>{t("register-email-input")}</span></label>
          <input ref={emailInput} type="email" onSelect={onInputSelect} id="0" onChange={(val: any) => setEmail(val.target.value)} autoComplete="none" autoCorrect='off' />
          <label ref={label1}><span>{t("register-password-input")}</span></label>
          <input ref={passwordInput} type="password" onSelect={onInputSelect} id="1" onChange={(val: any) => setPassword(val.target.value)} autoComplete="none" autoCorrect='off' />
          <label ref={label2}><span>{t("register-confirmpassword-input")}</span></label>
          <input ref={confirmPasswordInput} type="password" onSelect={onInputSelect} id="2" onChange={(val: any) => setConfirmPassword(val.target.value)} autoComplete="none" autoCorrect='off' />
          <label ref={label3}><span>{t("register-name-input")}</span></label>
          <input ref={nameInput} type="text" onSelect={onInputSelect} id="3" onChange={(val: any) => setName(val.target.value)} autoComplete="none" autoCorrect='off' />
          {error !== "" ? <div className='error'>{error}</div> : null}
          <div className='terms'>
            <input type="checkbox" className='checkbox' onChange={val => setTerms(val.target.checked)} />
            <p>{t("register-terms")}</p>
          </div>
          <button type="submit">
            {t("register-create-account")}
          </button>
        </form>}
    </div>
  )
}

export default Register