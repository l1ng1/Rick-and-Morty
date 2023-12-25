<template class="cont">
  
<div class=" container w-75">
  <div class="container w-75">
    <ul class="menu navbar m-3 rounded p-3">
      <router-link to="/cat" class="nav-item nav-link">Фаткы</router-link>
      <router-link to="/rick" class="nav-item nav-link">Рик и Морти</router-link>
      <router-link to="/" class="nav-item nav-link">Главная</router-link>
    </ul>
  </div>




  <div>
    <h1></h1>
  </div>

  <router-view></router-view>
</div>
</template>

<script >



</script>



<style scoped>


.menu{
  background-color: rgb(72, 78, 128);
}
.menu a {
  color: rgb(156, 155, 155);
  font-size: 23px;
  position: relative;
  text-decoration: none;
  transition: color 0.3s; /* Добавляем плавное изменение цвета */
}

.menu a::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: white;
  transform: scaleX(0); /* Начальное значение - нулевая ширина */
  transform-origin: 100% 50%;
  transition: transform 0.3s; /* Плавное изменение ширины */
}



.menu a:hover::before {
  transform: scaleX(1); /* При наведении - увеличиваем ширину до 100% */
}
.menu a:hover{
  color: white;
}



</style>
