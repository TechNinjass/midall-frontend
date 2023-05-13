<template>
<<<<<<< Updated upstream
    <div class="fundo">
        <div id="appView">
            <Cabecalho></Cabecalho>
        </div>
        <center>
            <div class="titulo-config">TOKEN DE ACESSO</div>
            <template v-if="show">
                <div class="card-modal">
                    <div class="card-modal-title">SUCESSO!</div>
                    <button class="close" @click="hide">&times;</button>
                    <div class= "card-modal-sub-title">Conexão Azure realizada</div>
                </div>
            </template>
        </center>
        <div class="drives">
            <div class="google">
=======
  <div class="fundo">
    <div id="appView">
      <nav class="navbar navbar-expand-lg color-navbar">
        <div class="container-left">
          <img src="../assets/logo.png" alt="" width="60" height="60" class="img"/>
        </div>
        <div class="titulo">
          TECH NINJAS
        </div>
      </nav>

        <template v-if="showDrive">
            <div class="card-modal">
              <div class="google">
>>>>>>> Stashed changes
                <center>
                    <div class="mesma-linha">
                        <img src="../assets/drive.png" alt="" width="60" height="60" class="imgDrive"/>
                        <div class="sub-title">Google Drive</div>
<<<<<<< Updated upstream
=======
                        <br>
>>>>>>> Stashed changes
                    </div>

                    <form @submit.prevent="submitCredentialsDrive">
                        Cliente ID:
<<<<<<< Updated upstream
                        <input type="text" class="form-control botaoBusca" placeholder="..." id="client_id" v-model="clientId" required>

                        Cliente Secret:
                        <input type="text" class="form-control botaoBusca" placeholder="..." id="client_secret" v-model="clientSecret" required>

                        <button type="submit" class="btn btn-submit">Submit</button>
                    </form>
                </center>
            </div>
            <div class="azure">
                <center>
=======
                        <input type="text" class="form-control" placeholder="..." id="client_id" v-model="clientId" required>
                        <br>
                        Cliente Secret:
                        <input type="text" class="form-control" placeholder="..." id="client_secret" v-model="clientSecret" required>
                        <br>
                        <button type="submit" class="btn btn-submit" @click="fecharModalDrive">Submit</button>
                    </form>
                </center>
            </div>
            </div>
        </template>

      <template v-if="showAzure">
        <div class="card-modal">
          <div class="azure">
            <center>
>>>>>>> Stashed changes
                    <div class="mesma-linha">
                        <img src="../assets/azure.png" alt="" width="40" height="40" class="imgAzure"/>
                        <div class="sub-title">Azure</div>
                    </div>                        
                    <form @submit.prevent="submitCredentialsAzure">
                        Name:
                        <input type="text" class="form-control botaoBusca" placeholder="..." id="account_name" v-model="account_name" required>
<<<<<<< Updated upstream

                        Key:
                        <input type="text" class="form-control botaoBusca" placeholder="..." id="account_key" v-model="account_key" required>

                        Container:
                        <input type="text" class="form-control botaoBusca" placeholder="..." id="container_name" v-model="container_name" required>

                        <button type="submit" class="btn btn-submit">Submit</button>
                    </form>
                </center>
            </div>
        </div>
    </div>
</template>

<style scoped>
=======
                        <br>
                        Key:
                        <input type="text" class="form-control botaoBusca" placeholder="..." id="account_key" v-model="account_key" required>
        
                        Container:
                        <input type="text" class="form-control botaoBusca" placeholder="..." id="container_name" v-model="container_name" required>
              
                        <button type="submit" class="btn btn-submit" @click="fecharModalAzure">Submit</button>
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

>>>>>>> Stashed changes
    .fundo {
        position: absolute;
        background:  #B1D4E0;
        height: 100%;
        width: 100%;
    }

<<<<<<< Updated upstream
=======
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

>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
        width: 40%;
        margin-left: 5%;
        height: 90%;
=======
        width: 90%;
        margin-left: 5%;
        height: 100%;
>>>>>>> Stashed changes
    }

    .azure {
        padding: 2rem;
        border-radius: 10px;
<<<<<<< Updated upstream
        width: 40%;
        margin-left: 8%;
        height: 90%;
=======
        width: 90%;
        margin-left: 5%;
        height: 100%;
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream

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
=======
    .btn btn-submit {
        width: 50%;
        margin-top: 10%;
        border-radius: 12px;
    }
    .btn-submit {
        width: 50%;
        margin-top: 10%;
        border-radius: 12px;
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
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

    .close {
        color: #aaa;
        float: right;
        font-size: 28px;
        font-weight: bold;
        margin-top: -22%;
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
    }

  }
</script>
=======
        margin-right: 5px;
        margin-top: -15px;
    }
</style>

<script>
  export default {
    name: 'HomeView',

    data() {
      return {
        showDrive: false,
        showAzure: false,
      }
    },

    methods: {
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
>>>>>>> Stashed changes
