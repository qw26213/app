### js闭包及其应用场景

闭包（Closure）是指内部函数能够访问其外部函数作用域中的变量，即使在外部函数执行结束后仍然可以访问。闭包在JavaScript中是一个强大的特性，它可以提供许多有用的应用场景。

以下是一些常见的闭包应用场景：

1. 保护私有变量：通过使用闭包，可以创建私有变量，使其不被外部访问或修改。对外部提供的只有访问或修改的接口，从而保护数据的安全性。

2. 延迟执行：通过使用闭包包裹一个函数，可以延迟其执行。这在一些需要在延迟一段时间后执行的情况下非常有用，例如设置定时器或处理异步操作。

3. 计数器和累加器：闭包可以用于创建计数器或累加器。通过在外部函数作用域中定义一个变量，并让内部函数访问并修改该变量，可以实现简单而又灵活的计数器或累加器功能。

4. 模块化开发：利用闭包可以创建私有的模块，将相关的变量和功能封装在闭包内部，只对外暴露需要暴露的接口，实现模块化开发和隐藏实现细节。

5. 回调函数：闭包常常用于处理回调函数，将函数及其相关的上下文保存下来，在适当的时候调用该函数，并且依然能够访问到其外部函数的作用域。

6. 循环中的问题解决：在循环中使用闭包可以解决常见的问题，例如在使用setTimeout创建多个定时器时，通过使用闭包可以正确地访问每个循环迭代的变量。

需要注意的是，闭包会引用其外部函数作用域中的变量，导致这些变量无法被垃圾回收，可能会造成内存泄漏。在设计闭包时，需要合理使用并考虑内存管理的问题。

闭包是JavaScript中强大的特性之一，它可以提供许多灵活的编程方式。合理地应用闭包可以帮助我们优化代码结构，并实现一些有趣和有用的功能。

### JS上下文执行栈和闭包
JavaScript 上下文执行栈和闭包是两个密切相关的概念，它们共同参与了 JavaScript 代码的执行和变量的访问。

上下文执行栈是用于追踪代码执行的一种数据结构，它在函数执行时被创建，并按先进后出（LIFO）的顺序存储函数执行上下文。当代码执行到一个函数时，会将该函数的执行上下文推入栈顶，当函数执行完毕后，该执行上下文从栈顶弹出。上下文执行栈的一个重要作用是跟踪函数调用的顺序和管理函数局部变量。

闭包是指在函数内部定义的函数，并且该内部函数可以访问其外部函数的变量。在 JavaScript 中，当内部函数引用了外部函数的变量时，会创建一个闭包。闭包在外部函数执行完毕后仍然可以访问和操作外部函数的变量。这是因为闭包不仅保存了内部函数的定义，还保存了内部函数引用的外部变量的引用，即使外部函数执行上下文已经被销毁，这些变量仍然可以被内部函数使用。

闭包的特性是建立在上下文执行栈基础之上的。当一个函数内部定义了一个嵌套的内部函数，并将其作为返回值或者传递给其他函数时，内部函数会捕获外部函数的执行上下文，并创建一个闭包。这个闭包包含了内部函数的定义以及对外部函数中变量的引用。

闭包可以提供一种延长外部函数变量生命周期的机制，并且能够创建私有变量和封装数据的能力。但同时也需要注意，闭包可能会导致内存泄漏，因为它会持有对外部函数变量的引用，如果不妥善管理闭包的使用，可能会造成内存占用过多的问题。

总结来说，上下文执行栈是用于追踪代码执行顺序及管理变量的数据结构，而闭包则利用了上下文执行栈的机制，使内部函数可以访问外部函数的变量，并实现了一些有用的功能，如保护变量、作用域隔离等。

### js闭包有哪些副作用
虽然闭包在 JavaScript 中是一个强大的特性，但它也可能带来一些副作用。以下是一些与闭包相关的常见副作用：

1. 内存泄漏：闭包会在内部函数中保持对外部函数作用域中变量的引用，如果这些变量不再需要，但闭包仍然持有对它们的引用，就会导致内存泄漏。如果闭包被频繁地创建而不加释放，可能会占用大量内存，影响页面性能。
2. 性能损耗：由于闭包需要在每次函数调用时创建并保持对外部变量的引用，这可能导致一定的性能损耗。闭包的创建和维护会增加内存和处理开销。
3. 难以理解和维护：过度使用闭包可能导致代码难以理解和维护。闭包中的变量和其生命周期可能变得非常复杂，因此代码的可读性和可维护性可能会下降。
4. 作用域和内存管理问题：由于闭包可以捕获外部函数中的变量，这可能导致意料之外的变量共享和修改。如果不小心管理和操作闭包中的变量，可能会引发一些 bug 和不可预测的行为。

