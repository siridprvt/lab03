function customIterator(arr){
    let idx=arr.length-1
    return {
        next(){
            if(idx>=0){
                return{
                    value: arr[idx--],
                    done:false
                }
            } else {
                return {
                    value: "Array Reached End",
                    done:true
                }
            }
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
