function* genFunc(){
    let n1=0;
    let n2=1;
    yield n1
    yield n2
    while(true){
        let n3=n1+n2
        yield 3
        n1=n2
        n2=n3
    }
}
let g=genFunc()
console.log(g.next())