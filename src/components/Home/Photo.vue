<template>
  <div class="row">
    <div class="col-md-3" v-for="photo in data" :key="photo.id">
      <div class="photo-card">
        <img @click="detail(photo.id)" :src="photo.thumbnailUrl" />
        <div class="photo-body">
          <div class="icon-section">
            <i class="far fa-heart">394</i>
            <i class="fas fa-heart"><span class="white">394</span></i>
            <i class="fas fa-share-alt extender" @click="extend()"></i>
            <span :class="{ 'extend' : true, 'mobile': isMobile, 'mobile-show': show }">
              <i class="fab fa-facebook-square"></i>
              <i class="fab fa-instagram"></i>
              <i class="fab fa-twitter"></i>
            </span>
          </div>
          <div class="title-section">
            <p class="title">Lorem Ipsum</p>
            <p class="description">{{ shortContent('Lorem ipsum dolor sit amet, ex tantas essent causae mea. In ius fugit gloriatur, eum in omnis quando theophrastus. Mutat putant integre in pri, nec ei illum corrumpit. Te detraxit tacimates usu, dolor vocent incorrupte te nam. At nostro senserit eam, sit ad labore graeco virtute, vis no inani nostrud recusabo. Falli intellegam ad vix.') }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['data'],
  data () {
    return {
      show: false
    }
  },
  computed: {
    isMobile () {
      return window.innerWidth <= 768
    }
  },
  methods: {
    detail (id) {
      if (window.innerWidth <= 768) {
        this.$store.dispatch('home/setDetailPage', id)
      }
    },
    shortContent (text) {
      var tmp = document.createElement('DIV')
      tmp.innerHTML = text
      var text1 = tmp.textContent || tmp.innerText || ''
      if (text1.length > 15) {
        return text1.substr(0, text1.lastIndexOf(' ', 15)) + '...'
      } else return text1
    },
    extend () {
      this.show = !this.show && window.innerWidth <= 768
    }
  }
}
</script>
