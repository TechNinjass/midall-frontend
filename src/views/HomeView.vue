<template>
  <div class="fundo">
    <div id="appView">
      <Cabecalho></Cabecalho>
      <div class="button-container">
        <router-link to="Configuracoes">
          <button class="my-button">
            <img src="../assets/config.png" alt="listagem" class="button-icon">
            <span class="button-text config">CONFIGURAÇÕES</span>
          </button>
        </router-link>
        <router-link to="tabela">
          <button class="my-button">
            <img src="../assets/listagem.png" alt="upload" class="button-icon">
            <span class="button-text">LISTAGEM DE ARQUIVOS</span>
          </button>
       </router-link>
       <a href="https://lookerstudio.google.com/reporting/981c0a4c-e39d-401b-ba8c-902dd78a3f66/page/BmrMD">
          <button class="my-button">
            <img src="../assets/grafico.png" alt="dashboard" class="button-icon">
            <span class="button-text config">DASHBOARD</span>
          </button>
        </a>
      </div>
      <video width="320" height="240" autoplay loop muted class="gif-ninja">
        <source src="../assets/gifDevNinja.mp4" type="video/mp4" />
      </video>
  </div>
</div>
</template>

<style scoped>
    .button-container {
        position: relative;
        height: 70vh;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
        gap:150px;
    }

    .my-button {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 300px;
        height: 310px;
        background-color: white;
        border-radius: 50px;
        color: white;
        font-size: 30px;
        font-weight: bold;
    }

    .my-button:hover {
      transform: scale(1.1);
      transition: 200ms linear;
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

    .fundo {
        position: absolute;
        background:  #B1D4E0;
        height: 100%;
        width: 100%;
    }

    .config {
      margin-top: 25px;
    }

    .gif-ninja {
      margin-left: 88%;
      margin-top: -5%;
      width: 12%;
    }
</style>

<script>
  import Cabecalho from '../components/Cabecalho.vue';
  export default {
    name: 'HomeView',

    components: {
      Cabecalho
    }
  }
</script>