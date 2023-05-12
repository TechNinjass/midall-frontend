<template>
  <div class="sidebar fixed group overflow-hidden left-0 top-0 z-10 h-screen w-[calc(3.73rem)] bg-blue-500 lg:hover:w-56 hover:w-44" @mouseleave="hideSidebar">
    <div class="h-full flex flex-col justify-between">
      <div>
        <div class="mt-3 h-13 flex items-center">
          <a href="" class="block w-max px-2.0 flex items-center">
            <img src="@/assets/logo.png" alt="" width="60" height="60" class="img" />
            <!-- <span class="button-text">TECH NINJAS</span> -->
          </a>
        </div>
        <div class="mt-10">
          <div class="px-1 -ml-px font-medium tracking-wide">
            <ul class="w-max space-y-4 group hover:w-full">
              <li>
                <div class="button-container flex items-center">
                  <router-link to="Configuracoes" class="flex items-center">
                    <img src="@/assets/cloud.png" alt="cloud" class="button-icon my-button h-5 w-5 ml-2 mr-2 lg:mr-4" />
                    <span class="button-text"><b>CLOUD CONFIG</b></span>
                  </router-link>
                </div>
              </li>
              <li>
                <div class="button-container flex items-center">
                  <router-link to="Configuracoes" class="flex items-center">
                    <img src="@/assets/configClaro.png" alt="listagem" class="button-icon my-button h-5 w-5 ml-2 mr-2 lg:mr-4" />
                    <span class="button-text"><b>CONFIGURAÇÕES</b></span>
                  </router-link>
                </div>
              </li>
              <li>
                <router-link to="MenuArquivos" class="flex items-center">
                  <img src="@/assets/pasta.png" alt="upload" class="button-icon button-icon my-button h-5 w-5 ml-2 mr-2 lg:mr-4" />
                  <span class="button-text"><b>ARQUIVOS</b></span>
                </router-link>
              </li>
              <li>
                <a href="https://lookerstudio.google.com/reporting/981c0a4c-e39d-401b-ba8c-902dd78a3f66/page/BmrMD" target="_blank" rel="noopener noreferrer" class="flex items-center">
                  <img src="@/assets/grafico-preditivo.png" alt="dashboard" class="button-icon my-button h-5 w-5 ml-2 mr-2 lg:mr-4" />
                  <span class="button-text"><b>DASHBOARD</b></span>
                </a>
              </li>
              <li>
                <a href="https://grafana-techninjas-bfe2ewdhhscha9bc.eus.grafana.azure.com/d/WJxn1ssVk/techninjas-grafana-1?orgId=1" target="_blank" rel="noopener noreferrer" class="flex items-center">
                  <img src="@/assets/grafico-de-barras.png" alt="grafana" class="button-icon my-button h-5 w-5 ml-2 mr-2 lg:mr-4" />
                  <span class="button-text"><b>GRAFANA</b></span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavigationBar',
  data() {
    return {};
  },
  methods: {
    hideSidebar() {
      const sidebar = document.querySelector('.sidebar');
      sidebar.style.display = 'none';
    }
  }
};
</script>

<style scoped>
.sidebar {
  transition: all 0.4s ease-in-out;
  background-color: #1E599D;
}

.button-text {
  margin-left: 4px;
  font-family: 'Roboto';
  font-style: normal; 
  color: #B1D4E0; 
}

span {
  margin-right: 50px;
}
</style>
