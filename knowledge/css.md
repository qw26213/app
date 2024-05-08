### 组件库中样式如何修改
1. 全局引入一个外部css文件，在main.js中覆盖组件库引入
2. 使用scss的:deep()语法
3. 在父组件中使用:global()选择器，全局选择器，定义全局样式
4. 直接用不含scoped的style标签

### CSS垂直居中的方法
* 第一
.box{
  display: flex;
  justify-content: center;
  align-items: center;
}
* 第二
.box{
  position: relative;
} 
.box .sub{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  /*margin-left: 负的宽度的一半*/
  /*margin-top: 负的高度的一半*/
}

### 块级格式化上下文BFC
BFC：块级格式化上下文block formatting context，是一个独立渲染区域。规定了内部box如何布局，并且与这个区域外部毫不相干。

触发：float的值不是none；position的值不是static或者relative；display的值是inline-block、block、table-cell、flex、table-caption或者inline-flex；overflow的值不是visible。

作用：避免margin重叠；自适应两栏布局；清除浮动。

### css实现一个三角形

.triangle{
  width: 0;
  height: 0;
  border: 100px solid transparent;
  border-left-color: red;
}

### 粘性定位sticky
sticky会产生动态效果，很像relative和fixed的结合：一些时候是relative定位，另一些时候自动变成fixed定位。
1. 父元素不能overflow:hidden或者overflow:auto属性。
2. 必须指定top、bottom、left、right4个值之一，否则只会处于相对定位
3. 父元素的高度不能低于sticky元素的高度
4. sticky元素仅在其父元素内生效

### 如何实现6px字体

.font{
  font-size: 12px;
  transform: scale(.5);
}

### px、em、rem、vh、vw分别是什么

px物理像素，绝对单位；em相对于自身字体大小，如果自身没有大小则相对于父级字体大小，如果父级也没有则一层一层向上查找，直到找到html为止，相对单位；rem相对于html的字体大小，相对单位；vh相对于屏幕高度的大小，相对单位；vw相对于屏幕宽度的大小，相对单位。

### css可继承的属性有哪些

可继承的属性：文本类：text-indent、text-align、line-height、word-spacing、letter-spacing、text-transform、direction、color；

字体类：font、font-family、font-weight、font-size、font-style、font-variant、font-stretch、font-size-adjust；

其它类：visibility、caption-side、border-collapse、border-spacing、empty-cells、table-layout、list-style-type、list-style-image、list-style-position、list-style、quotes、cursor、page、page-break-inside、windows、orphans等

### display:inline-block 什么时候会显示间隙？

* 有空格时会有间隙，可以删除空格解决；
* margin正值时，可以让margin使用负值解决；
* 使用font-size时，可通过设置font-size:0、letter-spacing、word-spacing解决；

### 回流和重绘
重绘是一个元素外观的改变所触发的浏览器行为，例如改变outline、背景色等属性。浏览器会根据元素的新属性重新绘制，使元素呈现新的外观。重绘不会带来重新布局，所以并不一定伴随回流。
回流是一个元素的位置或大小改变时，就会重新构造dom树然后再次进行渲染，回流一定会引起重绘。
Reflow(回流) 的成本比 Repaint(重绘) 的成本高很多。
1. 元素位置移动变换时尽量使用CSS3的transform来代替对top left等的操作
2. 使用opacity来代替visibility
3. 不要使用table布局
4. 避免使用css表达式，先定义好class，然后修改DOM的className
5. 避免设置多层内联样式，避免节点层级过多
6. 多个属性尽量使用简写，例如：boder可以代替boder-width、boder-color、boder-style

### 常见的元素隐藏方式？
1. 使用 display:none;隐藏元素，渲染树不会包含该渲染对象，因此该元素不会在页面中占据位置，也不会响应绑定的监听事件。
2. 使用 visibility:hidden;隐藏元素。元素在页面中仍占据空间，但是不会响应绑定的监听事件。
3. 使用 opacity:0;将元素的透明度设置为 0，以此来实现元素的隐藏。元素在页面中仍然占据空间，并且能够响应元素绑定的监听事件。
4. 通过使用绝对定位将元素移除可视区域内，以此来实现元素的隐藏。
5. 通过 z-index 负值，来使其他元素遮盖住该元素，以此来实现隐藏。
6. 通过 clip/clip-path 元素裁剪的方法来实现元素的隐藏，这种方法下，元素仍在页面中占据位置，但是不会响应绑定的监听事件。
7. 通过 transform:scale(0,0)来将元素缩放为 0，以此来实现元素的隐藏。这种方法下，元素仍在页面中占据位置，但是不会响应绑定的监听事件。

