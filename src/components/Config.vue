<template>
    <div class="container-fluid">
       <form>        
        <div class="row">
       
               <div class="col-4">
                <div class="form-group">
                    <label for="TipoMaquina">Tipo :</label>
                    <select name="TipoMaquina" id="TipoMaquina" class="form-control" >
                        <option selected disabled>Selecione</option>
                        <option value="Servidor">Servidor</option>
                        <option value = "Estação">Estação</option>
                    </select>
                </div>
               </div>
               <div class="col">
                <div class="form-group">
                    <label for="PDV">PDV :</label>
                    <select name="PDV" class="form-control"  id="PDV" >
                       <option value selected = "Não">Não</option>
                        <option value="Sim">Sim</option>
                     
                    </select>
                </div>
               </div>
               <div class="col"> 
                <div class="form-group">
                    <label for="Emissor">Emissor :</label>
                    <select id="Emissor" class="form-control" name="Emissor"  >
                         <option value selected = "Não">Não</option>
                        <option value="Sim">Sim</option>
                        
                    </select>
                </div></div>
               <div class="col-3">
                <div class="form-group">
                    <label for="Cod"> Código :</label>
                    <input style="width: 100%;" name="Cod" id="Cod"  placeholder="Código" v-model="anydesk" class="form-control" oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);" type = "number" maxlength = "5"/>
                </div>
               </div>
           
       </div>
   
     </form>
   </div>
</template>

<script>
export default {
    name: 'Config'
}
</script>

<style scoped>
.form-control{
    width: 100% !important;
}




input[type="number"]::-webkit-inner-spin-button,
    input[type="number"]::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }





</style>