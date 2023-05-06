<template>
    <div
      class="sidebar fixed group overflow-hidden left-0 top-0 z-10 h-screen w-[calc(3.73rem)] bg-blue-500 lg:hover:w-56 hover:w-44"
    >
      <div class="h-full flex flex-col justify-between">
        <div>
          <div class="mt-4 h-16 flex items-center">
            <a
              href=""
              class="block w-max px-2.5"
            >
  
            <img src="@/assets/logo.png" alt="" width="60" height="60" class="img"/>
            <span>TECH NINJAS</span>
            </a>
          </div>
          <div class="mt-10">
            <div class="px-1 -ml-px font-medium tracking-wide">
              <ul class="w-max space-y-4 group hover:w-full">
                  <li>
                      <div class="button-container ">
                      <router-link to="Configuracoes">
                      <button class="">
                      <img src="@/assets/config.png" alt="listagem" class="button-icon my-button h-5 w-5 ml-2 mr-2 lg:mr-4">
                      <span class="button-text w-max flex items-center p-2 gap-4 rounded-full text-sm lg:text-lg">CONFIGURAÇÕES</span>
                      </button>
                      </router-link>
                      </div>
                  </li>
                  <li>
                      <router-link to="MenuArquivos">
                      <button class="my-button h-5 w-5 ml-2 mr-2 lg:mr-4">
                      <img src="@/assets/arquivo.png" alt="upload" class="button-icon">
                      <span class="">ARQUIVOS</span>
                      </button>
                      </router-link>
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
      return {
      }
    }
  }
  </script>
  
  <style scoped>
  .sidebar {
    transition: all .4s ease-in-out;
  }
  
  
  
  span {
    margin-right: 50px;
  }
  </style>