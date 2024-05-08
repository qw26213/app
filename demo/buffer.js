const b1 = Buffer.alloc(10)
const b2 = Buffer.allocUnsafe(10)
console.log(b1)
console.log(b2)

// from可接收三个参数，字符串、数组、Buffer
const b3 = Buffer.from('1')
console.log(b3); // 31  UTF8编码

const b4 = Buffer.from([0x60, 0b1001, 12]) //转16进制输出
console.log(b4); // <Buffer 60 09 0c>
console.log(b4.toString())

const b5 = Buffer.from(b1)
console.log(b5)

const b6 = Buffer.from('中') // 一个中文是三个UTF8编码
console.log(b6);

console.log(Buffer.from(b6).toString()) // 中

// 实例方法
const buf = Buffer.alloc(6)
buf.fill('123', 1)
console.log(buf)
console.log(buf.toString());

// write
buf.write('123', 1, 4)
console.log(buf);

// toString slice
const buf1 = Buffer.from('拉勾教育')
console.log(buf1);
console.log(buf1.toString('utf-8', 3, 15)); // 后两个参数为字符串截取，一个中文三个字节
console.log(buf1.toString()); //拉勾教育
console.log(buf1.slice(-3).toString()) // 育

// 返回下标
console.log(buf1.indexOf('勾')) // 3

// copy
const buf2 = Buffer.alloc(10)
buf1.copy(buf2)  // buf1复制到buf2
console.log(buf2.toString())

// Buffer拼接
let bf1 = Buffer.from('拉勾')
let bf2 = Buffer.from('教育')
let bf3 = Buffer.concat([bf1, bf2], 9)
console.log(bf3);
console.log(bf3.toString())

// 判断是否为Buffer
let ff = '123'
console.log(Buffer.isBuffer(ff));
