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
        <div class="titulo-config">CONFIGURAÇÕES</div>

      </div>
        <div>
        </div>
        <br>      
        <P>  CONFIGURAÇÃO DE TEMPO</P>
        <div class="inline-select">
          <select class="select-left">
            <option value="">HORAS</option>
            <option value="01:00">01:00</option>
            <option value="02:00">02:00</option>
            <option value="03:00">03:00</option>
            <option value="04:00">04:00</option>
            <option value="05:00">05:00</option>
            <option value="06:00">06:00</option>
            <option value="07:00">07:00</option>
            <option value="08:00">08:00</option>
            <option value="09:00">09:00</option>
            <option value="10:00">10:00</option>
            <option value="11:00">11:00</option>
            <option value="12:00">12:00</option>
            <option value="13:00">13:00</option>
            <option value="14:00">14:00</option>
            <option value="15:00">15:00</option>
            <option value="16:00">16:00</option>
            <option value="17:00">17:00</option>
            <option value="18:00">18:00</option>
            <option value="19:00">19:00</option>
            <option value="20:00">20:00</option>
            <option value="21:00">21:00</option>
            <option value="22:00">22:00</option>
            <option value="23:00">23:00</option>
            <option value="24:00">24:00</option>
          </select>
          <select class="select-left-min">
            <option value="">MINUTOS</option>
            <option value="00:05">00:05</option>
            <option value="00:10">00:10</option>
            <option value="00:15">00:15</option>
            <option value="00:20">00:20</option>
            <option value="00:25">00:25</option>
            <option value="00:30">00:30</option>
            <option value="00:35">00:35</option>
            <option value="00:40">00:40</option>
            <option value="00:45">00:45</option>
            <option value="00:50">00:50</option>
            <option value="00:55">00:55</option>
            <option value="00:60">00:60</option>
          </select>
        </div>
    <br>
    <P> CONFIGURAÇÃO DE DIRETÓRIO</P> 
    <center>
      <select>
        <option value="">DIRETÓRIO GOOGLE DRIVE</option>
      </select>
      <br>
      <select>
        <option value="">DIRETÓRIO AZURE</option>
      </select>
    </center>
    <br><br>
        <center>
          <button class="btn">CONFIGURAR</button>
        </center>       
    </div>
  </template>
  
  <style scoped>



.p {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 100;
        font-size: 18px;
        line-height: 50px;
        color: #1435A0;
        margin-top: 20px;
        text-align: center;
}

p {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 100;
        font-size: 18px;
        line-height: 50px;
        color: #1435A0;
        margin-top: 20px;
        text-align: center;
}
  
  .parametros-tempo{
    font-family: 'Roboto';
        font-style: normal;
        font-weight: 500;
        font-size: 25px;
        line-height: 50px;
        text-align: center;
        color: #1435A0;
        margin-top: 50px;
  }
  
 select {
  font-family: 'Roboto';
    display: block;
    width: 400px;
    height: 50px;
    background-color: white;
    color: #1435A0;
    font-size: 20px;
    border: 2px solid;
    border-radius: 12px;
    text-align: center;
}

option {
  font-family: 'Roboto';
  color: black;
  font-size: 16px;

}

    .btn {
        border: 2px solid #1E599D;
        color: #B1D4E0;
        font-size: 20px; 
        font-family: 'Roboto'; 
        font-style: normal; 
        font-weight: 400;
        border-radius: 5px;
        align-items: center;
        justify-content: center;
        display: flex;
        height: 40px;
        margin-left: 2%;
        background: #1E599D;
        margin-top: 2%;
    }
 .titulo-config {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 45px;
  line-height: 70px;
  text-align: center;
  color: #1435A0;
  margin-top: 50px;        
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

      .inline-select {
        display: flex;
        flex-direction : row;
      }

      .select-left {
        margin-left: 28%;
      }

      .select-left-min {
        margin-left: 3%;
      }
  </style>
