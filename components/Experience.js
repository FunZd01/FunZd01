import es from './i18n/es'
import en from './i18n/en'
import {data} from '../experienceData'
import Image from 'next/image'

const Experience = () => {
    let maxData = false;
    return (<div className={"white text-center p-3"}>
        <h1 className={"subtitle"}>
            Laboral Experience
        </h1>
        <div className="row justify-content-center m-2">
            {data.map(({title, description, img, duration}, i) => {
                if (i > 2) {
                    maxData = true
                } else
                    return (
                        <div className="col-md-3 col-12 p-2 m-2 rounded" key={i}>
                            <div className="card bg-dark rounded h-100 border border-warning">
                                <div className={"p-2 m-1 rounded"}>
                                    <Image className="card-img-top align-self-center" src={img}
                                         alt="project logo" width="100px" height="80px"/>
                                </div>
                                <h4 className="card-title green">{title}</h4>
                                <p className={"card-subtitle text-white m-4"}>
                                    {duration}
                                    <span className={"fa fa-clock m-1"}/>
                                </p>
                                <div className="card-body border border-success p-3 m-2 rounded">
                                    <p className="card-text text-danger">
                                        {description}
                                    </p>
                                </div>
                                <button type={"button"} className={"btn btn-primary rounded-pill m-3"}>
                                    more..
                                </button>
                            </div>
                        </div>
                    )
            })
            }
        </div>
        <div>
            {
                (maxData) ? <button className={"btn rounded text-white"} style={{background:"red"}}>
                        All Laboral Experience
                    </button>
                    : ""
            }
        </div>
    </div>)
}

export default Experience
