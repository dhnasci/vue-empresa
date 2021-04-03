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
                    @click="selecionarParaCriar">
                        <i class="fa fa-plus mr-2"></i>
                        <span>Criar</span>
                </button>
            </div>
        </div>
        <div class="row col-sm-12" v-if="mensagem">
            <div class="alert" :class="tipoMensagem" role="alert">
            {{mensagem}}
            </div>
        </div>
        <div class="row col-sm-12" v-if="!erro==''">
            <div class="alert alert-danger"  role="alert">
            {{erro}}
            </div>
        </div>
        <ul class="list-group col-sm-12" v-if="empresas.length > 0">
            <EmpresasListaItem 
                v-for="empresa in empresas"
                :key="empresa.id"
                :empresa="empresa"
                @editar="selecionarEmpresaParaEdicao"
                @selecionar="selecionarParaMostrar"
                @deletar="confirmaApagar"
            />
        </ul>
        <div v-else class="row col-sm-12 align-middle"> 
            <div class="alert-warning text-center col-sm-12 " role="alert">
                <p>Nenhuma empresa criada ou servidor desligado</p>
            </div>
        </div>
    </div>
    <div class="row" v-else>
       <empresa-editar 
            v-if="exibirEditada"
            @voltar="exibirFormulario = false"
            @salvar="mostraEditarSalvo"
        />
        <empresa-detalhes
            v-if="exibirSelecionada"
            @voltar="exibirFormulario=false"
        />
        <empresa-criar 
            v-if="exibirCriada"
            @voltar="exibirFormulario=false"
            @criar="mostraCriarSalvo"
        />
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'
import EmpresasListaItem  from './EmpresasListaItem.vue'
import EmpresaEditar from './EmpresaEditar.vue'
import EmpresaDetalhes from './EmpresaDetalhes.vue'
import EmpresaCriar from './EmpresaCriar.vue'


export default {
    components: {
        EmpresasListaItem,
        EmpresaEditar,
        EmpresaDetalhes,
        EmpresaCriar
    },
    data() {
        return {
            exibirFormulario: false,
            exibirSelecionada: false,
            exibirEditada: false,
            exibirApagada: false,
            exibirCriada: false,
            mensagem: '',
            tipoMensagem: 'alert-success'
        }
    }, 
    computed: {
        ...mapState(['erro', 'empresaSelecionada', 'empresas']),
        ...mapGetters(['totalDeEmpresas'])
    },
    beforeUpdate(){
        if (!this.exibirFormulario && ( this.exibirCriada || this.exibirEditada )) {
            this.listarEmpresas()
            if (this.exibirCriada) 
                this.exibirCriada = false
            if (this.exibirEditada) 
                this.exibirEditada = false
        }
    },
    created() {
        this.listarEmpresas()
    },
    watch: {
        empresas( empresasNova, empresasVelha){
            console.log(empresasVelha)
            this.sincronizar(empresasNova)
        }
    },
    methods: {
        ...mapActions(['listarEmpresas', 'criarEmpresa', 'selecionarEmpresa', 'deletarEmpresa']),
        exibirFormularioCriar() {
            this.exibirFormulario = !this.exibirFormulario
        }, 
        selecionarEmpresaParaEdicao(empresa) {
            this.exibirFormulario = true
            this.exibirEditada = true
            this.exibirApagada = false
            this.exibirSelecionada = false
            this.exibirCriada = false
            this.selecionarEmpresa(empresa)
        },
        selecionarParaMostrar(empresa) {
            this.exibirFormulario = true
            this.exibirSelecionada = true
            this.exibirEditada = false
            this.exibirApagada = false
            this.exibirCriada = false
            this.selecionarEmpresa(empresa)
        },
        selecionarParaCriar() {
            this.exibirFormulario = true
            this.exibirSelecionada = false
            this.exibirEditada = false
            this.exibirApagada = false
            this.exibirCriada = true
        },
        mostraEditarSalvo() {
            this.exibirFormulario = false
            this.mensagem = 'Empresa editada com sucesso!'
        },
        mostraCriarSalvo(emp) {
            emp.id = this.totalDeEmpresas + 1
            this.criarEmpresa({empresa: emp}).then(
                this.exibirFormulario = false
            ).then(
                this.mensagem = 'Empresa criada com sucesso!'
            ).catch(
                error => {
                    this.mensagem = 'Erro ao criar empresa: ' + error.message
                    this.tipoMensagem = 'alert-danger'
                }
            )
        },
        confirmaApagar(emp){
            const ok = confirm('Deseja realmente apagar empresa?')
            if (ok) {
                this.deletarEmpresa({empresa: emp})
            }
        },
        sincronizar(novaEmpresas){
            this.empresas = Object.assign( {}, novaEmpresas || this.empresas )
        }
    }
}
</script>

<style>

</style>