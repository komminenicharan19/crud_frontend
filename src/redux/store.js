import { createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import rootReducer from './rootReducer'; 

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;





// import { createStore } from 'redux';
// import postReducer from './reducer';

// const store = createStore(postReducer);

// export default store;
