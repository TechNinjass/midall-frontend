import { http } from './config'

export default{
    cadastrar:(configuracao)=>{
        return http.post('/config_transfer', configuracao)
    },

    listarFolderAzure:() => {
        return http.get('/azure_folders')
    },

    listarFolderDrive:() => {
        return http.get('/drive_folders')
    },
}