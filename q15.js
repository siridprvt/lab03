function createProfile(obj,arr){
    let {name,age}=obj
    let [primaryInterest,secondaryInterest]=arr;
    return {name:name,age:age,primaryInterest:primaryInterest,secondaryInterest:secondaryInterest}
}
console.log(createProfile({name:'John',age:25},['Reading','Travelling']))