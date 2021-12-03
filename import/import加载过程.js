
var a = 1
if (a) {
  import { count } from './import试验.js' // 报错
}

// import 是按需引入，require是整体引入。
// import 是静态加载(编译时加载)的， require是动态加载(运行时加载)的。
// import 只能写在顶部， require可以写在任何地方。

// import是静态加载资源，编译时放到代码块最顶层
// import是编译时就需要执行的所以要写顶部,写在运行中的代码
// 因为import是静态执行的，不能使用表达式和变量，即在运行时才能拿到结果的语法结构（e.g. if...else...）
// import 只能写在顶部，否则会报错。

// import()函数es6的方法是动态按需加载返回Promise 对象。
// import()函数它是运行时执行，也就是说，什么时候运行到这一句，就会加载指定的模块。
// require()属于node中的方法，也是动态加载（动态加载就是运行时加载）的。
// import()和require()基本上是一样的，除了import() 是异步， require是同步的区别
