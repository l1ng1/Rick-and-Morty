<template>

    <div class="text">


      <div class="txt first">
        <img src="../assets/third.png">
        <div>
          <h1>В чем смысл этого сайта?</h1>
          <p>
          Это сайт предназначен для фанатов мульт-сериала 'Рик и морти'.Здесь они могут
          узнать что-то новое о сериале и развлечься на некоторое время.
          </p>
        </div>
        
      </div>

      <div class="txt first">
        <img src="../assets/second.png">
        <div>
        <h1>Есть ли идея в этом сайте?</h1>
        <p>
          Да,конечно.Этим сайтом я хотел показать
           свои уменения в пользовании технологий,которыми я овладел на этом курсе.
        </p>
      </div>
      </div>


      <div class="txt first">
        <img src="../assets/first.png" >
        <div>
        <h1>Какие знания ты здесь использовал?</h1>
        <p>
          Из основных это html,css,js,node js.Так же использовал библотеки и
          фреймворки,такие как Vue js,vue-router,vuex и тд.
          А еще я использовал два api.
        </p>
      </div>
      </div>


    </div>
  
  </template>
  
  
  <script>
  export default{
    name:'Example',
    data(){
      return{
        msg:''
      }
    }
  }
  
  </script>
  
  
  
  <style scoped>
  
  .text{
    color: white;
    display: flex;
    flex-direction: column;
  }

  .txt{
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: rgba(156, 125, 156, 0.628);
    margin: 20px;padding: 20px;
    border-radius: 10px;
    font-size: 24px;
  }
  .txt div{
    width: 50%;
  }
  .txt img{
    width: 35%;
    margin:20px;
    border-radius: 10px;
  }
  .txt:nth-child(even){
    text-align: right;
    flex-direction: row-reverse;
  }
  .txt:nth-child(odd){
    text-align: left;
  }
  </style>
  