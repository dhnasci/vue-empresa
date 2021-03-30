<template>
  <div class="container">
    <div class="row">
        <div class="col-sm-10">
            <h2 class="font-weight-light">Lista de Empresas</h2>
        </div>
        <div class="col-sm-2">
            <button 
                class="btn btn-primary float-right" 
                @click="exibirFormularioCriar">
                    <i class="fa fa-plus mr-2"></i>
                    <span>Criar</span>
            </button>
        </div>
        
    </div>
    <div class="row">
        <ul class="list-group col-sm-12" v-if="empresas.length > 0">
            <EmpresasListaItem 
                v-for="empresa in empresas"
                :key="empresa.id"
                :empresa="empresa"
                @editar="selecionarEmpresaParaEdicao"
                @selecionar="$router.push(`/empresas/${empresa.id}/editar`)"
            />
        </ul>
        <p v-else> Nenhuma empresa criada.</p>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'
import EmpresasListaItem  from './EmpresasListaItem.vue'


export default {
    components: {
        EmpresasListaItem
    },
    data() {
        return {
            exibirFormulario: false
        }
    }, 
    computed: {
        ...mapState(['erro', 'empresaSelecionada', 'empresas']),
        ...mapGetters(['totalDeEmpresas'])
    },
    created() {
        console.log('created ')
        this.listarEmpresas();
    },
    methods: {
        ...mapActions(['listarEmpresas', 'criarEmpresa', 'selecionarEmpresa']),
        exibirFormularioCriar() {
            this.exibirFormulario = !this.exibirFormulario
        }, 
        selecionarEmpresaParaEdicao(empresa) {
            this.exibirFormulario = true
            this.empresaSelecionada = empresa
        }
    }

}
</script>

<style>

</style>