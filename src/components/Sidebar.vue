<template>
  <div
    class="sidebar fixed group overflow-hidden left-0 top-0 z-10 h-screen w-[calc(3.73rem)] bg-blue-500 lg:hover:w-56 hover:w-44"
  >
    <div class="h-full flex flex-col justify-between">
      <div>
        <div class="mt-4 h-16 flex items-center">
          <a href="" class="block w-max px-2.5">
            <img src="@/assets/logo.png" alt="" width="60" height="60" class="img" />
            <span class="button-text w-max flex items-center p-2 gap-4 rounded-full text-sm lg:text-lg">TECH NINJAS</span>
          </a>
        </div>
        <div class="mt-10">
          <div class="px-1 -ml-px font-medium tracking-wide">
            <ul class="w-max space-y-4 group hover:w-full">
              <li>
                <div class="button-container">
                  <router-link to="Configuracoes">
                    <button class="my-button h-5 w-5 ml-2 mr-2 lg:mr-4">
                      <img src="@/assets/config.png" alt="listagem" class="button-icon my-button h-5 w-5 ml-2 mr-2 lg:mr-4" />
                      <span class="button-text w-max flex items-center p-2 gap-4 rounded-full text-sm lg:text-lg">Configurações</span>
                    </button>
                  </router-link>
                </div>
              </li>
              <li>
                <router-link to="MenuArquivos">
                  <button class="my-button h-5 w-5 ml-2 mr-2 lg:mr-4">
                    <img src="@/assets/arquivo.png" alt="upload" class="button-icon button-icon my-button h-5 w-5 ml-2 mr-2 lg:mr-4" />
                    <span class="button-text w-max flex items-center p-2 gap-4 rounded-full text-sm lg:text-lg">Arquivos</span>
                  </button>
                </router-link>
              </li>
              <li>
                <a href="https://lookerstudio.google.com/reporting/981c0a4c-e39d-401b-ba8c-902dd78a3f66/page/BmrMD" target="_blank" rel="noopener noreferrer">
                  <button class="my-button h-5 w-5 ml-2 mr-2 lg:mr-4">
                    <img src="@/assets/dashboard.png" alt="dashboard" class="button-icon my-button h-5 w-5 ml-2 mr-2 lg:mr-4" />
                    <span class="button-text w-max flex items-center p-2 gap-4 rounded-full text-sm lg:text-lg">Dashboard</span>
                  </button>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<!-- " -->

<script>
export default {
  name: 'NavigationBar',
  data() {
    return {};
  },
};
</script>

<style scoped>
.sidebar {
  transition: all 0.4s ease-in-out;
}

span {
  margin-right: 50px;
}
</style>
