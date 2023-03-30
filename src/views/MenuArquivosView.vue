import { Link } from 'react-router-dom';


<template>
  <div class="fundo">
    <div id="appView">
      <nav class="navbar navbar-expand-lg color-navbar">
        <div class="container-left">
          <img src="../assets/logo.png" alt="" width="60" height="60" class="img"/>
        </div>
        <div class="titulo">
          TECH NINJAS
        </div>
      </nav>

      <div class="button-container">
        <router-link to="MenuArquivosView.vue">
        <button class="my-button">
          <img src="../assets/listagem.png" alt="upload" class="button-icon">
          <span class="button-text">LISTAGEM DE ARQUIVOS</span>
        </button>
      </router-link>
      </div>
    </div>
  </div>

</template>

<style scoped>
    .button-container {
        position: relative;
        height: 75vh;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
        gap:200px;
    }

    .my-button {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 300px;
        height: auto;
        background-color: white;
        border-radius: 50px;
        color: white;
        font-size: 30px;
        font-weight: bold;
    }

    .button-icon {
        width: 170px;
        height: 170px;
        padding-top: 40px;
    }

    .button-text {
        color: hwb(212 12% 38%);
        display: inline-block;
        white-space: wrap;
        padding-top: 20px;
        padding-right: 30px;
        padding-bottom: 30px;
        padding-left: 30px;
    }

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

    .fundo {
        position: absolute;
        background:  #B1D4E0;
        height: 100%;
        width: 100%;
    }
</style>

<script>
  export default {
    name: 'MenuArquivosView'
  }
</script>