为了避免闭包带来的副作用，有几个建议：

- 避免过度使用闭包，只在必要的情况下使用。
- 避免在循环中创建闭包，可以使用函数柯里化等替代方案。
- 注意及时释放不再需要的闭包，以防止内存泄漏。
- 谨慎操作闭包中的变量，尽量避免修改外部变量的值，以减少意外的副作用。

闭包是一项强大而有用的功能，但同时也需要谨慎使用和管理以避免潜在的副作用。

### js闭包的理解

闭包是JavaScript中一个重要的概念，指的是当函数可以记住并访问它的词法作用域时，就产生了闭包。换句话说，闭包可以让一个函数访问在其外部定义的变量，即使在函数被调用时，这些变量已经超出了作用域。

更具体地说，闭包发生在当一个内部函数引用了外部函数中的变量，并且该内部函数在外部函数执行后仍然存在。这样，内部函数就形成了一个封闭的作用域，即闭包，它可以访问和操作外部函数中的变量。

闭包的优点是可以创建私有变量和函数，从而避免全局命名空间的污染。通过闭包，外部无法直接访问或修改内部变量，只能通过内部函数提供的接口来操作。这种封装性和安全性使闭包在JavaScript中被广泛应用于模块化开发和封装私有数据等场景。

以下是一个简单的闭包示例：

```javascript
function outerFunction() {
  var outerVariable = 'Outer';
  
  function innerFunction() {
    console.log(outerVariable); // 访问外部函数中的变量
  }
  
  return innerFunction; // 返回内部函数
}

var closure = outerFunction(); // 调用外部函数，返回内部函数
closure(); // 调用闭包函数，输出 "Outer"
```

在上面的例子中，outerFunction内部定义了一个内部函数innerFunction，并且在内部函数中访问了外部函数的变量outerVariable。最后，外部函数outerFunction返回了内部函数innerFunction，并将其赋值给变量closure。当我们调用闭包函数closure时，它依然可以访问并打印出外部函数中的变量"Outer"。

需要注意的是，闭包会导致内存占用增加，因为内部函数中引用的外部变量并不会被回收。因此，在使用闭包时需要注意内存管理，避免滥用闭包导致内存泄漏的问题。

### js原型链的理解

JavaScript中的原型链是一种机制，用于实现对象之间的继承。每个JavaScript对象都有一个原型（prototype）属性，它指向另一个对象。当我们访问一个对象的属性或方法时，如果该对象自身没有找到对应的属性或方法，它会通过原型链向上查找，直到找到为止。

具体地说，当我们创建一个对象时，JavaScript会自动为该对象关联一个原型对象。这个原型对象也是一个对象，它拥有自己的属性和方法。如果我们在对象中访问一个属性或方法，而该对象本身没有该属性或方法，JavaScript就会去原型对象中查找。

如果原型对象也没有找到该属性或方法，JavaScript会继续向上查找原型对象的原型对象，即原型链的下一个对象，直到找到或者找到顶层的`Object.prototype`为止，这个顶层的原型对象是所有JavaScript对象的原型链的终点。

通过原型链，对象可以继承原型对象中的属性和方法，实现了对象之间的共享。这种继承的方式被称为原型继承。如果我们修改了原型对象中的属性或方法，所有继承了该原型的对象都会受到影响。

以下是一个简单的原型链示例：

```javascript
// 创建一个构造函数
function Person(name) {
  this.name = name;
}

// 在构造函数的原型对象中添加方法
Person.prototype.sayHello = function() {
  console.log('Hello, my name is ' + this.name);
}

// 创建对象实例
var person1 = new Person('John');
var person2 = new Person('Jane');

person1.sayHello(); // 输出 "Hello, my name is John"
person2.sayHello(); // 输出 "Hello, my name is Jane"
```

在上述例子中，我们通过构造函数`Person`创建了两个对象实例`person1`和`person2`。`Person`构造函数中的属性`name`被实例化对象各自拥有，而方法`sayHello`则定义在`Person.prototype`中。当我们调用`person1.sayHello()`时，JavaScript会先查找`person1`对象本身是否有`sayHello`方法，没有的话就通过原型链查找`Person.prototype`中的`sayHello`方法来调用。

