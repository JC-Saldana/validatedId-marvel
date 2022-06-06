import axios from "axios"
// for demonstration purposes the hash is hardcoded, env variable are ready and configured if needed
// syntax with import.meta is cause of using vite and not CRA
const hash = import.meta.env.HASH || "50e694833cdd1127bad6e4c5e4c407f8"
const publicApiKey = "f60478c6170145b94ef1165399b68a94"
const API = axios.create({ baseURL: `https://gateway.marvel.com:443/v1/public/` })

export const fetchCharacters = (params: any) => {
    let URL = `/characters?`
    // Needed params for Marvel API
    URL += `ts=1&apikey=${publicApiKey}&hash=${hash}`
    // Conditionally add parameters
    Object.entries(params).forEach((param: any) => {
        if (param[1].length || typeof(param[1]) === "number") {
            URL += `&${param[0]}=${param[1]}`
        }
    });
    return API.get(URL)
}