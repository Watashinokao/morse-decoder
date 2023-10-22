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
    let myArrNum = []

    for (let i = 0; i < expr.length; i += 10) {
        myArrNum.push(expr.slice(i, i + 10))
    }
    let myArrSym = []

    myArrNum.map(str => {
        for (let i = 0; i < str.length; i += 2) {
            myArrSym.push(str.slice(i, i + 2))
        }
    })
    myArrSym = myArrSym.map(str => {
        if (str === '00') return ''
        if (str === '10') return '.'
        if (str === '11') return '-'
        if (str === '**') return ' '
    })
    let myArrWord = []
    for (let i = 0; i < myArrSym.length; i += 4) {
        let world = myArrSym[i] + myArrSym[i + 1] + myArrSym[i + 2] + myArrSym[i + 3] + myArrSym[i + 4]
        myArrWord.push(world)
        i++
    }
    myArrWord = myArrWord.map(el => {
        if (el === '     ') {
            return 'space'
        }
        else { return MORSE_TABLE[el] }
    })
    let string = myArrWord.join('')
    string = string.replaceAll('space', ' ')
    return string


}


module.exports = {
    decode
}