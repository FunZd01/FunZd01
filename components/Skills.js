const Skills = () => (
    <div className="bg-white p-2 m-2 text-success">
        <h1>Technical Skills</h1>
        <div className="row">

            <div className="col col-md-4  p-4 d-flex flex-column position-static">
                <strong className="d-inline-block mb-2 text-primary">Web Development</strong>
                <h3 className="mb-0">tecnologies</h3>
                <div className="mb-1 text-muted">
                    <i className="fas fa-cogs"/>
                </div>
                <p className="card-text mb-auto">
                    Python, React, Nodejs, Javascript, Html5, css3
                </p>
            </div>
            <div className="col col-md-4  p-4 d-flex flex-column position-static">
                <strong className="d-inline-block mb-2 text-primary">mobile Development</strong>
                <h3 className="mb-0">tecnologies</h3>
                <div className="mb-1 text-muted">
                    <i className="fas fa-mobile-alt"/>
                </div>
                <p className="card-text mb-auto"> Flutter</p>
            </div>
            <div className="col col-md-4  p-4 d-flex flex-column position-static">
                <strong className="d-inline-block mb-2 text-primary">Databases</strong>
                <h3 className="mb-0">tecnologies</h3>
                <div className="mb-1 text-muted">
                    <i className="fas fa-database"/>
                </div>
                <p className="card-text mb-auto">Postgres, Mysql, Mariadb</p>
            </div>
        </div>

    </div>
)

export default Skills