通过原型链，我们可以实现属性和方法的共享，并且可以实现类似于面向对象编程中的继承关系，使代码更加灵活和可复用。

### js如何改变this指向

在JavaScript中，`this`是一个特殊的关键字，指向当前执行上下文中的对象。然而，有时我们希望显式地改变`this`的指向，以便在函数执行时引用不同的对象。下面介绍几种常见的方式来改变`this`指向：

1. 使用`call`和`apply`方法：`call`和`apply`方法允许我们显式地指定`this`要指向的对象，并立即执行函数。
   - `call`方法接受一个对象作为第一个参数，后续参数为函数的参数列表。例如：`func.call(obj, arg1, arg2)`
   - `apply`方法也接受一个对象作为第一个参数，但第二个参数为一个数组，表示函数的参数列表。例如：`func.apply(obj, [arg1, arg2])`

2. 使用`bind`方法：`bind`方法返回一个新函数，将指定的对象绑定到`this`上，并可以传递额外的参数。它并不立即执行函数，而是返回一个新函数，供以后调用。
   - `bind`方法接受一个对象作为参数，返回一个绑定了指定对象的新函数。例如：`var boundFunc = func.bind(obj)`

3. 使用箭头函数：箭头函数不会绑定自己的`this`，而是继承外部作用域的`this`值。这意味着在箭头函数中，`this`的值是在定义函数时确定的，而不是在执行时确定的。

下面是使用这些方法改变`this`指向的示例：

```javascript
// 函数示例
function greet() {
  console.log('Hello, ' + this.name);
}

// 对象示例
var person = {
  name: 'John'
};

// 使用call方法
greet.call(person); // 输出 "Hello, John"

// 使用apply方法
greet.apply(person); // 输出 "Hello, John"

// 使用bind方法
var boundGreet = greet.bind(person);
boundGreet(); // 输出 "Hello, John"

// 使用箭头函数
var arrowGreet = () => {
  console.log('Hello, ' + this.name);
};

arrowGreet.call(person); // 输出 "Hello, undefined"，箭头函数使用外部作用域的this值
```

以上是几种常见的改变`this`指向的方法。根据具体的需求和上下文，选择合适的方法来改变`this`的指向。

### Dom事件流

DOM事件流描述了事件是如何在DOM元素中传播和触发的。事件流包括捕获阶段、目标阶段和冒泡阶段。

1. 捕获阶段（Capture Phase）：事件从最外层的父元素向目标元素传播。在这个阶段，事件捕获器会被触发，从外层向内层元素依次执行。

2. 目标阶段（Target Phase）：事件到达目标元素自身。在这个阶段，事件监听器可以被触发。

3. 冒泡阶段（Bubble Phase）：事件从目标元素向父元素传播。在这个阶段，事件冒泡器会被触发，从目标元素向外层依次执行。

事件流的顺序是从上到下（捕获阶段）然后到目标元素（目标阶段），最后从目标元素向上冒泡（冒泡阶段）。

下面是一个示例来说明事件流的过程：

```html
<!DOCTYPE html>
<html>
<head>
  <title>DOM事件流示例</title>
</head>
<body>
  <div id="outer">
    <div id="inner">
      <button id="btn">点击我</button>
    </div>
  </div>

  <script>
    function captureHandler() {
      console.log('触发捕获阶段');
    }

    function targetHandler() {
      console.log('触发目标阶段');
    }

    function bubbleHandler() {
      console.log('触发冒泡阶段');
    }

    var outer = document.getElementById('outer');
    var inner = document.getElementById('inner');
    var btn = document.getElementById('btn');

    outer.addEventListener('click', captureHandler, true);
    inner.addEventListener('click', captureHandler, true);
    btn.addEventListener('click', captureHandler, true);

    outer.addEventListener('click', targetHandler);
    inner.addEventListener('click', targetHandler);
    btn.addEventListener('click', targetHandler);

    outer.addEventListener('click', bubbleHandler);
    inner.addEventListener('click', bubbleHandler);
    btn.addEventListener('click', bubbleHandler);
  </script>
</body>
</html>
```

在上述示例中，我们给`outer`、`inner`和`btn`元素添加了捕获阶段、目标阶段和冒泡阶段的事件监听器。当点击按钮时，事件首先从最外层的`outer`元素开始捕获阶段，然后到达目标元素`btn`，触发目标阶段的事件监听器，最后在冒泡阶段从`btn`元素向外层冒泡，依次执行冒泡阶段的事件监听器。

