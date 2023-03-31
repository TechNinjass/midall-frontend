<template>
  <!-- component -->
  <div class="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5">
    <table
      class="w-full border-collapse bg-white text-left text-sm text-gray-500"
    >
      <thead class="bg-gray-200">
        <tr>
          <th scope="col" class="px-6 py-4 font-bold text-gray-900">ID</th>
          <th scope="col" class="px-6 py-4 font-bold text-gray-900">Nome do Arquivo</th>
          <th scope="col" class="px-6 py-4 font-bold text-gray-900">Tamanho</th>
          <th scope="col" class="px-6 py-4 font-bold text-gray-900">Tipo</th>
          <th scope="col" class="px-6 py-4 font-bold text-gray-900">Status</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-gray-100 border-t border-gray-100">
        <tr class="hover:bg-gray-50" v-for="item in apiData" :key="item.id">
          <!-- ID -->
          <th class="flex gap-3 px-6 py-4 font-normal text-gray-900">
            <div class="text-sm">
              <div class="font-medium text-gray-700">{{ item.id }}</div>
            </div>
          </th>
          <!-- Nome do Arquivo -->
          <td class="px-6 py-4">{{ item.nome }}</td>
          <!--Tamanho -->
          <td class="px-6 py-4">{{ item.tamanho }}</td>
          <!--Tipo -->
          <td class="px-6 py-4">
            <div class="flex gap-2">
              <span class="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-600">
                <!-- {{ item.tipo }} -->MP4
              </span>
            </div>
          </td>
           <!-- Status -->
           <td class="px-6 py-4">
            <span class="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600">
              <span class="h-1.5 w-1.5 rounded-full bg-green-600"></span>Sucesso!</span>
          </td>
          
        </tr>
      </tbody>
    </table>
  </div>
</template>

  

  <script>
let url = "https://6413aa44c469cff60d680188.mockapi.io/apiTest"
export default {
  name: "TabelaDados",
  data() {
    return {
      apiData: [],
    };
  },
  mounted() {
    this.exibirLog();
    console.log("mounted");
  },
  methods: {
    exibirLog() {
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          this.apiData = data;
          console.log(this.apiData);
        });
    },
    verifyUrl(url) {
      if (url != '' && url != null && url != undefined) {
        return true
      }
    }
  },
};
</script>
  