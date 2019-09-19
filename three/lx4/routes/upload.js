const router = require('express').Router()
const multer = require('multer')


// 配置(创建一个上传文件的实例)----上传
const storage = multer.diskStorage({
    // 设置上传文件的存储目录
    destination(req,file,cb){
        // './uploads'设置的上传目录
        // console.log('destination')
        cb(null,'./uploads')
    },
    // 设置上传文件另存时文件名的格式
    filename(req,file,cb){
        // console.log('filename',file)
        // 文件名存为当前时间戳
        let filename = file.originalname
        let info = filename.split('.')
        cb(null,Date.now()+'.'+info.pop())
    }
})

// 完成限定上传文件类型只能是图片 (jpg,jpeg,gif,png,wbmp)
function filterFun(req,file,cb){
    // console.log('filterFun')
    // cb(null,false) // 回调函数第二个参数为true说明可以上传，false时不能上传
    let filename = file.originalname
    let ext = filename.split('.').pop().toLowerCase()
    let allows  = ['jpg','jpeg','gif','png']
    if(allows.indexOf(ext) == -1){
        // cb(null,false)
        cb(new Error('上传文件类型只能是图片格式!'))
        return
    }
    cb(null,true)
}
// const upload = multer({storage:storage,fileFilter:filterFun}).single('movie')

const upload = multer({storage:storage,fileFilter:filterFun,limits:{
    fileSize:1024*1000 //限制文件大小在1M以内
}}).single('movie')
// movie是file元素的name的值
router.post('/upload',(req,res)=>{
    upload(req,res,err=>{
        // console.log('上传文件的错误对象:',err.message)
        if(err){
            console.log(err)
            if(err.code == 'LIMIT_FILE_SIZE'){
                err.message = '文件超过限定大小(1M)'
            }
            res.send({code:1,msg:'上传文件失败:'+err.message})
            return
        }
        // console.log(req.file.path)
        let url = 'http://localhost:8282/'+req.file.path
        // console.log(url)
        res.send({code:0,msg:'上传成功',fileInfo:url})
    })
    // console.log('上传的文件对象是：',req.file)
})
module.exports = router