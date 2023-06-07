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
    aaaaaaaaaa:1231
};

// 定义对象数组
let tom4: Person3[];
tom4 = [{name: '12312', age:20}, {name:'2132',sdfa:12312}]


// number 类型的数组
let args: number[] = [1,23,4];

// 直接定义一个对象，对象的索引是number类型
let argss: {
    [index: number]: number; // 注意，加上[]代表这个键名不是固定的
    length: number;
    callee: Function;
} = {
 123 : 123,
 length: 1,
 callee:function(){}   
}