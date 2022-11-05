import React, { useState } from 'react'
import "./Dropdown.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEarthEurope, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'

interface Props {
    options: { option: string, value: string }[]
    callback: (e: any) => void
}
const Dropdown = ({ callback, options }: Props) => {
    const translateLocaleToLanguageName = (lng: string | null) => {
        switch (lng) {
            case "en": return "English"
            case "pl": return "Polish"
            default: return "English"
        }
    }
    const [isOpened, setOpen] = useState<boolean>(false);
    const [selected, setSelected] = useState<string>(translateLocaleToLanguageName(localStorage.getItem("lng")) || options[0].option)
    const handleOptionClick = (e: any) => {
        setOpen(!isOpened)
        setSelected(e.target.textContent)
    }
    return (
        <div className='Dropdown'>
            <div className='select' onClick={() => setOpen(!isOpened)}>
                <FontAwesomeIcon icon={faEarthEurope} className="awesomeIcon" />
                {selected}
                {isOpened ? <FontAwesomeIcon icon={faChevronUp} className="awesomeIcon" /> : <FontAwesomeIcon icon={faChevronDown} className="awesomeIcon" />}
            </div>
            {isOpened ?
                <ul>
                    {options.map((element: any, index: number) => {
                        return <li key={index} title={element.value} onClick={(e: any) => { handleOptionClick(e); callback(e) }}>{element.option}</li>
                    })}


                </ul>
                : null}
        </div>
    )
}

export default Dropdown