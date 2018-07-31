<template>
  <layout>
    <!-- JUMBOTRON -->
      <div class="row jumbotronMock">
        <div class="col-md-4 d-none d-md-block">
          <div class="jumbotronText">
            <h2>{{ title }}</h2>
            <p>{{ description }}</p>
          </div>
        </div>
        <div class="col-md-8 col-sm-12">
          <h2 class="d-md-none text-center">{{ title }}</h2>
          <img class="d-block d-md-inline" src="../../assets/img/rainy@3x.png" />
          <p class="d-md-none text-center">{{ description }}</p>
        </div>
      </div>
      <!-- /END OF JUMBOTRON -->

      <!-- FEATURES -->
      <div class="row featuresTitle">
        <div class="col-md-12">
          <h1 class="text-center">Lorem Ipsum</h1>
        </div>
      </div>

      <div class="row features">
        <div class="col-md-3">
          <img src="../../assets/img/blue@3x.png" />
          <h4 class="text-center font-weight-bold">Lorem Ipsum</h4>
          <p class="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nec turpis convallis, rutrum arcu eleifend, efficitur leo. Quisque finibus nibh urna, vitae tincidunt tortor imperdiet sed.</p>
        </div>

        <div class="col-md-3">
          <img src="../../assets/img/blue@3x.png" />
          <h4 class="text-center font-weight-bold">Lorem Ipsum</h4>
          <p class="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nec turpis convallis, rutrum arcu eleifend, efficitur leo. Quisque finibus nibh urna, vitae tincidunt tortor imperdiet sed.</p>
        </div>

        <div class="col-md-3">
          <img src="../../assets/img/blue@3x.png" />
          <h4 class="text-center font-weight-bold">Lorem Ipsum</h4>
          <p class="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nec turpis convallis, rutrum arcu eleifend, efficitur leo. Quisque finibus nibh urna, vitae tincidunt tortor imperdiet sed.</p>
        </div>

        <div class="col-md-3">
          <img src="../../assets/img/blue@3x.png" />
          <h4 class="text-center font-weight-bold">Lorem Ipsum</h4>
          <p class="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nec turpis convallis, rutrum arcu eleifend, efficitur leo. Quisque finibus nibh urna, vitae tincidunt tortor imperdiet sed.</p>
        </div>
      </div>
      <!-- /END OF FEATURES -->
  </layout>
</template>

<script>
export default {
  data () {
    return {
      title: '',
      description: ''
    }
  },
  mounted () {
    this.$store.dispatch('about/about')
      .then(data => {
        this.title = data.data.title
        this.description = data.data.opening_crawl
      })
  }
}
</script>

<style src="../../assets/css/about.css" lang="css"></style>