### 常见的图片格式及使用场景
1. BMP，是无损的、既支持索引色也支持直接色的点阵图。这种图片格式几乎没有对数据进行压缩，所以BMP格式的图片通常是较大的文件。
2. GIF是无损的、采用索引色的点阵图。采用LZW压缩算法进行编码。文件小，是GIF格式的优点，同时，GIF格式还具有支持动画以及透明的优点。但是GIF格式仅支持8bit的索引色，所以GIF格式适用于对色彩要求不高同时需要文件体积较小的场景。
3. JPEG是有损的、采用直接色的点阵图。JPEG的图片的优点是采用了直接色，得益于更丰富的色彩，JPEG非常适合用来存储照片，与GIF相比，JPEG不适合用来存储企业Logo、线框类的图。因为有损压缩会导致图片模糊，而直接色的选用，又会导致图片文件较GIF更大。
4. PNG-8是无损的、使用索引色的点阵图。PNG是一种比较新的图片格式，PNG-8是非常好的GIF格式替代者，在可能的情况下，应该尽可能的使用PNG-8而不是GIF，因为在相同的图片效果下，PNG-8具有更小的文件体积。除此之外，PNG-8还支持透明度的调节，而GIF并不支持。除非需要动画的支持，否则没有理由使用GIF而不是PNG-8。
5. PNG-24是无损的、使用直接色的点阵图。PNG-24的优点在于它压缩了图片的数据，使得同样效果的图片，PNG-24格式的文件大小要比BMP小得多。当然，PNG24的图片还是要比JPEG、GIF、PNG-8大得多。
6. SVG是无损的矢量图。SVG是矢量图意味着SVG图片由直线和曲线以及绘制它们的方法组成。当放大SVG图片时，看到的还是线和曲线，而不会出现像素点。SVG图片在放大时，不会失真，所以它适合用来绘制Logo、Icon等。
7. WebP是谷歌开发的一种新图片格式，WebP是同时支持有损和无损压缩的、使用直接色的点阵图。从名字就可以看出来它是为Web而生的，什么叫为Web而生呢？就是说相同质量的图片，WebP具有更小的文件体积。现在网站上充满了大量的图片，如果能够降低每一个图片的文件大小，那么将大大减少浏览器和服务器之间的数据传输量，进而降低访问延迟，提升访问体验。目前只有Chrome浏览器和Opera浏览器支持WebP格式，兼容性不太好。

* 在无损压缩的情况下，相同质量的WebP图片，文件大小要比PNG小26%；
* 在有损压缩的情况下，具有相同图片精度的WebP图片，文件大小要比JPEG小25%~34%；
* WebP图片格式支持图片透明度，一个无损压缩的WebP图片，如果要支持透明度只需要22%的格外文件大小。

### 对 CSSSprites 的理解
CSSSprites（精灵图），将一个页面涉及到的所有图片都包含到一张大图中去，然后利用CSS的 background-image，background-repeat，background-position属性的组合进行背景定位。
优点：利用CSS Sprites能很好地减少网页的http请求，从而大大提高了页面的性能，这是CSS Sprites最大的优点；
CSS Sprites能减少图片的字节，把3张图片合并成1张图片的字节总是小于这3张图片的字节总和。
缺点：不便维护，增加沟通成本

### 对 CSS 工程化的理解
CSS 工程化是为了解决以下问题：

1. 宏观设计：CSS 代码如何组织、如何拆分、模块结构怎样设计？
2. 编码优化：怎样写出更好的 CSS？
3. 构建：如何处理我的 CSS，才能让它的打包结果最优？
4. 可维护性：代码写完了，如何最小化它后续的变更成本？如何确保任何一个同事都能轻松接手？
以下三个方向都是时下比较流行的、普适性非常好的 CSS 工程化实践：

