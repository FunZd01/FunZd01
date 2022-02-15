const Whoiam = () => {

    const email = () => {
        navigator.clipboard.writeText("domingofunez99@gmail.com").then(() =>
            alert("Mail Copied To Clipboard.")
        )
    }

    return <div className={"bg-primary p-2 m-2"}>
        <div className="row p-2 text-center justify-content-center">
            <div className="col col-md-3">
                <img src="https://res.cloudinary.com/dzgnrldzj/image/upload/v1644953326/develop/perf_cleanup_pot6le.jpg"
                     alt="profile image" width={"200"} className={"border border-success rounded"}/>
            </div>
            <div className="col col-md-5 align-self-center">
                <h3>
                    Domingo Funez, <br/>
                    <span className={"text-muted h6"}>
                        fullstack developer
                    </span>

                    <div className={"row justify-content-center"}>
                        <div className={"col"}>
                            <a title={"github"} href={"https://github.com/FunZd01"}
                               target={"blank"}><i className="fab fa-github p-2 m-1 h3"></i>
                            </a>
                            <a title={"Linkdin"}
                               href={"https://www.linkedin.com/in/domingo-funez-6884a0207"}
                               target={"blank"}>
                                <i className="fab fa-linkedin p-2 m-1 h3"></i>
                            </a>

                            <span className="text-success" title={"email"} onClick={email}>
                                <i id={"checked"} className={"far fa-envelope p-2 m-1 h3"}></i>
                            </span>

                            <a title={"Whatsapp"}
                               href={"https://api.whatsapp.com/send?phone=50584489179"}
                               target={"blank"}>
                                <i className="fab fa-whatsapp p-2 m-1 h3"></i>
                            </a>
                        </div>
                    </div>
                </h3>
            </div>
        </div>
    </div>
}

export default Whoiam
