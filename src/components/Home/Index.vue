<template>
  <layout v-if="getDetailPage === 0">
    <slider></slider>
    <div class="row gallery">
      <div class="col-md-12">
        <div class="photos-wrapper" v-for="idx in Math.ceil(listPhotos.length / 4)" :key="idx">
          <photo :data="getSlicePhotos(idx, listPhotos)"></photo>
        </div>
        <pagination></pagination>
      </div>
    </div>
  </layout>
  <detail v-else></detail>
</template>

<script>
import { mapGetters } from 'vuex'
import Detail from './Detail'
import Pagination from './Pagination'
import Photo from './Photo'
import Slider from './Slider'

export default {
  components: {
    Detail,
    Pagination,
    Photo,
    Slider
  },
  data () {
    return {
      photoGrid: null,
      title: '',
      image: '',
      isDetail: false
    }
  },
  computed: {
    ...mapGetters('home', [
      'getLengthPage',
      'getCurrentIndex',
      'getDetailPage'
    ]),
    listPhotos () {
      let startIndex = (this.getCurrentIndex - 1) * 16
      let photos = this.photoGrid ? this.photoGrid.slice(startIndex, startIndex + 16) : []
      return photos
    }
  },
  mounted () {
    console.log(this.getDetailPage)
    this.$store.dispatch('home/photoGrid')
      .then(data => {
        this.photoGrid = data.data
      })
      .catch(error => {
        console.log(error)
      })

    this.$store.dispatch('home/title')
      .then(data => {
        this.title = data.data
      })
      .catch(error => {
        console.log(error)
      })

    this.$store.dispatch('home/image')
      .then(data => {
        this.image = data.data
      })
      .catch(error => {
        console.log(error)
      })
  },
  methods: {
    getSlicePhotos (idx, list) {
      let startIndex = (idx - 1) * 4
      return list.slice(startIndex, startIndex + 4)
    }
  }
}
</script>

<style src="@/assets/css/home.css" lang="css"></style>
