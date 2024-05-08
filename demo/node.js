var fs = require("fs");
var path = require("path");

// 异步打开文件
// console.log("准备打开文件！");
// fs.open('input.txt', 'r+', function (err, fd) {
//   if (err) {
//     return console.error(err);
//   }
//   console.log("文件打开成功！");
// });

// const res = fs.openSync('input.txt')
// console.log(res)

// const res1 = fs.readFileSync('input.txt', { flag: 'r', encoding: 'utf-8' })

// console.log(res1);

fs.writeFile('input.txt', '我是通 过fs.writeFile 写入文件的内容', function (err) {
  if (err) {
    return console.error(err);
  }
  console.log("数据写入成功！");
  console.log("--------我是分割线-------------")
  console.log("读取写入的数据！");
  fs.readFile('input.txt', function (err, data) {
    if (err) {
      return console.error(err);
    }
    console.log("异步读取文件数据: " + data.toString());
  });
});

const pppth = path.join(__dirname, 'index.md')
const pppth1 = path.resolve('index.md')
console.log(pppth);
console.log(pppth1);

// 文件扩展名
console.log(path.basename(pppth))

// console.log(global)
console.log(__filename)
console.log(__dirname)

// this变量和域里面 === global

{
  console.log(this == global)
}

// 运行目录
// console.log(process.cwd())

// console.log(process.version)

// console.log(process.env.NODE_ENV);

// console.log(process.platform);

console.log(process.argv)

// console.log(process.argv0)

// console.log(process.pid);

// setTimeout(() => {
//   console.log(process.uptime())
// })

// // process事件

// process.on('exit', (code) => {
//   console.log('exit');
// })

// process.on('beforeExit', (code) => {
//   console.log('beforeExit');
// })

// process.exit()

const aa = fs.readdir('js', (err, file) => {
  console.log(file) // [ 'charts.js', 'function.js', 'plugins', 'wxcharts-min.js' ]
})