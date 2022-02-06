import {useState, useEffect} from "react";

const Header = () => {
    const [isDark, setIsDark] = useState(true);
    // const [icon, setIcon] = useState("fa fa-moon text-success");
    const darkmode = () => {
        setIsDark(!isDark)
        window.document.documentElement.classList.toggle('dark-mode')
    }

    //get element
    let classname = '';

    useEffect(() => {
        (isDark) ?
            // eslint-disable-next-line react-hooks/exhaustive-deps
            classname = "fa fa-sun text-danger"
            :
            classname = "fa fa-moon text-success"

        document.getElementById('cambio').className = classname + " bg-white p-2 rounded-circle"

    }, [isDark])

    return <div className={"text-center mb-5 p-1"}>
        <h1 className={"fixed-top bg-black text-success display-3 border border-success"}>
            Domingo Funez
            <span className={"p-2 h6 rounded rounded-pill"}>
                <i id={"cambio"} onClick={darkmode}></i>
            </span>
        </h1>
    </div>
}

export default Header
