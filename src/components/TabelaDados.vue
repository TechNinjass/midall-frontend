<template>
  <div class="flex flex-col">
    <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
<!--       <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
        <div class="overflow-hidden">
          <table class="min-w-full text-left text-sm font-light">
            <thead class="border-b font-medium dark:border-neutral-500">
              <tr>
                <th scope="col" class="px-6 py-4">#</th>
                <th scope="col" class="px-6 py-4">Nome do Arquivo</th>
                <th scope="col" class="px-6 py-4">Tipo</th>
                <th scope="col" class="px-6 py-4">Tamanho</th>
              </tr>
            </thead>
          <tbody>
            <tr class="border-b dark:border-neutral-500">
              <td class="whitespace-nowrap px-6 py-4 font-medium">1</td>
              <td class="whitespace-nowrap px-6 py-4">Desenvolvendo Aplicativos para Dispositivos Móveis  </td>
              <td class="whitespace-nowrap px-6 py-4">MP4</td>
              <td class="whitespace-nowrap px-6 py-4">1505 Mbps</td>
            </tr>
            <tr class="border-b dark:border-neutral-500">
              <td class="whitespace-nowrap px-6 py-4 font-medium">2</td>
              <td class="whitespace-nowrap px-6 py-4">Aprendendo Inteligência Artificial do Zero</td>
              <td class="whitespace-nowrap px-6 py-4">MP4</td>
              <td class="whitespace-nowrap px-6 py-4">3205 Mbps</td>
            </tr>
            <tr class="border-b dark:border-neutral-500">
              <td class="whitespace-nowrap px-6 py-4 font-medium">3</td>
              <td class="whitespace-nowrap px-6 py-4">Programando em Python: do básico ao avançado.</td>
              <td class="whitespace-nowrap px-6 py-4">MP4</td>
              <td class="whitespace-nowrap px-6 py-4">5205 Mbps</td>
            </tr>
          </tbody>
        </table>
      </div>

    </div> -->

    <button @click="exibirLog">Teste BTN</button>
    
  </div>

  
</div>




  </template>
  

  <script>
  export default {
    name: 'TabelaDados',
    methods: {
      exibirLog() {
        console.log('Response');
        fetch('https://6413aa44c469cff60d680188.mockapi.io/apiTest')
        .then((response) => console.log(response.json()))
        .then((data) => {
          this.apiData = data;
        });
      }
    }
  }
  </script>
  