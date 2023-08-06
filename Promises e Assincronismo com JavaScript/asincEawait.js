const FileSystem = require('fs');
const Path = require('path');

const filePath = Path.resolve(__dirname, 'tarefas.csv');

serachFile = async () => {
    try {
        const file = await FileSystem.promises.readFile(filePath);
        const textFile = file.toString('utf8')
        console.log(textFile);    
    } 
    catch (error) {
        console.error(error)
    }
    finally {
        console.log("fim");
    }
}
serachFile();