import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import App1 from './components/LandingNew/index'
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import axios from "axios";
import reducer from './reducers'
window.axios = axios;

const store =  createStore(reducer,{},applyMiddleware(reduxThunk))

ReactDOM.render(
    <Provider store={store}>
        <App />
        {/* <App1 /> */}
    </Provider>,
     document.querySelector('#root')
)

