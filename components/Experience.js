import es from './i18n/es'
import en from './i18n/en'
import {data} from '../experienceData'

const Experience = () => {
    return (<div className={"bg-white text-center"}>
        <h1 className={"text-danger"}>
            Laboral Experience
        </h1>
        <div className="row justify-content-center">
            {data.map(({title, description, img, duration}, i) => (
                <div className="col-md-3 col-12 p-2 m-2 rounded" key={i}>
                    <div className="bg-dark rounded h-100 border border-warning">
                        <div className={"p-2 m-1 rounded"}>
                            <img className="card-img-top align-self-center" src={img}
                                 alt="project logo" style={{maxWidth: "100px"}}/>
                        </div>
                        <h4 className="card-title text-success">{title}</h4>
                        <p className={"card-subtitle text-white m-4"}>
                            {duration}
                            <span className={"fa fa-clock m-1"}/>
                        </p>
                        <div className="card-body border border-success p-3 m-2 rounded">
                            <p className="card-text text-danger">
                                {description}
                            </p>
                        </div>
                        <button type={"button"} className={"btn btn-success rounded-pill m-3"}>
                            more..
                        </button>
                    </div>
            </div>
            ))}
        </div>
    </div>)
}

export default Experience