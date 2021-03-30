<template>
  <li class="list-group-item d-flex">
        <div class="col-sm-4">
          {{ empresa.cnpj }} 
        </div>
        <div class="col-sm-4">
          {{ empresa.nome }} 
        </div>
         <div class="col-sm-4">
           <button 
              class="btn btn-success btn-sm mr-2" 
              title="Selecionar" 
              @click="$emit('selecionar', empresa)">
                  <i class="fa fa-check"></i>
          </button>
         <button 
            class="btn btn-primary btn-sm mr-2" 
            title="Editar"
            @click="$emit('editar', empresa)">
                <i class="fa fa-pencil-alt"></i>
        </button>
        <button 
            class="btn btn-danger btn-sm mr-2" 
            title="Deletar"
            @click="$emit('deletar', empresa)">
                <i class="fa fa-trash"></i>
        </button> 
         </div>
        
       
  </li>
</template>

<script>
export default {
  props: {
    empresa: {
      type: Object,
      required: true
    }
  }
  
}
</script>

<style scoped>
  .espacar {
        flex: 1 1 auto;
    }
</style>