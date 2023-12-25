import { createStore } from 'vuex';
import { getCharacter,getCharacters } from 'rickmortyapi'

export default createStore({
  state: {
    fact:'',
    currentChar:{}
  },
  actions:{
    async getFact(ctx){
        let response = await fetch('http://localhost:3000/name',{
          
        });
        let fact = await response.json();
        console.log(fact);
        ctx.commit('getNewFact',fact);
    },
    async getRickChar(ctx,payload){
      console.log(payload)
        let a = await getCharacters({name:payload.toLowerCase()});
        console.log(a.data.results);
        ctx.commit('getNewChar',a.data.results);
      }
  },
  mutations:{
    getNewFact(state,fact){
        state.fact = fact;
    },
    getNewChar(state,char){
      state.currentChar =char;
    }
  },
  getters:{
    fact(state){
        return state.fact;
    },
    char(state){
      return state.currentChar;
    }
  }
  
});