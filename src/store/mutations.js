import { 
    LISTAR_EMPRESAS, 
    CRIAR_EMPRESA, 
    EDITAR_EMPRESA, 
    DELETAR_EMPRESA, 
    SELECIONAR_EMPRESA, 
    SETAR_ERRO
} from './mutation-types'

export default {
    [LISTAR_EMPRESAS]: (state, {empresas}) => {
        state.empresas = empresas
    },
    [SETAR_ERRO]: (state, { erro }) => {
        state.erro = erro
    },
    [SELECIONAR_EMPRESA]: (state, { empresa }) => {
        state.empresaSelecionada = empresa
    },
    [CRIAR_EMPRESA]: (state, { empresa }) => {
        console.log('CRIAR_EMPRESA > ', empresa.nome)
        state.empresas.push(empresa)
    },
    [EDITAR_EMPRESA]: (state, { empresa }) => {
        const indice = state.empresas.findIndex(emp => emp.id === empresa.id)
        state.empresas.splice(indice, 1, empresa)
    }, 
    [DELETAR_EMPRESA]: (state, { empresa }) => {
        const indice = state.empresas.findIndex(emp => emp.id === empresa.id)
        state.empresas.splice(indice, 1)
    }
}
