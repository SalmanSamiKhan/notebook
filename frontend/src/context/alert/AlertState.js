import { useState } from "react";
import AlertContext from "./AlertContext";

const AlertState = (props) => {
    const [alert, setAlert] = useState()
    const showAlert = (message, type) => {
        setAlert({
            msg: message,
            type: type
        })
        setTimeout(() => {
            setAlert(null) // after 1500 ms set alert to null value
        }, 1500);
    }
    return (
        <AlertContext.Provider value={{ showAlert }}>
          {props.children}
        </AlertContext.Provider>
      )
}

export default AlertState