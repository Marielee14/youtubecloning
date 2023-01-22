import axios from "axios";

export const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  // method: "GET",
  url: BASE_URL,
  params: {
    maxResults: "50",
  },
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

/** async await wanted to start with the base url
 * const fetchFromAPI = async ()=> {
 * await axios.get(a, b)
 * >> then we have to get a response,
 * const fetchFromAPI = async()=> {
 * const response = await axios.get(a,b)}
 * >> destructure the data https://poiemaweb.com/es6-destructuring
 * const {data} = await ~~
 * only thing the function will do will be returning data
 */
export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};
