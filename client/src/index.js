import React, { createContext } from 'react';
import ReactDom from 'react-dom'
import App from './App';
import DeviceStore from './store/DeviceStore';
import UserStore from './store/UserStore';

export const Context = createContext(null)

ReactDom.render(
    <Context.Provider value={{
        user: new UserStore(),
        device: new DeviceStore()
    }}>
        <App />
    </Context.Provider>,
    document.getElementById('root'));



