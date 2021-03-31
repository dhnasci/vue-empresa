<template>
  <div class="container">
    
    <div class="row" v-if="!exibirFormulario">
        <div class="row col-sm-12">
            <div class="col-sm-10 text-center">
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
        <ul class="list-group col-sm-12" v-if="empresas.length > 0">
            <EmpresasListaItem 
                v-for="empresa in empresas"
                :key="empresa.id"
                :empresa="empresa"
                @editar="selecionarEmpresaParaEdicao"
                @selecionar="selecionarParaMostrar"
            />
        </ul>
        <p v-else> Nenhuma empresa criada.</p>
    </div>
    <div class="row" v-else>
       <empresa-editar 
            v-if="exibirEditada"
            @voltar="mostraEditarSalvo"
        />
        <empresa-detalhes
            v-if="exibirSelecionada"
            @voltar="exibirFormulario=false"
        />
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'
import EmpresasListaItem  from './EmpresasListaItem.vue'
import EmpresaEditar from './EmpresaEditar.vue'
import EmpresaDetalhes from './EmpresaDetalhes.vue'

export default {
    components: {
        EmpresasListaItem,
        EmpresaEditar,
        EmpresaDetalhes
    },
    data() {
        return {
            exibirFormulario: false,
            exibirSelecionada: false,
            exibirEditada: false,
            exibirApagada: false
        }
    }, 
    computed: {
        ...mapState(['erro', 'empresaSelecionada', 'empresas']),
        ...mapGetters(['totalDeEmpresas'])
    },
    created() {
        console.log('created EmpresasLista')
        this.listarEmpresas();
    },
    methods: {
        ...mapActions(['listarEmpresas', 'criarEmpresa', 'selecionarEmpresa']),
        exibirFormularioCriar() {
            this.exibirFormulario = !this.exibirFormulario
        }, 
        selecionarEmpresaParaEdicao(empresa) {
            this.exibirFormulario = true
            this.exibirEditada = true
            this.exibirApagada = false
            this.exibirSelecionada = false
            this.selecionarEmpresa(empresa)
        },
        selecionarParaMostrar(empresa) {
            this.exibirFormulario = true
            this.exibirSelecionada = true
            this.exibirEditada = false
            this.exibirApagada = false
            this.selecionarEmpresa(empresa)
        },
        mostraEditarSalvo(){
            console.log('empresa salva')
            this.exibirFormulario = false;
            this.listarEmpresas()
        }
    }

}
</script>

<style>

</style>