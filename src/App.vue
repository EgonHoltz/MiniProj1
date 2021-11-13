<template>
  <Header />
  <div id="body-content">
    <div id="content-wrap">
      <router-view />
    </div>
  </div>
  <Footer />
</template>

<script>
import Footer from './components/Footer.vue'
import Header from './components/Header.vue'

export default {
  name: 'App',
  components: {
    Footer,
    Header,
  }
}
</script>

<style>
*{
    margin: 0;
}
html,
body {
    height: 100%;
    margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
#body-content {
	width: 100%;
  min-height: 100vh;
  height: 100%;
	background-size: auto;
	margin: 0 auto;
	background-color: #454a94;
  color: white;
  
}
#content-wrap{
  padding-bottom: 6rem;
  padding-top: 4em;
  width: 50%;
  margin: 0 auto;
}
.rounded-img {
  display: inline-block;
  width: 8em;
  height: 8em;  
  background-position: 50% 50%;
  background-size: cover;
  background-repeat:no-repeat;
  border-radius: 50%;
  box-shadow: 2px 2px 2px 2px rgb(255, 255, 255)
}
.squared-img {
  display: inline-block;
  width: 18em;
  height: 12em;  
  background-position: 50% 50%;
  background-size: cover;
  background-repeat:no-repeat;
  border-radius: 5%;
  box-shadow: 2px 2px 2px 2px rgb(44, 44, 44);
  line-height: 3em;
  text-shadow: 1px 1px black;
}
.squared-img .transbox {
  margin: 0;
  border-top-left-radius: 8%;
  border-top-right-radius: 8%;
  background-color: #000000;
  opacity: 0.6;
}
</style>
