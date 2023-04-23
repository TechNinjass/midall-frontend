<template>
  <form @submit.prevent="submitCredentials">
    <div>
      <label for="client_id">Client ID:</label>
      <input type="text" id="client_id" v-model="clientId" required>
    </div>
    <div>
      <label for="client_secret">Client Secret:</label>
      <input type="text" id="client_secret" v-model="clientSecret" required>
    </div>
    <button type="submit">Submit</button>
  </form>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      clientId: '',
      clientSecret: '',
    }
  },
  methods: {
async submitCredentials() {
  console.log('submitCredentials() function is executed') // verificar se a função está sendo executada corretamente
  
  const data = {
    client_id: this.clientId,
    client_secret: this.clientSecret,
  }
  
  try {
    const response = await axios.post('http://127.0.0.1:5000/drive', data)
    console.log(response.data) // verificar se a resposta está retornando corretamente
  } catch (error) {
    console.error(error)
  }
}
}

}
</script>

