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

    return <div className={"fixed-top bg-transparent mt-4 text-end"}>
        <button onClick={changeLang}
                style={{cursor: "pointer"}} title={"Change Language"}
                className={"bg-success text-black p-2 m-3 h4"}>
            {en ? "EN" : "ES"}
        </button>
    </div>
}

export default Lang