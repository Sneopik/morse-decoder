const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    
    MORSE_TABLE['**********'] = ' ';
    let i = 0;
    let res = [];
    let code = Object.keys(MORSE_TABLE);
    let letter = Object.values(MORSE_TABLE);
    let str = [];


    for (i=0;i<expr.length;i+=10){
      res.push(expr.slice(i,i+10));
    }
    res=String(res);
    for (i=0;i<res.length;i++){
      res = res.replace('11','-');
    }
    for (i=0;i<res.length;i++){
      res = res.replace('10','.');
    }
    for (i=0;i<res.length;i++){
      res = res.replace('0','');
      res = res.replace('0','');
    }
    res = res.split(',');

    console.log(res);

    for (i=0;i<res.length;i++){
      for (let j=0;j<code.length;j++){
        if(res[i]==code[j]){
          str.push(letter[j]);
        }
      }
    }
    str = String(str);
    for(i=0;i<str.length;i++){
      str = str.replace(',','');
    }
    return str;
    
    
}

module.exports = {
    decode
}