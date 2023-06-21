import Model from '../models/RemoteModel'
import database from '../database'

const createService = async (req,res) =>{
    database.conecta()
    const CodCliente = req.Cod
    const TipoMaquina = req.Tipo
    const Acesso = req.Anydesk 
    const SenhaAcesso = req.Senha
    const Host = req.Hostname      
    

    const CreateRemote = await Model.CriaAcesso.create({
        Tipo: TipoMaquina,
        CodCliente: CodCliente,
        Anydesk: Acesso,
        Senha: SenhaAcesso,
        Hostname: Host
    })

    if(!CreateRemote){
        console.log('Erro ao criar acesso')
    }


}

export default{
    createService
}

