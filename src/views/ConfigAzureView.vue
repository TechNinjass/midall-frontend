<template>
    <form @submit.prevent="submitCredentials">
      <div>
        <label for="account_name">name:</label>
        <input type="text" id="account_name" v-model="account_name" required>
      </div>
      <div>
        <label for="account_key">key:</label>
        <input type="text" id="account_key" v-model="account_key" required>
      </div>
      <div>
        <label for="container_name">container:</label>
        <input type="text" id="container_name" v-model="container_name" required>
      </div>
      <button type="submit">Submit</button>
    </form>
  </template>
  
<script>
  import axios from 'axios'
  
  export default {
    data() {
      return {
        account_name: '',
        account_key: '',
        container_name: '',
      }
    },
    methods: {
  async submitCredentials() {
    console.log('submitCredentials() function is executed') // verificar se a função está sendo executada corretamente
    
    const data = {
      account_name: this.account_name,
      account_key: this.account_key,
      container_name: this.container_name,
    }
    
    try {
      const response = await axios.post('http://127.0.0.1:5000/azure', data)
      console.log(response.data) // verificar se a resposta está retornando corretamente
    } catch (error) {
      console.error(error)
    }
  }
}

  }
</script>

