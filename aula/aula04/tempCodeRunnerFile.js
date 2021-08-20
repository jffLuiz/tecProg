function sub(){
    let sub=0
    for (i in arguments){
        sub-=arguments[i]
    }
    return sub
}
console.log(sub(1))
console.log(sub(1,2))
console.log(sub(1,2,5))
console.log(sub(1,2,5,-8))