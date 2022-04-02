import Email from "./email";

const Whoiam = () => {
    return <div className={"bg-dark m-4"}>
        <div className="row p-2 text-center justify-content-center">
            <div className="col col-md-3">
                <img src="https://res.cloudinary.com/dzgnrldzj/image/upload/v1644953326/develop/perf_cleanup_pot6le.jpg"
                     alt="profile image" width={"200"} className={"border border-danger rounded"}/>
            </div>
            <div className="col col-md-5 m-3 align-self-center">
                <h3>
                   <span className={"h1"}>
                       Domingo Funez
                   </span><br/>
                    <p className={"text-danger h5 mb-4"}>
                        fullstack developer
                    </p>
                    <div className={"row justify-content-center h2 m-2 p-2"}>
                        <div className={"col position-absolute"}>
                            <a title={"github"} href={"https://github.com/FunZd01"}
                               target={"blank"}>
                                <i className="fab fa-github p-2 m-1"/>
                            </a>
                            <a title={"Linkedin"}
                               href={"https://www.linkedin.com/in/domingo-funez-6884a0207"}
                               target={"blank"}>
                                <i className="fab fa-linkedin p-2 m-1"/>
                            </a>
                            <a title={"Email"}
                               href={"#"}
                                onClick={Email}>
                                <i className={"far fa-envelope p-2 m-1"}/>
                            </a>
                            <a title={"Whatsapp"}
                               href={"https://api.whatsapp.com/send?phone=50584489179"}
                               target={"blank"}>
                                <i className="fab fa-whatsapp p-2 m-1"/>
                            </a>
                        </div>
                    </div>
                </h3>
            </div>
        </div>
    </div>
}

export default Whoiam
