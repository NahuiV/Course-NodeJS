const http = require('http')
const fs = require('fs')
const hostname = '127.0.0.1';
const port = 8080;

const read = (req,res) =>{
    fs.readFile('./hola_mundo.txt',(err,data)=>{
        if(err){
            console.info('No se pudo leer el archivo.')
            console.error('Error: ',err)
        }else{
            res.end(data)
            console.info('Archivo leido correctamente.')
        }
    })
}

const server = http.createServer(read)

server.listen(port, hostname, () => {
    console.log(`El servidor se está ejecutando en http://${hostname}:${port}/`);
});