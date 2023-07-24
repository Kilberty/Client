
<template>
   <div class="container-fluid">
    <div class="row">
        <div class="col-2"><Menu/></div>
        <div class="col-10">
           <form @submit="BuscaBanco" >
            <div class="row">
               <div class="col-9">
                    <div class="form-group">
                       <label for="server">Servidor :</label>
                       <input type="text" class="form-control" v-model="server" name="server" id="server"  placeholder="Nome do servidor">
                    </div>
               </div>
               <div class="col-3">
                    <div class="form-group">
                       <label for="port">Porta :</label>
                       <input type="number" placeholder="Porta" v-model="port" class="form-control" id="port" name="port">
                    </div>
               </div>
            </div>

             <div class="row" style="margin-top: 4%;" >
                <div class="col">
                    <div class="form-group">
                         <label for="user">Usuario :</label>
                         <input type="text" name="user" id="user" v-model="user" class="form-control" placeholder="Usuario">
                    </div>
                </div>
                <div class="col">
                    <div class="form-group">
                         <label for="pwd">Senha :</label>
                         <input type="password" name="pwd" id="pwd" v-model="pwd" class="form-control" placeholder="Senha">
                    </div>
                </div>
                <div class="col">
                    <div class="form-group">
                        <button type="submit" class="btn btn-dark  " v-on="BuscaBanco" style="margin-top: 19%; width: 100%; " >Testar</button>
                    </div>
                 </div>
            </div>
            <div class="row" style="margin-top: 4%;">
                <div class="col">
                    <div class="form-group">
                        <label for="db">Banco de Dados : </label>
                        <select name="db" id="db" v-model="database" class="form-control">
                            <option selected disabled >Selecione</option>
                             <option v-for="db in dados" :value="db.Nome" :key="db.Nome">{{db.Nome}}</option>   
                        </select>
                    </div>
                </div>
            </div>

          <div class="row">
            <div class="col"></div>
            <div class="col"></div>
            <div class="col">
                <div class="form-group">
                    <button type="submit" class="btn btn-dark  " v-on="ConSql()" style="margin-top: 19%; width: 100%; " >Salvar</button>
                </div>
            </div>
          </div>

           </form>
        </div>
    </div>
   </div>


</template>


<script>
import { Command } from '@tauri-apps/api/shell'
import {writeTextFile, BaseDirectory, readTextFile} from '@tauri-apps/api/fs'
import Menu from './Menu.vue'
import router from '../routes'




export default {
    name: 'BancoDados',
    data(){
        return{
           user :"",
           database :"",
           server :"",
           pwd :"",
           port:"",
           dados:""
        }},
    methods:{
        async ConSql(){
         
         const data2 = {
            server: this.server,
            user: this.user,
            db: this.database,
            pwd: this.pwd,
            port: this.port
         }
         
         const Json = JSON.stringify(data2)
         console.log(Json)
         await writeTextFile('conf.json', Json, { dir: BaseDirectory.AppConfig});
                Command.sidecar('./ConSql',["-l"],{encoding:'utf-8'}).execute()
                Command.sidecar('./Create',["-l"],{encoding:'utf-8'}).execute()
               
             
        
        
           
              

        },
       async BuscaBanco(e){
            e.preventDefault()
            const data = {
                   server: this.server,
                   user: this.user,
                   db: this.database,
                   pwd: this.pwd,
                   port: this.port,
                  }   
                             
                 const Json = JSON.stringify(data) 
              
                await writeTextFile('selectBanco.json', Json, { dir: BaseDirectory.AppConfig});
                const start = Command.sidecar('./Select',["-l"],{encoding:'utf-8'}).execute()
                const bancos = await readTextFile('bancos.json',{dir: BaseDirectory.AppConfig})
                const bancosJson = JSON.parse(bancos)
                this.dados = bancosJson
                }


    },components:{
        Menu
    }





}

</script>

<style scoped >
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
    background: white;
}


input[type="number"]::-webkit-inner-spin-button,
    input[type="number"]::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }


</style>