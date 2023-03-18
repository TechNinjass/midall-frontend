<template>
  <div class="fundo">
    <div id="appView">
      <nav class="navbar navbar-expand-lg color-navbar">
        <div class="container-left titulo">
          <img src="../assets/logo.png" alt="" width="60" height="60" class="img"/>
          TECH NINJAS
        </div>
      </nav>
    </div>
  </div>
</template>

<style scoped>
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
  }

  .img {
    margin-left: 10px;
  }

  .fundo {
    position: absolute;
    background: #B1D4E0;
    height: 100%;
    width: 100%;
  }
</style>
