### 一、延迟加载js

```
<script src="file.js" defer> </script>
<script src="file.js" async> </script>
```

### 二、输出多少

```
alert(  typeof NaN  );
alert(  typeof undefined  );
alert(  typeof null  );
```

###### 结果：

​	number、undefined、object

###### 解释：

​	NaN不是一个具体的数，但是数字类型

​	undefined就是undefined

​	null是特殊的object类型

### 三、输出多少

```
alert(  true + 1  );
alert(  'name' + true  );
alert(  undefined + 1  );
```

###### 结果：

​	2、nametrue、NaN

###### 解释：

​	true+1			 	：true会被隐式转换成number类型，所以就是1+1=2。

​	'name' + true 	：字符串+任何类型，任何类型都会转换成字符串类型，所以就是连接的形式。

​	undefined + 1    ：undefined就是undefined，遇到+1后的结果是NaN及不是具体的数值但是是数值类型

### 四、输出多少（几秒输出几）

```
for( var i=0; i<3 ; i++ ){
	setTimeout(function(){
		console.log(i);
	},1000*i);
}
```

###### 结果：

3、3、3

先输出一个3，隔一秒输出一个3、隔一秒输出一个3

### 五、输出多少

```
var bar = 1;
function test(){
	console.log( bar );
	var bar = 2;
	console.log( bar );
}
test();
```

###### 结果：undefined、2

### 六、输出多少

```
var	foo = function(){ console.log(1) }
function foo(){ console.log(2) }
foo();
```

结果：1

### 七、输出多少

```
function c(){
	var b = 1;
	function a(){
		console.log( b );
		var b = 2;
		console.log( b );
	}
	a();
	console.log( b );
}
c();
```

结果：undefined、2、1

### 八、输出多少

```
var name = 'World';
(function(){
	if( typeof name == 'undefined' ){
		var name = 'Jack';
		console.log( 'Goodbye' + name );
	}else{
		console.log( 'Hello' + name );
	}
})();
```

结果：GoodbyeJack

解释：js有个概念叫没有块级作用域，所以在匿名函数中的if没有作用域，那么typeof name下面是有定义name变量的，所以提升name为undefined。

### 九、输出多少

```
var f = true;
if( f ===true ){
	var a = 10;
}
function fn(){
	var b = 20;
	c = 30;
}
fn();
console.log( a );
console.log( c );
console.log( b );
```

结果：10、30、报错

解释：js有个概念叫没有块级作用域，所以虽然var a=10是在if中，但是全局也可以拿到。那么 c = 30，其实是window.c = 30，本身就是全局的c，所以在全局中拿到c也是应该的，那么b的话是fn函数的局部变量，所以全局是拿不到的及报错。

### 十、输出多少

```
function Foo(){
	getName = function(){ console.log(1) }
	return this;
}
Foo.getName = function(){ console.log(2) }
Foo.prototype.getName = function(){ console.log(3) }
var getName = function(){ console.log(4) }
function getName(){ console.log(5) }

Foo.getName();
getName();
Foo().getName();
getName();
new Foo().getName();
```

结果：2、4、1、1、3

### 十一、输出多少

```
var a = {};
var b = {
	key:'a'
}
var c = {
	key:'c'
}

a[b] = '123';
a[c] = '456';
console.log(a[b]);
```

结果：456

### 十二、JS判断变量是不是数组，你能写出哪些方法？

```
方案一：instanceof
var arr = [];
console.log( arr instanceof Array )

方案二：原型prototype + toString +  call()
var  arr = [];
Object.prototype.toString.call(arr).indexOf('Array') !== -1 比对数值是否等于-1就能判断是否是数组类型 是为true

方案三：原型prototype + isPrototypeOf()
var arr = [];
Array.prototype.isPrototypeOf(arr);

方案四：构造函数 constructor
var arr = [];
console.log( arr.constructor.toString().indexOf("Array") !== -1  )

方案五：数组方法 isArray()
var arr = [];
Array.isArray(arr);
```

### 十三、JS数组去重方式

```
方式一：new Set
let arr = [1,0,0,2,9,8,3,1];
function unique(arr) {
    return Array.from(new Set(arr))
}
console.log(unique(arr));
```

```
方式二：indexOf
var arr =[1,-5,-4,0,-4,7,7,3];
function unique(arr){
   var arr1 = [];       // 新建一个数组来存放arr中的值
   for(var i=0,len=arr.length;i<len;i++){
       if(arr1.indexOf(arr[i]) === -1){
           arr1.push(arr[i]);
       }
   }
   return arr1;
}
console.log(unique(arr));
```

```
方式三：filter
var arr = [1,1,5,6,0,9,3,0,6]
function unique( arr ){
 var arr1 = arr;
  var len = arr1.length;
  arr1.sort((a,b)=>{
      return a-b
  })
  function loop(index){
      if(index >= 1){
         if(arr1[index] === arr1[index-1] ){
             arr1.splice(index,1);
        }
         loop(index - 1);  // 递归loop，然后数组去重
    }
}
loop(len-1);
 return arr1
}
console.log(unique(arr));    //   0, 1, 3, 5, 6, 9
```

```
方式四：sort
var arr =  [5,7,1,8,1,8,3,4,9,7];
function unique( arr ){
    arr = arr.sort();
    var arr1 = [arr[0]];
    for(var i=1,len=arr.length;i<len;i++){
        if(arr[i] !== arr[i-1]){
            arr1.push(arr[i]);
        }
    }
    return arr1;
}
console.log( unique(arr)  );
```

