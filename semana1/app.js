const fs = require('fs/promises');

const FILE_PATH = 'message_01.txt';

async function readFile() {
  const file = await fs.readFile(FILE_PATH);
  const text = file.toString();
    const tokens = text.split(' ');
    const dic = {}
    for(token of tokens) {
      if(dic[token] == undefined) dic[token] = 1;
      else dic[token]++;
    }
    let result = '';
    for (const [key, value] of Object.entries(dic)) {
      result += `${key}${value}`;
    }
    console.log(result);
}

readFile();