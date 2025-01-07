function customIterator(arr){
    let idx=0
    return {
        next(){
            if(idx<arr.length){
                return{
                    value: arr[idx++],
                    done:false
                }
            } else {
                return {
                    value: "Array Reached End",
                    done:true
                }
            }
        },
    
        reset(){
            idx=0;
        }
    }
}
const arr = [1, 2, 3, 4]
let c=customIterator(arr)
console.log(c.next())
console.log(c.next())
console.log(c.next())
console.log(c.next())
console.log(c.next())
c.reset()
console.log('after reset')
console.log(c.next())