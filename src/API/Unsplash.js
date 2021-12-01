import axios from 'axios'

//create a customize instance of axios client with couple of different properties

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID bD1jNDFbYPIgU68UNzzFupY6DWshUwsjo9SSpbVvq6k',
  },
})
