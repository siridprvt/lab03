function updateProductInfo(obj){
    let obj1={...obj}
    let newObj={id:obj1.id, name: obj1.name,discount:10, inStock:true}
    console.log(newObj)
}
const product = {id: 101, name: 'Laptop', price: 1000, category:'Electronics'}
updateProductInfo(product)
    