const FileSystem = require('fs');
const Path = require('path');

const filePath = Path.resolve(__dirname, 'tarefas.csv');

const promesaDaLeituraDoArquivo = FileSystem.promises.readFile(filePath);

promesaDaLeituraDoArquivo.
    then(arquivo => console.log(arquivo.toString('utf8'))).
    then(text => console.log(text)).
    catch(error => console.log("deu ruim ", error)).
    finally(() => console.log("terminou"));