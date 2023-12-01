import axios from 'axios'

const URI = ''

//Como llamada a algo remoto puede fallar, se hace uso del try-catch
const get = async (endpoint) => {
    try{
        const url = URI.concat(endpoint);
        return await axios.get(url);
    }catch(err){
        console.error(err);
        return null;
    }
}

const base = {get}

export default base;