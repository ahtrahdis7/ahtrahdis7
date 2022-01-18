const fs = require('fs');
const README = require('./README');

const readFile = (filePath) => {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, (err, data) => {
        if (err) {
            reject(err);
        } else {
            resolve(data);
        }
        });
    });
};

async function main(){
    // write to readme.md
    console.log(README)
    // fetch my current location

    const readmeData = README("Bhadrak");
    console.log(readmeData)
    fs.writeFile('./test.md', readmeData, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    })
}

main()