import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import store from "./Redux/state";
import App from "./App";

let _callSubscriber = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state}
                dispatch={store.dispatch.bind(store)}
                store={store} />
        </BrowserRouter>, document.getElementById('root'));
}

_callSubscriber(store.getState());

store.subscribe(_callSubscriber);