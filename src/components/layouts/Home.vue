<template>
  <div>
    <site-header />
    <router-view />
    <site-footer />
  </div>
</template>
<script>
import SiteHeader from './Header.vue'
import SiteFooter from './Footer.vue'
export default {
  components: {
    SiteHeader,
    SiteFooter
  }
}
</script>
