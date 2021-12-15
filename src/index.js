const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {

    var res = [];
    for (i = 0; i < expr.length; i += 10) {
        res.push(expr.slice(i, i + 10));
    }

    res = res.map(item => {
        let tmp = [];
        Array.from(item);
        for (i = 0; i < item.length; i += 2) {
            if (item.slice(i, i + 2) === '10') tmp.push('.');
            if (item.slice(i, i + 2) === '11') tmp.push('-');
        };
        return tmp.join('');
    });

    for (i = 0; i < res.length; i++) {
        for (let key in MORSE_TABLE) {
            if (res[i] === key) res[i] = MORSE_TABLE[key];
        }
        if (res[i] === '') res[i] = ' ';
    }

    return res.join('');

    /* REVERSE DECODING --- why am I doing this :)))))
    expr = expr.split('');
    for (i = 0; i < expr.length; i++) {
        for (let key in MORSE_TABLE) {
            if (MORSE_TABLE[key] === expr[i]) {

                expr[i] = key;
            }
        }
    }


    for (i = 0; i < expr.length; i++) {
        if (expr[i] === ' ') { expr[i] = '**********' }
        else {
            expr[i] = Array.from(expr[i]).map(item => item === '-' ? '11' : '10').join('');
            while (expr[i].length < 10) {
                expr[i] = '0' + expr[i];
            }
        }
    }
    return expr.join('');
    
    */

}


module.exports = {
    decode
}