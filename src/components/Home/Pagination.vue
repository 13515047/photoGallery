<template>
  <nav aria-label="Pagination">
    <ul class="pagination justify-content-center">
      <li :class="['page-item', { disabled : getCurrentIndex == 1 }]">
        <a href="#app" v-if="!isMobile" class="page-link" @click="previousPage()"><span class="sign">&lt;</span>Back</a>
        <a href="#app" v-else class="page-link" @click="previousPage()"><span class="sign">&lt;</span></a>
      </li>
      <li :class="['page-item', { active : getCurrentIndex == 1 }]">
        <a href="#app" class="page-link" @click="setFirstPage()">1</a>
      </li>
      <li v-if="frontDots" class="page-item">
        <a href="#app" class="page-link">...</a>
      </li>
      <li v-if="!isMobile" :class="['page-item', { active : getCurrentIndex == n }]"  v-for="n in getListPages" :key="n">
        <a href="#app" class="page-link" @click="setPage(n)">{{ n }}</a>
      </li>
      <li v-if="isMobile" :class="['page-item', { active : getCurrentIndex == n }]"  v-for="n in getListPagesMobile" :key="n">
        <a href="#app" class="page-link" @click="setPage(n)">{{ n }}</a>
      </li>
      <li v-if="backDots" class="page-item">
        <a href="#app" class="page-link">...</a>
      </li>
      <li :class="['page-item', { active : getCurrentIndex == getLengthPage }]">
        <a href="#app" class="page-link" @click="setLastPage()">{{ getLengthPage }}</a>
      </li>
      <li :class="['page-item', { disabled : getCurrentIndex == getLengthPage }]">
        <a href="#app" v-if="!isMobile" class="page-link" @click="nextPage()">Next<a href="#app" class="sign">&gt;</a></a>
        <a href="#app" v-else class="page-link" @click="nextPage()"><span class="sign">&gt;</span></a>
      </li>
    </ul>
  </nav>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters('home', [
      'getLengthPage',
      'getCurrentIndex',
      'isFrontActive',
      'isBackActive',
      'getListPages',
      'getListPagesMobile'
    ]),
    frontDots () {
      if (this.isMobile) {
        if (this.isFrontActive) {
          if (this.getCurrentIndex <= 2) {
            this.setFront()
          }
        } else {
          if (this.getCurrentIndex > 3 && this.getLengthPage > 4) {
            this.setFront()
          }
        }
      } else {
        if (this.isFrontActive) {
          if (this.getCurrentIndex <= 2) {
            this.setFront()
          }
        } else {
          if (this.getCurrentIndex > 9 && this.getLengthPage > 10) {
            this.setFront()
          }
        }
      }
      return this.isFrontActive
    },
    backDots () {
      if (this.isMobile) {
        if (this.isBackActive) {
          if (this.getCurrentIndex >= (this.getLengthPage - 1)) {
            this.setBack()
          }
        } else {
          if ((this.getCurrentIndex < (this.getLengthPage - 2)) && this.getLengthPage > 4) {
            this.setBack()
          }
        }
      } else {
        if (this.isBackActive) {
          if (this.getCurrentIndex >= (this.getLengthPage - 1)) {
            this.setBack()
          }
        } else {
          if ((this.getCurrentIndex < (this.getLengthPage - 8)) && this.getLengthPage > 10) {
            this.setBack()
          }
        }
      }
      return this.isBackActive
    },
    isMobile () {
      return window.innerWidth <= 768
    }
  },
  ready: function () {
    window.addEventListener('resize', this.handleResize)
  },
  beforeDestroy: function () {
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    ...mapActions('home', [
      'next',
      'previous',
      'setPage',
      'setFront',
      'setBack',
      'addStartPage',
      'addStopPage',
      'addStartPageMobile',
      'addStopPageMobile'
    ]),
    nextPage () {
      this.next()
      if (this.isMobile) {
        console.log(this.isMobile)
        if (this.getCurrentIndex > this.getListPagesMobile[this.getListPagesMobile.length - 1] && this.getCurrentIndex !== this.getLengthPage) {
          this.addStopPageMobile()
          console.log('masuk')
        }
      } else {
        if (this.getCurrentIndex > this.getListPages[this.getListPages.length - 1] && this.getCurrentIndex !== this.getLengthPage) {
          this.addStopPage()
        }
      }
    },
    previousPage () {
      this.previous()
      if (this.isMobile) {
        if (this.getCurrentIndex < this.getListPagesMobile[0] && this.getCurrentIndex !== 1) {
          this.addStartPageMobile()
        }
      } else {
        if (this.getCurrentIndex < this.getListPages[0] && this.getCurrentIndex !== 1) {
          this.addStartPage()
        }
      }
    },
    setFirstPage () {
      if (this.isMobile) {
        while (this.getListPagesMobile[0] > 2) {
          this.addStartPageMobile()
        }
      } else {
        while (this.getListPages[0] > 2) {
          this.addStartPage()
        }
      }
      this.setPage(1)
    },
    setLastPage () {
      if (this.isMobile) {
        while (this.getListPagesMobile[1] < (this.getLengthPage - 1)) {
          this.addStopPageMobile()
        }
      } else {
        while (this.getListPages[this.getListPages.length - 1] < (this.getLengthPage - 1)) {
          this.addStopPage()
        }
      }
      this.setPage(this.getLengthPage)
    }
  }
}
</script>

<style src="@/assets/css/pagination.css" lang="css"></style>
