<script >
import { defineComponent } from 'vue';
import TelaLogin from './components/TelaLogin.vue'
import TelaLogado from './components/TelaLogado.vue';


export default defineComponent( {
  name: 'App',
  components:{
    TelaLogin,
    TelaLogado
  }

})


</script>



<template>
    <RouterView/>
</template>

<style scoped>

</style>
