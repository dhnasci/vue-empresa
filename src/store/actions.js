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
        EmpresasService.postEmpresa(empresa).then(
            response => { commit(types.CRIAR_EMPRESA, {empresa: response.data}) }
        ).catch( erro => commit(types.SETAR_ERRO, { erro }))
    }, 
    selecionarEmpresa: ({commit}, payload) => {
        commit(types.SELECIONAR_EMPRESA, { empresa: payload})
    },
    buscarEmpresaPorId: ( {commit},  id ) => {
        EmpresasService.getEmpresa(id).then(
            response => { 
                commit(types.SELECIONAR_EMPRESA, {empresa: response.data}) }
        ).catch( erro => commit(types.SETAR_ERRO, { erro }))
    },
    editarEmpresa: async ( {commit} , {empresa}) => {
        try {
            const response = await EmpresasService.putEmpresa(empresa)
            commit(types.EDITAR_EMPRESA, { empresa: response.data })
        } catch (error) {
            commit(types.SETAR_ERRO, { error })
        }
    }
}