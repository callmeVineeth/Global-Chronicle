import axios from 'axios';

// https://newsapi.org/v2/everything?q=top&apiKey=ad74df5bef5e46babead55d5e6f6d4c4

const instance = axios.create({
    baseURL:'https://newsapi.org/v2/everything?',
})

export default instance;