输出结果如下：
```
触发捕获阶段
触发捕获阶段
触发捕获阶段
触发目标阶段
触发目标阶段
触发目标阶段
触发冒泡阶段
触发冒泡阶段
触发冒泡阶段
```

需要注意的是，事件流中的阶段（捕获阶段和冒泡阶段）仅在使用`addEventListener`方法时的第三个参数设置为`true`时才会触发。默认情况下，事件流只执行目标阶段，然后冒泡回父元素。

### target、currentTarget和relatedTarget的区别
在事件处理中，`target`、`currentTarget`和`relatedTarget`是常用的属性，用于描述事件的相关元素。它们的区别如下：

1. `target`：这个属性表示触发事件的元素，也就是事件被绑定到的元素。无论事件经过多少个元素，`target`都表示最初触发事件的那个元素。

2. `currentTarget`：这个属性表示正在处理事件的元素，也就是事件当前正在被执行的元素。在事件处理过程中，`currentTarget`可以在事件流的不同阶段中发生改变，但它一直指向绑定了事件处理程序的元素。

3. `relatedTarget`：这个属性通常在特定的事件上才有意义，比如`mouseover`和`mouseout`事件。对于`mouseover`事件，`relatedTarget`表示鼠标离开的元素，也就是事件移出的元素；对于`mouseout`事件，`relatedTarget`表示鼠标进入的元素，也就是事件移入的元素。

总结来说，`target`表示事件最初触发的元素，`currentTarget`表示当前正在处理事件的元素，而`relatedTarget`通常用于描述事件之间的关系，比如鼠标移入和移出的元素关系。如下面
```html
  <div id="outer" style="background:#099">
    click outer
    <p id="inner" style="background:#9C0">click inner</p>
    <br>
  </div>
  <script type="text/javascript">
    function test(e) {
      console.log("e.target.tagName : " + e.target.tagName);
      console.log("e.currentTarget.tagName : " + e.currentTarget.tagName);
    }
    var outer = document.getElementById("outer");
    outer.addEventListener('click', test, false);
  </script>
```
当在outer上点击时，e.target与e.currentTarget是一样的，都是div；当在inner上点击时，e.target是p，而e.currentTarget则是div

### js内存泄漏是什么，如何避免

内存泄漏（Memory Leak）指的是在程序中，由于对内存的错误使用或管理，导致分配的内存无法被回收和释放，从而造成内存占用不断增加，最终引发性能问题甚至系统崩溃。

下面是一些避免JavaScript内存泄漏的常见方法：

1. 避免全局变量的过度使用：全局变量会一直存在于内存中，直到页面关闭。使用局部变量或封装代码以限制变量的作用域，可以避免不必要的内存占用。

2. 显式地释放不再使用的对象：在代码中，及时对不再需要的对象进行释放，特别是对那些占据大量内存的对象（如大型数组、DOM元素、定时器等）进行释放处理，这样可以及时回收内存。

3. 关闭不必要的引用：当一个对象不再需要时，将其引用置为null，这样可以打破与其他对象之间的引用关系，帮助垃圾回收器识别并回收不再使用的对象。

4. 合理使用事件监听：当不再需要某个对象时，务必移除它相关的事件监听器，否则可能导致对象无法被垃圾回收，从而引发内存泄漏。

5. 避免循环引用：循环引用指的是对象之间相互引用，形成一个闭环，即使没有其他引用指向这个闭环的任何对象，它们也无法被垃圾收集器回收。确保避免产生循环引用，或者在不再需要时手动打破循环引用。

6. 使用适当的数据结构和算法：有时，选择适当的数据结构和算法可以帮助减少内存消耗。例如，使用Set或Map替代数组，可以防止重复元素的存储，减少内存占用。

7. 使用浏览器提供的工具和分析器：现代浏览器通常提供开发者工具和性能分析器，可以帮助检测和诊断内存泄漏问题。利用这些工具来分析并优化你的代码。

尽管上述方法有助于避免常见的内存泄漏问题，但内存管理仍然是一个复杂的任务。因此，最好的方式是编写健壮、高效的代码，并进行测试和性能优化，以确保你的应用程序在长时间运行时仍能保持良好的内存管理。

### js中EventLoop的理解

事件循环（Event Loop）是JavaScript中一种用来处理异步操作的机制。它负责管理和调度各种事件和回调函数的执行顺序。理解事件循环对于理解JavaScript的异步编程模型非常重要。

