function calculateTotal(...arr){
    let sum=0;
    for(let i of arr){
        sum+=i;
    }
    return sum;
}
console.log(calculateTotal (10, 20, 30, 40))