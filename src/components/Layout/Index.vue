<template>
  <div>
    <div class="container-fluid">
      <navigator></navigator>
      <slot></slot>
    </div>
    <custom-footer></custom-footer>
  </div>
</template>

<script>
import Navigator from '@/components/Layout/Navigator'
import CustomFooter from '@/components/Layout/CustomFooter'

export default {
  components: {
    CustomFooter,
    Navigator
  }
}
</script>
