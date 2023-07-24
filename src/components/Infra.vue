<template>
   <div class="container-fluid" style="background-color: white;" >
    <div class="row">
        <div class="col-2"><Menu/></div>
        <div class="col-10" style="background-color: white;" >
          <div class="container-fluid">
           <div class="row justify-content-end " style="height: 50%;" >
                <div class="col"></div>
                <div class="col"></div>
                <div class="col"></div>
                <div class="col"></div>      
               <div class="col">
                <button class="btn btn-outline-success" @click="GeraEmpresa()" style="height: 40px;" > Novo </button>
            </div>
         
          <div class="accordion" style="margin-top: 10%;" >
             <div class="accordion-item" v-for="nomes in Empresas" :key="nomes.CGC">
               <div class="accordion-header">
                <button class="accordion button" @click="MostraNome" :value="nomes.ID" style="width: 100%;" type="button">{{ nomes.Fantasia}} - {{ nomes.CGC }} </button>
               </div>
                
            </div>
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
import {BaseDirectory, readTextFile, writeTextFile} from '@tauri-apps/api/fs'
import router from '../routes';
import Config from './Config.vue';




   
export default {
    name:'Infra',
    components:{
        Menu,
        Config
    },
    data(){
        return{
        Empresas:"",
 

    }
    },
    created: function(){
      this.EmpresaConfig()
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
                router.push('/Banco')   
            },

            async EmpresaConfig(){
                 Command.sidecar('./SelectConfig').execute() 
                 const Registradas = await readTextFile('EmpresaBanco.json',{dir:BaseDirectory.AppConfig})
                 const RegistradasJson = JSON.parse(Registradas)
                 this.Empresas = RegistradasJson
                 Command.sidecar('./CGC').execute()
                

            },
            async MostraNome(e){
             const buttonClickedValue = e.target.value
               const idEmpresa = {
                 'id': buttonClickedValue,
                 }
               
                const Json = JSON.stringify(idEmpresa)
                console.log(idEmpresa)
                await writeTextFile('id.json', Json, { dir: BaseDirectory.AppConfig});
                Command.sidecar('./SelectMaquinas').execute()
                router.push('/Maquinas')
            }



    }
}   

</script>




<style scoped>
.col-2{
    padding: 0;
}

.col{
    height: 10%;
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