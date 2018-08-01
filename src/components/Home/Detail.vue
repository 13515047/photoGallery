<template>
  <div>
    <div class="content-image">
      <i class="fas fa-arrow-left" @click="back()"></i>
      <img class="img-fluid" :src="photo.url" alt="Photo">
    </div>
    <div class="content-wrapper">
      <div class="content-title">
          <div class="icon">
            <i class="fas fa-share-alt"></i>
            <i class="far fa-heart"></i>
          </div>
          <p class="title">Lorem Ipsum</p>
          <p class="likes">394 Likes</p>
      </div>
      <div class="content-description">
        <p>Lorem ipsum dolor sit amet, ex tantas essent causae mea. In ius fugit gloriatur, eum in omnis quando theophrastus. Mutat putant integre in pri, nec ei illum corrumpit. Te detraxit tacimates usu, dolor vocent incorrupte te nam. At nostro senserit eam, sit ad labore graeco virtute, vis no inani nostrud recusabo. Falli intellegam ad vix.</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      photo: {
        title: '',
        url: ''
      }
    }
  },
  computed: {
    ...mapGetters('home', [
      'getDetailPage'
    ])
  },
  created () {
    this.$store.dispatch('home/detailPhoto', this.getDetailPage)
      .then(data => {
        this.photo = data.data
      })
  },
  methods: {
    back () {
      this.$store.dispatch('home/setDetailBack')
    }
  }
}
</script>
