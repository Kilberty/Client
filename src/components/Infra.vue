<template>
   <div class="container-fluid" style="background-color: white;" >
    <div class="row">
        <div class="col-2"><Menu/></div>
        <div class="col-10" style="background-color: white;" >
          <div class="container-fluid">
            <form @submit="criaAcesso">
                 <div class="row">
                    <div class="col-7">
                        <div class="form-group">
                    <label for="tipo" class="col-sm-2 control-label texto "  >Tipo : </label>
                    
                        <select  placeholder="Selecione" class="form-select form-select-sm " v-model="tipo" style="width: 100%;" name="tipo"  id="tipo" >
                            <option  value="Estacao" >Estação</option>
                            <option value="Servidor">Servidor</option>
                        </select>
                     
                </div>   
                    </div>
                    <div class="col-5">
                       
                        <div class="form-group">
                            <label for="codcliente" class="col-sm-2 control-label texto "  >Código : </label>
                             
                            <input name="codcliente" id="codcliente" v-model="codcliente"  placeholder="Cód Cliente" class="form-control" oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);" type = "number" maxlength = "5"/>
                       </div>
                        
                    </div>
                 </div>
                                   
             
                                              
                <div class="form-group" style="margin-top: 10%;" >
                    <div class="row">
                        <div class="col-7">
                            <div class="form-group">
                                <label  class="col-sm-2 control-label texto"  >Anydesk :</label>
                                <input style="width: 100%;" name="anydesk" id="anydesk"  placeholder="Anydesk" v-model="anydesk" class="form-control" oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);" type = "number" maxlength = "10"
/>
                            </div>
                        </div>
                        <div class="col-5">
                            <div class="form-group">
                                <label  class="col-sm-2 control-label texto"  >Senha :</label>
                                <input type="text" class="form-control" v-model="senha" name="senha" id="senha" placeholder="Senha" >
                            </div>
                        </div>
                    </div>
                </div>   
               
                <div class="form-group" style="margin-top: 20%;">
                    <div class="row">
                        <div class="col"></div>
                        <div class="col-8"></div>
                        <div class="col"><button type="submit" class="btn btn-dark" >Salvar</button></div>
                    </div>
                </div>
                          
                           
                        
                         
            
            
            
            
            
            
            
            </form>
               
            </div>
          </div>       
          



        </div>
    </div>




</template>
 
<script>

import Menu from './Menu.vue';
import {Command} from '@tauri-apps/api/shell'

   
export default {
    name:'Infra',
    components:{
        Menu
    },
    data(){
        return{
        tipo :"",
        anydesk : "",
        codcliente : "",
        senha : "",
    }
    },
    methods:{
         
        
        async criaAcesso(e){
           e.preventDefault()
            try {
                var output =  new Command('hostname').execute();
                var valor = (await output).stdout
               
                } catch (error) {
                     console.log(error)
                    }
               
               const data = {
                   Cod: this.codcliente,
                   Tipo: this.tipo,
                   Anydesk: this.anydesk,
                   Senha: this.senha,
                   Hostname : valor
                }
        
              const dataJson = JSON.stringify(data)

              const req = await fetch('http://localhost:8000/Cadastro',{
                method:"POST",
                headers:{'Content-Type':'application/json',
                    'Access-Control-Allow-Origin':'*',
                    'Access-Control-Allow-Methods':'POST,PATCH,OPTIONS'},
                body: dataJson
              })
        
              const res = await req.json()
              console.log(res)
        
            }
    }
    
}
</script>




<style scoped>
.col-2{
    padding: 0;
}

.row{
    height: 100%;
    width:100%;
}

.container-fluid{
    width: 100%;
    height: 100%;
}

.form-select-sm{
    height: 30px;
    width: 40%;
}

.form-control{
    height: 30px;
}

.texto{
    font-size: 15px;
}



input[type="number"]::-webkit-inner-spin-button,
    input[type="number"]::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

</style>