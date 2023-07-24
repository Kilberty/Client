<template>
    <div class="container-fluid">
          <div class="container">
            <div class="row">
                <form>
                     <div class="col"></div>
                     <div class="col centraliza">
                        <div class="form-group">
                            <input type="password" id="senha" name="senha" class="form-control"/>
                        </div>
                     </div>
                     <div class="col"></div>
                
                       <div class="form-group botao">
                          <button type="submit" @click="ChecaSenha()" class="btn btn-dark" > Login</button>
                       </div>
                           
                
                
                </form>
            </div>
          </div>
    </div>    



</template>


<script>
import router from '../routes';

export default  {
  name:'TelaLogin',
  methods:{
 
  ChecaSenha(){
  var RecebeSenha = document.querySelector('#senha')
  var Senha = RecebeSenha.value
  console.log(Senha)

  if(Senha === 'fireconfig'){
   
    router.push('/Logado')
  }else{
   alert('Senha Incorreta')
  }
  }}
}




</script>


<style scoped>
  .botao{
    margin-top:2%;
  }


  .centraliza{
    margin-top: 15%;
  }



</style>