<template>
  <div id="app">
    <BemonHeader />
    <navigation />
    <router-view />
  </div>
</template>

<script>
import BemonHeader from './components/BemonHeader.vue'
import navigation from './components/navigation.vue'

export default {
  name: 'App',
  components: {
    BemonHeader,
    navigation
  }
}
</script>

<style>

@font-face {
  font-family: 'Nanum_Pen_Script';
  src: url('./assets/Nanum_Pen_Script/NanumPenScript-Regular.ttf');
}

#app {
  font-family: 'Nanum_Pen_Script', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
}
</style>
