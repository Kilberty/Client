
import createcon from '../database'
import mongoose from 'mongoose'

const Acesso = new mongoose.Schema({
    Tipo:{
        type:String,
        required:true
    },
    CodCliente:{
        type:Number,
        required:true
    },
    Anydesk:{
        type:Number,
        required:true
    },
    Senha:{
        type:String,
        required:true
    },
    Hostname:{
        type:String,
        required:true
    }

})

const CriaAcesso = createcon.con.model('Acesso',Acesso)


export default{
    CriaAcesso
}