const input = document.querySelector('#number')
const convertBtn = document.querySelector('#convert-btn')
const outputText = document.querySelector('#output')

const romanSymbols = [
    {symbol: "M", value: 1000},
    {symbol: "CM", value: 900},
    {symbol: "D", value: 500},
    {symbol: "CD", value: 400},
    {symbol: "C", value: 100},
    {symbol: "XC", value: 90},
    {symbol: "L", value: 50},
    {symbol: "XL", value: 40},
    {symbol: "X", value: 10},
    {symbol: "IX", value: 9},
    {symbol: "V", value: 5},
    {symbol: "IV", value: 4},
    {symbol: "I", value: 1}
];

function convert(num){
    let conversion = '';

}

function isValid(){//is input valid

}

function findSymbolIndex(num){//finds the next correct symbol to convert the given number
    let symbol;
    for (let i = 0; symbol == undefined; i++){
        if(num - romanSymbols[i].value >= 0){
            symbol = i
        } else { continue }
        return symbol
    }
};

console.log(
findSymbolIndex(100))