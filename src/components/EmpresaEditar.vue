<template>
  <div class="container">
    <div class="row">
      <h2 class="font-weight-light">Editar Empresa</h2>
    </div>
    <form @submit.prevent="salvar">
      <div class="form-group">
            <label>Nome</label>
            <input 
                type="text" 
                class="form-control" 
                placeholder="Insira o nome" 
                v-model="empresa.nome">
        </div>
        <div class="form-group">
            <label>CNPJ</label>
            <input 
                type="text" 
                class="form-control" 
                placeholder="Insira o nome" 
                v-model="empresa.cnpj">
        </div>
        <div class="form-group">
            <label>Endereço</label>
            <input 
                type="text" 
                class="form-control" 
                placeholder="Insira o nome" 
                v-model="empresa.endereco">
        </div>
        <div class="form-group">
            <label>Email</label>
            <input 
                type="email" 
                class="form-control" 
                placeholder="Insira o email"
                v-model="empresa.email">
        </div>
        <button 
                type="button" 
                class="btn btn-secondary mt-4 mb-4 mr-2" 
                @click="$router.back()">
                    Voltar
            </button>
            <button 
                type="submit" 
                class="btn btn-success">
                    Salvar
            </button>
    </form>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'


export default {
  props: ['id'],
  data() {
    return { 
      empresa: undefined
    }
  }, 
  computed: {
        ...mapState(['erro', 'empresaSelecionada', 'empresas']),
        ...mapGetters(['totalDeEmpresas'])
    },
  beforeRouteEnter(to, from, next) {
    next( vm => {
      console.log('beforeRouteEnter ' + to.params.id)
      console.log('vm ' + vm)
      vm.buscarEmpresaPorId(+to.params.id)
      vm.empresa = vm.empresaSelecionada;
    });
  },
  methods: {
    ...mapActions(['listarEmpresas', 'criarEmpresa', 'selecionarEmpresa', 'buscarEmpresaPorId']),
    salvar(event) {
      console.log('salvar ' + event)
      this.$router.push('/empresas')
    }
  }

}
</script>

<style>

</style>