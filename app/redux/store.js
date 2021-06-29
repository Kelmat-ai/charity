
import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import rootreducer from './reducer';


const initialstate={};

const middleware = [thunk];
// const store = createStore(rootreducer,
//     initialstate,composeWithDevTools(applyMiddleware(...middleware)))

    const store = createStore(
        rootreducer, initialstate, /* preloadedState, */
     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
      );

export default store;