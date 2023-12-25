<template>

  <h1 style="text-align:center;margin:40px 0px">Это компонент с риком</h1>
  
    <div class="search">
      <input class="inp" type="text" v-model="charName">
      <button @click="()=>{$store.dispatch('getRickChar',charName);}">Найти</button>
    </div>
  
    <div v-if="char.length > 0" class="chars" >
      <div class="char" v-for="(item,index) in char" :key="index" >
        <router-link :to="'/currentChar/'+index">
        <h2>Name:{{ item.name }}</h2>
        <img :src="item.image">
        <p>Gender:{{ item.gender }}</p>
        <p>Status:{{ item.status }}</p>
        <p>Type: {{ item.species }}</p>
        </router-link>

      </div>
  </div>
  
</template>


<script>
import {mapGetters,mapActions} from 'vuex'
export default{
  name:'Example',
  data(){
      return{
        charName:''
      }
    },
  computed:mapGetters(['char'])
}

</script>



<style scoped>




.inp{
  color: black;
}

button{
  color: black;
}

.chars{
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  
}

.char{
  width: 31%;
  border-radius: 8px;
  border: 1px rgb(55, 116, 95) solid;
  font-weight: 600;
  color: rgb(213, 86, 213);
  margin: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 0.15s;
  background-color: rgba(71, 144, 67, 0.501)}

.char:hover{
  transform: scale(103%);
}

.char img{border-radius: 200px;width: 100%;}
.char a{
  text-decoration: none;
  font-weight: 800;
  color: rgb(213, 86, 213);
}
.char a p{
  margin:5px;
  font-size: 20px;
  
  font-weight: 600;
  color: rgb(213, 86, 213);
}


.search{
  display: flex;
  justify-content: space-around;
  padding: 20px;
  margin:10px;
  background-color: #779363;
  border-radius: 10px;
  width: 73%;
  margin: 0 auto;
}

.search input{
  border:1px gray solid;
  border-radius:8px;
  width: 50%;
  font-size: 24px;
  padding: 5px;
  outline: none;
  background-color: #3b5b3b;
  color: white;
}

.char a h2{
  font-size: 20px;
}

.search button{
  border-radius: 8px;
  border: none;
  background-color: rgb(133, 167, 128);
  color:white;font-size: 24px;
  padding: 10px;
  width: 10%;
  background-color: #406340;
}


</style>
