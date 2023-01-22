import { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
    const s1 = {
        "name":"Salman",
        "class":"5a"
    }
    const [state,setState] = useState(s1)
    // update function
    const update =()=>{
        setTimeout(()=>{
            setState({
                "name":"Palman",
                "class":"10a"
            })
        },3000)
    }
    // here value={{state:state, update:update}} es6 short syntax below
    return(
        <NoteContext.Provider value={{state,update}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState