<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './components/common/Header.vue'
import Footer from './components/common/Footer.vue'
export default {
  components: {
    Header,
    Footer
  },
  name: 'App'
}
</script>
