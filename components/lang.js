import {useRouter} from 'next/router'
import {useState} from 'react'

const Lang = () => {
    const lang = useRouter()
    console.log(lang.locale)
    const [en, setEn] = useState(true)
    const changeLang = () => {
        if (en) {
            lang.replace("/","/es-ES", {shallow: true})
        } else {
            lang.replace("/","/en-US", {shallow: true})
        }
        setEn(!en)
    }
    return <div className={"fixed-top bg-transparent mt-4 mr-2 text-end"}>
        <p className={"text-success button"}
           style={{textShadow: "1px 1px 3px teal, 0 0 1em black"}}>
            <span onClick={changeLang}
                  style={{cursor: "pointer"}}
                  className={"border border-white p-2 m-2 decoration-none h4"}>
                {lang.locale !== "es-ES" ? "EN" : "ES"}
            </span>
        </p>
    </div>
}

export default Lang