<template>
  <!-- eslint-disable-next-line vue/require-component-is -->
  <component :is="layout">
    <router-view />
  </component>
</template>
<script>
export default {
  data: () => ({
    default: 'default'
  }),
  computed: {
    layout () {
      return (this.$route.meta.layout || this.default) + '-layout'
    }
  }
}
</script>
