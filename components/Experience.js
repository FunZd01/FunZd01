import es from './i18n/es'
import en from './i18n/en'
import {data} from '../experienceData'

const Experience = () => {
    return (<div className={"bg-white text-center"}>
        <h1 className={"text-danger"}>
            Laboral Experience
        </h1>
        <div className="row justify-content-center">
            {data.map(({title, description, img}, i) => (
                <div className="col-md-3 col-12 p-3 m-2 rounded" key={i}>
                    <div className="card h-100">
                        <div className={"p-2 m-1 rounded"}>
                            <img className="card-img-top align-self-center" src={img}
                                 alt="project logo" style={{maxWidth: "100px"}}/>
                        </div>
                        <h4 className="card-title text-danger">{title}</h4>
                        <div className="card-body border border-success p-3 m-2 rounded">
                            <p className="card-text text-success">
                                {description}
                            </p>
                        </div>
                        <button type={"button"} className={"btn btn-danger rounded-pill m-2 text-white"}>
                            more..
                        </button>
                    </div>
            </div>
            ))}
        </div>
    </div>)
}

export default Experience