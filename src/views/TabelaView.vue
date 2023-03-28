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
  <div class="card">
    <DataTable :value="customers" paginator :rows="1" 
    tableStyle="color: #1E599D; font-size: 17px; font-family: 'Roboto'; font-style: normal; font-weight: 400;">
      <template #empty> Data not found </template>
      <Column field="name" header="NOME DO ARQUIVO" style="min-width: 12rem" sortable ></Column>
      <Column field="name" header="TIPO DO ARQUIVO" style="min-width: 12rem" sortable ></Column>
      <Column field="name" header="TAMANHO DO ARQUIVO" style="min-width: 12rem" sortable ></Column>
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