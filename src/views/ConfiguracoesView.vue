<template>
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
        </div>
        <center>
            <div class="titulo-config">TOKEN DE ACESSO</div>
        </center>
        <div class="drives">
            <div class="google">
                <center>
                    <div class="mesma-linha">
                        <img src="../assets/drive.png" alt="" width="60" height="60" class="imgDrive"/>
                        <div class="sub-title">Google Drive</div>
                    </div>

                    Cliente ID:
                    <input type="text" class="form-control botaoBusca" placeholder="...">

                    Cliente Secret:
                    <input type="text" class="form-control botaoBusca" placeholder="...">

                    <b-button type="button" class="btn btn-submit">Submit</b-button>
                </center>
            </div>
            <div class="azure">
                <center>
                    <div class="mesma-linha">
                        <img src="../assets/azure.png" alt="" width="40" height="40" class="imgAzure"/>
                        <div class="sub-title">Azure</div>
                    </div>                        
                
                    Name:
                    <input type="text" class="form-control botaoBusca" placeholder="...">

                    Key:
                    <input type="text" class="form-control botaoBusca" placeholder="...">

                    Container:
                    <input type="text" class="form-control botaoBusca" placeholder="...">

                    <b-button type="button" class="btn btn-submit">Submit</b-button>
                </center>
            </div>
        </div>
    </div>
</template>

<style scoped>
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
        width: 40%;
        margin-left: 5%;
        height: 90%;
    }

    .azure {
        padding: 2rem;
        border-radius: 10px;
        width: 40%;
        margin-left: 8%;
        height: 90%;
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

</style>

<script>
  export default {
    name: 'ConfiguracaoView'
  }
</script>
