import React,{useEffect} from 'react'
import { useDispatch } from 'react-redux'
import {Container} from 'react-bootstrap'
import queryString from 'query-string'

import { searchMovie } from '../../redux/actions/search'



export default ({location}) => {

    const dispatch = useDispatch()

    useEffect(() => {
        const { movieName } = queryString.parse(location.search)
        dispatch(searchMovie({ movieName }))
    })

    return (<Container>Results</Container>)

}