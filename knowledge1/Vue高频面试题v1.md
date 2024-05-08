# 一、Vue双向绑定原理

```
new Vue({
	el:"#app",
	data:{
		str:'你好',
		a:1,
		b:2
	},
	methods:{
		btn(){
			alert( this.str );
		}
	}
})
```

#### 1、new Vue就证明Vue是一个构造函数function Vue 或者 class Vue

#### 2、str这个数据(key)是在data中，而在methods中某一个函数中可以使用this.str打印出来“你好”，但是this是new Vue这个实例化对象，他没有str，为什么可以打印出来？

```
解释：vue在源码中，肯定有data的key赋值给new Vue
```

#### 3、compile

功能：

​	1、解析模版，初始化到view层

​	2、watcher  绑定更新的函数

```
1、从id为app节点出发，解析内部内容
2、 {{ str  }} 永远是属于节点的文本节点
3、把 {{  }} 给他换成数据
```

#### 4、v-model问题

```
1、 有多少个v-model不确定。 【这个是废话】
2、 绑定一个str，对应多少个str去改变
```

#### 5、面试回答：

```
vue中数据是在data中定义的，但是可以通过this.xx打印出来，而且this.xx修改了data中的数据也会修改，就证明了data也是双向绑定的数据。
vue流程是这样的：通过compile去编译解析模版中的数据从而更新视图层，例如使用了v-model这样的指令，他的修改流程是这样的：要通过observer去劫持数据（this.xxx）发生的变化，如果改变了就去通知订阅者。从而再去执行update方法来更新视图层，从而实现数据双向绑定。
```



# 二、diff算法

#### 2.1 虚拟DOM   ： 就是对象，就是数据 

​		核心思想：提升性能的

​		核心思想所解决的问题：数据的对比操作比dom操作快。

#### 2.2 diff算法

vue采用     	snabbdom

react采用 	 virtual-dom



diff算法核心：提升性能

小的项目中使用 提升不了性能

中大型项目才会用到

#### 2.3 搭建环境

3.1 npm init -y

3.2 npm install webpack@5 webpack-cli@3 webpack-dev-server@3 -S

3.2 npm install snabbdom -S

3.3 webpack.config.js 进行入口配置

3.4 snabbdom的api：https://www.npmjs.com/package/snabbdom

#### 2.4 diff算法详解

##### 4.1 旧的虚拟节点  和  新的虚拟节点进行比较（patch），最终把新的虚拟节点变成了真实的dom节点展示在页面中

##### 4.2 根据snabbdom了解到h函数就是来生成虚拟dom的，并且h函数的格式我猜想他是这样的：

```
function h(){
		return {
			children:[],
			elm:undefined,
			sel:undefined,
			data:undefined,
			key:undefined,
			text:undefined		
	}
}
```

##### 4.3 根据snabbdom了解到patch函数是做旧虚拟节点和新虚拟节点对比，最终把新的虚拟节点变成真实的dom渲染到页面上。patch就是diff算法的核心内容了。

```
了解旧虚拟节点和新虚拟节点比较规则：

a> 如果节点不相同，暴力删除再创建添加
b> 旧虚拟节点和新虚拟节点 ，如果结构和顺序完全一模一样则没有变化（return）
c> 如果不加key啥也不是，如果加入key，就算排序不一样，只要key相同也不会重新创建新的节点

```

```
diff算法核心：【有2个指针，代表下标】

1》 旧前  和  新前
		old++ 、 new++
		
2》 旧后  和  新后
		old-- 、 new--

3》 旧前  和  新后
		old++ 、 new--

4》 旧后  和  新前
		old-- 、 new++

5》以上4条都不满足则遍历查找，查找到了先把新的节点添加，再把等于旧的等于新的虚拟节点改成undefined，然后新的指针加加（new++）。

6》以上5条都执行完后，剩下的要不删除，要不创建

```

#### h函数

##### 有3个参数

h('div',{},'好123')

h('div',{},[]) , 第三个参数如果是数组，代表有子元素，那么children就是一个数组

