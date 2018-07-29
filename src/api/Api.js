import axios from 'axios'

axios.defaults.headers.post['Content-Type'] = 'application/json'

export default {
  home: {
    photoGrid () {
      return axios.get('https://jsonplaceholder.typicode.com/photos')
    },
    hero: {
      title () {
        return axios.get('https://api.chucknorris.io/jokes/random')
      },
      image () {
        return axios.get('https://source.unsplash.com/random')
      }
    }
  },
  about () {
    return axios.get('https://swapi.co/api/films/1/')
  }
}
