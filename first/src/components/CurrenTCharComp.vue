<template>

    
    <div class="char">

        <h1>Имя : {{ char[index].name }}</h1>
        <p>Пол: {{ char[index].gender }}</p>
        <img :src="char[index].image">
        <h2>Место нахождения: {{ char[index].location.name }}</h2>
        <p>Версия: {{ char[index].origin.name }}</p>
        <p>Вид: {{ char[index].species }}</p>
        <p>Статус: {{ char[index].status }}</p>

        <button class="btn">
            <router-link to="/rick">Назад</router-link>
        </button>

    </div>
    
</template>
  
  
  <script>
  import {mapGetters,mapActions} from 'vuex'
  export default{
    name:'Example',
    data(){
        return{
          index:this.$route.params.id
        }
      },
    computed:mapGetters(['char']),
    mounted(){
        
    }
  }
  
  </script>
  
  
  
  <style scoped>
  *{
    color:white;
  }
  
  .char{
    width: 50%;
    margin:0 auto;
    
    padding: 20px;
    border-radius: 8px;
    font-size: 18px;
    align-items: center;
    display: flex;
    flex-direction: column;
    text-align: left;
    background-color:rgba(61, 244, 51, 0.25) ;
  }
  
 .char img{
    border-radius: 300px;
    width: 90%;
    align-items: center;
    transition: all 0.35s;
 }
 .char img:hover{
    transform: scale(110%);
    margin-bottom: 30px;
    border-radius: 0px;
 }

 .btn{
    border: 1px white solid;
    text-decoration: none;
    width: 15%;
    margin:0 auto;
    transition: all 0.25s;
 }
 .btn a{
    text-decoration: none;
 }

 .btn:hover{

    background-color: rgba(124, 167, 124, 0.716);
 }


  
  </style>
  