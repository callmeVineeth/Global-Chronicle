// const api_key = 'ad74df5bef5e46babead55d5e6f6d4c4'

// https://newsapi.org/v2/everything?q=top&apiKey=ad74df5bef5e46babead55d5e6f6d4c4

let api_key = process.env.REACT_APP_NEWS_API;


const requests = {
    fetchGeneral:`q=general&apiKey=${api_key}`,
    fetchTop:`q=top&apiKey=${api_key}`,
    fetchWar:`q=war&apiKey=${api_key}`,
    fetchScience:`q=science&apiKey=${api_key}`,
    fetchSports:`q=sports&apiKey=${api_key}`,
    fetchTechnology:`q=technology&apiKey=${api_key}`,
    fetchHealth:`q=health&apiKey=${api_key}`,
    fetchEntertainment:`q=entertainment&apiKey=${api_key}`,
}

export default requests;