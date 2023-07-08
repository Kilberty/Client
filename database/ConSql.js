import {mssql} from 'mssql'
const fs = require('fs')

const info = fs.readFileSync(process.env.APPDATA+'\fireclient\conf.json','utf-8')

const con = `Server=${info.server};Database=${info.database};User Id =${info.user};Password=${info.pwd};trustServerCertificate: true`

mssql.connect(con)
    .then(console.log('Conectou'))
    .catch(console.log('Falhou!'))




