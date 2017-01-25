/**
 * Created by Admin on 12/28/2016.
 */
import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import { authReducer} from './auth/auth';


export default combineReducers({
    routing: routerReducer,
    auth: authReducer,
});
