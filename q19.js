function customIterator(){
    let val=0;
    return{
        next(){
                while(true){
                    val++;
                    if(val>10) break;
                    console.log(val)
                }
            }
        
    }
}

let c=customIterator()
console.log(c.next())