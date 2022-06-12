const FooterC = () => {
    let year = new Date().getFullYear()
    return <div className={"p-4 text-center text-white"}>
        &copy;Funzd-code | {year}
    </div>
}

export default FooterC
