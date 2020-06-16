
let response = 404


const SaveFirebase = async (props) => {
    try{
        response = 200;
    }catch(error){
        response = 404;
    }
    return response 
}




export default SaveFirebase

