const Skills = () => (
    <div className="bg-white p-3 text-success text-center">
        <h1 className={"text-danger"} style={{textShadow: "1px 1px 3px grey"}}>
            Technical Skills
        </h1>
        <div className="row justify-content-between">
            <div
                className="col-11 self-align-center text-center col-md-3 m-4 p-3
                 position-static border border-warning bg-dark rounded">
                <div className="row justify-content-between">
                    <div className="col-12">
                        <img src="https://res.cloudinary.com/dzgnrldzj/image/upload/v1646636673/portfolio/x_rehvue.png"
                             alt="tack" width={50}/>
                    </div>
                    <div className="col-12">
                        <strong className="d-inline-block mb-2 text-success h4">
                            Web Development
                        </strong>
                        <p className="p-2 text-white">
                            tecnologies
                            <span className="m-3">
                        <i className="fas fa-cogs"/>
                    </span>
                        </p>
                        <h5 className="card-text mb-5 p-3 border border-warning rounded-pill p-2">
                            Python, React, Nodejs, Javascript, Html5, css3
                        </h5>
                    </div>
                </div>
            </div>
            <div
                className="col-11 self-align-center text-center col-md-3 m-3 p-3
                 position-static border border-warning bg-dark rounded">
                <div className="row justify-content-between">
                    <div className="col-12">
                        <img src="https://res.cloudinary.com/dzgnrldzj/image/upload/v1646636673/portfolio/x_rehvue.png"
                             alt="tack" width={50}/>
                    </div>
                    <div className="col-12">
                        <strong className="d-inline-block mb-2 text-success h4">
                            mobile Development
                        </strong>
                        <p className="p-2 text-white">
                            tecnologies
                            <span className="m-3">
                        <i className="fas fa-mobile-alt"/>
                    </span>
                        </p>
                        <h5 className="card-text mb-5 p-2 border border-warning rounded-pill p-2">
                            Flutter
                        </h5>
                    </div>
                </div>
            </div>
            <div
                className="col-11 self-align-center text-center col-md-3 m-4 p-2
                 position-static border border-warning bg-dark rounded">
                <div className="row justify-content-between">
                    <div className="col-12">
                        <img src="https://res.cloudinary.com/dzgnrldzj/image/upload/v1646636673/portfolio/x_rehvue.png"
                             alt="tack" width={50}/>
                    </div>
                    <div className="col-12">
                        <strong className="d-inline-block mb-2 text-success h4">
                            Databases
                        </strong>
                        <p className="p-2 text-white">
                            tecnologies
                            <span className="m-3">
                        <i className="fas fa-database"/>
                    </span>
                        </p>
                        <h5 className="card-text mb-5 p-2 border border-warning rounded-pill p-2">
                            Postgres, Mysql, Mariadb
                        </h5>
                    </div>
                </div>
            </div>
        </div>

    </div>
)

export default Skills
