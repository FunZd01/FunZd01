const FooterC = () => {
    let year = new Date().getFullYear()
    return <div className={"p-4 text-center h-2"}>
        <span className={"m-2"}>
            <img src="/favicon.ico" alt="" width={30}/>
        </span>
        &copy;Funzd-develop | {year}
    </div>
}

export default FooterC