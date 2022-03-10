import {useState, createContext} from "react";

const Provider = (props) =>{
    const [state, setState] = useState({})
    return  <div>
        <AppContext.Provider value={[state,setState]}>
            {props.children}
        </AppContext.Provider>
    </div>
}

export default Provider;
export const AppContext = createContext()