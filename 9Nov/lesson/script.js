const margherita = [
    'farina',
    'acqua', 
    'lievito', 
    'sale',
    'olio',
    'pomodoro',
    'mozzarella',
    'basilico',
]


margherita.map(ing => ing.length>=5)

margherita.map(ing => 
    {if (ing.length>=5) return ing})



margherita.filter(ing => ing.length >= 5) // filtra solo gli elementi che corrispondono alla funzione map ritorna un array delle stesse dimensioni con gli undefined 


[2,4,6,8,10].reduce((acc, num)=> acc + num)

// -------------------------------------------calcolatrice 1----------------------------------
function calculator(numbers) {
    function sum (){
        let sumTotal = 0;
        for (num of numbers) sumTotal+=num;

        return sumTotal;
    }
 

    function sub (){
        let subTotal = numbers[0];
        for (num of numbers) subTotal -= num;

        return subTotal + numbers[0];
    }
 
    return {sum: sum(), 
            sub: sub(),
           };


}


console.log(calculator([18,6,2]).sum)




