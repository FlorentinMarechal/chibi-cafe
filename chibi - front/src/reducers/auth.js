import { 
  CONNECT_USER, LOGOUT, REGISTER_USER, SET_USER_FIELD, GET_ADDRESSES, SAVE_ORDERS, MESSAGE_LOGIN 
} from '../actions/auth';

const user = JSON.parse(localStorage.getItem("user"));
const userAddresses = JSON.parse(localStorage.getItem("userAddresses"));
const token = JSON.parse(localStorage.getItem("token"));
const orders = JSON.parse(localStorage.getItem("orders"));

export const initialState = user
? { isLoggedIn: true, user, userAddresses, token, orders }
: { isLoggedIn: false, user: null, userAddresses: null, token: null, orders: null };

const auth = (state = initialState, action = {}) => {
  switch (action.type) {
    case CONNECT_USER:
      return {
        ...state,
        user: action.data.user,
        isLoggedIn: true,
        token: action.data.token
      };
    case LOGOUT:
      return {
        ...state,
        user: null,
        isLoggedIn: false, 
        token: null,
        userAddresses: null,
        orders: null
      };
    case REGISTER_USER:
      return {
        ...state,
        isLoggedIn: false,
      };
    case SET_USER_FIELD:
      return {
        ...state,
        user: {...state.user, [action.name]: action.value},
      }
    case GET_ADDRESSES:
      return {
        ...state,
        userAddresses: action.data
      }
    case SAVE_ORDERS:
      return {
        ...state,
        orders: action.data
      }
    case MESSAGE_LOGIN:
      return {
        ...state,
        messageLogin: action.data
      }
    default:
      return state;
  }
};

export default auth;