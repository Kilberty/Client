<template>
   <div class="container-fluid" style="background-color: white;" >
    <div class="row">
        <div class="col-2"><Menu/></div>
        <div class="col-10" style="background-color: white;" >
          <div class="container-fluid">
           <div class="row justify-content-end ">
                <div class="col"></div>
                <div class="col"></div>
                <div class="col"></div>    
                <div class="col"></div>
                
              <div class="col">
                <button class="btn btn-outline-success" @click="GeraEmpresa()" style="height: 40px;" > Novo </button>
              </div>
            
             
        
               
           </div> 
            
            
           </div>
          </div>       
          



        </div>
    </div>




</template>
 
<script>

import Menu from './Menu.vue';
import {Command} from '@tauri-apps/api/shell'
import {writeTextFile, BaseDirectory} from '@tauri-apps/api/fs'
import Config from './Config.vue';
import { encode } from 'punycode';

   
export default {
    name:'Infra',
    components:{
        Menu,
        Config
    },
    data(){
        return{
        user :"sa",
        database : "BaseNhoqueCiaAlimentos",
        Server : "localhost",
        pwd : "qaz@123",
        port: 5433
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
                   server: this.Server,
                   user: this.user,
                   db: this.database,
                   pwd: this.pwd,
                   Hostname : valor
                }
        
              const dataJson = JSON.stringify(data)

              const req = await fetch('http://localhost:8000/Cadastro',{
                method:"POST",
                headers:{'Content-Type':'application/json',
                    'Access-Control-Allow-Origin':'*',
                    'Access-Control-Allow-Methods':'POST'},
                body: dataJson
              })
        
              const res = await req.json()
              console.log(res)
        
            },
             async GeraEmpresa(){
                
                
                
                const data = {
                   server: this.Server,
                   user: this.user,
                   db: this.database,
                   pwd: this.pwd,
                   port: this.port
                  }   
                             
                 const Json = JSON.stringify(data) 

                await writeTextFile('conf.json', Json, { dir: BaseDirectory.AppConfig });
                const start = Command.sidecar('./ConSql',["-l"],{encoding:'utf-8'}).execute()
               

               
                console.log(start)
                         
                       
         
               

               



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