<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-2"><Menu/></div>
            <div class="col-10">

                            






            </div>
        </div>
    </div>

</template>



<script>
import Menu from './Menu.vue';

export default {
    name: 'TelaLogado',
   components:{
    Menu
   }
}

</script>



<style scoped >
.row{
    padding: 0%;
    width: 100%;
    height: 100%;  
}

.col-2{
    padding: 0;
    
}

.container-fluid{
    width: 100%;
    height: 100%;
}


</style>