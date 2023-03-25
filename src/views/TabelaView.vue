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
  <div class="card">
    <DataTable :value="customers" paginator showGridlines :rows="1" dataKey="id"
      filterDisplay="menu" :loading="loading" :globalFilterFields="['name', 'country.name', 'representative.name', 'balance', 'status']">
      <template #header>
        <div class="flex justify-content-between">
          <Button type="button" icon="pi pi-filter-slash" label="Clear" outlined @click="clearFilter()" />
          <span class="p-input-icon-left">
            <i class="pi pi-search" />
            <InputText v-model="filters['global'].value" placeholder="Keyword Search" />
          </span>
        </div>
      </template>
      <template #empty> No customers found. </template>
      <template #loading> Loading customers data. Please wait. </template>
            <Column field="name" header="Name" style="min-width: 12rem">
                <template #body="{ data }">
                    {{ data.name }}
                </template>
                <template #filter="{ filterModel }">
                    <InputText v-model="filterModel.value" type="text" class="p-column-filter" placeholder="Search by name" />
                </template>
            </Column>
            <Column header="Country" filterField="country.name" style="min-width: 12rem">
                <template #body="{ data }">
                    <div class="flex align-items-center gap-2">
                        <img alt="flag" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png" :class="`flag flag-${data.country.code}`" style="width: 24px" />
                        <span>{{ data.country.name }}</span>
                    </div>
                </template>
                <template #filter="{ filterModel }">
                    <InputText v-model="filterModel.value" type="text" class="p-column-filter" placeholder="Search by country" />
                </template>
                <template #filterclear="{ filterCallback }">
                    <Button type="button" icon="pi pi-times" @click="filterCallback()" severity="secondary"></Button>
                </template>
                <template #filterapply="{ filterCallback }">
                    <Button type="button" icon="pi pi-check" @click="filterCallback()" severity="success"></Button>
                </template>
                <template #filterfooter>
                    <div class="px-3 pt-0 pb-3 text-center">Customized Buttons</div>
                </template>
            </Column>
            <Column header="Agent" filterField="representative" :showFilterMatchModes="false" :filterMenuStyle="{ width: '14rem' }" style="min-width: 14rem">
                <template #body="{ data }">
                    <div class="flex align-items-center gap-2">
                        <img :alt="data.representative.name" :src="`https://primefaces.org/cdn/primevue/images/avatar/${data.representative.image}`" style="width: 32px" />
                        <span>{{ data.representative.name }}</span>
                    </div>
                </template>
                <template #filter="{ filterModel }">
                    <MultiSelect v-model="filterModel.value" :options="representatives" optionLabel="name" placeholder="Any" class="p-column-filter">
                        <template #option="slotProps">
                            <div class="flex align-items-center gap-2">
                                <img :alt="slotProps.option.name" :src="`https://primefaces.org/cdn/primevue/images/avatar/${slotProps.option.image}`" style="width: 32px" />
                                <span>{{ slotProps.option.name }}</span>
                            </div>
                        </template>
                    </MultiSelect>
                </template>
            </Column>
    </DataTable>
  </div>
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
    height: 100%;
    width: 100%;
  }

  html {
    font-size: 14px;
  }

  body {
    font-family: var(--font-family);
    font-weight: normal;
    background: var(--surface-ground);
    color: var(--text-color);
    padding: 1rem;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .card {
    background: #fff;
    padding: 2rem;
    border-radius: 10px;
    margin-bottom: 1rem;
  }
</style>
  
<script>
  import DataTable from 'primevue/datatable';
  import Column from 'primevue/column';
  import { FilterMatchMode, FilterOperator } from 'primevue/api';

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

    created() {
      this.initFilters();
    },

    methods: {
      formatDate(value) {
        return value.toLocaleDateString('en-US', { day: '2-digit', month: '2-digit', year: 'numeric'});
      },
      
      formatCurrency(value) {
        return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
      },

      clearFilter() {
        this.initFilters();
      },

      initFilters() {
        this.filters = {
          global: { value: null, matchMode: FilterMatchMode.CONTAINS },
          name: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
          'country.name': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
          representative: { value: null, matchMode: FilterMatchMode.IN },
          date: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.DATE_IS }] },
          balance: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }] },
          status: { operator: FilterOperator.OR, constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }] },
          activity: { value: [0, 100], matchMode: FilterMatchMode.BETWEEN },
          verified: { value: null, matchMode: FilterMatchMode.EQUALS }
        };
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