<template>
  <div class="container">
      <div class="row col-sm-12">
          <h2 class="font-weight-light col-sm-12">Editar Empresa</h2>
      </div>
      <form @submit.prevent="submit">
       <div class="form-group row">
            <label class="col-sm-2 col-form-label">Id</label>
            <input 
                type="number" 
                readonly 
                class="form-control col-sm-10" 
                v-model="empresaLocal.id">
        </div>
         <div class="form-group row">
            <label class="col-sm-2 col-form-label">Nome</label>
            <input 
                type="text" 
                class="form-control col-sm-10" 
                placeholder="Insira o nome completo" 
                v-model="empresaLocal.nome">
        </div>
        <div class="form-group row">
            <label class="col-sm-2 col-form-label">CNPJ</label>
            <input 
                type="text" 
                class="form-control col-sm-10" 
                placeholder="Insira o CNPJ com separadores" 
                v-model="empresaLocal.cnpj">
        </div>
        <div class="form-group row">
            <label class="col-sm-2 col-form-label">Endereço</label>
            <input 
                type="text" 
                class="form-control col-sm-10" 
                placeholder="Insira o Endereço completo" 
                v-model="empresaLocal.endereco">
        </div>
        <div class="form-group row">
            <label class="col-sm-2 col-form-label">Email</label>
            <input 
                type="email" 
                class="form-control col-sm-10" 
                placeholder="Insira o email"
                v-model="empresaLocal.email">
        </div>
        <button 
                type="button" 
                class="btn btn-secondary mt-4 mb-4 mr-2" 
                @click="$emit('voltar')"
                >
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
  data() {
    return { 
      empresaLocal: {}
    }
  },
  computed: {
        ...mapState(['erro', 'empresaSelecionada', 'empresas']),
        ...mapGetters(['totalDeEmpresas'])
    },
  watch: {
    empresaSelecionada(empresaNova, empresaAntiga){
      console.log('empresa Antiga: ' + empresaAntiga.nome);
      this.sincronizar(empresaNova)
    }
  },
  created() {
    this.sincronizar(this.empresaSelecionada)
  },
  methods: {
    ...mapActions(['listarEmpresas', 'criarEmpresa', 'editarEmpresa', 'selecionarEmpresa', 'buscarEmpresaPorId']),
    submit() {
      try {
        this.editarEmpresa( { empresa: this.empresaLocal})
      } catch (error) {
        alert('Erro ao editar empresa: ' + error.message)
      }
    },
    sincronizar( novaEmpresa) {
      this.empresaLocal = Object.assign( 
          {}, 
          novaEmpresa || { nome: '', cnpj: '', endereco: '', email: ''}
      )
    }
  }

}
</script>

<style>

</style>