<template>
  <div id="app">
    <h2>Meu componente! Projeto: {{ nomeProjeto }} </h2>
  </div>
</template>

<script>

//import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  data() {
    return {
      nomeProjeto: 'Netflix with Vue.js'
    }

  }
}
</script>

<style>

</style>