* 预处理器：Less、 Sass 等
* 重要的工程化插件： PostCss
* Webpack loader 等
基于这三个方向，可以衍生出一些具有典型意义的子问题，这里我们逐个来看：

##### 1. 预处理器：为什么要用预处理器？它的出现是为了解决什么问题？

预处理器，其实就是 CSS 世界的“轮子”。预处理器支持我们写一种类似 CSS、但实际并不是 CSS 的语言，然后把它编译成 CSS 代码：

那为什么写 CSS 代码写得好好的，偏偏要转去写“类 CSS”呢？这就和本来用 JS 也可以实现所有功能，但最后却写 React 的 jsx 或者 Vue 的模板语法一样——为了爽！要想知道有了预处理器有多爽，首先要知道的是传统 CSS 有多不爽。随着前端业务复杂度的提高，前端工程中对 CSS 提出了以下的诉求：

宏观设计上：我们希望能优化 CSS 文件的目录结构，对现有的 CSS 文件实现复用；
编码优化上：我们希望能写出结构清晰、简明易懂的 CSS，需要它具有一目了然的嵌套层级关系，而不是无差别的一铺到底写法；我们希望它具有变量特征、计算能力、循环能力等等更强的可编程性，这样我们可以少写一些无用的代码；
可维护性上：更强的可编程性意味着更优质的代码结构，实现复用意味着更简单的目录结构和更强的拓展能力，这两点如果能做到，自然会带来更强的可维护性。
这三点是传统 CSS 所做不到的，也正是预处理器所解决掉的问题。预处理器普遍会具备这样的特性：

嵌套代码的能力，通过嵌套来反映不同 css 属性之间的层级关系 ；
支持定义 css 变量；
提供计算函数；
允许对代码片段进行 extend 和 mixin；
支持循环语句的使用；
支持将 CSS 文件模块化，实现复用。
##### 2. PostCss：PostCss 是如何工作的？我们在什么场景下会使用 PostCss？


它和预处理器的不同就在于，预处理器处理的是 类CSS，而 PostCss 处理的就是 CSS 本身。Babel 可以将高版本的 JS 代码转换为低版本的 JS 代码。PostCss 做的是类似的事情：它可以编译尚未被浏览器广泛支持的先进的 CSS 语法，还可以自动为一些需要额外兼容的语法增加前缀。更强的是，由于 PostCss 有着强大的插件机制，支持各种各样的扩展，极大地强化了 CSS 的能力。

PostCss 在业务中的使用场景非常多：

提高 CSS 代码的可读性：PostCss 其实可以做类似预处理器能做的工作；
当我们的 CSS 代码需要适配低版本浏览器时，PostCss 的 Autoprefixer 插件可以帮助我们自动增加浏览器前缀；
允许我们编写面向未来的 CSS：PostCss 能够帮助我们编译 CSS next 代码；
##### 3. Webpack 能处理 CSS 吗？如何实现？
Webpack 能处理 CSS 吗：

Webpack 在裸奔的状态下，是不能处理 CSS 的，Webpack 本身是一个面向 JavaScript 且只能处理 JavaScript 代码的模块化打包工具；
Webpack 在 loader 的辅助下，是可以处理 CSS 的。
如何用 Webpack 实现对 CSS 的处理：

Webpack 中操作 CSS 需要使用的两个关键的 loader：css-loader 和 style-loader
注意，答出“用什么”有时候可能还不够，面试官会怀疑你是不是在背答案，所以你还需要了解每个 loader 都做了什么事情：
css-loader：导入 CSS 模块，对 CSS 代码进行编译处理；
style-loader：创建style标签，把 CSS 内容写入标签。
在实际使用中，css-loader 的执行顺序一定要安排在 style-loader 的前面。因为只有完成了编译过程，才可以对 css 代码进行插入；若提前插入了未编译的代码，那么 webpack 是无法理解这坨东西的，它会无情报错。

### 如何判断元素是否到达可视区域
以图片显示为例：

window.innerHeight 是浏览器可视区的高度；
document.body.scrollTop || document.documentElement.scrollTop 是浏览器滚动的过的距离；
imgs.offsetTop 是元素顶部距离文档顶部的高度（包括滚动条的距离）；
内容达到显示区域的：img.offsetTop < window.innerHeight + document.body.scrollTop;

