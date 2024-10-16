# 泛型
```typescript
function identity(arg: number): number { // 这种情况下返回number
    return arg;
}

function identity(arg: string): string { // 这种情况下返回string
    return arg;
}

function identity(arg: any): any { // 这种情况下返回any
    return arg;
}
```
可以看到，每种情况下返回的之都不一样，我们不仅要创建一致的定义良好的API，同时也要考虑可重用性。 组件不仅能够支持当前的数据类型，同时也能支持未来的数据类型，这在创建大型系统时为你提供了十分灵活的功能。

在像C#和Java这样的语言中，可以使用泛型来创建可重用的组件，一个组件可以支持多种类型的数据。 这样用户就可以以自己的数据类型来使用组件。

# 泛型
```typescript 
function identity<T>(arg: T): T { //定义方法，返回泛型类型
    return arg;
}
//指定T是string类型，并通过<>把参数传给函数
let output = identity<string>("myString");  // 使用泛型定义
let output = identity<number>(213);  // 使用泛型定义
```

# 如果需要用到参数的某个属性
```typescript
function identity<T>(arg: T[]): T[] {
    console.log(arg.length)
    return arg
}
var i = identity<number>([2,23,])
```
