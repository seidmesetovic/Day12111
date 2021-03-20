function sumFibonacci(num){
    var arrFibonacci = [];
    var Fibonacci = 2;
    
    
    arrFibonacci[0] = 1;
    arrFibonacci[1] = 1;
    if(num < 0){
        return 0;
    } 
    if (num ===1){
        return 1;
    }
    for (var i = 2;i <= num + 10;i++){
        arrFibonacci [i] = arrFibonacci[i-2] + arrFibonacci[i-1];

        if(arrFibonacci[i] % 2 != 0 && arrFibonacci[i]  <= num){
            Fibonacci += arrFibonacci[i];
        }


    }
    

    return Fibonacci;
}
console.log(sumFibonacci(1));
console.log(sumFibonacci(10));
console.log(sumFibonacci(20));
console.log(sumFibonacci(4));
console.log(sumFibonacci(-5));
module.exports = sumFibonacci;