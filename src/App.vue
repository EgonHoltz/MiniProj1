<template>
  <Header />
  <router-view />
  <Footer />
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
//import AboutMe from './components/AboutMe.vue'
//import MyActivities from './components/MyActivities.vue'
import Footer from './components/Footer.vue'
import Header from './components/Header.vue'
//import Hobbies from './components/Hobbies.vue'
//import Index from './components/Index.vue' 

export default {
  name: 'App',
  components: {
    //HelloWorld,
    //AboutMe,
    //MyActivities,
    Footer,
    Header,
    //Hobbies,
    //Index
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
