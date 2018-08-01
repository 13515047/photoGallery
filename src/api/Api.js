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
      },
      carousel () {
        let images = []
        let promises = []
        for (let idx = 0; idx < 3; idx++) {
          promises.push(axios.get('https://source.unsplash.com/random'))
        }
        axios.all(promises).then(results => {
          results.forEach(item => {
            images.push(item.request.responseURL)
          })
        })
        return images
      },
      detailPhoto (id) {
        return axios.get('https://jsonplaceholder.typicode.com/photos/' + id)
      }
    }
  },
  about () {
    return axios.get('https://swapi.co/api/films/1/')
  }
}
