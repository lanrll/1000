export const operateActors = (arr) =>{
    let str = ''
    if(arr){
        arr.forEach(item=>{
            str += item.name + ' '
        })
    }
    return str
}