#### path函数

来做  旧虚拟节点  和  新虚拟节点进行对比

# 三、什么是MVVM框架

##### 3.1 MVVM诞生的历史：

```
web1.0 年代是前端和后端不分离的。而且那个时候是没有前端这个岗位的。
这样的项目缺点：
						1、前端和后端代码全在一起不好维护（对于中大型来说）
						2、一个人开发一整个项目，进度人员把控，开发者专业度都不够。
						3、后端是有MVC
```

```
web2.0 年代ajax出来，就有前端和后端分离的项目了
这样的项目解决了web1.0的一些问题：
						1、比1.0那个年代好维护
						2、前端是前端，后端是后端，分开人员
这样的项目缺点：
						1、中大项目还是不太好维护
								index.html、style、css、js   ：  整体5000行代码也是不好维护的			
```

```
MVVM横空出世
可以解决：某一个页面内容特别多不好维护的情况。MVVM框架可以分成不同的组件去解决这个问题。
```

##### 3.2 MVVM具体指的是什么

```
Model-View-ViewModel 
模型-视图-视图模型
viewModel就是vue双向绑定的源码
```

# 四、vue生命周期

4.1 系统自带生命周期一共有8个

```
beforeCreate（创建前）
created（创建后）
beforeMount(载入前)
mounted（载入后）
beforeUpdate（更新前）
updated（更新后）
beforeDestroy（销毁前）
destroyed（销毁后）
```

4.2 页面组件一旦加载执行哪些生命周期

```
beforeCreate（创建前）
created（创建后）
beforeMount(载入前)
mounted（载入后）
```

4.3 某几个生命周期的不同点

```
beforeCreate  ===》没有data没有el
created  			===》有data没有el
beforeMount   ===》有data没有el
mounted   		===》有data有el
```

4.4 你什么情况下用那个生命周期

```
created		===》一般发送请求
mounted   ===》用有关于操作获取dom的插件
```

4.5 如果用到了keep-alive会多俩个生命周期

```
activated、deactivated
```

***说明一下：就10个生命周期

4.6  如果用到了keep-alive第一次进入组件会执行

```
beforeCreate（创建前）
created（创建后）
beforeMount(载入前)
mounted（载入后）
activated
```

4.7 如果用到了keep-alive第二次、第三次.....进入组件会执行

```
activated
```

# 五、scoped

说明：就是css局部化

原理：就是给节点添加了自定义属性 data-v-xxx，然后css选择[data-v-xxx]。

# 六、computed、methods、watch区别

```
computed ： 计算属性 ==> 有缓存
methods  ： 放入方法 ==> template部分执行一次，methods就会执行
watch    ： 监听
```

区别：

```
computed  有缓存
methods   没缓存
俩中在不同场景下使用的方式：比如一个数据会在俩处调用展示，一定会用computed来提升性能，如果就一处无所谓。
watch     可以监听路由变化、也可以监听数据，如果数据不发生改变，watch不会执行的。
```

# 七、ref

ref获取dom的

```
ref = {
	节点中所有ref的遍历
	main: document.querySelector(这是ref等于的值:查找元素的id =》 class =》 tag),
	content: document.querySelector('content':查找元素的id =》 class =》 tag), 
}
```

# 八、Vuex

#### 8.1 你为什么用Vuex？Vuex的使用场景

为什么：数据好管理或好维护或好拿值（不用bus传组件之间传值.......）

使用场景：用户信息的管理、订单管理、地址管理、购物车数据的管理，项目的数据一旦多不好管理可以用vuex（modules）

#### 8.2 mutations和actions有什么区别

```
不能这样回答：
mutations是同步的
actions是异步的
```

```
回答：
mutations必须是同步函数，在 mutation 中混合异步调用会导致你的程序很难调试
Action 提交的是 mutation，而不是直接变更状态。
Action 可以包含任意异步操作。
```

#### 8.3 Vuex是响应式，Vuex是单向数据流还是双向

```
Vue是单向数据流
```

# 九、路由

