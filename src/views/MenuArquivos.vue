<template>
  <div class="fundo">
    <div id="appView">
      <Cabecalho></Cabecalho>

      <div class="button-container">
        <router-link to="tabela">
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

    .fundo {
        position: absolute;
        background:  #B1D4E0;
        height: 100%;
        width: 100%;
    }
</style>

<script>
  import Cabecalho from '../components/Cabecalho.vue';

  export default {
    name: 'MenuArquivosView',

    components: {
      Cabecalho,
    },
  }
</script>