在JavaScript中，主线程按顺序执行代码，但是某些操作可能是异步的，比如网络请求、定时器等，这些操作会被放入事件队列中。事件循环就是不断地从事件队列中取出事件，执行对应的回调函数。

事件循环的过程大致如下：

1. 执行同步代码，直到遇到第一个异步操作。
2. 将异步操作注册到对应的事件监听器中，并继续执行后续的同步代码。
3. 当异步操作完成时，将回调函数放入事件队列中。
4. 当主线程的同步代码执行完毕后，开始处理事件队列。
5. 从事件队列中依次取出事件，执行对应的回调函数。
6. 重复步骤4和步骤5，直到事件队列为空。

需要注意的是，事件循环的执行顺序遵循先进先出（FIFO）的原则，即先放入事件队列的事件会被优先处理。

事件循环的设计保证了JavaScript的异步机制，使得代码可以处理并发的操作而不阻塞主线程。这在处理网络请求、处理用户交互等场景中非常有用。

此外，事件循环还涉及了微任务（microtask）和宏任务（macrotask）的概念。微任务是指在当前任务执行完毕后立即执行的任务，宏任务是指放入事件队列中等待执行的任务。微任务优先于宏任务执行。

常见的微任务包括Promise的解析、MutationObserver等，而常见的宏任务包括setTimeout、setInterval、网络请求等。

理解事件循环对于编写高效的异步代码以及处理JavaScript的事件机制非常重要，可以帮助我们避免一些常见的陷阱和优化性能。

### ES6常见的有哪些Api
1. 块级作用域
2. 解构赋值，模板字符串
3. Promise / async await
4. 箭头函数
5. 数组新增api
6. 对象新增api
7. 数据类型Set, Map
8. 新增Class类

### less-loader是如何解析less的
less-loader是一个webpack的loader，用于将less文件转换为CSS。在解析less的过程中，less-loader会使用less编译器将less代码编译成CSS代码。具体步骤如下：

当 webpack 在构建过程中遇到一个.less文件时，会将该文件传递给less-loader。

less-loader会从传入的.less文件中读取内容，并把它们传递给less编译器。

less编译器会解析.less文件，处理其中的语法特性（比如变量、嵌套、Mixin等），然后将其转换成标准的CSS代码。

less-loader将处理后的CSS代码返回给webpack，并继续进行后续的打包操作。

总的来说，less-loader使用less编译器将.less文件转换为标准的CSS代码，使得webpack能够正确地将样式文件合并到应用程序中，并且这种方式方便易用，并且支持各种less语法特性和插件。

### let和const有什么区别？
1. var是函数作用域，let是块级作用域
2. var可以变量提升，let在定义之前不能访问，但是var可以
3. let不能被重新定义，但是var是可以的

### 深拷贝和浅拷贝的区别
深拷贝和浅拷贝都是用于将一个对象复制到另一个对象中。它们之间的区别在于，当原始对象中存在嵌套对象时，深拷贝将重新复制整个对象树，而浅拷贝只复制主对象的引用。

具体来说，浅拷贝是复制一个对象的指针，而不是复制对象本身。这意味着，当你改变拷贝对象的时候，也会对原始对象造成影响。浅拷贝通常用于生成对象的副本或在数据结构中共享对象时使用。

深拷贝则是将对象及对象的所有子对象都完全复制一份，并将它们重新分配到新的内存地址。这样可以得到一个与原始对象无关的新对象，对拷贝对象做任何修改都不会影响原始对象。但是，由于深拷贝创建的对象数量要比浅拷贝多，所以会占用更多的内存。

在实际应用中，可以根据需要选择是使用浅拷贝还是深拷贝。如果你只需要更新主对象中的一些属性，并且原始对象中没有嵌套对象，那么浅拷贝是一个更高效的选择。但是，如果你需要在拷贝对象上进行修改，或者原始对象拥有嵌套对象，那么深拷贝会是更安全的选择。


### 你在前端项目中遇到的最大的难题是啥，怎么解决的？
由于之前的业务，相对来说比较常规，没有遇到过太大的困难，但是也比较期待在今后的工作中，遇到一些难题，因为这样才能让我成长。

1. 跨端问题：uniapp项目转Android时遇到的问题，社区文章太少
2. 兼容问题：用polyfill处理兼容低版本安卓浏览器
3. 性能问题：可视化大屏优化，小程序优化
4. 提效问题：应对紧急需求。开发代码生成器，（UI组件库不同时）开发出一套通用的方法
5. 算法问题：暂无
6. 微前端问题：