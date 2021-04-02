import axios from 'axios'

const apiClient = axios.create({
    baseURL: process.env.VUE_APP_BASE_API_URL,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    }
})

export default {
    getEmpresas() {
        return apiClient.get('/empresas')
    }, 
    getEmpresa(id) {
        return apiClient.get( `/empresas/${id}`)
    }, 
    postEmpresa(empresa) {
        console.log('postEmpresa empresa: ' + empresa.nome)
        return apiClient.post('/empresas/', empresa)
    },
    putEmpresa(empresa) {
        return apiClient.put(`/empresas/${empresa.id}`, empresa)
    },
    deletarEmpresa(id){
        return apiClient.delete(`/empresas/${id}`)
    }

}