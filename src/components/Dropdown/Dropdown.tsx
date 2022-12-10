import React, { useState } from 'react'
import "./Dropdown.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'

interface Props {
    options: { option: string, value: string }[]
    callback: (e: any) => void
    arrowIcon: boolean
    worldIcon: boolean
    showText: boolean
}
const Dropdown = ({ callback, options, arrowIcon, worldIcon, showText }: Props) => {
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
        <div className='Dropdown' >
            <div className='select'>
                {worldIcon ? <FontAwesomeIcon icon={faGlobe} className="awesomeIcon" /> : null}
                {showText ? selected : null}
                {isOpened ? arrowIcon ? <FontAwesomeIcon icon={faChevronUp} className="awesomeIcon" />  : null: arrowIcon ? <FontAwesomeIcon icon={faChevronDown} className="awesomeIcon" /> : null}
            </div>
            
                <ul onMouseEnter={()=> {setOpen(true)}} onMouseLeave={()=> {setOpen(false)}}>
                    {options.map((element: any, index: number) => {
                        return <li key={index} title={element.value} onClick={(e: any) => { handleOptionClick(e); callback(e) }}>{element.option}</li>
                    })}
                </ul>
                
        </div>
    )
}

export default Dropdown