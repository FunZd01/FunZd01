import {useContext, useRef, useState} from 'react'
import {AppContext} from "../provider/provider";

const Lang = () => {
    let langs = useRef(null)
    const [state, setState] = useContext(AppContext)
    const [en, setEn] = useState(true)
    const changeLang = () => {
        (en) ? langs = "es-ES" : langs = "en-US"
        setState({lang: langs})
        setEn(!en)
    }

    return <div className={"fixed-top bg-transparent mt-4 mr-2 text-end"}>
        <p className={"text-success button"}
           style={{textShadow: "1px 1px 3px teal, 0 0 1em black"}}>
            <span onClick={changeLang}
                  style={{cursor: "pointer"}}
                  className={"border border-white p-2 m-2 decoration-none h4"}>
                { en?"EN":"ES" }
            </span>
        </p>
    </div>
}

export default Lang