#### 9.1 路径传值

```
显式：query、path
隐式：params、name
```

#### 9.2 动态路由

注：不是一定非要用到的。

可能出现的场景：详情页（商品详情页、新闻详情页）

```
{
    path: "/details/:id",
    name: "Details",
    component: () => import("../views/Details.vue"),
},
```

```
this.$router.push(`/details/这里放id或者其他参数`);
```

#### 9.3 导航守卫

###### 全局

```
全局守卫： router.beforeEach
全局解析守卫： router.beforeResolve
全局后置钩子： router.afterEach
```

###### 路由独享

```
beforeEnter
```

###### 组件内

```
beforeRouteEnter
beforeRouteUpdate (2.2 新增)
beforeRouteLeave
```

有参数：to、from、next

###### 场景：用户是否是登录状态。例如：进入地址管理，如果没有登录，是进入不了，在进入之前做拦截。

```
vue-router 3.x 和 2.x 有很多不同： 
3.x没有catch，2有
3.x版本抑制错误：
const originalPush = VueRouter.prototype.push;
	VueRouter.prototype.push = function push(location) {
   	return originalPush.call(this, location).catch(err => err)
}
针对于：导航守卫写法不同
```

#### 9.4 路由mode模式

```
hash是：http://localhost:8080/#/home
history是：http://localhost:8080/home
```

关于前端上线前的测试 ： hash可以正常访问，用history是空白页需要后端重定向域名到服务器

# 10、Vue性能优化

#### 10.1 如果请求的数据不需要修改或者删除，使用冻结 ：Object.freeze() 

#### 10.2  v-if和v-for不能同时写在一个标签上，应该先if后for

#### 10.3 v-if、v-else判断最好是同一个标签

#### 10.4 v-for循环要加入key应该diff算法，尽量保证结构不要跨层

#### 10.5 路由懒加载

#### 10.6 keep-alive缓存组件

#### 10.7 在一定情况能用computed或者watch就不用methods

#### 10.8 v-show和v-if区分场景

#### 10.9 引入其他插件，按需引入

# 11、v-if和v-for优先级

v-for优先级比v-if高

```
function genElement (el, state) {
    if (el.parent) {
      el.pre = el.pre || el.parent.pre;
    }

    if (el.staticRoot && !el.staticProcessed) {
      return genStatic(el, state)
    } else if (el.once && !el.onceProcessed) {
      return genOnce(el, state)
    } else if (el.for && !el.forProcessed) {
      return genFor(el, state)
    } else if (el.if && !el.ifProcessed) {
      return genIf(el, state)
    } else if (el.tag === 'template' && !el.slotTarget && !state.pre) {
      return genChildren(el, state) || 'void 0'
    } else if (el.tag === 'slot') {
      return genSlot(el, state)
    } else {
```

# 12、v-if和v-show区别

```
v-if是创建和删除

v-show是显示和隐藏

如果一进入页面不显示的情况下：使用v-show不如v-if，但是频繁切换显示和隐藏状态v-show性能比v-if频繁创建删除好的多
```

# 13、nextTick

#### 13.1 是什么？当dom都更新（都执行完毕）了再执行nextTick函数回调

#### 13.2 场景：跟插件打交道(数据是请求到的，调用插件，插件计算某盒子的宽高会出现偏差)

# 14、solt插槽

使用场景：多次使用，有一个基准样式，但是可能会有小小的区别，这个时候没必要再新建一个组件，使用插槽的可以了。

![image-20210817200631236](/Users/each/Library/Application Support/typora-user-images/image-20210817200631236.png)



# 15、样式穿透

```
>>>
/deep/
::v-deep  【通用】
```

场景：引入组件或者插件，要修改css，但是style scoped，这时候要穿透了

# 16、vue实现双向绑定？单向绑定

双向绑定：v-model=

单向绑定：v-bind:xxx=

# 17、Vue中数据持久化

localStorage

vuex-persistedstate

```
注意Vuex本身做不到，需要通过vuex-persistedstate插件去做持久化存储
```



