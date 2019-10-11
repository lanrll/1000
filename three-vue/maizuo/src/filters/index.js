export const operateActors = (arr) =>{
    let str = ''
    if(arr){
        arr.forEach(item=>{
            str += item.name + ' '
        })
    }
    return str
}
export const formatTime = (num) => {
    let arr
    let date = new Date(num * 1000);
    date = date.toLocaleDateString();
    arr = date.split('/')
    date = arr[0]+'年'+arr[1]+'月'+arr[2]+'日'
    return  date
}