import React from 'react'
import ReactDOM from 'react-dom'
import 'materialize-css/dist/css/materialize.min.css'
import App from './components/App'
import {Provider} from 'react-redux'
import reduxThunk from 'redux-thunk'
import {createStore, applyMiddleware} from 'redux'
import reducers from './reducers'
import axios from 'axios'
window.axios = axios

const store = createStore(reducers, {}, applyMiddleware(reduxThunk))

ReactDOM.render(<Provider store={store}> <App /></Provider>,
    document.querySelector('#root'))