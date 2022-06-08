import React from 'react'
import { createStore, applyMiddleware, compose } from "redux"
import ReactDOM from 'react-dom/client'
import { Provider } from "react-redux"
import allReducers from './reducers'
import thunk from "redux-thunk"
import App from './App'
import './index.scss'

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

const store = createStore(allReducers, compose(applyMiddleware(thunk)))

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
        <App />
    </Provider>
  </React.StrictMode>
)
