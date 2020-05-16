import { takeLatest } from 'redux-saga/effects'
//import { SEARCH_MOVIE_START, SEARCH_MOVIE_ERROR, SEARCH_MOVIE_COMPLETE } from '../consts/actionTypes'
import { SEARCH_MOVIE_START } from '../../consts/actionTypes'


export function* searchMovie({ payload }){
    try {
        console.log("deos q huevo")
    } catch (error) {
        console.log("Error imbecil")
    }
}

export default function* search(){
    yield takeLatest(SEARCH_MOVIE_START, searchMovie)
}

