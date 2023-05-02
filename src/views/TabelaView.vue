<template>
  <div>
    <Cabecalho></Cabecalho>
    <div class="fundo">
    <center>
    <div class="titulo-listagem">LISTAGEM DE ARQUIVOS</div>
    <div class="card">
      <input type="text" class="form-control botaoBusca" placeholder="Buscar..." v-model="buscar_nome">
      <button type="button" class="btn-limpar" @click="limpar">Limpar</button>
      <img src="../assets/lupa.png" alt="" width="40" height="40" class="img-lupa" @click="filtro"/>
      <DataTable :value="dados" paginator :rows="5"
        tableStyle="color: #1E599D; font-size: 20px; font-family: 'Roboto'; font-style: normal; font-weight: 400; margin-left: 50px;
        margin-top: 50px; border-collapse: separate; border-spacing: 8px;">
        <template #empty> Sem dados </template>
        <Column field="name" header="NOME DO ARQUIVO" sortable ></Column>
        <Column field="LastModified" header="DATA DE TRANSFERÊNCIA"  sortable hidden></Column>
        <Column field="size" header="TAMANHO DO ARQUIVO" sortable ></Column>
      </DataTable>
    </div>
    </center>
    </div>
  </div>
  </template>

  <style scooped>
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
      color: #1E599D;
      font-size: 20px; 
      font-family: 'Roboto'; 
      font-style: normal; 
      font-weight: 400;
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
    .img-lupa {
      margin-top: -6%;
      margin-left: 20.5%;
    }
  </style>
    
    <script>
    import DataTable from 'primevue/datatable';
    import Column from 'primevue/column';
    import ListagemArquivos from '../services/listagemArquivos';
    import Cabecalho from '../components/Cabecalho.vue';
    export default {
      name: 'TabelaView',
      
      components: {
        DataTable,
        Column,
        Cabecalho,
      },
      data() {
        return {
          dados: [],
          buscar_nome: "",
        };
      },
  
      mounted() {
        this.listar();
        this.formatacaoDados();
      },
      
      methods: {
        listar() {
          ListagemArquivos.listar().then((resposta) => {
            this.dados = resposta.data.files;
            resposta.data.files.forEach(item => {
              item.size = this.converterSize(item.size);
            });
          });
        },

        formatacaoDados() {
          this.converterTamanhoArquivos();
          this.converterData();
        },

        converterData() {
          this.dados.forEach(item => {
            item.LastModified = this.formatarData(item.LastModified);
          });
        },

        formatarData(data) {
          const date = new Date(data);
          const dia = date.getDate().toString().padStart(2, '0');
          const mes = (date.getMonth() + 1).toString().padStart(2, '0');
          const ano = date.getFullYear();
          return `${dia}/${mes}/${ano}`;
        },

        converterSize(size) {
          const sizeAtual = (size/1000);
          const sizeFinal = sizeAtual + "MB"
          return sizeFinal;
        },

        converterTamanhoArquivos() {
          this.dados.forEach(item => {
            item.size = this.converterSize(item.size);
          });
        },

        filtro() {
          this.novosDados = this.dados.filter(item => item.name.toLowerCase().includes(this.buscar_nome.toLowerCase()));
          this.dados = this.novosDados;
        },

        limpar() {
          this.buscar_nome = "";
          this.listar();
        },
      }
    };
    

  

  </script>