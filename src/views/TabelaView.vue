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
    <DataTable :value="dados" paginator :rows="5"
    tableStyle="color: #1E599D; font-size: 20px; font-family: 'Roboto'; font-style: normal; font-weight: 400; margin-left: 120px;
    margin-top: 50px; border-collapse: separate; border-spacing: 8px;">
      <template #empty> Data not found </template>
      <Column field="nome" header="NOME DO ARQUIVO" sortable ></Column>
      <Column field="tipo" header="TIPO DO ARQUIVO" sortable ></Column>
      <Column field="tamanho" header="TAMANHO DO ARQUIVO" sortable ></Column>
    </DataTable>
  </div>
  </center>
  <b-button type="button" class="btn-voltar">Voltar</b-button>
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
    margin-top: 180px;
  }

  .img-lupa {
    margin-top: -3.3%;
    margin-left: 20.5%;
  }
</style>
  
<script>
  import DataTable from 'primevue/datatable';
  import Column from 'primevue/column';

  export default {
    name: 'TabelaView',
    
    components: {
      DataTable,
      Column
    },

    data(){
      return {
        buscar_nome: "",
        dadosCopia: [],
        dados: [
          {
            id: 1,
            nome: 'Teste um',
            tipo: 'PDF',
            tamanho: '100KB'
          },
          {
            id: 2,
            nome: 'Teste dois',
            tipo: 'PNG',
            tamanho: '556MB'
          },
          {
            id: 3,
            nome: 'Teste tres',
            tipo: 'PDF',
            tamanho: '98KB'
          },
          {
            id: 3,
            nome: 'Teste tres',
            tipo: 'PDF',
            tamanho: '98KB'
          },
          {
            id: 3,
            nome: 'Teste tres',
            tipo: 'PDF',
            tamanho: '98KB'
          },
          {
            id: 3,
            nome: 'Teste tres',
            tipo: 'PDF',
            tamanho: '98KB'
          },
        ],
      };
    },

    methods: {
      filtro() {
        this.dadosCopia = this.dados;
        this.dadosCopia = this.dados.filter((item) => {
          console.log(this.buscar_nome);
          return(item.nome.toLowerCase().indexOf(this.buscar_nome.toLowerCase()) > -1);
        });
      },

      limpar() {
        this.buscar_nome = "";
        this.dados = this.dadosCopia;
      }
    }
  };
</script>