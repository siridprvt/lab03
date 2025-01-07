function createProfile(obj){
    let {name,email}=obj
    let newObj={name:name,email:email}
    console.log(newObj)
}
createProfile({name:'siri',age:18,email:'siri@gmail.com',address:'hyd'})