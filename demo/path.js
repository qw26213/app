var path = require("path");

console.log(__filename) // 返回当前文件的文件地址
console.log(__dirname) // 返回当前文件所在目录

console.log(path.dirname(__filename)) // 返回文件路径
console.log(path.basename(__filename)) // 返回文件路径的最后一部分

// 返回文件后缀名
console.log(path.extname(__filename))
console.log(path.extname('/a/b/c.js'))

// 路径解析
const obj = path.parse('/a/b/c/index.html') //完整路径
console.log(obj)

const obj1 = path.parse('/a/b/c/') //绝对路径
console.log(obj1)

const obj2 = path.parse('./a/b/c/') //相对路径
console.log(obj2)

// 序列化路径
console.log(path.format(obj)) //a\b\c\index.html

// 判断当前路径是否为绝对
console.log(path.isAbsolute('foo')) // false
console.log(path.isAbsolute('/foo')) // true
console.log(path.isAbsolute('../bar'))

// 路径的拼接
console.log(path.join('a/b', 'c', 'index.html')) // a\b\c\index.html
console.log(path.join('/a/b', 'c', 'index.html')) // \a\b\c\index.html
console.log(path.join('/a/b', 'c', '../', 'index.html')) // \a\b\index.html
console.log(path.join('/a/b', 'c', './', 'index.html')) // \a\b\c\index.html
console.log(path.join('/a/b', 'c', '', 'index.html')) // \a\b\c\index.html
console.log(path.join('')) // .

// 规范化路径
console.log(path.normalize('a//b/c')) // a\b\c
console.log(path.normalize('a/\\/b/c')) // a\b\c
console.log(path.normalize('a/\b/b/c')) // a\b\c

// 绝对路径
console.log(path.resolve()) // D:\Projects\every-day
console.log(path.resolve('a', 'b')) // D:\Projects\every-day\a\b

console.log(path.resolve('index.html')) // D:\Projects\every-day\index.html
