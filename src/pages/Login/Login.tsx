import React, { useRef, useState } from 'react'
import './Login.scss'
import logo from "../../assets/logo.png"
import { useHistory } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { Rings } from 'react-loader-spinner'
import axios from 'axios'

const Login = () => {
  const history = useHistory()
  const { t } = useTranslation()
  const label0: React.MutableRefObject<any> = useRef(null)
  const label1: React.MutableRefObject<any> = useRef(null)
  const labels: React.MutableRefObject<any>[] = [label0, label1]
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [isLoading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>("")
  const emailInput = useRef(null)
  const passwordInput = useRef(null)
  const input_values: any[] = [emailInput, passwordInput]
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
  const login_request = () => {
    const request = axios.post(`${process.env.REACT_APP_API_URL}/login`,
      {
        "email": email,
        "password": password
      }, {
      headers: {
        'Access-Control-Allow-Origin': '*',
      }
    })
      .then(response => {
        return response
      })
    return request
  }
  const handleLogin = async () => {
    try {
      setLoading(true);
      const request = await login_request()
      if (request.status === 200) {
        localStorage.setItem("@token", request.data.access_token)
        localStorage.setItem("@refresh", request.data.refresh_token)
        localStorage.setItem("userId", request.data.id)
        history.push('/account')
      } else {
        setLoading(false)
        console.log(request.data)
      }
    }
    catch (err: any) {

      setError(err.response.data.message)
      setLoading(false)
    }
  }
  window.addEventListener('click', (event: MouseEvent) => {
    onInputSelect(event)
  });
  return (
    <div className={isLoading ? 'LoginOff' : 'Login'} id='-1' onClick={onInputSelect}>
      {isLoading ? <Rings
        height='200'
        width='200'
        radius='1'
        color='#f1f2f6'
        ariaLabel='loading'
        wrapperClass='loading'
        wrapperStyle={{ marginTop: '200px' }}
      /> :

        <form autoComplete='off' onSubmit={handleLogin}>
          <img src={logo} alt="" />
          <h1>{t("login")}</h1>
          <label ref={label0}><span>{t("register-email-input")}</span></label>
          <input ref={emailInput} type="email" onSelect={onInputSelect} id="0" onChange={(val: any) => setEmail(val.target.value)} autoComplete="none" autoCorrect='off' />
          <label ref={label1}><span>{t("register-password-input")}</span></label>
          <input ref={passwordInput} type="password" onSelect={onInputSelect} id="1" onChange={(val: any) => setPassword(val.target.value)} autoComplete="none" autoCorrect='off' />
          {error === "" ? null : <div className='error'>{error}</div>}
          <button type="submit">
            {t("login-button")}
          </button>
        </form>
      }
    </div>
  )
}

export default Login