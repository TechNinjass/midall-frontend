<template>
  <div class="fundo">
    <div id="appView">
      <Cabecalho></Cabecalho>
      <div class="titulo-config">CONFIGURAÇÕES</div>
    </div>
    <div></div>
    <br />
    <P> CONFIGURAÇÃO DE TEMPO</P>
    <div class="inline-select">
      <select class="select-left" v-model="configuracao.hours">
        <option value="0">HORAS</option>
        <option value="1">0</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
        <option value="11">11</option>
        <option value="12">12</option>
      </select>
      <select class="select-left-min" v-model="configuracao.minutes">
        <option value="0">MINUTOS</option>
        <option value="1">1</option>
        <option value="5">05</option>
        <option value="10">10</option>
        <option value="15">15</option>
        <option value="20">20</option>
        <option value="25">25</option>
        <option value="30">30</option>
      </select>
    </div>
    <br />
    <P> CONFIGURAÇÃO DE DIRETÓRIO DO DRIVE</P>
    <center>
      <select v-model="configuracao.folder_drive">
        <option
          v-for="fileDrive in filesDrive"
          :key="fileDrive"
          v-bind:value="fileDrive"
        >
          {{ fileDrive }}
        </option>
      </select>
      <br />
      <P> CONFIGURAÇÃO DE DIRETÓRIO DO AZURE</P>
      <select v-model="configuracao.folder_azure">
        <option
          v-for="fileAzure in filesAzure"
          :key="fileAzure"
          v-bind:value="fileAzure"
        >
          {{ fileAzure }}
        </option>
      </select>
    </center>
    <br /><br />
    <center>
      <button class="btn btn-config" @click="salvar">CONFIGURAR</button>
    </center>
  </div>
</template>
  
  <style scoped>
.p {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 100;
  font-size: 18px;
  line-height: 50px;
  color: #1435a0;
  margin-top: 20px;
  text-align: center;
}

p {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 100;
  font-size: 18px;
  line-height: 50px;
  color: #1435a0;
  margin-top: 20px;
  text-align: center;
}

.parametros-tempo {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 25px;
  line-height: 50px;
  text-align: center;
  color: #1435a0;
  margin-top: 50px;
}

select {
  font-family: "Roboto";
  display: block;
  width: 400px;
  height: 50px;
  background-color: white;
  color: #1435a0;
  font-size: 20px;
  border: 2px solid;
  border-radius: 12px;
  text-align: center;
}

option {
  font-family: "Roboto";
  color: black;
  font-size: 16px;
}

.btn-config {
  border: 2px solid #1e599d;
  color: #b1d4e0;
  font-size: 20px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  display: flex;
  height: 40px;
  margin-left: 2%;
  background: #1e599d;
  margin-top: 2%;
}
.titulo-config {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 45px;
  line-height: 70px;
  text-align: center;
  color: #1435a0;
  margin-top: 50px;
}

.color-navbar {
  background-color: #1e599d;
}

.titulo {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 600;
  font-size: 38px;
  line-height: 75px;
  color: #b1d4e0;
  margin-left: 10px;
}

.img {
  margin-left: 10px;
}

.fundo {
  position: absolute;
  background: #b1d4e0;
  height: 100%;
  width: 100%;
}

.inline-select {
  display: flex;
  flex-direction: row;
}

.select-left {
  margin-left: 28%;
}

.select-left-min {
  margin-left: 3%;
}
</style>

  <script>
import Configuracoes from "../services/configuracoesTransfer";
import Cabecalho from "../components/Cabecalho.vue";

export default {
  name: "ConfigTempoView",

  components: {
    Cabecalho,
  },

  data() {
    return {
      configuracao: {
        hours: 0,
        minutes: 0,
        folder_drive: "",
        folder_azure: "",
      },
      filesAzure: [],
      filesDrive: [],
    };
  },

  mounted() {
    this.listarFilesAzure();
    this.listarFilesDrive();
  },
  methods: {
    listarFilesAzure() {
      Configuracoes.listarFolderAzure().then((resp) => {
        this.filesAzure = resp.data.folders;
      });
    },

    listarFilesDrive() {
      Configuracoes.listarFolderDrive().then((resp) => {
        this.filesDrive = resp.data.folders.folders;
      });
    },

    salvar() {
      Configuracoes.cadastrar(this.configuracao).then(() => {
        alert("Configurações Salvas!");
      });
    },
  },
};
</script>
  
