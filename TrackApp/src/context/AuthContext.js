import { AsyncStorage } from 'react-native'
import createDataContext from './createDataContext'
import trackerApi from '../api/tracker'
import { navigate } from '../navigationRef'

const authReducer = (state, action) => {
  switch (action.type) {
    case 'add_error':
      return { ...state, errorMessage: action.payload }
    case 'signin':
      return { errorMessage: '', token: action.payload }
    default:
      return state;
  }
};

const signup = dispatch => async ({ email, password }) => {
  try {
    const response = await trackerApi.post('/signup', { email, password })
    await AsyncStorage.setItem('token', response.data.token)
    dispatch({ type: 'signin', payload: response.data.token })
    navigate('TrackList')
  } catch (err) {
    dispatch({ type: 'add_error', payload: 'something went wrong with signup' })
  }
};


const signin = dispatch =>async ({ email, password }) => {
  try {
     const response= await trackerApi.post('/signin', { email, password })
     await AsyncStorage.setItem('token', response.data.token)
     dispatch({type:'signin',payload:response.data.token})
     navigate('TrackList')
  } catch (err) {
       dispatch({
         type:'add_error',
         payload:'Somthing went wrong with signin'
       })
  }
}


const signout = dispatch => () => {

}



export const { Provider, Context } = createDataContext(
  authReducer,
  { signin, signout, signup },
  { token: null, errorMessage: '' }
);