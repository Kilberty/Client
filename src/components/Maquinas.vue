<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-2"><Menu/></div>
            <div class="col-10">
                <div class="row" style="height: 50%;" >
                    <div class="col"></div>
                    <div class="col"></div>
                    <div class="col"></div>
                    <div class="col"><button class="btn btn-outline-success" @click="Atualizar"  style="height: 40px;" >Atualizar</button></div>
                    <div class="col">
                        <button class="btn btn-outline-success" @click="CriaMaquina"  style="height: 40px;" >Registrar</button>
                    </div>
                
                    <div class="accordion" style="height: 10%;" >
                  <div class="accordion-item" v-for="host in Maquinas" :key="host.ID">
                        <div class="accordion-header">
                            <button class="accordion button" :value="host.ID" style="width: 100%;" type="button">{{ host.Hostname }}</button>
                        </div>
                  </div>
                
            </div>

                
                
                
                
                </div>
                
             



            </div>
        </div>
   
</div>

</template>

<script>
import Menu from './Menu.vue'
import { Command } from '@tauri-apps/api/shell';
import {BaseDirectory, readTextFile} from '@tauri-apps/api/fs'


export default {
    name:'Maquinas',
    components:{
        Menu
    },
    data(){
        return{
            Maquinas:""
        }},
    created:function(){
        setTimeout(this.MaquinasRegistradas,3000)
    },
    methods:{
        async CriaMaquina(){
            Command.sidecar('./Maquinas').execute()
        },
        async MaquinasRegistradas(){
           const Maquinas = await readTextFile('selectMaquinas.json',{dir:BaseDirectory.AppConfig})
           const JsonMaquina = JSON.parse(Maquinas)
           this.Maquinas = JsonMaquina 
           
        },
        Atualizar(){
            Command.sidecar('./SelectMaquinas')
            setTimeout(this.MaquinasRegistradas,3000)
            window.location.reload()
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
    background: white;
}





</style>