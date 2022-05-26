import {useContext} from "react";
import {AppContext} from "../provider/provider";
import en from './i18n/en'
import es from './i18n/es'

const Skills = () => {
    const [state, setState] = useContext(AppContext)
    const lang = (state.lang == null || state.lang === "en-US") ? en : es
    return <div className="white p-3 text-success text-center">
        <h1 className={"subtitle"}>
            {lang.title}
        </h1>
        <div className="row justify-content-center">
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
                            {lang.card2_title}
                        </strong>
                        <p className="p-2 text-white">
                            {lang.card_sub}
                            <span className="m-3">
                        <i className="fas fa-mobile-alt"/>
                    </span>
                        </p>
                        <h5 className="text-danger mb-5 p-2 border border-success rounded p-2">
                            Flutter
                        </h5>
                    </div>
                </div>
            </div>
            <div
                className="col-11 self-align-center text-center col-md-3 m-2 p-1
                 position-static border border-warning bg-dark rounded">
                <div className="row justify-content-between">
                    <div className="col-12">
                        <img src="https://res.cloudinary.com/dzgnrldzj/image/upload/v1646636673/portfolio/x_rehvue.png"
                             alt="tack" width={50}/>
                    </div>
                    <div className="col-12">
                        <strong className="d-inline-block mb-2 text-success h4">
                            {lang.card1_title}
                        </strong>
                        <p className="p-2 text-white">
                            {lang.card_sub}
                            <span className="m-3">
                                <i className="fas fa-cogs"/>
                            </span>
                        </p>
                        <h5 className="text-danger mb-5 p-3 border border-success rounded p-2">
                            Python, React, Nodejs, Javascript, Html5, css3
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
                            {lang.card3_title}
                        </strong>
                        <p className="p-2 text-white">
                            {lang.card_sub}
                            <span className="m-3">
                        <i className="fas fa-database"/>
                    </span>
                        </p>
                        <h5 className="text-danger mb-5 p-2 border border-success rounded p-2">
                            Postgres, Mysql, Mariadb
                        </h5>
                    </div>
                </div>
            </div>
        </div>

    </div>
}

export default Skills
