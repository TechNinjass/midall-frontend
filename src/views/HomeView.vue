
<template>
  <div class="fundo">
    <div id="appView">
      <nav class="navbar navbar-expand-lg color-navbar">
        <div class="container-left titulo">
          <img src="../assets/logo.png" alt="" width="60" height="60" class="img"/>
          TECH NINJAS
        </div>
      
      </nav>
      <div class="button-container">
          <button class="my-button">
                  <img src="../assets/UPLOAD.jpeg" alt="listagem" class="button-icon">
                  <span class="button-text">UPLOAD DE ARQUIVOS</span>
          </button>
          <button class="my-button">
            <img src="../assets/listagem.jpeg" alt="upload" class="button-icon">
            <span class="button-text">LISTAGEM DE ARQUIVOS</span>
          </button>
      </div>
    </div>
  </div>
</template>
   



<style scoped>

.button-container {
  position: relative;
  height: 90vh;
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
  color: darkviolet;
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

