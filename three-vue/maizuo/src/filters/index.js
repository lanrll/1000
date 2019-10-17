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
export const formatDate = (num) => {
    let arr= []
    let date = new Date(num * 1000);
    date = date.toLocaleDateString();
    arr = date.split('/')
    date = arr[1]+'月'+arr[2]+'日'
    return  date
}
export const filmsTime = (num) => {
    let date = new Date(num * 1000);
    let hours = date.getHours();
    let minutes = date.getMinutes()
    if(hours<10){
        hours = '0' + hours
    }
    if(minutes< 10){
        minutes = '0' + minutes
    }
    date = hours+':'+minutes
    return  date
}
