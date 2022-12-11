import React, { useEffect, useState } from 'react'
import "./LogoutScreen.scss"
import { Rings } from "react-loader-spinner"
import axios from "axios"
import { useHistory } from 'react-router'

const LogoutScreen = () => {
    const [isLoading, setLoading] = useState<boolean>(true)
    const history = useHistory()
    const logout_request = async () => {
        const request = axios.post(`${process.env.REACT_APP_API_URL}/logout`, {},

            {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem("@token")}`
                }
            }).then(res => { return res })
        return request
    }
    const handleLogout = async () => {
        try {
            const result = await logout_request()
            console.log(result)
            if (result.status === 200 || result.status === 401) {
                setLoading(false)
                setTimeout(() => {
                    history.push("/")
                }, 4500)
            }
        } catch (error) {
            console.warn(error)
        }
    }
    useEffect(() => {
        handleLogout()
    }, [])
    return (
        <div className='LogoutScreen'>
            {isLoading ? <Rings
                height='200'
                width='200'
                radius='1'
                color='#f1f2f6'
                ariaLabel='loading'
                wrapperStyle={{ marginTop: '200px', position: 'absolute', left: '0', right: '0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            /> :
                <div className="logoutScreenWrapper">
                    <h2>Success</h2>
                    <p>You logged out successfuly</p>
                </div>}
        </div>
    )
}

export default LogoutScreen