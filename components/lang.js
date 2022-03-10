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

    return <div className={"row fixed-top bg-transparent mt-4"}>
        <div className="col-6">
             <img src="/favicon.ico" alt="logo" width={50} className={"bg-success rounded border border-danger"}/>
        </div>
        <div className="col-6 text-end">
            <button onClick={changeLang}
                style={{cursor: "pointer"}}
                className={"bg-success text-black p-2 m-3 h4"}>
            {en ? "EN" : "ES"}
        </button>
        </div>
    </div>
}

export default Lang