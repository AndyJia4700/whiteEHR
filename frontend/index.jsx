import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    let preloadedState = undefined;
    let store;
    if(window.currentPhysician){
        preloadedState = {
            entities:{
                physicians: {[window.currentPhysician.id]: window.currentPhysician},
            },
            session: {
                currentPhysician: window.currentPhysician
            }
        };
        store = configureStore(preloadedState);
        delete window.currentPhysician;
    } else {
        store = configureStore(preloadedState);
    }

    ReactDOM.render(<Root store={store}/>, root);
})