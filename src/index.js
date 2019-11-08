import React from 'react'
import ReactDom from 'react-dom'
import App from './component/App'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './reducers'
// import logger from './middlewares/logger'
import loggerEnhancer from './enhancer/logger'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunkMiddleware), loggerEnhancer
));

ReactDom.render(<Provider store = {store}>
    <App />
</Provider>, document.getElementById('root'))