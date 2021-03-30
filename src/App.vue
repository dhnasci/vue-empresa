<template>
  <div id="app">
    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <h1 class="display-4">Suframa</h1>
        <p class="lead">CRUD de Empresas em Vue.js e Java</p>
      </div>
    </div>

    <div class="container">

      <div class="row">
        <div class="col-sm-12">
          <EmpresasLista />
        </div>
       
      </div>

    </div>

  </div>
</template>

<script>
import EmpresasLista from '@/components/EmpresasLista.vue'

export default {
  components: {
    EmpresasLista
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
}

</style>
