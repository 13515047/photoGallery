<template>
  <!-- SLIDE -->
  <div class="row">
    <div id="carousel" class="carousel slide" data-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img class="d-block w-100" :src="image[0]" alt="First slide">
          <div class="carousel-caption">
            <h1 class="font-weight-bold">{{ title }}</h1>
            <p>{{ description }}</p>
            <button>MORE INFO</button>
          </div>
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" :src="image[1]" alt="Second slide">
          <div class="carousel-caption">
            <h1 class="font-weight-bold">{{ title }}</h1>
            <p>{{ description }}</p>
            <button>MORE INFO</button>
          </div>
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" :src="image[2]" alt="Third slide">
          <div class="carousel-caption">
            <h1 class="font-weight-bold">{{ title }}</h1>
            <p>{{ description }}</p>
            <button>MORE INFO</button>
          </div>
        </div>
      </div>
      <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  </div>
  <!-- /END OF SLIDE -->
</template>

<script>
export default {
  data () {
    return {
      title: 'Lorem Ipsum',
      description: null,
      image: []
    }
  },
  beforeCreate () {
    this.$store.dispatch('home/title')
      .then(data => {
        this.description = data.data.value
      }).catch(err => {
        console.log(err.message)
      })
    this.$store.dispatch('home/carousel')
      .then(data => {
        this.image = data
      }).catch(err => {
        console.log(err.message)
      })
  }
}
</script>
