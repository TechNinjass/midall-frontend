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
    <input type="text" class="form-control botaoBusca" placeholder="Buscar...">
    <b-button class="btn-limpar">Limpar</b-button>
    <DataTable :value="customers" paginator :rows="10"
    tableStyle="color: #1E599D; font-size: 20px; font-family: 'Roboto'; font-style: normal; font-weight: 400; margin-left: 120px;
    margin-top: 50px; border-collapse: separate; border-spacing: 8px;">
      <template #empty> Data not found </template>
      <Column field="name" header="NOME DO ARQUIVO" sortable ></Column>
      <Column field="name" header="TIPO DO ARQUIVO" sortable ></Column>
      <Column field="name" header="TAMANHO DO ARQUIVO" sortable ></Column>
    </DataTable>
  </div>
  </center>
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
        customers: [
          {
            id: 1000,
            name: 'James Butt',
            country: {
              name: 'Algeria',
              code: 'dz'
            },
            company: 'Benton, John B Jr',
            date: '2015-09-13',
            status: 'unqualified',
            verified: true,
            activity: 17,
            representative: {
              name: 'Ioni Bowcher',
              image: 'ionibowcher.png'
            },
            balance: 70663
          },
          {
            id: 1000,
            name: 'James Butt 2',
            country: {
              name: 'Algeria',
              code: 'dz'
            },
            company: 'Benton, John B Jr',
            date: '2015-09-13',
            status: 'unqualified',
            verified: true,
            activity: 17,
            representative: {
              name: 'Ioni Bowcher',
              image: 'ionibowcher.png'
            },
            balance: 70663
          }
        ],
        filters: null,
        representatives: [
          { name: 'Amy Elsner', image: 'amyelsner.png' },
          { name: 'Anna Fali', image: 'annafali.png' },
          { name: 'Asiya Javayant', image: 'asiyajavayant.png' },
          { name: 'Bernardo Dominic', image: 'bernardodominic.png' },
          { name: 'Elwin Sharvill', image: 'elwinsharvill.png' },
          { name: 'Ioni Bowcher', image: 'ionibowcher.png' },
          { name: 'Ivan Magalhaes', image: 'ivanmagalhaes.png' },
          { name: 'Onyama Limba', image: 'onyamalimba.png' },
          { name: 'Stephen Shaw', image: 'stephenshaw.png' },
          { name: 'XuXue Feng', image: 'xuxuefeng.png' }
        ],
        statuses: ['unqualified', 'qualified', 'new', 'negotiation', 'renewal', 'proposal'],
        loading: true
      };
    },

    methods: {
      formatDate(value) {
        return value.toLocaleDateString('en-US', { day: '2-digit', month: '2-digit', year: 'numeric'});
      },
      
      formatCurrency(value) {
        return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
      },

      getCustomers(data) {
        return [...(data || [])].map((d) => {
          d.date = new Date(d.date);
          return d;
        });
      },

      getSeverity(status) {
        switch (status) {
          case 'unqualified':
            return 'danger';
          case 'qualified':
            return 'success';
          case 'new':
            return 'info';
          case 'negotiation':
            return 'warning';
          case 'renewal':
            return null;
        }
      }
    }
  };
</script>