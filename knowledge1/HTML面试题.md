### 一、行内元素有哪些？块级元素有哪些？

```
块级元素：
h1-h6				：	1-6级标题 
p						：	段落 
div				  ：	定义文档中的节 
ul				  ：	定义无序列表 
ol				  ：	定义有序列表 
li				  ：	定义无序列表与有序列表中的项 
hr				  ：	水平线 
pre				  ：	定义预格式文本 
form				：	定义表单 
audio				：	定义声音内容 
video			  ：	定义视频 
nav				  ：	定义导航链接 
table				：	定义表格 
header			：	定义 section 或 page 的页眉 
footer			：	定义 section 或 page 的页脚 
section		  ：	定义文档中的节（section、区段）。比如章节、页眉、页脚或文档中的其他部分 
......
```

```
行内元素：
a				    ：	定义超链接 
i						：	定义文字倾斜 
b						：	定义文字加粗 
em					：	定义文字倾斜，语义更加强调 
span				：	定义文档中的节 
mark				：	定义有记号的文本 
code				：	定义计算机代码文本 
......
```

### 二、解释一下CSS盒子模型。

```
1. 盒模型： 内容(content)、填充(padding)、边界(margin)、 边框(border)

2. 类型： IE 盒子模型、标准 W3C 盒子模型；

3. 两种盒模型的主要区别是:

	标准盒模型的宽高是值内容宽高(content)
 	IE盒模型的宽高是指content+padding+border。
 
4. 设置盒模型的方式是：
    box-sizing:content-box  	标准盒模型
    box-sizing:border-box 		IE盒模型
```



### 三、CSS选择符优先级算法如何计算？

```
1.优先级就近原则，同权重情况下样式定义最近者为准;
2.载入样式以最后载入的定位为准;
3.!important > 内联 > id > class > 标签 |伪类|属性选择 > 伪对象 > 继承 > 通配符
```

### 四、简述清除浮动的几种方式：

```
1.为父元素添加overflow：hidden

<div style="overflow:hidden">
    <img src="images/1.jpg"/>
    <img src="images/2.jpg"/>
    <img src="images/3.png"/>
    <img src="images/4.jpg"/>
</div>

img{width:50px;border:1px solid #8e8e8e;float:left;}

这种方法是先找到浮动元素的父元素，再在父元素中添加属性overflow:hidden,清除找到的父元素中的子元素浮动对页面的影响。一般不使用这种方式，因为overflow:hidden属性的特点是，离开了这个属性的区域会被隐藏，就是超出的部分会被隐藏。
```

```
2.使用clear:both清除浮动，在所有浮动元素下方添加一个该属性，可以消除float的破坏性，但会增加不必要的标签。

<div>
		<img src="images/1.jpg"/>
		<img src="images/2.jpg"/>
		<img src="images/3.png"/>
		<img src="images/4.jpg"/>
		<div style="clear:both;"></div>
</div>

img{width:50px;border:1px solid #8e8e8e;float:left;}

这种方法也不是很常用，但需要理解。
```

```
3. 使用伪元素清除浮动（推荐）

<div class="clearfix">
    <img src="images/1.jpg"/>
    <img src="images/2.jpg"/>
    <img src="images/3.png"/>
    <img src="images/4.jpg"/>
</div>

.clearfix:after{content:'';display:block;clear:both;}

这种方法是推荐使用的，bootsrtap也在使用，应该掌握，不然太low了，他的原理就是通过伪元素选择器，在div后面添加了一个clear:both的属性，跟第二种方法是一样的道理。
```

### 五、一个盒子不给宽高如何水平垂直居中。

```
1. 定位
{
	position:absolute; 
	top:50%; 
	left:50;
	transform:translate(-50%,-50%);
}
```

```
2. flex布局 : 给父盒子添加属性
{
	display:flex;
	justify-content:center; 
	align-items:center;
}
```

```
3. 为父盒子设置属性
{
	display: table-cell; 
	text-align:center; 
	vertical-align:middle;
}
```

### 六、写一个左中右布局占满屏幕，其中左、右俩块固定宽200，中间自适应宽，要求先加载中间块，请写出结构及样式。

```
<div class='g-container'>
	<div class='g-main'>
		<div class='g-content'>中间</div>
	</div>
	<div class='left'>左</div>
	<div class='right'>右</div>
</div>

<style type="text/css">
.g-container > div{
	float:left;
}
.left{
  margin-left:-100%;
  width: 200px;
  background: red;
}
.g-main{
	width:100%;
}
.g-content{
	margin:0 200px;
	background: #000;
	color:#fff;
}
.right{
	margin-left:-200px;
	width: 200px;
	background: blue;
}
</style>
```

