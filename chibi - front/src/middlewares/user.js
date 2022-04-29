import axios from 'axios';

import { 
  connectUser, getAddresses, saveOrders, messageLogin, ADD_NEW_ADDRESS, LOGIN, LOGOUT, SIGNUP, UPDATE_USER, UPDATE_PASSWORD, GET_USER_ADDRESSES, EDIT_ADDRESS, DELETE_ADDRESS, GET_ORDERS
} from '../actions/auth';

import { setMessage } from '../actions/message';

const axiosInstance = axios.create({
  baseURL: 'https://chibi-api.herokuapp.com',
});

const userMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case LOGIN: {
        axiosInstance.post(
          '/login',
          {
            mail: action.mail,
            password: action.password,
          },
        ).then(
          (response) => {
            console.log(response)
            if (response.data.token) {
              console.log("login",response)
              localStorage.setItem("user", JSON.stringify(response.data.user));
              localStorage.setItem("token", JSON.stringify(response.data.token));
              store.dispatch(connectUser(response.data));
              store.dispatch({type: GET_USER_ADDRESSES});
            } else if (response.data = "Email ou mot de passe incorrect") {
              store.dispatch(messageLogin(response.data));
            }
          },
        ).catch(
          (error) => console.log('error', error),
        );
        next(action);
        break;
    }
    case LOGOUT:
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      localStorage.removeItem("deliveryAddress");
      localStorage.removeItem("userAddresses");
      localStorage.removeItem("favorites");
      next(action);
      break;
    case SIGNUP: {
      axiosInstance.post(
        '/SignUp',
        {
          first_name: action.firstname, 
          last_name: action.lastname, 
          mail: action.mail, 
          password: action.password, 
          passwordConfirm: action.passwordConfirm,
          birthday_date: action.birthdayDate, 
          phone_number: action.phoneNumber, 
          street_number: action.streetNumber, 
          name_of_the_road: action.nameOfTheRoad, 
          postal_code: action.postalCode, 
          city: action.city, 
          gender: action.gender 
        },
      ).then(
        (response) => {
          console.log(response)
          store.dispatch(setMessage(response.data));
        },
      ).catch(
        (error) => console.log('error', error),
      );
      next(action);
      break;
    }  
    case UPDATE_USER: {
      const { token, user: {
        id,
        first_name,
        last_name,
        mail,
        gender,
        birthday_date,
        phone_number,
        principal_street_number,
        principal_name_of_the_road,
        principal_postal_code,
        principal_city } } = store.getState().auth;

        axiosInstance.patch(
        `/account/${id}`,
        {
          id,
          first_name,
          last_name,
          mail,
          gender,
          birthday_date,
          phone_number,
          principal_street_number,
          principal_name_of_the_road,
          principal_postal_code,
          principal_city
        },
        {
          credentials: 'include',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        } 
      ).then((response) => {
        localStorage.setItem("user", JSON.stringify(response.data));
        console.log("l'id :");

        console.log(response);
      },
      ).catch(
        (error) => console.log('error', error),
      );
      next(action);
      break;
    }
    case UPDATE_PASSWORD: {
      const { token, user: {
        mail,
      } } = store.getState().auth;
      
        axiosInstance.patch(
        '/newPassword',
        {
          mail,
          password: action.password,
          passwordConfirm: action.passwordConfirm,
          actualPassword: action.actualPassword,
        },
        {
          credentials: 'include',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        } 
      ).then((response) => {
        console.log("update password",response);
      },
      ).catch(
        (error) => console.log('error', error),
      );
      next(action);
      break;
    }
    case GET_USER_ADDRESSES: {
      const { token, user: {
        id,
      } } = store.getState().auth;
      
      axiosInstance.get(
        `/address/${id}`,
        {
          headers: { "Authorization": `Bearer ${token}` }
        }
      ).then((response) => {
        console.log("adresses", response)
        localStorage.setItem("userAddresses", JSON.stringify(response.data));
        store.dispatch(getAddresses(response.data));
      },
      ).catch(
        (error) => console.log('error', error),
      );
      next(action);
      break;
    }
    case ADD_NEW_ADDRESS: {
      const { token, user: {
        id,
      } } = store.getState().auth;

      axiosInstance.post(
        '/newAddress',
        {            
          first_name: action.address.first_name,
          last_name: action.address.last_name,
          phone_number: action.address.phone_number,
          street_number: action.address.street_number,
          name_of_the_road: action.address.name_of_the_road,
          postal_code: action.address.postal_code,
          city: action.address.city,
          user_id: id
        }, 
        {
          credentials: 'include',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        } 
      ).then((response) => {
        if(response.data.first_name) {
          store.dispatch({type: GET_USER_ADDRESSES});
        }
      },
      ).catch(
        (error) => console.log('error', error),
      );
      next(action);
      break;
    }
    case EDIT_ADDRESS: {
      const { token, user: {
        id,
      } } = store.getState().auth;
      console.log("action.address",action.address)
      axiosInstance.patch(
        `/address/${action.address.id}`,
        {            
          first_name: action.address.first_name,
          last_name: action.address.last_name,
          phone_number: action.address.phone_number,
          street_number: action.address.street_number,
          name_of_the_road: action.address.name_of_the_road,
          postal_code: action.address.postal_code,
          city: action.address.city,
          user_id: id
        }, 
        {
          credentials: 'include',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        } 
      ).then((response) => {
        if(response.data) {
          console.log(response)
          store.dispatch({type: GET_USER_ADDRESSES});
        }
      },
      ).catch(
        (error) => console.log('error', error),
      );
      next(action);
      break;
    }
    case DELETE_ADDRESS: {
      const { token, user: {
        id,
      } } = store.getState().auth;

      axiosInstance.delete(
        `/address/${action.address.id}`,
        {
          data: {            
            first_name: action.address.first_name,
            last_name: action.address.last_name,
            phone_number: action.address.phone_number,
            street_number: action.address.street_number,
            name_of_the_road: action.address.name_of_the_road,
            postal_code: action.address.postal_code,
            city: action.address.city,
            user_id: id
          }, 
          headers: { "Authorization": `Bearer ${token}` }
        }
      ).then((response) => {
        if(response.data) {
          console.log("supprimé",response.data)
          store.dispatch({type: GET_USER_ADDRESSES});
        }
      },
      ).catch(
        (error) => console.log('error', error),
      );
      next(action);
      break;
    }
    case GET_ORDERS: {
      const { token, user: {
        id,
      } } = store.getState().auth;

      axiosInstance.get(
        `/accountOrder/${id}`,
        {
          headers: { "Authorization": `Bearer ${token}` }
        }
      ).then((response) => {
        if(response.data.length) {
          localStorage.setItem("orders", JSON.stringify(response.data));
          store.dispatch(saveOrders(response.data));
        }
      },
      ).catch(
        (error) => console.log('error', error),
      );
      next(action);
      break;
    }
    default:
      next(action);
  }
};

export default userMiddleware;