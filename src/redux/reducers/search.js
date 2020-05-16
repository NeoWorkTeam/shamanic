import { SEARCH_MOVIE_START, SEARCH_MOVIE_ERROR, SEARCH_MOVIE_COMPLETE } from '../../consts/actionTypes'
//import { get } from 'lodash'

const initialState = {}

export default function ( state= initialState, action ){
   
    switch(action.type){
            case SEARCH_MOVIE_START: 
                return { ...state }
            case SEARCH_MOVIE_ERROR:
                return { ...state }
            case SEARCH_MOVIE_COMPLETE:
                return { ...state }
            default:
                return { ...state }
    }

}

