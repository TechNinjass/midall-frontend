<template>
    <nav class="navbar navbar-expand-lg color-navbar">
        <div class="container-left">
          <img src="../assets/logo.png" alt="" width="60" height="60" class="img"/>
        </div>
        <div class="titulo">
          TECH NINJAS
        </div>
    </nav>
</template>

<script>
export default {
  name: 'CabecalhoComponent',
}
</script>

<style scooped>
   .color-navbar {
        background-color:#1E599D;
    }

    .titulo {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 600;
        font-size: 38px;
        line-height: 75px;
        color: #B1D4E0;  
        margin-left: 10px;
    }

    .img {
        margin-left: 10px;
    }
</style>
