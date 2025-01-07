function mergeUserData(userDetails,userAddress,userPreferences){
    // let obj1={...userDetails}
    // let obj2={...userAddress}
    // let obj3={...userPreferences}
    // let newObj=Object.assign(obj1,obj2,obj3)
    // console.log(newObj)
    return {
        ...userDetails,...userAddress,...userPreferences
    }
}
const userDetails = {name: 'CVR', age: 25}
const userAddress = {address: 'Mangalpally', city: 'Hyderabad'}
const userPreferences = {theme: 'Engineering Edu', language: 'EN'}
console.log(mergeUserData(userDetails,userAddress,userPreferences))