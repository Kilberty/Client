<template>
<div class="d-flex flex-column flex-shrink-0 text-white bg-dark" style="width: 100%; height: 100%;">
    <ul class="nav nav-pills flex-column mb-auto">
   
      <li>
          <button class="btn btn-link" @click="DirecionaRotaInfra()" > Infra</button>
      </li>
    </ul>
</div>




</template>

<script>
import router from '../routes';

export default {
    name: 'Menu',
    methods:{
        DirecionaRotaInfra(){
            router.push('/Infra')
        },
       
    }
}
</script>


<style scoped >
.nav-link{
    font-size: 12px ;
}

.btn-link{
    text-decoration: none;
    color: white;
    width: 100%;
    font-size: 13px;
}


</style>