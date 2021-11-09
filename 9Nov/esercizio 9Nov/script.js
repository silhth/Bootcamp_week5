// -------------------------------------------calcolatrice 1----------------------------------
function calculator(numbers) {
    function sum (){
        let sumTotal = 0;
        for (num of numbers) sumTotal+=num;

        return sumTotal;
    }
 

    function sub (){
        let subTotal = numbers[0];
        let nums = numbers.slice(1)
        for (num of nums) subTotal -= num;

        return subTotal;
    }

    function mul (){
        let mulTotal = 1;
        for (num of numbers) mulTotal *= num;
  
        return mulTotal;

    
    }


    function divi (){
        let diviTotal = numbers[0];
        let nums = numbers.slice(1)
        for (num of nums) diviTotal /= num;
 
        return diviTotal;
   
    }

    return {sum: sum(), 
            sub: sub(),
            mol: mul(),
            divi: divi()};


}


console.log(calculator([100,5,4]).divi)
// -------------------------------------------------calc 2 ----------------------------------------------------

// function calculator(numbers) {
//     const sum = () => numbers.reduce((acc, num)=> acc + num);
//     const sub = () => numbers.reduce((acc, num)=> acc - num);
//     const mul = () => numbers.reduce((acc, num)=> acc * num);
//     const div = () => numbers.reduce((acc, num)=> acc / num);
//     const pow = () => numbers.reduce((acc, num)=> Math.pow (acc, num));
//     const powEach = () => numbers.map(num=> num * num); 
//     const sqrt = () => numbers.map(num => Math.sqrt (num));


    
//     return {
//         sum: sum(), 
//         sub: sub(),
//         mol: mul(),
//         div: div(),
//         pow: pow(),
//         powEach: powEach(),
//         sqrt: sqrt()
//     };

        
// }

// console.log(calculator([25,2,2]).powEach)

