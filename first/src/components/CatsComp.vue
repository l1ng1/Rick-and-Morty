<template>
    <div class="win">
    <h2 class="title">Рандомный факт о мульт-сериале 'Рик и морти':</h2>
    <img class="img" :src="fact.img_url">
    <p class="txt">{{ fact.text }}</p>
    
    <button class="upgrade" @click="()=>{
    $store.dispatch('getFact',charName)
    }">Обновить</button>
    </div>
  </template>
  
  <script >
  import {mapGetters,mapActions} from 'vuex'
  export default{
    
  
    name:'CatsComp',
    
    computed:mapGetters(['fact'])
  }
  
  </script>
  
  
  
  <style scoped>
  
  .win{
    margin-top: 20px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 600px;
    justify-content: space-between;
    color: white;
    background-color: rgba(17, 17, 17, 0.696);
    
  }
  
  .img{
    width: 600px;
    height: auto;
    opacity: 0.9;
  }
  .txt{
    font-size: 32px;
    text-align: center;
  }
  .upgrade{
    color:gray;
    font-size: 20px;
    border: none;
    border-radius: 10px;
    background-color: initial;
    transition: all 0.25s;
  }
  .upgrade:hover{
    color: rgb(211, 208, 208);
  }
  
  
  </style>
  