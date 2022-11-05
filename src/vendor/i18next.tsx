import i18next from "i18next"
import { initReactI18next } from "react-i18next"
import * as en from '../lang/en.json'
import * as pl from '../lang/pl.json'

i18next.use(initReactI18next).init({
    resources: {
        en: {
            translation: en
        },
        pl: {
            translation: pl
        }
    },
    lng: localStorage.getItem("lng") || "en"
})

export default i18next;