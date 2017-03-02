import * as React from "react"
import * as ReactDOM from "react-dom"
import App from './App'

ReactDOM.render(
    <App/>,
    document.getElementById("example")
);

//Disable double click selection and drag cursor selection
document.addEventListener('mousedown', e => {
    e.stopPropagation();
    e.preventDefault();
})
