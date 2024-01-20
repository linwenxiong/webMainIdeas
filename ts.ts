// 定义了一个接口，有两个属性, 
// 不能添加未定义的属性
interface Person {
  name: string;
  age: number;
}
// 1. 多一个属性和少一个属性是不允许的
let tom: Person = {
  name: '123',
  age: 2
};

// 2. 如果不需要全部属性，可以使用可选属性加一个？号

interface Person2 {
  name: string;
  age?: number;
}
let tom2: Person2 = {
  name: '123'
}


interface Person3 {
  name: string;
  age?: number;
  [propName: string]: string | number | undefined; // 需要注意的是，一旦定义了任意属性，那么确定属性和可选属性的类型都必须是它的类型的子集:
}

let tom3: Person3 = {
  name: 'Tom',
  age: 25,
  aaaaaaaaaa: 1231
};

// 定义对象数组
let tom4: Person3[];
tom4 = [{ name: '12312', age: 20 }, { name: '2132', sdfa: 12312 }]


// number 类型的数组
let args: number[] = [1, 23, 4];

// 直接定义一个对象，对象的索引是number类型
let argss: {
  [index: number]: number; // 注意，加上[]代表这个键名不是固定的
  length: number;
  callee: Function;
} = {
  123: 123,
  length: 1,
  callee: function () { }
}


// typedoc的使用

// TypeScript 提供了一种通过注释自动生成 API 文档的方法。这种功能通常是借助于第三方工具实现的，其中最常用的是名为 typedoc 的文档生成工具。
// 下面是如何使用 Typedoc 生成 TypeScript 项目的 API 文档的基本步骤：
// 安装 Typedoc
// 确保你已经安装了 Node.js 环境，然后在项目根目录下运行以下命令来全局或局部安装 typedoc：
// #
// bash
// # 全局安装（推荐在开发环境中局部安装）
// npm install - g typedoc
// # 或者，在项目中局部安装
// npm install--save - dev typedoc
// 配置 TypeScript 注释
// 在 TypeScript 源代码文件中按照 JSDoc 格式添加注释以描述类、接口、函数等。例如：


// #如
/**
 * @classdesc 用户类
 */
export class User {
  /**
   * 创建一个用户实例
   * @param name - 用户名
   * @param email - 用户邮箱
   */
  constructor(public name: string, public email: string) { }

  /**
   * 获取用户的全名
   * @returns {string} 用户的全名
   */
  getFullName(): string {
    return this.name;
  }
}

// 运行 Typedoc
// 在项目目录下运行 Typedoc 命令，指定要解析的输入文件和输出目录：
// #
// bash
// typedoc --out docs/ src/
// 在这个例子中：
// --out 参数指定了生成的文档应保存到的目录。
// src/ 是源码目录，Typedoc 将会从这个目录及其子目录下的所有 TypeScript 文件中提取注释并生成文档。
// 还可以根据需要配置其他 Typedoc 选项，比如主题、模块解析方式、是否排除外部模块等。具体的配置项可以查阅 Typedoc 的官方文档。
// 最终，Typedoc 将根据你的 TypeScript 代码中的注释以及类型信息自动生成一个 HTML 格式的API文档。

/**
 * 定义一个无返回值的方法
 */
function adc(): void {
}


interface IPerson {
  firstName: string,
  lastName: string,
  sayHi: () => string
}

var customer: IPerson = {
  firstName: "Tom",
  lastName: "Hanks",
  sayHi: (): string => { return "Hi there" }
}

console.log("Customer 对象 ")
console.log(customer.firstName)
console.log(customer.lastName)
console.log(customer.sayHi())

var employee: IPerson = {
  firstName: "Jim",
  lastName: "Blakes",
  sayHi: (): string => { return "Hello!!!" }
}

console.log("Employee  对象 ")
console.log(employee.firstName)
console.log(employee.lastName)



// ----------------------------------------接口的继承-----------------
interface Base {
  baseProp: string;
}

interface Derived extends Base {
  derivedProp: number;
}

// ----------------------------------------如何在接口中使用联合类型-----------------
interface RunOptions {
  program: string;
  commandline: string[] | string | (() => string);
}

// commandline 是字符串
var options: RunOptions = { program: "test1", commandline: "Hello" };
console.log(options.commandline)

// commandline 是字符串数组
options = { program: "test1", commandline: ["Hello", "World"] };
console.log(options.commandline[0]);
console.log(options.commandline[1]);

// commandline 是一个函数表达式
options = { program: "test1", commandline: () => { return "**Hello World**"; } };

var fn: any = options.commandline;
console.log(fn());



// --------------------------------------泛型------------------
// 泛型函数
function identity<T>(arg: T): T {
  return arg;
}

// 使用泛型函数
let result = identity<string>("Hello");
console.log(result); // 输出: Hello

let numberResult = identity<number>(42);
console.log(numberResult); // 输出: 42


// 基本语法
interface Pair<T, U> {
  first: T;
  second: U;
}

// 使用泛型接口
let pair: Pair<string, number> = { first: "hello", second: 42 };
console.log(pair); // 输出: { first: 'hello', second: 42 }


// 泛型Class
class Box<T> {
  private value: T;

  constructor(value: T) {
    this.value = value;
  }

  getValue(): T {
    return this.value;
  }
}

// 使用泛型类
let stringBox = new Box<string>("TypeScript");
console.log(stringBox.getValue()); // 输出: TypeScript



// 泛型约束
interface Lengthwise {
  length: number;
}

function logLength<T extends Lengthwise>(arg: T): void {
  console.log(arg.length);
}

// 正确的使用
logLength("hello"); // 输出: 5

// 错误的使用，因为数字没有 length 属性
logLength(42); // 错误


// 泛型默认值
function defaultValue<T = string>(arg: T): T {
  return arg;
}

// 使用带默认值的泛型函数
let result1 = defaultValue("hello"); // 推断为 string 类型
let result2 = defaultValue(42);      // 推断为 number 类型