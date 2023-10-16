import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import store from "./Redux/state";
import App from "./App";

let _callSubscriber = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={store.getState()}
                addPost={store.addPost.bind(store)}
                updateNewPostText={store.updateNewPostText.bind(store)} />
        </BrowserRouter>, document.getElementById('root'));
}

_callSubscriber(store.getState());

store.subscribe(_callSubscriber);