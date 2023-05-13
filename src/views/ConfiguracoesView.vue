<template>
    <div class="fundo">
        <div id="appView">
            <Cabecalho></Cabecalho>
        <template v-if="showDrive">
            <div class="card-modal">
                <div class="google">
                    <center>
                        <div class="mesma-linha">
                            <img src="../assets/drive.png" alt="" width="60" height="60" class="imgDrive"/>
                            <div class="sub-title">Google Drive</div>
                        </div>

                        <form @submit.prevent="fecharModalDrive">
                            Cliente ID:
                            <input type="text" class="form-control" placeholder="..." id="client_id" v-model="clientId" required>

                            Cliente Secret:
                            <input type="text" class="form-control" placeholder="..." id="client_secret" v-model="clientSecret" required>

                            <button type="submit" class="btn btn-submit" @click="submitCredentialsDrive">Submit</button>
                        </form>
                    </center>
                </div>
            </div>
        </template>

        <template  v-if="showAzure">
            <div class="card-modal">
                <div class="azure">
                    <center>
                        <div class="mesma-linha">
                            <img src="../assets/azure.png" alt="" width="40" height="40" class="imgAzure"/>
                            <div class="sub-title">Azure</div>
                        </div>                        
                        <form @submit.prevent="fecharModalAzure">
                            Name:
                            <input type="text" class="form-control" placeholder="..." id="account_name" v-model="account_name" required>

                            Key:
                            <input type="text" class="form-control" placeholder="..." id="account_key" v-model="account_key" required>

                            Container:
                            <input type="text" class="form-control" placeholder="..." id="container_name" v-model="container_name" required>

                            <button type="submit" class="btn btn-submit" @click="submitCredentialsAzure">Submit</button>
                        </form>
                    </center>
                </div>
            </div>
        </template>

        <div class="button-container">
          <button class="my-button" @click="showModalDrive">
            <img src="../assets/drive.png" alt="google_drive" class="button-icon">
            <span class="button-text">DRIVE</span>
          </button>
          
          <button class="my-button" @click="showModalAzure">
            <img src="../assets/azure.png" alt="azure" class="button-icon">
            <span class="button-text">AZURE</span>
          </button>
      </div>
    </div>
</div>
</template>

<style scoped>
    .card-modal {
      background: #fff;
      border-radius: 20px;
      width: 700px;
      height: 400px;
      margin-left: 27%;
      z-index: 100;
      display: block;
      position: fixed;
      margin-top: 6%;
      border-color: #1435A0;
      border-width: 3px;
    }

    .button-container {
        position: relative;
        height: 75vh;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
        gap:200px;
    }

    .my-button {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 300px;
        height: auto;
        background-color: white;
        border-radius: 50px;
        color: white;
        font-size: 30px;
        font-weight: bold;
    }

    .button-icon {
        width: 170px;
        height: 170px;
        padding-top: 40px;
    }

    .button-text {
        color: hwb(212 12% 38%);
        display: inline-block;
        white-space: wrap;
        padding-top: 20px;
        padding-right: 30px;
        padding-bottom: 30px;
        padding-left: 30px;
    }

    .fundo {
        position: absolute;
        background:  #B1D4E0;
        height: 100%;
        width: 100%;
    }

    .titulo-config {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 45px;
        line-height: 70px;
        text-align: center;
        color: #1435A0;
        margin-top: 50px;
    }

    .drives {
        padding: 2rem;
        border-radius: 10px;
        width: 80%;
        margin-top: -1%;
        margin-left: 10%;
        height: 50%;
        position: relative;
        display : flex;
        flex-direction : row;

        color: #1E599D;
        font-size: 20px; 
        font-family: 'Roboto'; 
        font-style: normal; 
        font-weight: 500;
    }

    .google {
        padding: 2rem;
        border-radius: 10px;
        width: 90%;
        margin-left: 5%;
        height: 100%;
    }

    .azure {
        padding: 2rem;
        border-radius: 10px;
        width: 90%;
        margin-left: 5%;
        height: 100%;
    }

    .btn {
        border: 2px solid #1E599D;
        color: #B1D4E0;
        font-size: 20px; 
        font-family: 'Roboto'; 
        font-style: normal; 
        font-weight: 400;
        border-radius: 5px;
        align-items: center;
        justify-content: center;
        display: flex;
        height: 40px;
        margin-left: 2%;
        background: #1E599D;
        margin-top: 5%;
    }

    .voltar {
        width: 5%;
    }

    .botaoBusca {
        margin-bottom: 30px;
        background: #B1D4E0;
        color: #1E599D;
        border: 2px solid #1E599D;
        width: 80%;
        font-size: 20px; 
        font-family: 'Roboto'; 
        font-style: normal; 
        font-weight: 400;
    }

    .btn-submit {
        width: 25%;
        margin-top: 10%;
    }

    .sub-title {
        margin-bottom: 2%;
        font-weight: 600;
    }

    .mesma-linha {
        display : flex;
        flex-direction : row;
    }

    .imgDrive {
        margin-right: 5px;
        margin-top: -15px;
    }

    .imgAzure {
        margin-right: 10px;
        margin-top: -10px;
    }

    .card-modal {
      background: #fff;
      padding: 2rem;
      border-radius: 10px;
      width: 30%;
      margin-top: 5%;
      z-index: 1;
      display: block;
      position: fixed;
      margin-left: 35%;
      height: 25%;
    }

    .card-modal-title {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 600;
        font-size: 35px;
        line-height: 60px;
        text-align: center;
        color: #1435A0;
    }

    .card-modal-sub-title {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 500;
        font-size: 30px;
        line-height: 50px;
        text-align: center;
        color: #1435A0;
    }

</style>

<script>
    import axios from 'axios';
    import Cabecalho from '../components/Cabecalho.vue';

  export default {
    name: 'ConfiguracaoView',

    components: {
        Cabecalho,
    },

    data() {
        return {
            clientId: '',
            clientSecret: '',
            account_name: '',
            account_key: '',
            container_name: '',
            show: false,
            showDrive: false,
            showAzure: false,
        }
    },

    methods: {
        async submitCredentialsDrive() {
            const data = {
                client_id: this.clientId,
                client_secret: this.clientSecret,
            }
            
            try {
                await axios.post('http://127.0.0.1:5000/drive', data)
            } catch (error) {
                console.error(error)
            }
        },

        async submitCredentialsAzure() {
            this.show = true;
            const data = {
                account_name: this.account_name,
                account_key: this.account_key,
                container_name: this.container_name,
            }
            
            try {
                await axios.post('http://127.0.0.1:5000/azure', data).then((response) => {
                    console.log(response.data);
                    this.show = true;
                    this.account_name = "";
                    this.account_key = "";
                    this.container_name = "";
                });
                
            } catch (error) {
                console.error(error)
            }
        },

        hide() {
            this.show = false;
        },

        showModalDrive() {
            this.showDrive = true;
        },
        fecharModalDrive() {
            this.showDrive = false;
        },
        showModalAzure() {
            this.showAzure = true;
        },
        fecharModalAzure() {
            this.showAzure = false;
        },
    }

  }
</script>
