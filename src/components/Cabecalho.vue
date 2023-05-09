<template>
    <nav class="navbar navbar-expand-lg color-navbar">
      <Sidebar v-if="isSidebarOpen"/>
        <div class="container-left">
          <img src="../assets/logo.png" alt="" width="60" height="60" class="img"
          @click="toogleSidebar"/>
        </div>
        <div class="titulo">
          TECH NINJAS
        </div>
    </nav>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue';
export default {
  name: 'CabecalhoComponent',
  components:{
    Sidebar
  },
  data(){
    return{
      isSidebarOpen: false
    }
  },
  methods:{
    toogleSidebar() {
      this.isSidebarOpen = !this.isSidebarOpen
    }
  }
}
</script>

<style scooped>
   .color-navbar {
        background-color:#407BFF;
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
</style>
