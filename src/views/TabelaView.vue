<template>
<div>
  <header>
    <nav class="navbar navbar-expand-lg color-navbar">
      <div class="container-left">
        <img src="../assets/logo.png" alt="" width="60" height="60" class="img"/>
      </div>
      <div class="titulo">
        TECH NINJAS
      </div>
    </nav>
  </header>
  <div class="fundo">
  <center>
  <div class="titulo-listagem">LISTAGEM DE ARQUIVOS</div>
  <div class="card">
    <input type="text" class="form-control botaoBusca" placeholder="Buscar..." v-model="buscar_nome">
    <b-button type="button" class="btn-limpar" @click="limpar">Limpar</b-button>
    <img src="../assets/lupa.png" alt="" width="40" height="40" class="img-lupa" @click="filtro"/>
    <DataTable :value="dados.Contents" paginator :rows="5"
    tableStyle="color: #1E599D; font-size: 20px; font-family: 'Roboto'; font-style: normal; font-weight: 400; margin-left: 50px;
    margin-top: 50px; border-collapse: separate; border-spacing: 8px;">
      <template #empty> Sem dados </template>
      <Column field="Key" header="NOME DO ARQUIVO" sortable ></Column>
      <Column field="LastModified" header="DATA DE TRANSFERÊNCIA" sortable ></Column>
      <Column field="Size" header="TAMANHO DO ARQUIVO" sortable ></Column>
    </DataTable>
  </div>
  </center>
  <router-link to="MenuArquivos">
    <b-button type="button" class="btn-voltar">Voltar</b-button>
  </router-link>
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
    margin-left: 10px;
  }

  .img {
    margin-left: 10px;
  }

  .fundo {
    position: absolute;
    background: #B1D4E0;
    height: 90.5%;
    width: 100%;
  }

  .card {
    background: #B1D4E0;
    padding: 2rem;
    border-radius: 10px;
    width: 70%;
    margin-top: 50px;
    border: 3px solid #1E599D;
  }

  .botaoBusca {
    margin-bottom: 30px;
    background: #B1D4E0;
    color: #1E599D;
    border: 2px solid #1E599D;
    width: 20%;
    font-size: 20px; 
    font-family: 'Roboto'; 
    font-style: normal; 
    font-weight: 400;
  }

  .botaoBusca::placeholder {
    color: #1E599D;
    font-size: 20px; 
    font-family: 'Roboto'; 
    font-style: normal; 
    font-weight: 400;
  }

  .titulo-listagem {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 45px;
    line-height: 70px;
    text-align: center;
    color: #1435A0;
    margin-top: 50px;
  }

  .btn-limpar {
    border: 2px solid #1E599D;
    color: #1E599D;
    font-size: 20px; 
    font-family: 'Roboto'; 
    font-style: normal; 
    font-weight: 400;
    width: 8%;
    border-radius: 5px;
    margin-left: 92%;
    margin-top: -6%;
    height: 45px;
    align-items: center;
    justify-content: center;
    display: flex;
  }

  .btn-voltar {
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
    width: 5%;
    margin-left: 2%;
    background: #1E599D;
    margin-top: 10%;
  }

  .img-lupa {
    margin-top: -3.3%;
    margin-left: 20.5%;
  }
</style>
  
<script>
  import DataTable from 'primevue/datatable';
  import Column from 'primevue/column';
  import ListagemArquivos from '../services/listagemArquivos';

  export default {
    name: 'TabelaView',
    
    components: {
      DataTable,
      Column
    },

    data(){
      return {
        dados: [],
        novosDados: [],
        buscar_nome: "",
      };
    },

    mounted() {
      this.listar();
    },

    methods: {
      listar() {
        ListagemArquivos.listar().then((resposta) => {
          this.dados = resposta.data;
        });
      },
      
      filtro() {
        this.novosDados = this.dados.Contents.filter(item => item.Key.toLowerCase().includes(this.buscar_nome.toLowerCase()));
        this.dados.Contents = this.novosDados;
      },

      limpar() {
        this.buscar_nome = "";
        this.listar();
      },

    }
  };
</script>