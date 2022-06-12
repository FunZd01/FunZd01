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

    return <div className={"m-2"} style={{position:"fixed", top:"0", right:"0"}}>
        <button onClick={changeLang}
                style={{cursor: "pointer"}} title={"Change Language"}
                className={"bg-green text-black h2"}>
            {en ? "EN" : "ES"}
        </button>
    </div>
}

export default Lang