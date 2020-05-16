import axios from 'axios'


const baseURL = ' https://www.omdbapi.com/?i=tt3896198&apikey=cdb0f9e8'


export const appiCall = (url,data,headers, method ) => axios ({
    method,
    url: baseURL + url,
    data,
    headers
})

