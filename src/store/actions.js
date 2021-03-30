import * as types from './mutation-types'
import EmpresasService from '../services/EmpresasService'

export default {
    listarEmpresas: ({commit}) => {
        console.log('listarEmpresas')
       
        EmpresasService.getEmpresas().then((response) => {
            console.log('action data: '+ response.data)
            commit(types.LISTAR_EMPRESAS, { empresas: response.data})
        }).catch((error) => {
                console.log('error: '+ error.message)
            commit(types.SETAR_ERRO, {error})
        })

    },
    criarEmpresa: ({commit}, {empresa}) => {
        return EmpresasService.postEmpresa(empresa).then(
            response => { commit(types.CRIAR_EMPRESA, {empresa: response.data}) }
        ).catch( erro => commit(types.SETAR_ERRO, { erro }))
    }, 
    selecionarEmpresa: ({commit}, payload) => {
        commit(types.SELECIONAR_EMPRESA, payload)
    }
}