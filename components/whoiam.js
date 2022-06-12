import Email from "./email";
import Image from 'next/image'

const Whoiam = () => {
    return <div className={"bg-dark m-4"}>
        <div className="row p-2 text-center justify-content-center">
            <div className="col col-md-3">
                <Image
                    src="https://res.cloudinary.com/dzgnrldzj/image/upload/v1644953326/develop/perf_cleanup_pot6le.jpg"
                     alt="profile image" width={"200"} height={"266"} layout={"fixed"}
                       className={"border border-dark rounded"}/>
            </div>
            <div className="col col-md-5 m-3 align-self-center">
                <h3>
                   <span className={"h1 green"}>
                       Domingo Funez
                   </span><br/>
                    <p className={"h5 mb-4 text-white"}>
                        fullstack developer
                    </p>
                    <div className={"row justify-content-center h2 p-2 m-2"}>
                        <div className={"col-12 col-md-6 position-absolute"}>
                            <a title={"github"} href={"https://github.com/FunZd01"}
                               target={"blank"} className={"info text-muted"}>
                                <i className="fab fa-github p-2 m-1"/>
                            </a>
                            <a title={"Linkedin"}
                               href={"https://www.linkedin.com/in/domingo-funez-6884a0207"}
                               target={"blank"} className={"info text-muted"}>
                                <i className="fab fa-linkedin p-2 m-1"/>
                            </a>
                            <a title={"Email"}
                               href={"#"}
                                onClick={Email} className={"info text-muted"}>
                                <i className={"far fa-envelope p-2 m-1"}/>
                            </a>
                            <a title={"Whatsapp"}
                               href={"https://api.whatsapp.com/send?phone=50664313119"}
                               target={"blank"} className={"info text-muted"}>
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
