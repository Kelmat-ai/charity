import { useDispatch } from 'react-redux'
import {ADD} from '../types/types'

let counternu = 0
export default add = (data) =>(dispatch)=>{
     dispatch({
    type:ADD,
    payload: {
     data: ++counternu
}
})
}