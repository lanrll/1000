//生产min-max的随机数
function randomNum( min, max){
    switch(arguments.length){
        case 1:
            return parseInt(Math.random()*min+1)
            break;
        case 2:
            return parseInt(Math.random()*(max-min+1)+min)
            break;
        default:
            return 0
            break;
    }
}