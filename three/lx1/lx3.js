const fs = require('fs');
const join = require('path').join;
// function all(files) {
//   // console.log(files)

//   fs.stat(files, (err, result) => {
//     if (err) console.log(err)
//     // console.log(result);
//     if (result.isDirectory()) {
//       // console.log(1)
//       fs.readdir(files, (err, res) => {
//         if (err) console.log(err)
//         // console.log(res)
//         res.forEach(item => {
//           let file;
//           file = files+'/'+item
//           console.log(item)
//           all(file)
//         })
//       })
//     } else{
//       // console.log(result)
//       console.log(1)
//       console.log(files)
//     }
//   })
// }
// var files = './2019-9-16'
// all(files);

function getJsonFiles(jsonPath){
  let jsonFiles = [];
  function findJsonFile(path){
      let files = fs.readdirSync(path);
      files.forEach(function (item, index) {
          let fPath = join(path,item);
          let stat = fs.statSync(fPath);
          if(stat.isDirectory() === true) {
              findJsonFile(fPath);
              jsonFiles.push(fPath);
          }
          if (stat.isFile() === true) { 
            jsonFiles.push(fPath);
          }
      });
  }
  findJsonFile(jsonPath);
  console.log(jsonFiles);
}

getJsonFiles("./2019-9-16");