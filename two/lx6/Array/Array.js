var arr = new Array()
var brr = new Array()
for ( i=0 ; i<10 ; i++){
    arr[i] = randomNum( 0, 100)
    brr[i] = randomNum( 0, 100)
}
//用数组将一组值以表格形式显示
// var one = new Array()
// for ( i=0; i<10 ; i++){
//     one.push([
//         2 ** i,
//         2 * i ** 2
//     ])
// }
// console.table(one)

//三维数组
// var n = new Array()
// var num = 1
// for( j=0 ; j<10; j++){
//     n[j] = new Array()
//     for( k=0; k<10; k++){
//         n[j][k] = new Array()
//         for( l=0 ;l<10; l++){
//             n[j][k][l] = num
//             num++
//         }
//     }
// }
// for( m=0 ; m<n.length ; m++){
//     console.table(n[m])
// }

//连接数组
// var n1 = new Array(),
//     n2 = new Array(),
//     n3 = new Array()
// for ( i=0; i<10; i++){
//     n1[i] = randomNum( 0, 100)
//     n2[i] = randomNum( 0, 100)
//     n3[i] = randomNum( 0, 100)
// }
// console.log(n1)
// console.log(n1.concat( 1, 2, [ 3, 4] , 5))
// console.log(n2)
// console.log(n3)
// console.log(n1.concat( n2, n3))

//使用四种不同的分隔符连接数组元素
// console.log(arr.join('+'))
// console.log(arr.join('-'))
// console.log(arr.join('，'))
// console.log(arr.join(''))
// console.log(typeof arr.join())
// document.write(n.join('<br>'))
// document.write('<br>')
// document.write(n[length].join('<br>'))

//添加元素到数组   
// console.log(arr)
// console.log(arr.push(1,2,3))
// console.log(arr)

//合并两个数组
// console.log(brr)
// console.log(brr.push.apply( brr, arr))
// console.log(brr)

//移除数组中第一个元素，返回删除元素
// console.log(arr)
// console.log(arr.shift())

//将一个或多个元素添加到数组的开头，并返回该数组的新长度(该方法修改原有数组)
// console.log(arr.unshift( 1, 3, 5))
// console.log(arr)

//颠倒数组中的元素
console.log(arr)
console.log(arr.reverse())
console.log(arr)