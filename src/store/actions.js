import * as types from './mutation-types'
import EmpresasService from '../services/EmpresasService'

export default {
    listarEmpresas: ({commit}) => {
        EmpresasService.getEmpresas().then((response) => {
            commit(types.LISTAR_EMPRESAS, { empresas: response.data})
        }).catch((error) => {
                console.log('error: '+ error.message)
            commit(types.SETAR_ERRO, {error})
        })
    },
    criarEmpresa: ({commit}, {empresa}) => {
        empresa.nome = empresa.nome.toUpperCase();
        EmpresasService.postEmpresa(empresa).then(
            (response) => { 
                commit(types.CRIAR_EMPRESA, {empresa: response.data
                }) }
        ).catch( erro => commit(types.SETAR_ERRO, { erro }))
    }, 
    selecionarEmpresa: ({commit}, payload) => {
        commit(types.SELECIONAR_EMPRESA, { empresa: payload})
    },
    buscarEmpresaPorId: ({commit},  id ) => {
        EmpresasService.getEmpresa(id).then(
            response => { 
                commit(types.SELECIONAR_EMPRESA, {empresa: response.data}) }
        ).catch( erro => commit(types.SETAR_ERRO, { erro }))
    },
    editarEmpresa: ({commit} , {empresa}) => {
        EmpresasService.putEmpresa(empresa).then(
            response => { 
                console.log(response.data.nome)
                commit(types.EDITAR_EMPRESA, { empresa })
            }
        ).catch( erro => commit(types.SETAR_ERRO, { erro}))
        
    },
    deletarEmpresa: async ({commit} , {empresa}) => {
        try {
            await EmpresasService.deletarEmpresa(empresa.id)
            commit(types.DELETAR_EMPRESA, {empresa})
        } catch (error) {
            commit(types.SETAR_ERRO, { error })
        }
    }
}