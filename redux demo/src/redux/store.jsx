// import {createStore} from 'redux';

import { todoReducer } from './reducer';

// export const store=createStore(todoReducer);



export const store =configureStore({
    reducer:{todoReducer}
})

