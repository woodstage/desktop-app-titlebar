import * as React from "react";
import * as ReactDOM from "react-dom";

import TitleBar from "../src/TitleBar";

let isMax = false;
let title = 'Titlebar';
const icon = 'icon';
const onMinimize = () => null;
const onMaximize = () => {
    isMax = true;
    clear();
    render();
    console.log('maximized');
};
const onUnmaximize = () => {
    console.log('unmaximized');
    isMax = false;
    clear();
    render();
}
const onClose = () => null;

const clear = () => {
    ReactDOM.unmountComponentAtNode(document.getElementById("example"));
}

const render = () => {
    ReactDOM.render(
        <TitleBar title={title} icon={icon} isMax={isMax} onMinimize={onMinimize} onMaximize={onMaximize} onUnmaximize={onUnmaximize} onClose={onClose}/>,
        document.getElementById("example")
    );
}

render();